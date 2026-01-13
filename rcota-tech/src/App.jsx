import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Clock, CheckCircle, Play, X, Code, Database, Globe, Cpu, Layers, Smartphone, Layout, Mail, MapPin, Search, PenTool, Code2, Rocket, MessageCircle, Users, Trophy, Zap, ChevronDown, ArrowRight, Twitter, Github, Minus, MessageSquare } from 'lucide-react';

// --- ANIMATION HELPER COMPONENT ---
const Reveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      {children}
    </div>
  );
};

function App() {
  
  const [activeVideo, setActiveVideo] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false); // State for WhatsApp Menu

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // WhatsApp Options Configuration
  const whatsappNumber = "919999999999"; // Apana number yaha dalein
  const chatOptions = [
    { label: "I need a Website", icon: <Globe size={18} />, text: "Hi, I am interested in Website Development." },
    { label: "I need an App", icon: <Smartphone size={18} />, text: "Hi, I am interested in Mobile App Development." },
    { label: "I need UI/UX Design", icon: <PenTool size={18} />, text: "Hi, I am interested in UI/UX Design." },
    { label: "General Inquiry", icon: <MessageSquare size={18} />, text: "Hi, I have a general query." },
  ];

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

  // 4. Client Logos
  const clients = ["Stripe", "Spotify", "Slack", "Netflix", "Zoom"];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans pb-0 selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto border-b border-gray-900/50 backdrop-blur-sm sticky top-0 z-40 bg-[#050505]/80 transition-all duration-300">
        <h1 className="text-2xl font-bold tracking-tighter text-white hover:text-blue-500 transition-colors cursor-pointer">Rcota<span className="text-blue-500 hover:text-white transition-colors">Tech</span>.</h1>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Contact Us
        </button>
      </nav>

      {/* HERO SECTION */}
      <Reveal>
        <div className="max-w-4xl mx-auto mt-20 mb-20 text-center px-4">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-wide uppercase hover:bg-blue-500/20 transition-colors cursor-default">
            Transforming Ideas into Reality
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 animate-pulse">Digital Assets</span> <br /> That Scale.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            High-performance web solutions delivered with transparency.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all flex items-center hover:scale-105 shadow-lg shadow-blue-600/30">
              Start a Project <ArrowRight size={20} className="ml-2" />
            </button>
            <button className="px-8 py-4 bg-[#111] hover:bg-[#222] border border-gray-800 text-white rounded-lg font-bold transition-all hover:border-gray-600">
              View Work
            </button>
          </div>
        </div>
      </Reveal>

      {/* STATS SECTION */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-900 py-10">
            <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-2 text-blue-500 group-hover:scale-110 transition-transform"><Trophy size={28}/></div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Projects Delivered</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-2 text-purple-500 group-hover:scale-110 transition-transform"><Users size={28}/></div>
              <h3 className="text-3xl font-bold text-white">30+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Happy Clients</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-2 text-green-500 group-hover:scale-110 transition-transform"><Globe size={28}/></div>
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Countries Served</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-2 text-yellow-500 group-hover:scale-110 transition-transform"><Zap size={28}/></div>
              <h3 className="text-3xl font-bold text-white">99%</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* TRUSTED BY */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 mb-32 text-center">
          <p className="text-sm text-gray-600 mb-6 uppercase tracking-widest font-semibold">Trusted by Innovative Companies</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {clients.map((client, i) => (
               <h3 key={i} className="text-2xl font-bold text-gray-400 hover:text-white hover:scale-110 transition-all cursor-default">{client}</h3>
             ))}
          </div>
        </div>
      </Reveal>

      {/* TECH STACK MARQUEE SECTION */}
      <div className="py-10 bg-black/50 mb-32 overflow-hidden border-y border-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
          <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">Powered by Modern Tech</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-scroll whitespace-nowrap gap-16 px-8 hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl hover:text-blue-400 transition-colors"><Code className="text-blue-500" /> React</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl hover:text-green-400 transition-colors"><Database className="text-green-500" /> Node.js</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl hover:text-purple-400 transition-colors"><Smartphone className="text-purple-500" /> React Native</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl hover:text-cyan-400 transition-colors"><Globe className="text-cyan-500" /> Next.js</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl hover:text-yellow-400 transition-colors"><Layers className="text-yellow-500" /> Firebase</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl hover:text-red-400 transition-colors"><Cpu className="text-red-500" /> Python</div>
                <div className="flex items-center gap-2 text-gray-400 font-bold text-xl hover:text-indigo-400 transition-colors"><Globe className="text-indigo-500" /> Tailwind</div>
              </React.Fragment>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <Reveal>
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Featured Work</h3>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 shadow-2xl group hover:-translate-y-2 hover:shadow-blue-900/20">
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
            </Reveal>
          ))}
        </div>
      </div>

      {/* SERVICES SECTION */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">We don't just code; we engineer solutions for every platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Globe size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Web Development</h4>
              <p className="text-gray-400 text-sm leading-relaxed">High-performance React & Next.js websites that rank high and convert visitors into customers.</p>
            </div>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Smartphone size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">App Development</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Cross-platform mobile apps using React Native. One codebase, working perfectly on iOS and Android.</p>
            </div>
            <div className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 hover:border-pink-500/50 hover:bg-gray-900/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Layout size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">UI/UX Design</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Modern, dark-themed, and glassmorphic designs that look premium and feel intuitive.</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* WHY CHOOSE US (COMPARISON) */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Global Brands Choose Us</h3>
            <p className="text-gray-400">See how we stack up against the rest.</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px] bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors">
              {/* Header Row */}
              <div className="grid grid-cols-4 gap-4 border-b border-gray-800 pb-6 mb-6 text-sm uppercase tracking-widest font-bold text-gray-500">
                <div className="col-span-1">Feature</div>
                <div className="text-center">Freelancers</div>
                <div className="text-center">Traditional Agencies</div>
                <div className="text-center text-blue-500">Rcota Tech</div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-4 gap-4 items-center border-b border-gray-800/50 pb-6 mb-6 group hover:bg-gray-900/30 rounded-lg px-2 transition-colors">
                <div className="font-bold text-white">Delivery Speed</div>
                <div className="text-center text-gray-400 text-sm">Inconsistent</div>
                <div className="text-center text-gray-400 text-sm">Slow (Months)</div>
                <div className="text-center text-white font-bold flex justify-center items-center gap-2">
                  <Zap size={16} className="text-yellow-500" /> Rapid (Weeks)
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-4 gap-4 items-center border-b border-gray-800/50 pb-6 mb-6 group hover:bg-gray-900/30 rounded-lg px-2 transition-colors">
                <div className="font-bold text-white">Cost Structure</div>
                <div className="text-center text-gray-400 text-sm">Hidden Costs</div>
                <div className="text-center text-gray-400 text-sm">Very Expensive</div>
                <div className="text-center text-white font-bold flex justify-center items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" /> Affordable & Fixed
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-4 gap-4 items-center border-b border-gray-800/50 pb-6 mb-6 group hover:bg-gray-900/30 rounded-lg px-2 transition-colors">
                <div className="font-bold text-white">Code Quality</div>
                <div className="text-center text-gray-400 text-sm flex justify-center"><Minus size={18} /></div>
                <div className="text-center text-gray-400 text-sm">Good</div>
                <div className="text-center text-white font-bold flex justify-center items-center gap-2">
                  <Trophy size={16} className="text-purple-500" /> Top-Tier (Scalable)
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-4 gap-4 items-center group hover:bg-gray-900/30 rounded-lg px-2 transition-colors py-2">
                <div className="font-bold text-white">Post-Launch Support</div>
                <div className="text-center text-gray-400 text-sm text-red-400 flex justify-center"><X size={18} /></div>
                <div className="text-center text-gray-400 text-sm">Paid Extra</div>
                <div className="text-center text-white font-bold flex justify-center items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" /> 1 Month Free
                </div>
              </div>

            </div>
          </div>
        </div>
      </Reveal>

      {/* PROCESS SECTION */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h3>
            <p className="text-gray-400">Simple, transparent, and efficient process.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 -z-10 opacity-30"></div>
            <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-24 h-24 mx-auto bg-[#111] border border-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:border-blue-500 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500 relative z-10">
                <Search className="text-blue-500" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">1. Discovery</h4>
              <p className="text-sm text-gray-400">We analyze your requirements and market needs.</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-24 h-24 mx-auto bg-[#111] border border-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 relative z-10">
                <PenTool className="text-purple-500" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">2. Design</h4>
              <p className="text-sm text-gray-400">We craft modern UI/UX prototypes for approval.</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-24 h-24 mx-auto bg-[#111] border border-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:border-pink-500 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all duration-500 relative z-10">
                <Code2 className="text-pink-500" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">3. Build</h4>
              <p className="text-sm text-gray-400">We code using the latest scalable tech stack.</p>
            </div>
            <div className="text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-24 h-24 mx-auto bg-[#111] border border-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:border-green-500 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all duration-500 relative z-10">
                <Rocket className="text-green-500" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">4. Launch</h4>
              <p className="text-sm text-gray-400">Deployment, testing, and final handover.</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* PRICING SECTION */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h3>
            <p className="text-gray-400">Choose the package that fits your stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-all group hover:-translate-y-2">
              <h4 className="text-xl font-bold text-white mb-2">MVP / Startup</h4>
              <p className="text-gray-400 text-sm mb-6">Perfect to test your idea quickly.</p>
              <div className="text-4xl font-bold text-white mb-6">$999 <span className="text-sm font-normal text-gray-500">/ project</span></div>
              <ul className="space-y-4 mb-8 text-gray-400 text-sm">
                 <li className="flex items-center"><CheckCircle size={16} className="text-gray-600 mr-2 group-hover:text-white"/> Landing Page (5 Sections)</li>
                 <li className="flex items-center"><CheckCircle size={16} className="text-gray-600 mr-2 group-hover:text-white"/> React + Tailwind Code</li>
                 <li className="flex items-center"><CheckCircle size={16} className="text-gray-600 mr-2 group-hover:text-white"/> Mobile Responsive</li>
                 <li className="flex items-center"><CheckCircle size={16} className="text-gray-600 mr-2 group-hover:text-white"/> Contact Form</li>
              </ul>
              <button className="w-full py-3 border border-gray-700 rounded-lg text-white hover:bg-white hover:text-black transition-all font-medium">Get Started</button>
            </div>
            {/* Plan 2 */}
            <div className="bg-[#111] border border-blue-500 p-8 rounded-2xl relative transform md:-translate-y-4 shadow-2xl shadow-blue-900/20 hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg tracking-widest uppercase">Popular</div>
              <h4 className="text-xl font-bold text-white mb-2">Business Scale</h4>
              <p className="text-gray-400 text-sm mb-6">For growing companies needing results.</p>
              <div className="text-4xl font-bold text-white mb-6">$2,499 <span className="text-sm font-normal text-gray-500">/ project</span></div>
              <ul className="space-y-4 mb-8 text-gray-300 text-sm">
                 <li className="flex items-center"><CheckCircle size={16} className="text-blue-500 mr-2"/> Full Web Application</li>
                 <li className="flex items-center"><CheckCircle size={16} className="text-blue-500 mr-2"/> CMS / Admin Panel</li>
                 <li className="flex items-center"><CheckCircle size={16} className="text-blue-500 mr-2"/> SEO Optimization</li>
                 <li className="flex items-center"><CheckCircle size={16} className="text-blue-500 mr-2"/> 1 Month Support</li>
              </ul>
              <button className="w-full py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-500/30">Choose Plan</button>
            </div>
            {/* Plan 3 */}
            <div className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-all group hover:-translate-y-2">
              <h4 className="text-xl font-bold text-white mb-2">Enterprise</h4>
              <p className="text-gray-400 text-sm mb-6">Complex custom solutions.</p>
              <div className="text-4xl font-bold text-white mb-6">Custom</div>
              <ul className="space-y-4 mb-8 text-gray-400 text-sm">
                 <li className="flex items-center"><CheckCircle size={16} className="text-gray-600 mr-2 group-hover:text-white"/> Mobile App (iOS/Android)</li>
                 <li className="flex items-center"><CheckCircle size={16} className="text-gray-600 mr-2 group-hover:text-white"/> SaaS Platform Development</li>
                 <li className="flex items-center"><CheckCircle size={16} className="text-gray-600 mr-2 group-hover:text-white"/> Dedicated Developer Team</li>
                 <li className="flex items-center"><CheckCircle size={16} className="text-gray-600 mr-2 group-hover:text-white"/> 24/7 Priority Support</li>
              </ul>
              <button className="w-full py-3 border border-gray-700 rounded-lg text-white hover:bg-white hover:text-black transition-all font-medium">Contact Sales</button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* TEAM SECTION */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Minds</h3>
            <p className="text-gray-400">The creative force behind your digital success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="group relative overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="CEO" className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white">Aryan Raj</h4>
                <p className="text-blue-500 font-medium mb-4">Founder & Lead Dev</p>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-gray-300 hover:text-white hover:scale-125 transition-transform"><Linkedin size={20} /></a>
                  <a href="#" className="text-gray-300 hover:text-white hover:scale-125 transition-transform"><Twitter size={20} /></a>
                  <a href="#" className="text-gray-300 hover:text-white hover:scale-125 transition-transform"><Mail size={20} /></a>
                </div>
              </div>
            </div>
            {/* Member 2 */}
            <div className="group relative overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop" alt="CTO" className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white">Sarah Chen</h4>
                <p className="text-purple-500 font-medium mb-4">Head of Design</p>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-gray-300 hover:text-white hover:scale-125 transition-transform"><Linkedin size={20} /></a>
                  <a href="#" className="text-gray-300 hover:text-white hover:scale-125 transition-transform"><Globe size={20} /></a>
                </div>
              </div>
            </div>
            {/* Member 3 */}
            <div className="group relative overflow-hidden rounded-2xl hover:-translate-y-2 transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop" alt="Dev" className="w-full h-96 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white">David Miller</h4>
                <p className="text-green-500 font-medium mb-4">Senior Engineer</p>
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-gray-300 hover:text-white hover:scale-125 transition-transform"><Github size={20} /></a>
                  <a href="#" className="text-gray-300 hover:text-white hover:scale-125 transition-transform"><Code size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* FAQ SECTION */}
      <Reveal>
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
      </Reveal>

      {/* FINAL CTA BANNER (CLEAN & SEPARATE) */}
      <Reveal>
        <div className="max-w-5xl mx-auto px-6 mb-24 relative z-10">
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/40 p-12 text-center shadow-[0_0_60px_rgba(37,99,235,0.15)] group hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full group-hover:bg-blue-500/30 transition-all duration-500"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full group-hover:bg-purple-500/30 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Scale</span> Your Business?
              </h3>
              <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Don't settle for average. Let's build a high-performance digital presence that dominates your market.
              </p>
              <button className="group relative inline-flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                Start Your Project Now
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <p className="mt-6 text-xs text-gray-500 font-mono uppercase tracking-widest">
                Limited Slots Available for This Month
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* CONTACT & EXPANDED FOOTER */}
      <div className="bg-[#0a0a0a] border-t border-gray-900 pt-20 pb-10">
        <Reveal>
          <div className="max-w-6xl mx-auto px-6 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact Left */}
              <div>
                <h3 className="text-4xl font-bold text-white mb-6">Let's build something <br /> <span className="text-blue-500">incredible</span> together.</h3>
                <p className="text-gray-400 mb-8 text-lg">Have a project in mind? Drop us a message and we'll get back to you within 24 hours.</p>
                <div className="space-y-6">
                  <div className="flex items-center text-gray-300"><Mail className="mr-4 text-blue-500" /> hello@rcotatech.com</div>
                  <div className="flex items-center text-gray-300"><MapPin className="mr-4 text-blue-500" /> Mumbai, India</div>
                </div>
              </div>
              {/* Contact Form */}
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
        </Reveal>

        {/* BIG PROFESSIONAL FOOTER */}
        <div className="max-w-6xl mx-auto px-6 border-t border-gray-900 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            
            {/* Col 1: Brand Info */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-4">Rcota<span className="text-blue-500">Tech</span>.</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Building digital products, brands, and experiences that scale.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-blue-600 text-white transition-all"><Twitter size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-blue-600 text-white transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center hover:bg-blue-600 text-white transition-all"><Github size={18} /></a>
              </div>
            </div>

            {/* Col 2: Company */}
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">App Development</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">SEO Growth</a></li>
              </ul>
            </div>

            {/* Col 4: Legal */}
            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2026 Rcota Tech. All rights reserved.</p>
            <p className="flex items-center mt-2 md:mt-0">Made with <span className="text-red-500 mx-1">❤</span> in India.</p>
          </div>
        </div>
      </div>

      {/* SMART WHATSAPP WIDGET */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        {/* Chat Menu Options */}
        <div className={`flex flex-col gap-2 transition-all duration-300 origin-bottom-right ${isChatOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
          {chatOptions.map((opt, i) => (
            <a 
              key={i}
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(opt.text)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 hover:bg-gray-100 transition-all hover:-translate-x-1"
            >
              <span className="text-blue-600">{opt.icon}</span>
              <span className="font-medium text-sm">{opt.label}</span>
            </a>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`relative group p-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-110 ${isChatOpen ? 'bg-red-500 rotate-90' : 'bg-[#25D366]'}`}
        >
          {isChatOpen ? <X size={28} className="text-white" /> : <MessageCircle size={28} className="text-white" />}
          
          {/* Pulse Effect (Only when closed) */}
          {!isChatOpen && (
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
          )}
          
          {/* Notification Dot */}
          {!isChatOpen && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-[#050505]"></span>
          )}
        </button>
      </div>

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