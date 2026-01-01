import React, { useState } from 'react';
import { 
  Beaker, Settings, Microscope, ChevronRight, Mail, Phone, 
  ArrowUpRight, Award, Globe, Shield, Image as ImageIcon, 
  CheckCircle2, ArrowDown 
} from 'lucide-react';
import LablinkLogo from './LablinkLogo'; 

// Import the CSS file
import './LablinkSolutions.css';

// --- Helper Components ---
const ImagePlaceholder = ({ height = '100%', text = 'Image Area' }) => (
  <div className="img-placeholder" style={{ height: height }}>
    <div className="img-pattern" />
    <ImageIcon size={32} opacity={0.5} />
    <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{text}</span>
  </div>
);

// --- Main Component ---
const LablinkSolutions = () => {
  // We removed hoveredBtn state for buttons as CSS :hover handles it now.
  // We keep activeStep for the Tree section as it requires logic across multiple child elements.
  const [activeStep, setActiveStep] = useState(null); 

  const workflowSteps = [
    { id: 1, title: "Diagnostic Analysis", desc: "We begin by auditing your current laboratory infrastructure and supply chain bottlenecks." },
    { id: 2, title: "Strategic Blueprint", desc: "Our architects design a custom logistics framework tailored to your specific research goals." },
    { id: 3, title: "Integration & Deployment", desc: "Seamless installation of equipment and establishment of automated reagent supply lines." },
    { id: 4, title: "Continuous Optimization", desc: "Ongoing AI-driven monitoring to ensure peak performance and zero downtime." }
  ];

  return (
    <div className="lablink-wrapper">
      
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="flex-center" style={{ gap: '12px' }}>
            <LablinkLogo size={45} className="logo-color" />
            <span className="brand-text">
              LABLINK <span style={{ color: 'var(--gold)' }}>SOLUTIONS</span>
            </span>
          </div>
          <div className="nav-links">
            {['About', 'Solutions', 'Workflow', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            ))}
            <button className="btn-primary nav-btn">
              Client Portal
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
            <button className="btn-primary">
              Explore Solutions <ArrowUpRight size={18}/>
            </button>
            <button className="btn-outline">
              View Certifications
            </button>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <div className="trust-bar">
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
          <div style={{ position: 'relative' }}>
            <div className="image-wrapper">
               <ImagePlaceholder height="100%" text="Lab Interior / Team Photo" />
            </div>
            <div className="floating-card">
              <div className="stat-number">15+</div>
              <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '8px', letterSpacing: '1px' }}>Years Excellence</div>
            </div>
          </div>
          <div>
            <h2 style={{ color: 'var(--gold)', textTransform: 'uppercase', fontSize: '13px', fontWeight: '800', marginBottom: '24px', letterSpacing: '2px' }}>The Aurum Standard</h2>
            <h3 style={{ fontSize: '40px', color: 'var(--text-main)', marginBottom: '24px', fontWeight: '800', lineHeight: '1.2' }}>Professional Grade Laboratory Architecture</h3>
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
          <div className="section-header">
            <h2 className="section-title">Core Capabilities</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>End-to-end support for the modern scientific facility.</p>
          </div>
          <div className="cards-grid">
            {[
              { id: 's1', title: "Strategic Consulting", icon: <Settings size={28}/>, desc: "Bespoke operational design for modern medical and chemical facilities." },
              { id: 's2', title: "Reagent Supply", icon: <Beaker size={28}/>, desc: "Premium sourcing of high-purity reagents and diagnostic consumables." },
              { id: 's3', title: "Turnkey Setup", icon: <Microscope size={28}/>, desc: "End-to-end laboratory setups from conceptual design to installation." }
            ].map((s) => (
              <div key={s.id} className="solution-card">
                <div className="card-bg-number">0{s.id.charAt(1)}</div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="icon-box">{s.icon}</div>
                  <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px', color: 'var(--text-main)' }}>{s.title}</h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '16px', marginBottom: '30px' }}>{s.desc}</p>
                  <div style={{ borderTop: '1px solid var(--slate-light)', paddingTop: '20px' }}>
                    <span className="learn-more">Learn More <ChevronRight size={14} /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICAL WORKFLOW TREE */}
      <section id="workflow" className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="section-title">Operational Workflow</h2>
            <div style={{ height: '4px', width: '60px', backgroundColor: 'var(--gold)', margin: '0 auto 16px auto' }}/>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Our four-step integration process.</p>
          </div>

          <div className="workflow-wrapper">
            {/* The Vertical Line */}
            <div className="tree-trunk" />

            <div style={{ display: 'grid', gap: '40px' }}>
              {workflowSteps.map((step) => (
                <div 
                  key={step.id}
                  className={`workflow-step ${activeStep === step.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Tree Node (Circle) */}
                  <div className="step-node">{step.id}</div>

                  {/* Content Card (Branch) */}
                  <div className="step-card">
                    {/* Tiny connector line */}
                    <div className="connector-line" />
                    <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-main)', marginBottom: '8px' }}>{step.title}</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginLeft: '13px', marginTop: '40px' }}>
              <ArrowDown color="var(--gold-dark)" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding bg-slate">
        <div className="container contact-grid">
          <div>
            <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '24px', color: 'var(--text-main)', lineHeight: '1.1' }}>
              Let's Build Your <br/><span style={{ color: 'var(--gold)' }}>Next Facility.</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '60px', fontSize: '18px', lineHeight: '1.6', maxWidth: '500px' }}>
              Our technical specialists are standing by to discuss your specific scientific requirements.
            </p>
            <div style={{ display: 'grid', gap: '40px' }}>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div className="contact-icon-circle">
                  <Phone size={24} color="var(--gold)" />
                </div>
                <div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '5px', letterSpacing: '1px' }}>Call Us 24/7</div>
                  <strong style={{ fontSize: '22px', color: 'var(--text-main)' }}>+1 (555) 0123-LAB</strong>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div className="contact-icon-circle">
                  <Mail size={24} color="var(--gold)" />
                </div>
                <div>
                   <div style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '5px', letterSpacing: '1px' }}>Email Enquiries</div>
                  <strong style={{ fontSize: '22px', color: 'var(--text-main)' }}>hello@lablink.com</strong>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
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
                <LablinkLogo size={40} color="var(--gold)" />
                <span style={{ color: 'var(--text-main)', fontSize: '20px', fontWeight: '800' }}>LABLINK <span style={{ color: 'var(--gold)' }}>SOLUTIONS</span></span>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                High-precision infrastructure for the modern scientific world. Setting the gold standard since 2010.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
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


// import React, { useState } from 'react';
// import { 
//   Beaker, Settings, Microscope, ChevronRight, Mail, Phone, 
//   ArrowUpRight, Award, Globe, Shield, Image as ImageIcon, 
//   CheckCircle2, FlaskConical, Layers, ArrowDown 
// } from 'lucide-react';
// import { LablinkLogo } from '../components/LablinkLogo'; 

// // --- 1. GLOBAL SCOPE: THEME & HELPERS ---
// // Keeping these outside prevents the "component creation during render" error.

// const colors = {
//   obsidian: '#ffffff',      // Main Background (White)
//   slate: '#f8fafc',         // Secondary Background (Very Light Grey)
//   slateLight: '#e2e8f0',    // Borders
//   gold: '#C5A059',          // Metallic Gold
//   goldDark: '#997b36',      // Darker Gold for hover
//   goldGlass: 'rgba(197, 160, 89, 0.12)', // Subtle Gold tint
//   textMain: '#0f172a',      // Dark Text for headings
//   textMuted: '#64748b',     // Grey Text for body
//   white: '#ffffff',         // Pure White
//   contrastText: '#0f172a'   // Text color for gold buttons
// };

// const ImagePlaceholder = ({ height = '100%', text = 'Image Area' }) => (
//   <div style={{ 
//     width: '100%', height: height, backgroundColor: '#f1f5f9', 
//     border: `1px dashed ${colors.slateLight}`, borderRadius: '8px',
//     display: 'flex', flexDirection: 'column', alignItems: 'center', 
//     justifyContent: 'center', color: colors.textMuted, gap: '10px',
//     overflow: 'hidden', position: 'relative'
//   }}>
//     <div style={{
//       position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
//       opacity: 0.05, backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)', 
//       backgroundSize: '20px 20px'
//     }} />
//     <ImageIcon size={32} opacity={0.5} />
//     <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{text}</span>
//   </div>
// );

// // --- 2. MAIN COMPONENT ---
// const LablinkSolutions = () => {
//   const [hoveredBtn, setHoveredBtn] = useState(null);
//   const [activeCard, setActiveCard] = useState(null);
//   const [activeStep, setActiveStep] = useState(null); // New state for the tree section

//   // --- Styles ---
//   const sectionPadding = { padding: '120px 24px' };
//   const containerStyle = { maxWidth: '1280px', margin: '0 auto' };
//   const flexCenter = { display: 'flex', alignItems: 'center', justifyContent: 'center' };

//   const buttonPrimary = (id) => ({
//     backgroundColor: hoveredBtn === id ? colors.goldDark : colors.gold,
//     color: colors.contrastText,
//     padding: '16px 32px',
//     borderRadius: '4px',
//     border: 'none',
//     fontWeight: '700',
//     cursor: 'pointer',
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '10px',
//     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//     fontSize: '15px',
//     letterSpacing: '0.5px',
//     boxShadow: hoveredBtn === id ? `0 10px 20px -5px ${colors.gold}66` : 'none'
//   });

//   const cardStyle = (id) => ({
//     backgroundColor: colors.white,
//     border: `1px solid ${activeCard === id ? colors.gold : colors.slateLight}`,
//     padding: '40px',
//     borderRadius: '12px',
//     transition: 'all 0.4s ease',
//     transform: activeCard === id ? 'translateY(-8px)' : 'translateY(0)',
//     boxShadow: activeCard === id ? '0 25px 50px -12px rgba(0, 0, 0, 0.05)' : '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
//     position: 'relative',
//     cursor: 'default',
//     overflow: 'hidden'
//   });

//   // Data for the new Vertical Tree Section
//   const workflowSteps = [
//     { id: 1, title: "Diagnostic Analysis", desc: "We begin by auditing your current laboratory infrastructure and supply chain bottlenecks." },
//     { id: 2, title: "Strategic Blueprint", desc: "Our architects design a custom logistics framework tailored to your specific research goals." },
//     { id: 3, title: "Integration & Deployment", desc: "Seamless installation of equipment and establishment of automated reagent supply lines." },
//     { id: 4, title: "Continuous Optimization", desc: "Ongoing AI-driven monitoring to ensure peak performance and zero downtime." }
//   ];

//   return (
//     <div style={{ backgroundColor: colors.white, color: colors.textMain, fontFamily: '"Inter", "system-ui", sans-serif', margin: 0, scrollBehavior: 'smooth' }}>
      
//       {/* NAVIGATION */}
//       <nav style={{ 
//         position: 'fixed', width: '100%', zIndex: 1000, 
//         backgroundColor: 'rgba(255, 255, 255, 0.9)', 
//         borderBottom: `1px solid ${colors.gold}33`,
//         backdropFilter: 'blur(16px)'
//       }}>
//         <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between', height: '80px', alignItems: 'center', padding: '0 24px' }}>
//           <div style={{ ...flexCenter, gap: '12px' }}>
//             <LablinkLogo size={45} color={colors.gold} />
//             <span style={{ color: colors.textMain, fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>
//               LABLINK <span style={{ color: colors.gold }}>SOLUTIONS</span>
//             </span>
//           </div>
//           <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
//             {['About', 'Solutions', 'Workflow', 'Contact'].map(item => (
//               <a 
//                 key={item} 
//                 href={`#${item.toLowerCase()}`} 
//                 style={{ color: colors.textMuted, textDecoration: 'none', fontWeight: '500', fontSize: '14px', transition: 'color 0.2s' }}
//                 onMouseEnter={(e) => e.target.style.color = colors.gold}
//                 onMouseLeave={(e) => e.target.style.color = colors.textMuted}
//               >
//                 {item}
//               </a>
//             ))}
//             <button 
//               onMouseEnter={() => setHoveredBtn('nav')} 
//               onMouseLeave={() => setHoveredBtn(null)}
//               style={{ ...buttonPrimary('nav'), padding: '10px 20px', fontSize: '14px' }}
//             >
//               Client Portal
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <header style={{ backgroundColor: colors.obsidian, padding: '200px 24px 160px 24px', position: 'relative', overflow: 'hidden' }}>
//         <div style={{ ...containerStyle, position: 'relative', zIndex: 2 }}>
//           <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', backgroundColor: colors.goldGlass, border: `1px solid ${colors.gold}44`, borderRadius: '30px', marginBottom: '32px' }}>
//              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: colors.gold }}></div>
//              <span style={{ color: colors.gold, fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Global Leader in Lab Logistics</span>
//           </div>
//           <h1 style={{ fontSize: 'clamp(48px, 5vw, 76px)', color: colors.textMain, lineHeight: '1.1', marginBottom: '32px', fontWeight: '900', letterSpacing: '-2px' }}>
//             The Missing Link Between <br />
//             <span style={{ background: `linear-gradient(to right, ${colors.goldDark}, ${colors.gold})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Science & Solution</span>
//           </h1>
//           <p style={{ fontSize: '20px', color: colors.textMuted, maxWidth: '600px', marginBottom: '48px', lineHeight: '1.7', fontWeight: '300' }}>
//             We provide the high-performance infrastructure and supply chain precision required by the world's top research institutions.
//           </p>
//           <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//             <button onMouseEnter={() => setHoveredBtn('hero')} onMouseLeave={() => setHoveredBtn(null)} style={buttonPrimary('hero')}>
//               Explore Solutions <ArrowUpRight size={18}/>
//             </button>
//             <button style={{ backgroundColor: 'transparent', border: `1px solid ${colors.textMuted}`, color: colors.textMain, padding: '16px 32px', borderRadius: '4px', cursor: 'pointer', fontWeight: '600', transition: '0.3s' }}>
//               View Certifications
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* TRUST BAR */}
//       <div style={{ borderBottom: `1px solid ${colors.slateLight}`, backgroundColor: colors.slate }}>
//         <div style={{ ...containerStyle, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '40px 24px', gap: '20px' }}>
//           {['ISO 9001:2015', 'FDA COMPLIANT', 'GMP CERTIFIED', 'GLOBAL LOGISTICS'].map((text, i) => (
//             <div key={i} style={{ ...flexCenter, gap: '12px', fontWeight: '700', fontSize: '13px', color: colors.textMuted, letterSpacing: '0.5px' }}>
//               <CheckCircle2 size={18} color={colors.gold} /> {text}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ABOUT US */}
//       <section id="about" style={sectionPadding}>
//         <div style={{ ...containerStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
//           <div style={{ position: 'relative' }}>
//             <div style={{ height: '500px', width: '100%', borderRadius: '12px', overflow: 'hidden', border: `1px solid ${colors.slateLight}` }}>
//                <ImagePlaceholder height="100%" text="Lab Interior / Team Photo" />
//             </div>
//             <div style={{ position: 'absolute', bottom: '40px', right: '-30px', backgroundColor: colors.white, padding: '40px', borderRadius: '8px', borderLeft: `6px solid ${colors.gold}`, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', zIndex: 2 }}>
//               <div style={{ fontSize: '48px', fontWeight: '800', color: colors.gold, lineHeight: '1' }}>15+</div>
//               <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: colors.textMuted, marginTop: '8px', letterSpacing: '1px' }}>Years Excellence</div>
//             </div>
//           </div>
//           <div>
//             <h2 style={{ color: colors.gold, textTransform: 'uppercase', fontSize: '13px', fontWeight: '800', marginBottom: '24px', letterSpacing: '2px' }}>The Aurum Standard</h2>
//             <h3 style={{ fontSize: '40px', color: colors.textMain, marginBottom: '24px', fontWeight: '800', lineHeight: '1.2' }}>Professional Grade Laboratory Architecture</h3>
//             <p style={{ color: colors.textMuted, lineHeight: '1.8', marginBottom: '40px', fontSize: '18px' }}>
//               Lablink Solutions operates at the intersection of quality and reliability. We ensure that your hypothesis is the only variable, while we standardize the environment, equipment, and supply chain.
//             </p>
//             <div style={{ display: 'grid', gap: '24px' }}>
//               {[ { icon: <Shield />, t: 'Verified Quality Control', d: 'Every reagent tested.' }, { icon: <Globe />, t: 'International Supply Chain', d: 'Logistics in 40+ countries.' } ].map((item, i) => (
//                 <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
//                   <div style={{ color: colors.gold, backgroundColor: colors.slate, padding: '12px', borderRadius: '50%' }}>{item.icon}</div>
//                   <div>
//                     <div style={{ fontWeight: '800', fontSize: '16px', color: colors.textMain }}>{item.t}</div>
//                     <div style={{ color: colors.textMuted, fontSize: '14px', marginTop: '4px' }}>{item.d}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CORE SOLUTIONS */}
//       <section id="solutions" style={{ ...sectionPadding, backgroundColor: colors.slate }}>
//         <div style={containerStyle}>
//           <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px auto' }}>
//             <h2 style={{ fontSize: '42px', fontWeight: '900', color: colors.textMain, marginBottom: '16px' }}>Core Capabilities</h2>
//             <p style={{ color: colors.textMuted, fontSize: '18px' }}>End-to-end support for the modern scientific facility.</p>
//           </div>
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
//             {[
//               { id: 's1', title: "Strategic Consulting", icon: <Settings size={28}/>, desc: "Bespoke operational design for modern medical and chemical facilities." },
//               { id: 's2', title: "Reagent Supply", icon: <Beaker size={28}/>, desc: "Premium sourcing of high-purity reagents and diagnostic consumables." },
//               { id: 's3', title: "Turnkey Setup", icon: <Microscope size={28}/>, desc: "End-to-end laboratory setups from conceptual design to installation." }
//             ].map((s) => (
//               <div key={s.id} onMouseEnter={() => setActiveCard(s.id)} onMouseLeave={() => setActiveCard(null)} style={cardStyle(s.id)}>
//                 <div style={{ position: 'absolute', top: -10, right: 10, fontSize: '100px', fontWeight: '900', color: colors.slate, zIndex: 0, opacity: 1 }}>0{s.id.charAt(1)}</div>
//                 <div style={{ position: 'relative', zIndex: 1 }}>
//                   <div style={{ color: colors.goldDark, marginBottom: '24px', backgroundColor: activeCard === s.id ? colors.slate : '#f1f5f9', width: '60px', height: '60px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>{s.icon}</div>
//                   <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '16px', color: colors.textMain }}>{s.title}</h4>
//                   <p style={{ color: colors.textMuted, lineHeight: '1.6', fontSize: '16px', marginBottom: '30px' }}>{s.desc}</p>
//                   <div style={{ borderTop: `1px solid ${colors.slate}`, paddingTop: '20px' }}>
//                     <span style={{ display: 'flex', alignItems: 'center', color: activeCard === s.id ? colors.goldDark : colors.textMuted, fontWeight: '700', gap: '8px', fontSize: '14px' }}>Learn More <ChevronRight size={14} /></span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- NEW SECTION: VERTICAL WORKFLOW TREE --- */}
//       <section id="workflow" style={{ ...sectionPadding, backgroundColor: colors.white }}>
//         <div style={containerStyle}>
          
//           <div style={{ textAlign: 'center', marginBottom: '80px' }}>
//             <h2 style={{ fontSize: '42px', fontWeight: '900', color: colors.textMain, marginBottom: '16px' }}>Operational Workflow</h2>
//             <div style={{ height: '4px', width: '60px', backgroundColor: colors.gold, margin: '0 auto 16px auto' }}/>
//             <p style={{ color: colors.textMuted, fontSize: '18px' }}>Our four-step integration process.</p>
//           </div>

//           <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
            
//             {/* The Vertical "Tree Trunk" Line */}
//             <div style={{ 
//               position: 'absolute', left: '24px', top: '20px', bottom: '0', width: '2px', 
//               background: `linear-gradient(to bottom, ${colors.gold}, ${colors.slateLight})`,
//               zIndex: 0
//             }} />

//             <div style={{ display: 'grid', gap: '40px' }}>
//               {workflowSteps.map((step, index) => (
//                 <div 
//                   key={step.id}
//                   onMouseEnter={() => setActiveStep(step.id)}
//                   onMouseLeave={() => setActiveStep(null)}
//                   style={{ 
//                     display: 'flex', gap: '40px', position: 'relative', zIndex: 1,
//                     transition: 'transform 0.3s ease',
//                     transform: activeStep === step.id ? 'translateX(10px)' : 'translateX(0)'
//                   }}
//                 >
//                   {/* Tree Node (Circle) */}
//                   <div style={{ 
//                     flexShrink: 0, width: '50px', height: '50px', borderRadius: '50%', 
//                     backgroundColor: activeStep === step.id ? colors.gold : colors.white, 
//                     border: `2px solid ${colors.gold}`,
//                     color: activeStep === step.id ? colors.white : colors.gold,
//                     display: 'flex', alignItems: 'center', justifyContent: 'center',
//                     fontWeight: '800', fontSize: '20px',
//                     boxShadow: '0 0 0 8px white' // Creates gap between line and circle
//                   }}>
//                     {step.id}
//                   </div>

//                   {/* Content Card (Branch) */}
//                   <div style={{ 
//                     flex: 1, backgroundColor: activeStep === step.id ? colors.slate : colors.white,
//                     border: `1px solid ${activeStep === step.id ? colors.gold : colors.slateLight}`,
//                     padding: '32px', borderRadius: '8px', position: 'relative',
//                     transition: 'all 0.3s ease', cursor: 'default'
//                   }}>
//                     {/* Tiny connector line from circle to card */}
//                     <div style={{ 
//                       position: 'absolute', left: '-40px', top: '24px', width: '40px', height: '2px', 
//                       backgroundColor: activeStep === step.id ? colors.gold : colors.slateLight 
//                     }} />
                    
//                     <h4 style={{ fontSize: '20px', fontWeight: '800', color: colors.textMain, marginBottom: '8px' }}>{step.title}</h4>
//                     <p style={{ color: colors.textMuted, lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* End of Tree Indicator */}
//             <div style={{ marginLeft: '13px', marginTop: '40px' }}>
//               <ArrowDown color={colors.goldDark} />
//             </div>

//           </div>
//         </div>
//       </section>
//       {/* --- END NEW SECTION --- */}

//       {/* CONTACT SECTION */}
//       <section id="contact" style={{ ...sectionPadding, backgroundColor: colors.slate }}>
//         <div style={{ ...containerStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '100px' }}>
//           <div>
//             <h2 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '24px', color: colors.textMain, lineHeight: '1.1' }}>
//               Let's Build Your <br/><span style={{ color: colors.gold }}>Next Facility.</span>
//             </h2>
//             <p style={{ color: colors.textMuted, marginBottom: '60px', fontSize: '18px', lineHeight: '1.6', maxWidth: '500px' }}>
//               Our technical specialists are standing by to discuss your specific scientific requirements.
//             </p>
//             <div style={{ display: 'grid', gap: '40px' }}>
//               <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
//                 <div style={{ ...flexCenter, height: '56px', width: '56px', borderRadius: '50%', backgroundColor: colors.white, border: `1px solid ${colors.slateLight}` }}>
//                   <Phone size={24} color={colors.gold} />
//                 </div>
//                 <div>
//                   <div style={{ fontSize: '12px', textTransform: 'uppercase', color: colors.textMuted, marginBottom: '5px', letterSpacing: '1px' }}>Call Us 24/7</div>
//                   <strong style={{ fontSize: '22px', color: colors.textMain }}>+1 (555) 0123-LAB</strong>
//                 </div>
//               </div>
//               <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
//                 <div style={{ ...flexCenter, height: '56px', width: '56px', borderRadius: '50%', backgroundColor: colors.white, border: `1px solid ${colors.slateLight}` }}>
//                   <Mail size={24} color={colors.gold} />
//                 </div>
//                 <div>
//                    <div style={{ fontSize: '12px', textTransform: 'uppercase', color: colors.textMuted, marginBottom: '5px', letterSpacing: '1px' }}>Email Enquiries</div>
//                   <strong style={{ fontSize: '22px', color: colors.textMain }}>hello@lablink.com</strong>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div style={{ position: 'relative' }}>
//              <form style={{ display: 'grid', gap: '24px', backgroundColor: colors.white, padding: '48px', borderRadius: '16px', border: `1px solid ${colors.slateLight}` }}>
//               <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: colors.textMain }}>Project Inquiry</h3>
//               <div style={{ display: 'grid', gap: '8px' }}>
//                 <label style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: colors.gold }}>Full Name</label>
//                 <input type="text" placeholder="Dr. John Doe" style={{ padding: '16px', backgroundColor: colors.slate, border: `1px solid ${colors.slateLight}`, color: colors.textMain, borderRadius: '6px', outline: 'none', transition: 'border 0.3s' }} />
//               </div>
//               <div style={{ display: 'grid', gap: '8px' }}>
//                 <label style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: colors.gold }}>Work Email</label>
//                 <input type="email" placeholder="name@institution.edu" style={{ padding: '16px', backgroundColor: colors.slate, border: `1px solid ${colors.slateLight}`, color: colors.textMain, borderRadius: '6px', outline: 'none' }} />
//               </div>
//               <div style={{ display: 'grid', gap: '8px' }}>
//                 <label style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: colors.gold }}>Requirement Details</label>
//                 <textarea rows="4" placeholder="Describe your equipment or logistics needs..." style={{ padding: '16px', backgroundColor: colors.slate, border: `1px solid ${colors.slateLight}`, color: colors.textMain, borderRadius: '6px', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
//               </div>
//               <button onMouseEnter={() => setHoveredBtn('submit')} onMouseLeave={() => setHoveredBtn(null)} style={{ ...buttonPrimary('submit'), marginTop: '16px', width: '100%', justifyContent: 'center' }}>
//                 Submit Requirements
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer style={{ backgroundColor: colors.slate, padding: '80px 24px 40px 24px', borderTop: `1px solid ${colors.slateLight}` }}>
//         <div style={{ ...containerStyle, display: 'flex', flexDirection: 'column', gap: '40px' }}>
//           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
//             <div style={{ maxWidth: '300px' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
//                 <LablinkLogo size={40} color={colors.gold} />
//                 <span style={{ color: colors.textMain, fontSize: '20px', fontWeight: '800' }}>LABLINK <span style={{ color: colors.gold }}>SOLUTIONS</span></span>
//               </div>
//               <p style={{ color: colors.textMuted, lineHeight: '1.6' }}>
//                 High-precision infrastructure for the modern scientific world. Setting the gold standard since 2010.
//               </p>
//             </div>
//             <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
//               <div>
//                 <h4 style={{ color: colors.textMain, fontWeight: '700', marginBottom: '20px' }}>Company</h4>
//                 <div style={{ display: 'grid', gap: '12px', color: colors.textMuted, fontSize: '14px' }}><span>About Us</span><span>Careers</span><span>Newsroom</span></div>
//               </div>
//               <div>
//                 <h4 style={{ color: colors.textMain, fontWeight: '700', marginBottom: '20px' }}>Services</h4>
//                 <div style={{ display: 'grid', gap: '12px', color: colors.textMuted, fontSize: '14px' }}><span>Logistics</span><span>Lab Design</span><span>Reagent Supply</span></div>
//               </div>
//             </div>
//           </div>
//           <div style={{ borderTop: `1px solid ${colors.slateLight}`, paddingTop: '32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
//              <p style={{ color: colors.textMuted, fontSize: '14px' }}>© 2025 Lablink Solutions International.</p>
//              <div style={{ display: 'flex', gap: '24px' }}>{['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (<a key={l} href="#" style={{ color: colors.textMuted, fontSize: '14px', textDecoration: 'none' }}>{l}</a>))}</div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LablinkSolutions;

