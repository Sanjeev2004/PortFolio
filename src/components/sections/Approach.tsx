const steps = [
  { num: '01', title: 'Understand', desc: 'Identify requirements, constraints, users, and likely failure scenarios.' },
  { num: '02', title: 'Design', desc: 'Break the problem into components and choose a suitable architecture, algorithm, or model.' },
  { num: '03', title: 'Build', desc: 'Implement modular, readable systems with clear interfaces and maintainable code.' },
  { num: '04', title: 'Evaluate', desc: 'Test correctness, edge cases, model performance, and system behavior beyond the happy path.' },
];

const Approach = () => {
  return (
    <section id="approach" className="py-10 px-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand">HOW I SOLVE PROBLEMS</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.num} className="bg-white border-4 border-black rounded-2xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <span className="text-4xl font-shrikhand text-custom-purple">{step.num}</span>
            <h3 className="text-2xl font-shrikhand mt-4 mb-3">{step.title}</h3>
            <p className="text-sm font-medium leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
