const highlights = [
  'CODE. BUILD. LEARN. REPEAT.',
  'DTU / COMPUTER SCIENCE',
  'AI + BACKEND + CURIOSITY',
  'AI/ML Engineer · Software Developer',
  'Open to opportunities',
];

const Marquee = () => {
  return (
    <div className="bg-custom-yellow border-y-4 border-black py-3 overflow-hidden whitespace-nowrap relative rotate-[-2deg] scale-105 z-20 my-10">
      <div className="animate-marquee flex w-max font-sans font-bold text-xl uppercase tracking-wide">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0">
            {highlights.map((highlight) => (
              <span key={`${group}-${highlight}`} className="mx-4">{highlight} ✦ </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
