const criteria = ['Correctness', 'Reasoning quality', 'Instruction adherence', 'Edge cases', 'Code quality', 'Failure analysis'];

const Evaluation = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto bg-custom-purple border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">
        <div>
          <div className="bg-custom-pink px-6 py-2 border-2 border-black shadow-neo-sm w-fit rounded-lg mb-6">
            <span className="font-mono font-bold text-sm">AI RELIABILITY</span>
          </div>
          <h2 className="text-4xl font-shrikhand mb-4">More than model training.</h2>
        </div>
        <div>
          <p className="text-lg font-medium leading-relaxed mb-6">
            I have hands-on experience evaluating AI-generated responses across coding, reasoning, and instruction-following tasks.
          </p>
          <div className="flex flex-wrap gap-3">
            {criteria.map((c) => (
              <span key={c} className="bg-white border-2 border-black px-4 py-2 font-mono font-bold text-sm rounded-lg">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
