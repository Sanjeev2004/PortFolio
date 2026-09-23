const SkillCategory = ({ title, skills, color }: { title: string; skills: string[]; color: string }) => (
  <div className="h-full bg-white border-4 border-black rounded-2xl shadow-neo overflow-hidden">
    <h3 className={`font-shrikhand text-xl ${color} px-5 py-4 border-b-2 border-black`}>{title}</h3>
    <ul className="flex flex-wrap content-start gap-2 p-5">
      {skills.map((skill) => (
        <li key={skill} className="bg-gray-100 px-3 py-1.5 rounded-lg border-2 border-black text-sm font-bold">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full py-10 px-4 md:px-8 max-w-7xl mx-auto bg-custom-pink border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      <div className="bg-custom-yellow text-black px-8 py-3 rounded-full border-4 border-black w-fit mx-auto mb-10 shadow-neo">
        <h2 className="text-3xl font-shrikhand">SKILLS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkillCategory title="Languages" color="bg-custom-pink" skills={['C++', 'Python', 'SQL', 'JavaScript', 'TypeScript']} />
        <SkillCategory title="Data & Analytics" color="bg-custom-blue" skills={['Pandas', 'NumPy', 'EDA', 'Tableau']} />
        <SkillCategory title="Machine Learning" color="bg-custom-green" skills={['Feature Engineering', 'Regression', 'Classification', 'XGBoost', 'SVM']} />
        <SkillCategory title="Deep Learning & NLP" color="bg-custom-green" skills={['TensorFlow', 'Keras', 'CNNs', 'LSTMs', 'Transformers', 'DistilBERT']} />
        <SkillCategory title="Generative AI" color="bg-custom-yellow" skills={['LLMs', 'RAG', 'LangGraph', 'LangSmith', 'Multi-Agent']} />
        <SkillCategory title="Backend & APIs" color="bg-custom-blue" skills={['FastAPI', 'REST APIs', 'HTTP']} />
        <SkillCategory title="Databases" color="bg-custom-pink" skills={['PostgreSQL', 'MongoDB']} />
        <SkillCategory title="Core CS" color="bg-purple-300" skills={['OOP', 'DSA', 'DBMS', 'Operating Systems', 'Computer Networks']} />
        <SkillCategory title="Dev Tools" color="bg-custom-red" skills={['Git', 'GitHub', 'Jupyter', 'VS Code']} />
      </div>
      <div className="mt-8 bg-white border-4 border-black rounded-2xl p-5 md:p-6 shadow-neo font-bold text-lg">
        <h3 className="font-shrikhand text-xl md:text-2xl mb-4 text-center">🏆 Competitive Programming</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
        <span className="bg-custom-yellow px-3 py-1 border-2 border-black rounded-lg">LeetCode: 1716</span>
        <span className="bg-custom-purple px-3 py-1 border-2 border-black rounded-lg text-white">Codeforces: 1517</span>
        <span className="bg-custom-green px-3 py-1 border-2 border-black rounded-lg">800+ Problems</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
