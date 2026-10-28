import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaShieldAlt
} from 'react-icons/fa';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiStripe,
  SiFramer,
  SiVite,
  SiReactrouter,
  SiJavascript,
  SiTypescript
} from 'react-icons/si';

export const getTechIcon = (tech) => {
  const iconMap = {
    'React': <SiReact className="text-[#61DAFB]" />,
    'React 19': <SiReact className="text-[#61DAFB]" />,
    'Next.js': <SiNextdotjs className="text-white" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'Better-Auth': <FaShieldAlt className="text-cyan-400" />,
    'MongoDB': <SiMongodb className="text-[#47A248]" />,
    'Node.js': <SiNodedotjs className="text-[#339933]" />,
    'Express.js': <SiExpress className="text-slate-200" />,
    'Stripe': <SiStripe className="text-[#008CDD]" />,
    'Framer Motion': <SiFramer className="text-pink-400" />,
    'Vite': <SiVite className="text-[#646CFF]" />,
    'React Router': <SiReactrouter className="text-[#CA4245]" />,
    'HTML5': <FaHtml5 className="text-[#E34F26]" />,
    'CSS3': <FaCss3Alt className="text-[#1572B6]" />,
    'JavaScript': <SiJavascript className="text-[#F7DF1E]" />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />
  };
  return iconMap[tech] || <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />;
};

