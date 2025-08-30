import React from 'react';
import { Brain, Smartphone, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Custom AI Solutions',
      description: 'From plant disease detection to stock prediction',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile Apps',
      description: 'Fast, elegant, and user-friendly platforms',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Turn raw data into insights and dashboards',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Offer
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/10"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;