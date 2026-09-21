const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-4 border-white mt-20 text-center">
      <h2 className="text-2xl font-shrikhand text-custom-pink mb-2">Built with clarity, curiosity & code.</h2>
      <div className="flex justify-center gap-6 text-2xl mb-4">
        <a href="https://github.com/Sanjeev2004" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-custom-yellow transition-colors">⟨/⟩</a>
        <a href="https://www.linkedin.com/in/sanjeev-kumar-7896b71b1/" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-custom-blue transition-colors">in</a>
      </div>
      <div className="font-shrikhand text-xl text-custom-pink">SK / {new Date().getFullYear()}</div>
      <div className="text-xs text-gray-500 mt-2">© {new Date().getFullYear()} All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
