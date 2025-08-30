import React from 'react';
import { MapPin, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Who We Are
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Y-Qubit is a Moroccan tech startup building real solutions using Artificial Intelligence. 
              We're a team of engineers, coders, and dreamers who believe that technology should solve 
              local problems — in farming, safety, business, and education.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">Morocco Based</h3>
                <p className="text-gray-400 text-sm">Local expertise, global reach</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">Expert Team</h3>
                <p className="text-gray-400 text-sm">Engineers & innovators</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">Real Solutions</h3>
                <p className="text-gray-400 text-sm">Practical AI applications</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-md border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">50+</div>
                    <div className="text-gray-300 text-sm">Projects Delivered</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
                    <div className="text-gray-300 text-sm">Client Satisfaction</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Innovation Driven</div>
                  <div className="text-gray-300">Cutting-edge technology solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;