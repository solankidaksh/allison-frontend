"""Iteration 4 backend tests: leads endpoint + health/status."""
import os
import time
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://elegant-design-hub.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# -- Health & Status -------------------------------------------------------
def test_health(client):
    r = client.get(f"{API}/health", timeout=20)
    assert r.status_code == 200
    assert r.json() == {"status": "ok"}


def test_status_create_and_list(client):
    payload = {"client_name": "TEST_iter4_status"}
    r = client.post(f"{API}/status", json=payload, timeout=20)
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["client_name"] == payload["client_name"]
    assert "id" in body and isinstance(body["id"], str)

    r2 = client.get(f"{API}/status", timeout=20)
    assert r2.status_code == 200
    assert isinstance(r2.json(), list)


# -- Leads -----------------------------------------------------------------
VALID_LEAD = {
    "name": "TEST_Iter4 Buyer",
    "email": "test_iter4_buyer@example.com",
    "phone": "+1-512-555-0199",
    "project_type": "Remodel / Renovation",
    "location": "Austin, TX",
    "budget_range": "$500K – $1M",
    "message": "TEST_iter4 message — please ignore",
}


def test_create_lead_full_payload(client):
    r = client.post(f"{API}/leads", json=VALID_LEAD, timeout=20)
    assert r.status_code == 201, r.text
    body = r.json()
    for k, v in VALID_LEAD.items():
        assert body[k] == v, f"field {k} mismatch: {body.get(k)!r} != {v!r}"
    assert "id" in body and isinstance(body["id"], str)
    assert "created_at" in body


def test_create_lead_minimal_payload(client):
    payload = {
        "name": "TEST_Minimal",
        "email": "test_iter4_min@example.com",
        "project_type": "Furnishings Only",
    }
    r = client.post(f"{API}/leads", json=payload, timeout=20)
    assert r.status_code == 201, r.text
    body = r.json()
    assert body["name"] == payload["name"]
    assert body["email"] == payload["email"]
    assert body["project_type"] == payload["project_type"]
    assert body["phone"] is None
    assert body["location"] is None
    assert body["budget_range"] is None
    assert body["message"] is None


def test_list_leads_includes_created_and_sorted_desc(client):
    # Create two leads with a small delay so timestamps differ
    a = {"name": "TEST_A", "email": "test_iter4_a@example.com", "project_type": "Kitchen & Bath"}
    b = {"name": "TEST_B", "email": "test_iter4_b@example.com", "project_type": "Kitchen & Bath"}
    ra = client.post(f"{API}/leads", json=a, timeout=20)
    assert ra.status_code == 201
    time.sleep(1.1)
    rb = client.post(f"{API}/leads", json=b, timeout=20)
    assert rb.status_code == 201

    r = client.get(f"{API}/leads", timeout=20)
    assert r.status_code == 200
    rows = r.json()
    assert isinstance(rows, list) and len(rows) >= 2

    # Should not leak Mongo _id
    assert all("_id" not in row for row in rows)

    # sorted desc by created_at
    timestamps = [row["created_at"] for row in rows]
    assert timestamps == sorted(timestamps, reverse=True), "leads not sorted desc by created_at"

    emails = [row["email"] for row in rows]
    assert a["email"] in emails
    assert b["email"] in emails

    # The newest of the two should appear before the older one
    idx_a = emails.index(a["email"])
    idx_b = emails.index(b["email"])
    assert idx_b < idx_a, "newer lead (B) should appear before older (A)"


def test_create_lead_missing_name(client):
    payload = {"email": "test_iter4_noname@example.com", "project_type": "Remodel / Renovation"}
    r = client.post(f"{API}/leads", json=payload, timeout=20)
    assert r.status_code == 422, r.text


def test_create_lead_missing_email(client):
    payload = {"name": "TEST_NoEmail", "project_type": "Remodel / Renovation"}
    r = client.post(f"{API}/leads", json=payload, timeout=20)
    assert r.status_code == 422, r.text


def test_create_lead_invalid_email(client):
    payload = {"name": "TEST_BadEmail", "email": "not-an-email", "project_type": "Remodel / Renovation"}
    r = client.post(f"{API}/leads", json=payload, timeout=20)
    assert r.status_code == 422, r.text


def test_create_lead_missing_project_type(client):
    payload = {"name": "TEST_NoType", "email": "test_iter4_notype@example.com"}
    r = client.post(f"{API}/leads", json=payload, timeout=20)
    assert r.status_code == 422, r.text


def test_create_lead_empty_name(client):
    payload = {"name": "", "email": "test_iter4_empty@example.com", "project_type": "Remodel / Renovation"}
    r = client.post(f"{API}/leads", json=payload, timeout=20)
    assert r.status_code == 422, r.text
