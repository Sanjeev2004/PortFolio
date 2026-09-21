import { useState } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';
import ContactModal from '../ui/ContactModal';
import MiniTerminal from '../ui/MiniTerminal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="pt-4 pb-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">
      <div className="w-full md:w-1/3 bg-white border-2 border-b-4 border-r-4 border-black rounded-3xl p-6 shadow-neo flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-200/50 w-20 h-6 rotate-[-5deg] border border-gray-400"></div>
        <div className="w-32 h-32 bg-custom-pink rounded-full border-4 border-black mb-4 flex items-center justify-center text-4xl overflow-hidden">
          <img src="/avatar1.png" alt="Sanjeev Kumar" className="w-full h-full object-cover object-[center_30%] scale-[1.4]" />
        </div>
        <h1 className="text-4xl font-shrikhand mb-1">SANJEEV KUMAR</h1>
        <div className="bg-black text-white px-3 py-1 font-mono text-sm rounded-md mb-4 rotate-1">
          AI_ML_ENGINEER()
        </div>
        <div className="w-full space-y-3 text-left font-bold text-sm font-mono border-t-2 border-black pt-4">
          <div><span className="bg-custom-yellow px-1 border border-black mr-2">[LOCATION]</span> NEW DELHI, INDIA</div>
          <div><span className="bg-custom-green px-1 border border-black mr-2">[STATUS]</span> B.TECH CSE @ DTU</div>
          <div><span className="bg-custom-blue px-1 border border-black mr-2">[MISSION]</span> Build Reliable AI Systems</div>
        </div>
        <div className="w-full flex flex-col gap-3 mt-6">
          <a href="/Sanjeev_Resume_v9.pdf" target="_blank" rel="noopener" className="bg-custom-green w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer">
            DOWNLOAD RESUME
          </a>
          <button onClick={() => setIsModalOpen(true)} className="bg-custom-red text-white w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer">
            <FaEnvelope /> CONTACT ME
          </button>
        </div>
        <div className="flex gap-4 mt-6 text-2xl flex-wrap justify-center">
          <a href="mailto:sanjeevsamsan2004@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform text-red-500"><FaEnvelope /></a>
          <a href="https://github.com/Sanjeev2004" target="_blank" rel="noopener" aria-label="GitHub" className="hover:scale-110 transition-transform"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sanjeev-kumar-7896b71b1/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:scale-110 transition-transform text-blue-700"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/SanjeevKumar2004/" target="_blank" rel="noopener" aria-label="LeetCode" className="hover:scale-110 transition-transform text-orange-600"><FaCode /></a>
        </div>
      </div>

      <div className="w-full md:w-2/3 flex flex-col gap-6" id="about">
        <div className="bg-custom-yellow p-6 md:p-10 rounded-3xl border-2 border-b-4 border-r-4 border-black shadow-neo">
          <h2 className="text-4xl font-shrikhand mb-6">Hello, World!</h2>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I'm Sanjeev, a <span className="font-bold bg-white px-1 border border-black">B.Tech Computer Science student at Delhi Technological University</span> with a minor in Machine Learning. I build <span className="font-bold bg-white px-1 border border-black">AI-powered applications, backend systems, and machine learning solutions</span> focused on practical problem-solving.
          </p>
          <p className="text-lg font-medium leading-relaxed mb-4">
            From multi-agent AI systems and NLP pipelines to RAG-based QA — I care about building things that actually work, with clean code and real evaluation.
          </p>
          <div className="bg-white p-4 border-2 border-black rounded-xl inline-block font-bold shadow-neo-sm">
            🚀 Open to Software Engineering, AI/ML, and Applied AI opportunities
          </div>
        </div>
        <MiniTerminal />
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
