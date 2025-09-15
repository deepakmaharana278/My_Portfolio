import React from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology - B.Tech in Computer Science & Engineering",
      school: "Ajay Binay Institute of Technology (ABIT), Cuttack",
      date: "2022 – 2026",
      desc: "Graduated in CSE under BPUT. Learned core CS concepts like Programming, Operating Systems, Networks, Compiler Design, and Software Engineering.",
      img: "https://upload.wikimedia.org/wikipedia/en/e/ec/Official_logo_of_Biju_Patanaik_University_of_Technology.png",
    },
    {
      id: 2,
      degree: "Higher Secondary Education - Science (XII)",
      school: "Parama Nanda Higher Secondary School, Bolgarh (CHSE)",
      date: "2020 – 2022",
      desc: "Completed Class XII in Science stream (Physics, Chemistry, Mathematics, Computer Science).",
      img: "https://chseodisha.nic.in/wp-content/themes/education/images/logos/logo.png",
    },
    {
      id: 3,
      degree: "Secondary Education (X)",
      school: "Daspalla High School, Daspalla",
      date: "2018 – 2020",
      desc: "Completed Class X, building strong academic foundations and interest in science & technology.",
      img: "https://imgs.search.brave.com/epgW0QWUn9cMqJmlnP5TXRl7UWyJDk-zIDCgt3HZWSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMC8wMy9C/c2Uub2Rpc2hhLmxv/Z28uanBn",
    },
  ];

  return (
    <section id="education" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-r from-[#120b1a] via-purple-950 to-[#050414] clip-path-custom-3">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">My education has been a journey of learning and development. Here are the details of my academic background</p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div key={edu.id} className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img src={edu.img} alt={edu.school} className="w-full h-full object-cover rounded-full" />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                  <img src={edu.img} alt={edu.school} className="w-full h-full object-contain" />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-md sm:text-sm text-gray-300">{edu.school}</h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
