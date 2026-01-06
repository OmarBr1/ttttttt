import React, { useState, useEffect } from 'react';
import Lablink from "../assets/lablinkSol.jpg"
import { 
  Beaker, Settings, Microscope, ChevronRight, Mail, Phone, 
  ArrowUpRight, Shield, Globe, CheckCircle2, ArrowDown, Menu, X, Image as ImageIcon,
  Linkedin, Twitter, Facebook, MessageCircle, FileText, 
  Box, Thermometer, Activity, Truck, Database, Server, Wifi, Lock
} from 'lucide-react';

// REMOVED: import { LablinkLogo } ... (We are using an image now)
import './LablinkSolutions.css';

// --- Helper Components ---
const ImagePlaceholder = ({ height = '100%', text = 'Image Area' }) => (
  <div className="img-placeholder" style={{ height: height }}>
    <div className="img-pattern" />
    <ImageIcon size={32} opacity={0.5} />
    <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{text}</span>
  </div>
);

const LablinkSolutions = () => {
  const [activeStep, setActiveStep] = useState(null); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workflowSeen, setWorkflowSeen] = useState(false);

  // Workflow Data
  const workflowSteps = [
    { id: 1, title: "Diagnostic Analysis", desc: "We begin by auditing your current laboratory infrastructure and supply chain bottlenecks." },
    { id: 2, title: "Strategic Blueprint", desc: "Our architects design a custom logistics framework tailored to your specific research goals." },
    { id: 3, title: "Integration & Deployment", desc: "Seamless installation of equipment and establishment of automated reagent supply lines." },
    { id: 4, title: "Continuous Optimization", desc: "Ongoing AI-driven monitoring to ensure peak performance and zero downtime." }
  ];

  // Products Data (8 Items)
  const products = [
    { id: 1, title: "Cold Chain Sensors", icon: <Thermometer size={24} /> },
    { id: 2, title: "Automated Centrifuges", icon: <Activity size={24} /> },
    { id: 3, title: "Logistics Drones", icon: <Truck size={24} /> },
    { id: 4, title: "LIMS Database", icon: <Database size={24} /> },
    { id: 5, title: "Secure Storage", icon: <Box size={24} /> },
    { id: 6, title: "Cloud Analytics", icon: <Server size={24} /> },
    { id: 7, title: "Remote Monitoring", icon: <Wifi size={24} /> },
    { id: 8, title: "Bio-Safety Locks", icon: <Lock size={24} /> },
  ];

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const workflowObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setWorkflowSeen(true);
      });
    }, { threshold: 0.2 });

    const workflowSection = document.getElementById('workflow-steps-container');
    if (workflowSection) workflowObserver.observe(workflowSection);

    return () => {
      revealObserver.disconnect();
      workflowObserver.disconnect();
    };
  }, []);

  // --- Scroll to Section Helper ---
  // Ensures we account for the fixed navbar height
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Height of nav + sub-bar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="lablink-wrapper">
      
      {/* NAVIGATION GROUP */}
      <div className="fixed-header-group">
        {/* Main Navbar */}
        <nav className="navbar">
          <div className="container nav-content">
            <div className="flex-center" style={{ gap: '12px' }}>
              {/* CHANGED: Logo is now an image */}
              <img src={Lablink} alt="Lablink Logo" className="brand-logo-img" />
              <span className="brand-text">
                LABLINK <span style={{ color: 'var(--gold)' }}>SOLUTIONS</span>
              </span>
            </div>

            <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              {['Home','About', 'Products', 'Catalogue', 'Workflow', ].map(item => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link-btn"
                >
                  {item}
                </button>
              ))}
              <button className="btn-primary nav-btn">Contact</button>
            </div>

            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* NEW: Sub-Navbar Contact Bar */}
        <div className="contact-bar">
          <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            <Phone size={14} className="animate-pulse" />
            <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px' }}>
              24/7 SUPPORT LINE: <span style={{ color: 'var(--white)', fontWeight: '800' }}>+213 770 556 461</span>
            </span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="container reveal active" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-tag">
             <div className="dot"></div>
             <span style={{ color: 'var(--gold)', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Leader in Lab Logistics</span>
          </div>
          <h1 className="hero-title">
            The Missing Link Between <br />
            <span className="gradient-text">Science & Solution</span>
          </h1>
          <p className="hero-desc">
            We provide the high-performance infrastructure and supply chain precision required by the world's top research institutions.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => scrollToSection('solutions')}>
              Explore Solutions <ArrowUpRight size={18}/>
            </button>
            <button className="btn-outline" onClick={() => scrollToSection('catalogue')}>
              View Catalogue
            </button>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <div className="trust-bar reveal">
        <div className="container trust-content">
          {['ISO 9001:2015', 'FDA COMPLIANT', 'GMP CERTIFIED', 'GLOBAL LOGISTICS'].map((text, i) => (
            <div key={i} className="trust-item">
              <CheckCircle2 size={18} color="var(--gold)" /> {text}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT US */}
      <section id="about" className="section-padding">
        <div className="container about-grid">
          <div className="reveal" style={{ position: 'relative' }}>
            <div className="image-wrapper">
               <ImagePlaceholder height="100%" text="Lab Interior / Team Photo" />
            </div>
            <div className="floating-card">
              <div className="stat-number">15+</div>
              <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '8px', letterSpacing: '1px' }}>Years Excellence</div>
            </div>
          </div>
          <div className="reveal delay-100">
            <h2 style={{ color: 'var(--gold)', textTransform: 'uppercase', fontSize: '13px', fontWeight: '800', marginBottom: '24px', letterSpacing: '2px' }}>The Aurum Standard</h2>
            <h3 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '24px', fontWeight: '800', lineHeight: '1.2' }}>Professional Grade Laboratory Architecture</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '40px', fontSize: '18px' }}>
              Lablink Solutions operates at the intersection of quality and reliability. We ensure that your hypothesis is the only variable, while we standardize the environment, equipment, and supply chain.
            </p>
            <div style={{ display: 'grid', gap: '24px' }}>
              {[ { icon: <Shield />, t: 'Verified Quality Control', d: 'Every reagent tested.' }, { icon: <Globe />, t: 'International Supply Chain', d: 'Logistics in 40+ countries.' } ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ color: 'var(--gold)', backgroundColor: 'var(--slate)', padding: '12px', borderRadius: '50%' }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text-main)' }}>{item.t}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE SOLUTIONS */}
      <section id="solutions" className="section-padding bg-slate">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Core Capabilities</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>End-to-end support for the modern scientific facility.</p>
          </div>
          <div className="cards-grid">
            {[
              { id: 's1', title: "Strategic Consulting", icon: <Settings size={28}/>, desc: "Bespoke operational design for modern medical and chemical facilities." },
              { id: 's2', title: "Reagent Supply", icon: <Beaker size={28}/>, desc: "Premium sourcing of high-purity reagents and diagnostic consumables." },
              { id: 's3', title: "Turnkey Setup", icon: <Microscope size={28}/>, desc: "End-to-end laboratory setups from conceptual design to installation." }
            ].map((s, idx) => (
              <div key={s.id} className={`solution-card reveal delay-${(idx + 1) * 100}`}>
                <div className="card-bg-number">0{s.id.charAt(1)}</div>
                <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="icon-box">{s.icon}</div>
                  <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>{s.title}</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '16px', marginBottom: '30px', flex: 1 }}>{s.desc}</p>
                  <div style={{ borderTop: '1px solid var(--slate-light)', paddingTop: '20px' }}>
                    <span className="learn-more">Learn More <ChevronRight size={14} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: PRODUCTS SECTION */}
      <section id="products" className="section-padding">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Available Products</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Specialized equipment for high-precision environments.</p>
          </div>
          
          <div className="products-grid">
            {products.map((p, idx) => (
              <div key={p.id} className={`product-card reveal delay-${(idx % 4) * 100}`}>
                <div className="product-icon-wrapper">
                  {p.icon}
                </div>
                <h4 className="product-title">{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: CATALOGUE SECTION */}
      <section id="catalogue" className="section-padding bg-slate" style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="catalogue-box reveal">
             <div className="catalogue-icon">
                <FileText size={48} color="var(--gold)" />
             </div>
             <h2 className="section-title">2026 Equipment Catalogue</h2>
             <p style={{ maxWidth: '600px', margin: '0 auto 32px auto', color: 'var(--text-muted)', fontSize: '18px' }}>
               Download our complete manifest of certified reagents, centrifuge units, and automated logistics sensors.
             </p>
             <button className="btn-primary">
               Download PDF (24MB) <ArrowDown size={18} />
             </button>
             <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
               *Requires Client Portal access for pricing.
             </p>
          </div>
        </div>
      </section>

      {/* VERTICAL WORKFLOW TREE */}
      <section id="workflow" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal">
            <h2 className="section-title">Operational Workflow</h2>
            <div style={{ height: '4px', width: '60px', backgroundColor: 'var(--gold)', margin: '0 auto 16px auto' }}/>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Our four-step integration process.</p>
          </div>

          <div className="workflow-wrapper">
            <div className="tree-trunk" />

            <div id="workflow-steps-container" style={{ display: 'grid', gap: '40px' }}>
              {workflowSteps.map((step, idx) => (
                <div 
                  key={step.id}
                  className={`workflow-step ${workflowSeen ? 'visible' : ''} ${activeStep === step.id ? 'focused' : ''}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                >
                  <div className="step-node">{step.id}</div>

                  <div className="step-card">
                    <div className="connector-line" />
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginLeft: '13px', marginTop: '40px' }} className="reveal">
              <ArrowDown color="var(--gold-dark)" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-slate">
        <div className="container contact-grid">
          <div className="reveal">
            <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '24px', color: 'var(--text-main)', lineHeight: '1.1' }}>
              Let's Build Your <br/><span style={{ color: 'var(--gold)' }}>Next Facility.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '60px', fontSize: '18px', lineHeight: '1.6', maxWidth: '500px' }}>
              Our technical specialists are standing by to discuss your specific scientific requirements.
            </p>
            <div style={{ display: 'grid', gap: '40px' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div className="contact-icon-circle"><Phone size={24} color="var(--gold)" /></div>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '5px', letterSpacing: '1px' }}>Call Us 24/7</div>
                  <strong style={{ fontSize: '22px', color: 'var(--text-main)' }}>+213 770 556 461 </strong>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div className="contact-icon-circle"><Mail size={24} color="var(--gold)" /></div>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '5px', letterSpacing: '1px' }}>Email Enquiries</div>
                  <strong style={{ fontSize: '22px', color: 'var(--text-main)' }}>hello@lablink.com</strong>
                </div>
              </div>

              {/* NEW: WhatsApp Option */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div className="contact-icon-circle" style={{ borderColor: '#25D366', backgroundColor: 'rgba(37, 211, 102, 0.1)' }}>
                  <MessageCircle size={24} color="#25D366" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '5px', letterSpacing: '1px' }}>Live Chat</div>
                  <button className="btn-outline" style={{ borderColor: '#25D366', color: '#25D366', padding: '8px 16px', fontSize: '14px' }}>
                    <a href="https://wa.me/213770556461">Chat on WhatsApp</a>
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div style={{ position: 'relative' }} className="reveal delay-200">
             <form className="contact-form">
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)' }}>Project Inquiry</h3>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" placeholder="Dr. John Doe" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Work Email</label>
                <input type="email" placeholder="name@institution.edu" className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Requirement Details</label>
                <textarea rows="4" placeholder="Describe your equipment or logistics needs..." className="form-textarea" />
              </div>
              <button className="btn-primary" style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}>
                Submit Requirements
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
            
            <div style={{ maxWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <img src={Lablink} alt="Lablink" width="40" height="40" />
                <span style={{ color: 'var(--text-main)', fontSize: '20px', fontWeight: '800' }}>LABLINK <span style={{ color: 'var(--gold)' }}>SOLUTIONS</span></span>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                High-precision infrastructure for the modern scientific world. Setting the gold standard since 2010.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
              
              <div>
                <h4 style={{ color: 'var(--text-main)', fontWeight: '700', marginBottom: '20px' }}>Connect</h4>
                <div className="social-group">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <div className="social-icon-box"><Linkedin size={18} /></div>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <div className="social-icon-box"><Twitter size={18} /></div>
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Facebook">
                    <div className="social-icon-box"><Facebook size={18} /></div>
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 style={{ color: 'var(--text-main)', fontWeight: '700', marginBottom: '20px' }}>Company</h4>
                <div className="footer-link-group">
                  <span>About Us</span><span>Careers</span><span>Newsroom</span>
                </div>
              </div>

              <div>
                <h4 style={{ color: 'var(--text-main)', fontWeight: '700', marginBottom: '20px' }}>Services</h4>
                <div className="footer-link-group">
                  <span>Logistics</span><span>Lab Design</span><span>Reagent Supply</span>
                </div>
              </div>

            </div>
          </div>

          <div className="footer-bottom">
             <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>© 2025 Lablink Solutions International.</p>
             <div style={{ display: 'flex', gap: '24px' }}>
               {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
                 <a key={l} href="#" style={{ color: 'var(--text-muted)', fontSize: '14px', textDecoration: 'none' }}>{l}</a>
               ))}
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LablinkSolutions;

// import React, { useState, useEffect } from 'react';
// import { 
//   Beaker, Settings, Microscope, ChevronRight, Mail, Phone, 
//   ArrowUpRight, Shield, Globe, CheckCircle2, ArrowDown, Menu, X, Image as ImageIcon,
//   Linkedin, Twitter, Facebook 
// } from 'lucide-react';
// import { LablinkLogo } from "../components/LablinkLogo";
// import './LablinkSolutions.css';

// // --- Helper Components ---
// const ImagePlaceholder = ({ height = '100%', text = 'Image Area' }) => (
//   <div className="img-placeholder" style={{ height: height }}>
//     <div className="img-pattern" />
//     <ImageIcon size={32} opacity={0.5} />
//     <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{text}</span>
//   </div>
// );

// const LablinkSolutions = () => {
//   const [activeStep, setActiveStep] = useState(null); 
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [workflowSeen, setWorkflowSeen] = useState(false);

//   const workflowSteps = [
//     { id: 1, title: "Diagnostic Analysis", desc: "We begin by auditing your current laboratory infrastructure and supply chain bottlenecks." },
//     { id: 2, title: "Strategic Blueprint", desc: "Our architects design a custom logistics framework tailored to your specific research goals." },
//     { id: 3, title: "Integration & Deployment", desc: "Seamless installation of equipment and establishment of automated reagent supply lines." },
//     { id: 4, title: "Continuous Optimization", desc: "Ongoing AI-driven monitoring to ensure peak performance and zero downtime." }
//   ];

//   useEffect(() => {
//     // 1. General Reveal Observer for static elements
//     const revealObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('active');
//         }
//       });
//     }, { threshold: 0.1 });

//     document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

//     // 2. Specific Observer for the Workflow Section
//     const workflowObserver = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setWorkflowSeen(true);
//         }
//       });
//     }, { threshold: 0.2 });

//     const workflowSection = document.getElementById('workflow-steps-container');
//     if (workflowSection) workflowObserver.observe(workflowSection);

//     return () => {
//       revealObserver.disconnect();
//       workflowObserver.disconnect();
//     };
//   }, []);

//   return (
//     <div className="lablink-wrapper">
      
//       {/* NAVIGATION */}
//       <nav className="navbar">
//         <div className="container nav-content">
//           <div className="flex-center" style={{ gap: '12px' }}>
//             <LablinkLogo size={40} className="logo-color" />
//             <span className="brand-text">
//               LABLINK <span style={{ color: 'var(--gold)' }}>SOLUTIONS</span>
//             </span>
//           </div>

//           <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
//             {['Home', 'About us', 'Products', 'Workflow', 'Catalogue'].map(item => (
//               <a 
//                 key={item} 
//                 href={`#${item.toLowerCase()}`} 
//                 className="nav-link"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//             <button className="btn-primary nav-btn">Contact</button>
//           </div>

//           <button 
//             className="mobile-toggle" 
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle navigation"
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <header className="hero">
//         <div className="container reveal active" style={{ position: 'relative', zIndex: 2 }}>
//           <div className="hero-tag">
//              <div className="dot"></div>
//              <span style={{ color: 'var(--gold)', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Leader in Lab Logistics</span>
//           </div>
//           <h1 className="hero-title">
//             The Missing Link Between <br />
//             <span className="gradient-text">Science & Solution</span>
//           </h1>
//           <p className="hero-desc">
//             We provide the high-performance infrastructure and supply chain precision required by the world's top research institutions.
//           </p>
//           <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//             <button className="btn-primary">
//               Explore Solutions <ArrowUpRight size={18}/>
//             </button>
//             <button className="btn-outline">
//               View Certifications
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* TRUST BAR */}
//       <div className="trust-bar reveal">
//         <div className="container trust-content">
//           {['ISO 9001:2015', 'FDA COMPLIANT', 'GMP CERTIFIED', 'GLOBAL LOGISTICS'].map((text, i) => (
//             <div key={i} className="trust-item">
//               <CheckCircle2 size={18} color="var(--gold)" /> {text}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ABOUT US */}
//       <section id="about us" className="section-padding">
//         <div className="container about-grid">
//           <div className="reveal" style={{ position: 'relative' }}>
//             <div className="image-wrapper">
//                <ImagePlaceholder height="100%" text="Lab Interior / Team Photo" />
//             </div>
//             <div className="floating-card">
//               <div className="stat-number">15+</div>
//               <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '8px', letterSpacing: '1px' }}>Years Excellence</div>
//             </div>
//           </div>
//           <div className="reveal delay-100">
//             <h2 style={{ color: 'var(--gold)', textTransform: 'uppercase', fontSize: '13px', fontWeight: '800', marginBottom: '24px', letterSpacing: '2px' }}>The Aurum Standard</h2>
//             <h3 style={{ fontSize: '32px', color: 'var(--text-main)', marginBottom: '24px', fontWeight: '800', lineHeight: '1.2' }}>Professional Grade Laboratory Architecture</h3>
//             <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '40px', fontSize: '18px' }}>
//               Lablink Solutions operates at the intersection of quality and reliability. We ensure that your hypothesis is the only variable, while we standardize the environment, equipment, and supply chain.
//             </p>
//             <div style={{ display: 'grid', gap: '24px' }}>
//               {[ { icon: <Shield />, t: 'Verified Quality Control', d: 'Every reagent tested.' }, { icon: <Globe />, t: 'International Supply Chain', d: 'Logistics in 40+ countries.' } ].map((item, i) => (
//                 <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
//                   <div style={{ color: 'var(--gold)', backgroundColor: 'var(--slate)', padding: '12px', borderRadius: '50%' }}>{item.icon}</div>
//                   <div>
//                     <div style={{ fontWeight: '800', fontSize: '16px', color: 'var(--text-main)' }}>{item.t}</div>
//                     <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '4px' }}>{item.d}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CORE SOLUTIONS */}
//       <section id="products" className="section-padding bg-slate">
//         <div className="container">
//           <div className="section-header reveal">
//             <h2 className="section-title">Core Capabilities</h2>
//             <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>End-to-end support for the modern scientific facility.</p>
//           </div>
//           <div className="cards-grid">
//             {[
//               { id: 's1', title: "Strategic Consulting", icon: <Settings size={28}/>, desc: "Bespoke operational design for modern medical and chemical facilities." },
//               { id: 's2', title: "Reagent Supply", icon: <Beaker size={28}/>, desc: "Premium sourcing of high-purity reagents and diagnostic consumables." },
//               { id: 's3', title: "Turnkey Setup", icon: <Microscope size={28}/>, desc: "End-to-end laboratory setups from conceptual design to installation." }
//             ].map((s, idx) => (
//               <div key={s.id} className={`solution-card reveal delay-${(idx + 1) * 100}`}>
//                 <div className="card-bg-number">0{s.id.charAt(1)}</div>
//                 <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
//                   <div className="icon-box">{s.icon}</div>
//                   <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>{s.title}</h4>
//                   <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '16px', marginBottom: '30px', flex: 1 }}>{s.desc}</p>
//                   <div style={{ borderTop: '1px solid var(--slate-light)', paddingTop: '20px' }}>
//                     <span className="learn-more">Learn More <ChevronRight size={14} /></span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* VERTICAL WORKFLOW TREE */}
//       <section id="workflow" className="section-padding">
//         <div className="container">
//           <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal">
//             <h2 className="section-title">Operational Workflow</h2>
//             <div style={{ height: '4px', width: '60px', backgroundColor: 'var(--gold)', margin: '0 auto 16px auto' }}/>
//             <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Our four-step integration process.</p>
//           </div>

//           <div className="workflow-wrapper">
//             <div className="tree-trunk" />

//             <div id="workflow-steps-container" style={{ display: 'grid', gap: '40px' }}>
//               {workflowSteps.map((step, idx) => (
//                 <div 
//                   key={step.id}
//                   className={`workflow-step ${workflowSeen ? 'visible' : ''} ${activeStep === step.id ? 'focused' : ''}`}
//                   style={{ transitionDelay: `${idx * 150}ms` }}
//                   onMouseEnter={() => setActiveStep(step.id)}
//                   onMouseLeave={() => setActiveStep(null)}
//                   onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
//                 >
//                   <div className="step-node">{step.id}</div>

//                   <div className="step-card">
//                     <div className="connector-line" />
//                     <h4 className="step-title">{step.title}</h4>
//                     <p className="step-desc">{step.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div style={{ marginLeft: '13px', marginTop: '40px' }} className="reveal">
//               <ArrowDown color="var(--gold-dark)" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section id="contact" className="section-padding bg-slate">
//         <div className="container contact-grid">
//           <div className="reveal">
//             <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '24px', color: 'var(--text-main)', lineHeight: '1.1' }}>
//               Let's Build Your <br/><span style={{ color: 'var(--gold)' }}>Next Facility.</span>
//             </h2>
//             <p style={{ color: 'var(--text-muted)', marginBottom: '60px', fontSize: '18px', lineHeight: '1.6', maxWidth: '500px' }}>
//               Our technical specialists are standing by to discuss your specific scientific requirements.
//             </p>
//             <div style={{ display: 'grid', gap: '40px' }}>
//               <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
//                 <div className="contact-icon-circle"><Phone size={24} color="var(--gold)" /></div>
//                 <div>
//                   <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '5px', letterSpacing: '1px' }}>Call Us 24/7</div>
//                   <strong style={{ fontSize: '22px', color: 'var(--text-main)' }}>+1 (555) 0123-LAB</strong>
//                 </div>
//               </div>
//               <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
//                 <div className="contact-icon-circle"><Mail size={24} color="var(--gold)" /></div>
//                 <div>
//                   <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '5px', letterSpacing: '1px' }}>Email Enquiries</div>
//                   <strong style={{ fontSize: '22px', color: 'var(--text-main)' }}>hello@lablink.com</strong>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div style={{ position: 'relative' }} className="reveal delay-200">
//              <form className="contact-form">
//               <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-main)' }}>Project Inquiry</h3>
//               <div className="form-group">
//                 <label className="form-label">Full Name</label>
//                 <input type="text" placeholder="Dr. John Doe" className="form-input" />
//               </div>
//               <div className="form-group">
//                 <label className="form-label">Work Email</label>
//                 <input type="email" placeholder="name@institution.edu" className="form-input" />
//               </div>
//               <div className="form-group">
//                 <label className="form-label">Requirement Details</label>
//                 <textarea rows="4" placeholder="Describe your equipment or logistics needs..." className="form-textarea" />
//               </div>
//               <button className="btn-primary" style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}>
//                 Submit Requirements
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
            
//             <div style={{ maxWidth: '300px' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
//                 <LablinkLogo size={40} className="logo-color" />
//                 <span style={{ color: 'var(--text-main)', fontSize: '20px', fontWeight: '800' }}>LABLINK <span style={{ color: 'var(--gold)' }}>SOLUTIONS</span></span>
//               </div>
//               <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
//                 High-precision infrastructure for the modern scientific world. Setting the gold standard since 2010.
//               </p>
//             </div>

//             <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
              
//               {/* Social Media Column (Corrected) */}
// <div>
//   <h4 style={{ color: 'var(--text-main)', fontWeight: '700', marginBottom: '20px' }}>Connect</h4>
  
//   <div className="social-group">
    
//     <a href="#" className="social-link" aria-label="LinkedIn">
//       <div className="social-icon-box">
//         <Linkedin size={18} />
//       </div>
//       <span>LinkedIn</span>
//     </a>

//     <a href="#" className="social-link" aria-label="Twitter">
//       <div className="social-icon-box">
//         <Twitter size={18} />
//       </div>
//       <span>Twitter</span>
//     </a>

//     <a href="#" className="social-link" aria-label="Facebook">
//       <div className="social-icon-box">
//         <Facebook size={18} />
//       </div>
//       <span>Facebook</span>
//     </a>

//   </div>
// </div>

//               <div>
//                 <h4 style={{ color: 'var(--text-main)', fontWeight: '700', marginBottom: '20px' }}>Company</h4>
//                 <div className="footer-link-group">
//                   <span>About Us</span><span>Careers</span><span>Newsroom</span>
//                 </div>
//               </div>

//               <div>
//                 <h4 style={{ color: 'var(--text-main)', fontWeight: '700', marginBottom: '20px' }}>Services</h4>
//                 <div className="footer-link-group">
//                   <span>Logistics</span><span>Lab Design</span><span>Reagent Supply</span>
//                 </div>
//               </div>

//             </div>
//           </div>

//           <div className="footer-bottom">
//              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>© 2025 Lablink Solutions International.</p>
//              <div style={{ display: 'flex', gap: '24px' }}>
//                {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
//                  <a key={l} href="#" style={{ color: 'var(--text-muted)', fontSize: '14px', textDecoration: 'none' }}>{l}</a>
//                ))}
//              </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LablinkSolutions;

