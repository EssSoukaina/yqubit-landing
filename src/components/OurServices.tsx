import React from 'react';
import { Code, Zap, Monitor } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      icon: Code,
      title: 'Web & Mobile Development',
      description: 'Clean, fast apps and dashboards for clients and startups',
      features: ['React & React Native', 'Modern UI/UX', 'Performance Optimized', 'Cross-platform']
    },
    {
      icon: Zap,
      title: 'Business Automation & AI Tools',
      description: 'Automate repetitive tasks, gain insights, and boost engagement',
      features: ['Process Automation', 'AI Integration', 'Custom Workflows', 'Smart Analytics']
    },
    {
      icon: Monitor,
      title: 'Dashboards & Internal Tools',
      description: 'Monitor performance and organize work with custom dashboards & CRM forms',
      features: ['Real-time Monitoring', 'Custom CRM', 'Data Visualization', 'Team Collaboration']
    }
  ];

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mr-4">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center border border-white/10">
                    <service.icon className="w-24 h-24 text-white/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;