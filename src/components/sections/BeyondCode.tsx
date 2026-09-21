import { AnimatePresence, motion } from 'framer-motion';

interface SectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const BeyondCode: React.FC<SectionProps> = ({ isOpen, onToggle }) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, ease: 'linear' }}
      className="w-[95%] md:w-[85%] lg:w-[75%] relative bg-custom-purple border-4 border-l-0 border-black shadow-neo"
    >
      <div className="flex items-center justify-between gap-4 px-6 md:px-10 py-6">
        <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">Beyond Code</h2>
        <button
          onClick={onToggle}
          className="bg-white text-black px-6 py-2 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: 'linear' }} className="overflow-hidden">
            <div className="px-6 md:px-10 pb-10">
              <article className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-neo">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="bg-custom-yellow px-4 py-2 border-2 border-black rounded-full font-mono font-bold text-sm">EDUCATION</span>
                    <span className="bg-custom-green px-4 py-2 border-2 border-black rounded-full font-mono font-bold text-sm">2022 - 2026</span>
                  </div>
                  <h3 className="text-3xl font-shrikhand mb-2">B.Tech Computer Science & Engineering</h3>
                  <p className="font-bold text-lg mb-4">Delhi Technological University · Minor in Machine Learning</p>
                  <p className="font-medium text-lg leading-relaxed mb-6">
                    Building a strong foundation across algorithms, statistics, machine learning, deep learning, databases, and software engineering. Active in competitive programming and AI/ML research.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 bg-custom-blue border-2 border-black rounded-xl p-4">
                      <span className="text-2xl">📚</span>
                      <p className="font-bold">Core courses in DSA, ML, DL, NLP, DBMS, OS, and Computer Networks.</p>
                    </div>
                    <div className="flex items-start gap-3 bg-custom-pink border-2 border-black rounded-xl p-4">
                      <span className="text-2xl">🏆</span>
                      <p className="font-bold">LeetCode 1716 · Codeforces 1517 · 800+ problems solved.</p>
                    </div>
                  </div>
                </div>
              </article>

              <article className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-neo mt-10">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="bg-custom-pink px-4 py-2 border-2 border-black rounded-full font-mono font-bold text-sm">CERTIFICATIONS</span>
                  </div>
                  <h3 className="text-3xl font-shrikhand mb-4">Certificates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a href="/certificates/coursera-ml.pdf" target="_blank" rel="noopener" className="bg-custom-yellow border-2 border-black rounded-xl p-4 font-bold hover:translate-x-1 hover:shadow-neo-sm transition-all">
                      📜 Coursera — Machine Learning
                    </a>
                    <a href="/certificates/nptel-python.pdf" target="_blank" rel="noopener" className="bg-custom-green border-2 border-black rounded-xl p-4 font-bold hover:translate-x-1 hover:shadow-neo-sm transition-all">
                      📜 NPTEL — Python
                    </a>
                    <a href="/certificates/nptel-iot.pdf" target="_blank" rel="noopener" className="bg-custom-blue border-2 border-black rounded-xl p-4 font-bold hover:translate-x-1 hover:shadow-neo-sm transition-all">
                      📜 NPTEL — IoT
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default BeyondCode;
