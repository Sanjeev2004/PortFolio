import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  tools: string[];
  description: string[];
  link: string;
  liveLink?: string;
  color: string;
}

const ProjectCard = ({ title, tools, description, link, liveLink, color }: ProjectCardProps) => (
  <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden flex flex-col">
    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>
    <div className="mt-4 flex justify-between items-start mb-4 gap-2">
      <div>
        <h3 className="text-2xl font-shrikhand leading-tight">{title}</h3>
        {liveLink && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse inline-block mt-2">FEATURED</span>
        )}
      </div>
      <div className="flex gap-2 flex-shrink-0">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener" className="bg-custom-green text-black border-2 border-black p-2 rounded-lg hover:bg-green-400 transition-colors" title="Live Demo">
            <FaExternalLinkAlt />
          </a>
        )}
        <a href={link} target="_blank" rel="noopener" className="bg-black text-white border-2 border-black p-2 rounded-lg hover:bg-gray-800 transition-colors" title="Source Code">
          <FaGithub />
        </a>
      </div>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {tools.map((t) => (
        <span key={t} className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md">{t}</span>
      ))}
    </div>
    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
      {description.map((point, i) => (<li key={i}>{point}</li>))}
    </ul>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Soch Samajh AI",
      color: "bg-custom-blue",
      tools: ["React", "TypeScript", "FastAPI", "LangGraph", "LangSmith"],
      link: "https://github.com/Sanjeev2004/SochSamajh-AI-Responsible-Multi-Agent-Query-Routing-System",
      description: [
        "Built an AI-powered query routing system for medical, legal, and general-purpose workflows.",
        "Implemented safety checks, confidence-aware responses, and tracing for evaluation.",
        "300+ queries evaluated across 3 specialized workflows."
      ]
    },
    {
      title: "Mental Health Emotion Detection",
      color: "bg-custom-pink",
      tools: ["Python", "DistilBERT", "Transformers", "Scikit-learn"],
      link: "https://github.com/Sanjeev2004/Mental_Health_Detection",
      description: [
        "Fine-tuned DistilBERT for emotion classification on mental health text data.",
        "Performed class-level error analysis to assess reliability for sensitive use cases.",
        "Achieved 94.9% accuracy and 92.9% macro-F1 score."
      ]
    },
    {
      title: "Speech Emotion Recognition",
      color: "bg-custom-green",
      tools: ["TensorFlow", "Keras", "Librosa", "CNN", "LSTM"],
      link: "https://github.com/Sanjeev2004",
      description: [
        "CNN and LSTM based audio classification system using MFCC, Chroma, and Mel spectrogram features.",
        "Classified 8 emotion classes from the RAVDESS dataset."
      ]
    },
    {
      title: "Document-Based QA System",
      color: "bg-custom-purple",
      tools: ["Python", "FAISS", "BM25", "LangChain", "RAG"],
      link: "https://github.com/Sanjeev2004/Document-based-Q-A-using-RAG-project",
      description: [
        "Built a document-grounded QA system combining dense FAISS retrieval with BM25 sparse search.",
        "Reduced hallucination by 30% across 10+ document sets."
      ]
    }
  ];

  return (
    <section id="projects" className="py-10 px-4 mx-auto max-w-7xl bg-custom-yellow border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
          <h2 className="text-3xl font-shrikhand text-white">PROJECTS</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (<ProjectCard key={i} {...p} />))}
      </div>
    </section>
  );
};

export default Projects;
