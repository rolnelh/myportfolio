import React from 'react';

const About = () => {
  // Données des statistiques pour un code propre
  const stats = [
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
    { value: "3+", label: "Years of Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-16 px-6 w-full mt-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
       
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16">
          
          <div className="flex-1 max-w-2xl">

            <div className="flex items-center gap-2 mb-6">
              <span className="font-inter font-bold text-xs uppercase tracking-[0.2em] text-gray-900">
                About Me
              </span>
            </div>
            
            <h2 className="font-syne text-3xl md:text-4xl lg:text-4xl font-bold text-black leading-tight tracking-tight">
              Building products with purpose and precision.
            </h2>
          </div>

          <div className="flex-1 md:max-w-xl md:pt-10">

            <p className="font-inter text-lg text-gray-700 leading-relaxed tracking-tight">
              I help startups and businesses turn ideas into functional, user-friendly digital products. With a strong focus on performance, simplicity, and scalability, I create solutions that make an impact.
            </p>
          </div>
        </div>

       
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-sm hover:border-gray-200 hover:bg-white group"
            >
              <span className="font-syne text-3xl md:text-3xl font-bold text-green-600 transition-colors group-hover:text-black">
                {stat.value}
              </span>
              
              <span className="font-inter font-semibold text-base text-gray-800 tracking-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;