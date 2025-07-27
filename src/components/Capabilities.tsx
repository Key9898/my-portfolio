import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaReact,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiWordpress } from "react-icons/si";
import { useState, useEffect, useRef } from "react";

export default function Capabilities() {
  return (
    <section id="Capabilities" className="bg-slate-800 lg:pb-0 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Divider */}
        <div className="relative mb-12">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-slate-800 px-3 text-base font-semibold text-white">
              Capabilities
            </span>
          </div>
        </div>

        {/* Capabilities List */}
        <div className="max-w-xl mx-auto space-y-6">
          {/* HTML */}
          <SkillBar icon={<FaHtml5 />} name="HTML" percent="100%" barWidth="w-full" />

          {/* CSS */}
          <SkillBar icon={<FaCss3Alt />} name="CSS" percent="95%" barWidth="w-[95%]" />

          {/* JavaScript */}
          <SkillBar icon={<FaJs />} name="JavaScript" percent="90%" barWidth="w-[90%]" />

          {/* MySQL */}
          <SkillBar icon={<FaDatabase />} name="MySQL" percent="95%" barWidth="w-[95%]" />

          {/* WordPress */}
          <SkillBar icon={<SiWordpress />} name="WordPress" percent="85%" barWidth="w-[85%]" />

          {/* React */}
          <SkillBar icon={<FaReact />} name="React" percent="50%" barWidth="w-1/2" />

          {/* TypeScript */}
          <SkillBar icon={<SiTypescript />} name="TypeScript" percent="50%" barWidth="w-1/2" />

          {/* Tailwind CSS */}
          <SkillBar icon={<SiTailwindcss />} name="Tailwind CSS" percent="50%" barWidth="w-1/2" />
        </div>
      </div>
    </section>
  );
}

function SkillBar({ icon, name, percent, barWidth }: { icon: React.ReactNode; name: string; percent: string; barWidth: string }) {
  const [animatedWidth, setAnimatedWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillBarRef = useRef<HTMLDivElement>(null);
  const targetPercent = parseInt(percent.replace('%', ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedWidth(targetPercent);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isVisible, targetPercent]);

  return (
    <div ref={skillBarRef} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xl font-semibold text-white">
          <span className="text-2xl">{icon}</span>
          <span>{name}</span>
        </div>
        <p className="text-right font-semibold text-white text-lg">{percent}</p>
      </div>
      <div aria-hidden="true">
        <div className="overflow-hidden rounded-full bg-slate-200 h-4">
          <div 
               className="h-full rounded-full bg-gradient-to-r from-slate-600 to-slate-500 progress-bar"
               data-progress={animatedWidth}
             />
        </div>
      </div>
    </div>
  );
}