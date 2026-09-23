import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "AI Training Specialist & QA Reviewer",
      company: "Outlier AI",
      companyUrl: "https://outlier.ai",
      duration: "Jan 2026 - Apr 2026",
      location: "Remote",
      description: "Reviewed and validated 500+ AI-generated outputs across coding, mathematics, and statistical reasoning against structured quality rubrics. Investigated edge cases and documented recurring reasoning failures to improve dataset reliability.",
      color: "bg-custom-pink"
    },
    {
      role: "Data Science & Business Analytics Intern",
      company: "The Sparks Foundation",
      companyUrl: "https://www.thesparksfoundationsingapore.org",
      duration: "Feb 2025 - Mar 2025",
      location: "Remote",
      description: "Used Python, Pandas, and NumPy to uncover inventory trends and operational inefficiencies. Recommendations were associated with a 15% improvement in operational efficiency; Tableau dashboards raised KPI visibility by 85%.",
      color: "bg-custom-yellow"
    },
    {
      role: "Teaching Assistant — DSA",
      company: "AlgoZenith",
      companyUrl: "https://algozenith.com",
      duration: "2024 - 2025",
      location: "Remote",
      description: "Helped students understand algorithms, debug coding problems, and reason about complexity and alternative solutions.",
      color: "bg-custom-green"
    }
  ];

  return (
    <section id="experience" className="-mt-12 pt-4 pb-10 px-4 max-w-7xl mx-auto w-full relative">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-yellow px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand italic uppercase tracking-wide">EXPERIENCE</h2>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto z-10 pb-8">
        <div className="flex flex-col gap-12 lg:gap-20">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start relative group">
              <div className="w-full lg:w-[260px] flex-shrink-0 flex flex-col items-start gap-4 z-10">
                <div className="inline-flex items-center gap-3 bg-gray-100 px-5 py-2 border-4 border-black rounded-full shadow-[4px_4px_0_rgba(0,0,0,1)] font-bold text-sm md:text-base">
                  <FaCalendarAlt className="text-black" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-sm md:text-base text-gray-800 ml-2">
                  <FaMapMarkerAlt className="text-black text-lg flex-shrink-0" />
                  <span>{exp.location}</span>
                </div>
              </div>
              <div className="hidden lg:block absolute top-6 left-[260px] w-16 h-1 bg-black z-0 border-t-4 border-black group-hover:bg-custom-yellow transition-colors"></div>
              <div className="w-full flex-grow border-4 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col h-full relative bg-white">
                <div className={`border-b-4 border-black px-3 py-2 flex justify-between items-center ${exp.color}`}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                  </div>
                  <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black">experience.exe</span>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl italic leading-tight mb-5 tracking-wide text-black font-shrikhand">{exp.role}</h3>
                  <a href={exp.companyUrl} target="_blank" rel="noopener" className={`inline-block ${exp.color} px-5 py-2 border-4 border-black rounded-full font-bold text-lg md:text-xl shadow-[4px_4px_0_rgba(0,0,0,1)] mb-8 tracking-wide w-fit hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all`}>
                    {exp.company}
                  </a>
                  <div className="bg-gray-50 border-4 border-black rounded-xl p-5 md:p-6 shadow-sm relative overflow-hidden">
                    <div className="flex gap-1.5 mb-4">
                      <div className="w-3 h-3 rounded-full bg-custom-red border-2 border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-custom-yellow border-2 border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-custom-green border-2 border-black"></div>
                    </div>
                    <p className="font-sans text-base md:text-lg font-bold leading-relaxed text-gray-900">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
