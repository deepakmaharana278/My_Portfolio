import React, { useEffect, useRef, useState } from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "B.Tech — Computer Science & Engineering",
      school: "Ajay Binay Institute of Technology (ABIT), Cuttack",
      date: "2022 – 2026",
      desc: "Graduated in CSE under BPUT. Learned core CS concepts like Programming, Operating Systems, Networks, Compiler Design, and Software Engineering.",
      img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Official_logo_of_Biju_Patanaik_University_of_Technology.png",
      tag: "UNDERGRADUATE",
    },
    {
      id: 2,
      degree: "Higher Secondary — Science (XII)",
      school: "Parama Nanda Higher Secondary School, Bolgarh",
      date: "2020 – 2022",
      desc: "Completed Class XII in Science stream covering Physics, Chemistry, Mathematics, and Bio.",
      img: "https://chseodisha.nic.in/wp-content/themes/education/images/logos/logo.png",
      tag: "CHSE ODISHA",
    },
    {
      id: 3,
      degree: "Secondary Education (X)",
      school: "Daspalla High School, Daspalla",
      date: "2018 – 2020",
      desc: "Completed Class X with strong academic foundations and a growing interest in science and technology.",
      img: "https://imgs.search.brave.com/epgW0QWUn9cMqJmlnP5TXRl7UWyJDk-zIDCgt3HZWSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMC8wMy9C/c2Uub2Rpc2hhLmxv/Z28uanBn",
      tag: "BSE ODISHA",
    },
  ];

  const [visible, setVisible] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible((v) => [...new Set([...v, i])]);
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <section
      id="education"
      className="py-24 px-[7vw] font-sans bg-gradient-to-r from-[#050414] via-[#0e0b33] to-[#033852] text-gray-100"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white mb-3">
          My <span className="text-purple-400">Education</span>
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-4" />
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          My academic journey that built the foundation of my technical skills and knowledge
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Center vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-purple-900/50 hidden md:block" />

        <div className="flex flex-col gap-12">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={edu.id}
                ref={(el) => (refs.current[index] = el)}
                className="relative flex flex-col md:flex-row items-center gap-6"
                style={{
                  opacity: visible.includes(index) ? 1 : 0,
                  transform: visible.includes(index)
                    ? "translateX(0)"
                    : isLeft ? "translateX(-40px)" : "translateX(40px)",
                  transition: `opacity 0.65s ease ${index * 0.2}s, transform 0.65s ease ${index * 0.2}s`,
                }}
              >
                {/* LEFT side — card or spacer */}
                <div className="w-full md:w-[45%] flex md:justify-end">
                  {isLeft ? (
                    <div className="w-full md:max-w-sm bg-[#0f0018] border border-purple-900/60 rounded-2xl p-5 shadow-[0_4px_24px_rgba(100,0,180,0.2)] hover:border-purple-500 hover:shadow-[0_8px_32px_rgba(139,92,246,0.3)] hover:-translate-y-1 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 shrink-0 rounded-xl bg-white p-1.5 border border-purple-200/10">
                          <img src={edu.img} alt={edu.school} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <span className="text-[10px] tracking-[0.25em] text-purple-400 bg-purple-950/60 border border-purple-800/50 px-2 py-0.5 rounded-full uppercase font-semibold">
                            {edu.tag}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300 leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-gray-400 mb-3">{edu.school}</p>
                      <div className="h-px bg-purple-900/40 mb-3" />
                      <p className="text-xs text-gray-400 leading-relaxed">{edu.desc}</p>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Center dot */}
                <div className="relative z-10 shrink-0 w-5 h-5 rounded-full bg-purple-600 border-4 border-[#0e0b33] shadow-[0_0_12px_rgba(139,92,246,0.8)] hidden md:block" />

                {/* RIGHT side — card or spacer */}
                <div className="w-full md:w-[45%] flex md:justify-start">
                  {!isLeft ? (
                    <div className="w-full md:max-w-sm bg-[#0f0018] border border-purple-900/60 rounded-2xl p-5 shadow-[0_4px_24px_rgba(100,0,180,0.2)] hover:border-purple-500 hover:shadow-[0_8px_32px_rgba(139,92,246,0.3)] hover:-translate-y-1 transition-all duration-300 group">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 shrink-0 rounded-xl bg-white p-1.5 border border-purple-200/10">
                          <img src={edu.img} alt={edu.school} className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <span className="text-[10px] tracking-[0.25em] text-purple-400 bg-purple-950/60 border border-purple-800/50 px-2 py-0.5 rounded-full uppercase font-semibold">
                            {edu.tag}
                          </span>
                          <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300 leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-gray-400 mb-3">{edu.school}</p>
                      <div className="h-px bg-purple-900/40 mb-3" />
                      <p className="text-xs text-gray-400 leading-relaxed">{edu.desc}</p>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;