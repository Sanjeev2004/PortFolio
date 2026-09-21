const SkillCategory = ({ title, skills, color }: { title: string; skills: string[]; color: string }) => (
  <div className="bg-white border-4 border-black p-5 rounded-2xl shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden">
    <h3 className={`font-shrikhand text-xl mb-3 ${color} inline-block px-2 border-2 border-black rounded-md`}>{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full border-2 border-black text-sm font-bold hover:bg-custom-green">{skill}</span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-4 max-w-7xl mx-auto bg-custom-pink border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      <div className="bg-custom-yellow text-black px-8 py-3 rounded-full border-4 border-black w-fit mx-auto mb-10 shadow-neo">
        <h2 className="text-3xl font-shrikhand">SKILLS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCategory title="Languages & Data" color="bg-custom-pink" skills={['C++', 'Python', 'SQL', 'JavaScript', 'TypeScript', 'Pandas', 'NumPy']} />
        <SkillCategory title="Machine Learning" color="bg-custom-blue" skills={['EDA', 'Feature Engineering', 'Regression', 'Classification', 'XGBoost', 'SVM']} />
        <SkillCategory title="Deep Learning & NLP" color="bg-custom-green" skills={['TensorFlow', 'Keras', 'CNNs', 'LSTMs', 'Transformers', 'DistilBERT']} />
        <SkillCategory title="Backend & GenAI" color="bg-custom-yellow" skills={['FastAPI', 'REST APIs', 'LLMs', 'RAG', 'LangGraph', 'LangSmith', 'Multi-Agent']} />
        <SkillCategory title="Core CS" color="bg-purple-300" skills={['OOP', 'DSA', 'DBMS', 'Operating Systems', 'Computer Networks', 'HTTP']} />
        <SkillCategory title="Dev Tools" color="bg-custom-red" skills={['Git', 'GitHub', 'Jupyter', 'VS Code', 'Tableau', 'PostgreSQL', 'MongoDB']} />
      </div>
      <div className="mt-8 bg-white border-4 border-black rounded-2xl p-5 shadow-neo flex flex-wrap gap-6 items-center justify-center font-bold text-lg">
        <span className="font-shrikhand text-2xl">🏆 Competitive Programming</span>
        <span className="bg-custom-yellow px-3 py-1 border-2 border-black rounded-lg">LeetCode: 1716</span>
        <span className="bg-custom-purple px-3 py-1 border-2 border-black rounded-lg text-white">Codeforces: 1517</span>
        <span className="bg-custom-green px-3 py-1 border-2 border-black rounded-lg">800+ Problems</span>
      </div>
    </section>
  );
};

export default Skills;
