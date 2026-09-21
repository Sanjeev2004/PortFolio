import { useState } from 'react';
import Coding from './Coding';
import BeyondCode from './BeyondCode';

const ExtrasAccordion = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-12 w-full overflow-hidden pb-10">
      <Coding isOpen={expandedId === 'coding'} onToggle={() => toggleSection('coding')} />
      <BeyondCode isOpen={expandedId === 'beyond-code'} onToggle={() => toggleSection('beyond-code')} />
    </div>
  );
};

export default ExtrasAccordion;
