import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Awards } from "./components/Awards";
import { FAQ } from "./components/FAQ";
import { LeadForm } from "./components/LeadForm";
import { Contact } from "./components/Contact";
import { ProjectDetail } from "./pages/ProjectDetail";

const Home = () => {
  return (
    <main data-testid="home-page" className="bg-[#0A0A0A] text-[#F8F6F0]">
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Testimonials />
      <Awards />
      <FAQ />
      <LeadForm />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
