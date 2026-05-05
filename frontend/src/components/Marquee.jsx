export const Marquee = () => {
  const items = [
    "Bespoke",
    "Cinematic",
    "Quiet Luxury",
    "Crafted",
    "Timeless",
    "Material-Driven",
    "Architectural",
    "Sculptural",
  ];
  const list = [...items, ...items];
  return (
    <div
      data-testid="brand-marquee"
      className="relative overflow-hidden border-y border-white/5 bg-[#0A0A0A]"
    >
      <div className="marquee whitespace-nowrap flex gap-12 py-7">
        {list.map((t, i) => (
          <span
            key={i}
            className="font-serif-display italic text-3xl md:text-5xl text-[#F8F6F0]/90 flex items-center gap-12"
          >
            {t}
            <span className="text-[#D4AF37]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
