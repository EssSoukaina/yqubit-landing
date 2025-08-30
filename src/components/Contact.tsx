import React from 'react';
import { MapPin, Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Marrakech, Morocco',
      gradient: 'from-red-400 to-orange-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'yqubitmorocco@gmail.com',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+212 7-07839443',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: MessageCircle,
      label: 'Social',
      value: '@yqubit',
      gradient: 'from-purple-400 to-pink-500'
    }
  ];

  const handleContactClick = () => {
    window.open('mailto:yqubitmorocco@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI and cutting-edge web solutions? 
            Get in touch with our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">{info.label}</h3>
              <p className="text-gray-300 text-sm">{info.value}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleContactClick}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Contact Us Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;