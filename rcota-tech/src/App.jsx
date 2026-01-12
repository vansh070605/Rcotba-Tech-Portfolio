import React, { useState } from 'react';
import { Linkedin, Clock, CheckCircle, Play, X, Code, Database, Globe, Cpu, Layers, Smartphone, Layout, Mail, MapPin, Search, PenTool, Code2, Rocket, MessageCircle, Users, Trophy, Zap, ChevronDown, ArrowRight } from 'lucide-react';

function App() {
  
  const [activeVideo, setActiveVideo] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // 1. Projects Data
  const projects = [
    {
      id: 1,
      name: "FinTech Dashboard Pro",
      description: "A comprehensive financial analytics dashboard handling real-time crypto data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
      deliveryTime: "25 Days",
      deliverables: ["UI/UX Design", "Frontend Dev", "API Integration"],
      team: [
        { name: "Rahul", link: "#", avatar: "https://ui-avatars.com/api/?name=Rahul&background=random" },
        { name: "Sarah", link: "#", avatar: "https://ui-avatars.com/api/?name=Sarah&background=random" }
      ]
    },
    {
      id: 2,
      name: "E-Com SuperStore",
      description: "Scalable e-commerce platform with 50k+ product handling capacity.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      deliveryTime: "40 Days",
      deliverables: ["Full Stack Dev", "Database Design", "Payment Gateway"],
      team: [
        { name: "Amit", link: "#", avatar: "https://ui-avatars.com/api/?name=Amit&background=random" }
      ]
    }
  ];

  // 2. Reviews Data
  const reviews = [
    { 
      id: 1, 
      client: "John Doe, CEO FinTech", 
      thumb: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/lxT33df5jMQ?autoplay=1" 
    },
    { 
      id: 2, 
      client: "Jane Smith, Founder E-Com", 
      thumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1"
    }
  ];

  // 3. FAQ Data
  const faqs = [
    { question: "How much time does a website take?", answer: "Usually 2-4 weeks depending on complexity. We provide a strict timeline before starting." },
    { question: "Do you provide support after delivery?", answer: "Yes! We offer 1 month of free support and maintenance for all our projects." },
    { question: "Can you work with my existing design?", answer: "Absolutely. We can convert your Figma/Adobe XD designs into pixel-perfect code." },
    { question: "What is your payment structure?", answer: "We typically work on a 40% advance, 30% mid-project, and 30% upon delivery structure." }
  ];

  // 4. Client Logos (Text placeholders for now)
  const clients = ["Stripe", "Spotify", "Slack", "Netflix", "Zoom"];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans pb-0 selection:bg-blue-500 selection:text-white relative">
      
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-gray-900/50 backdrop-blur-sm sticky top-0 z-40 bg-[#050505]/80">
        <h1 className="text-2xl font-bold tracking-tighter text-white">Rcota<span className="text-blue-500">Tech</span>.</h1>
        <button className="bg-white text-black px-5 py-2 rounded-full font-medium text-sm hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
          Contact Us
        </button>
      </nav>

      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto mt-20 mb-20 text-center px-4 animate-fade-in-up">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide uppercase">
          Transforming Ideas into Reality
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600">Digital Assets</span> <br /> That Scale.
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          High-performance web solutions delivered with transparency.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all flex items-center">
            Start a Project <ArrowRight size={20} className="ml-2" />
          </button>
          <button className="px-8 py-4 bg-[#111] hover:bg-[#222] border border-gray-800 text-white rounded-lg font-bold transition-all">
            View Work
          </button>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-900 py-10">
          <div className="text-center">
            <div className="flex justify-center mb-2 text-blue-500"><Trophy size={28}/></div>
            <h3 className="text-3xl font-bold text-white">50+</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2 text-purple-500"><Users size={28}/></div>
            <h3 className="text-3xl font-bold text-white">30+</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2 text-green-500"><Globe size={28}/></div>
            <h3 className="text-3xl font-bold text-white">10+</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Countries Served</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2 text-yellow-500"><Zap size={28}/></div>
            <h3 className="text-3xl font-bold text-white">99%</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">On-Time Delivery</p>
          </div>
        </div>
      </div>

      {/* TRUSTED BY (NEW) */}
      <div className="max-w-6xl mx-auto px-6 mb-32 text-center">
        <p className="text-sm text-gray-600 mb-6 uppercase tracking-widest font-semibold">Trusted by Innovative Companies</p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale">
           {/* Placeholder Text Logos - You can replace with <img> tags later */}
           {clients.map((client, i) => (
             <h3 key={i} className="text-2xl font-bold text-gray-400 hover:text-white hover:grayscale-0 transition-all cursor-default">{client}</h3>
           ))}
        </div>
      </div>

      {/* TECH STACK MARQUEE SECTION */}
      <div className="py-10 bg-black/50 mb-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">Powered by Modern Tech</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-scroll whitespace-nowrap gap-16 px-8">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl"><Code className="text-blue-500" /> React</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl"><Database className="text-green-500" /> Node.js</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl"><Smartphone className="text-purple-500" /> React Native</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl"><Globe className="text-cyan-500" /> Next.js</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl"><Layers className="text-yellow-500" /> Firebase</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl"><Cpu className="text-red-500" /> Python</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl"><Globe className="text-indigo-500" /> Tailwind</div>
              </React.Fragment>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Featured Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-2xl group hover:-translate-y-1">
              <div className="h-72 overflow-hidden relative">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-mono text-blue-400 flex items-center border border-blue-500/30 shadow-lg">
                  <Clock size={14} className="mr-2" /> {project.deliveryTime}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.deliverables.map((item, idx) => (
                    <span key={idx} className="text-xs font-medium bg-gray-900 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-800 flex items-center">
                      <CheckCircle size={12} className="mr-1.5 text-blue-500" /> {item}
                    </span>
                  ))}
                </div>
                <div className="border-t border-gray-800/50 pt-5 flex justify-between items-center">
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Built By</span>
                  <div className="flex -space-x-3 pl-4">
                    {project.team.map((member, idx) => (
                      <a key={idx} href={member.link} className="relative group/member">
                        <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gray-800 grayscale hover:grayscale-0 transition-all hover:scale-110 z-0 hover:z-10" />
                        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 hidden group-hover/member:flex bg-black text-white text-[10px] px-3 py-1.5 rounded shadow-xl border border-gray-700 z-20 whitespace-nowrap">
                          {member.name}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h3>
          <p className="text-gray-400">Simple, transparent, and efficient process.</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 -z-10 opacity-30"></div>
          <div className="text-center group">
            <div className="w-24 h-24 mx-auto bg-[#111] border border-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 relative z-10">
              <Search className="text-blue-500" size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">1. Discovery</h4>
            <p className="text-sm text-gray-400">We analyze your requirements and market needs.</p>
          </div>
          <div className="text-center group">
            <div className="w-24 h-24 mx-auto bg-[#111] border border-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 relative z-10">
              <PenTool className="text-purple-500" size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">2. Design</h4>
            <p className="text-sm text-gray-400">We craft modern UI/UX prototypes for approval.</p>
          </div>
          <div className="text-center group">
            <div className="w-24 h-24 mx-auto bg-[#111] border border-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:border-pink-500 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500 relative z-10">
              <Code2 className="text-pink-500" size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">3. Build</h4>
            <p className="text-sm text-gray-400">We code using the latest scalable tech stack.</p>
          </div>
          <div className="text-center group">
            <div className="w-24 h-24 mx-auto bg-[#111] border border-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:border-green-500 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-500 relative z-10">
              <Rocket className="text-green-500" size={32} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">4. Launch</h4>
            <p className="text-sm text-gray-400">Deployment, testing, and final handover.</p>
          </div>
        </div>
      </div>

      {/* VIDEO REVIEWS */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="flex items-center mb-10 gap-4">
          <h3 className="text-3xl font-bold text-white">Client Stories</h3>
          <div className="h-px bg-gradient-to-r from-blue-600 to-transparent flex-1 opacity-50"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              onClick={() => setActiveVideo(review.videoUrl)}
              className="relative group rounded-2xl overflow-hidden aspect-video bg-gray-900 border border-gray-800 cursor-pointer shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1"
            >
              <img src={review.thumb} alt="Client" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center pl-1 border border-white/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:bg-blue-600 group-hover:border-blue-500">
                  <Play fill="currentColor" size={24} className="text-white" />
                </div>
                <p className="mt-4 font-semibold text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Watch Review</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <p className="font-medium text-white">{review.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">We don't just code; we engineer solutions for every platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Globe size={24} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">Web Development</h4>
            <p className="text-gray-400 text-sm leading-relaxed">High-performance React & Next.js websites that rank high and convert visitors into customers.</p>
          </div>
          <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Smartphone size={24} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">App Development</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Cross-platform mobile apps using React Native. One codebase, working perfectly on iOS and Android.</p>
          </div>
          <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 hover:border-pink-500/50 hover:bg-gray-900/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
              <Layout size={24} />
            </div>
            <h4 className="text-xl font-bold text-white mb-3">UI/UX Design</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Modern, dark-themed, and glassmorphic designs that look premium and feel intuitive.</p>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="max-w-3xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0a0a0a] border border-gray-800 rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 text-left text-white hover:bg-gray-900 transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className={`transition-transform duration-300 text-blue-500 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-5 text-gray-400 text-sm transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-40 py-4 border-t border-gray-800' : 'max-h-0'}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA BANNER (NEW) */}
      <div className="max-w-6xl mx-auto px-6 mb-0">
        <div className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 border border-blue-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to scale your business?</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto text-lg relative z-10">Don't settle for average. Let's build a digital presence that dominates your market.</p>
          <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Start Your Project Now
          </button>
        </div>
      </div>

      {/* CONTACT & FOOTER */}
      <div className="bg-[#0a0a0a] pt-20 pb-10 mt-[-50px]"> {/* Negative margin to pull it up behind CTA */}
        <div className="max-w-6xl mx-auto px-6 mb-20 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">Let's build something <br /> <span className="text-blue-500">incredible</span> together.</h3>
              <p className="text-gray-400 mb-8 text-lg">Have a project in mind? Drop us a message and we'll get back to you within 24 hours.</p>
              <div className="space-y-6">
                <div className="flex items-center text-gray-300"><Mail className="mr-4 text-blue-500" /> hello@rcotatech.com</div>
                <div className="flex items-center text-gray-300"><MapPin className="mr-4 text-blue-500" /> Mumbai, India</div>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-[#111] border border-gray-800 text-white p-4 rounded-lg focus:outline-none focus:border-blue-500 transition-colors w-full" />
                <input type="email" placeholder="Email" className="bg-[#111] border border-gray-800 text-white p-4 rounded-lg focus:outline-none focus:border-blue-500 transition-colors w-full" />
              </div>
              <input type="text" placeholder="Project Type" className="bg-[#111] border border-gray-800 text-white p-4 rounded-lg focus:outline-none focus:border-blue-500 transition-colors w-full" />
              <textarea rows="4" placeholder="Tell us about your project..." className="bg-[#111] border border-gray-800 text-white p-4 rounded-lg focus:outline-none focus:border-blue-500 transition-colors w-full"></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02]">Send Message</button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm pt-8 border-t border-gray-900">© 2026 Rcota Tech. All rights reserved.</div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all hover:scale-110 flex items-center justify-center">
        <MessageCircle size={28} />
      </a>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <button onClick={() => setActiveVideo(null)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-600 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"><X size={24} /></button>
            <iframe src={activeVideo} className="w-full h-full" title="Client Review" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;