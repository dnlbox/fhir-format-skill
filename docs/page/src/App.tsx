import { ReactNode } from "react";
import { motion } from "motion/react";
import {
  Github,
  BookOpen,
  Terminal, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink,
  GitPullRequest,
  Tag
} from "lucide-react";

const Section = ({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`glass-panel p-8 hover:border-accent/50 transition-colors duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const currentVersion = __PLUGIN_VERSION__;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 technical-grid opacity-10 pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-soft/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Layers className="text-bg-dark w-5 h-5" />
            </div>
            <span className="font-mono font-bold text-xl tracking-tight">fhir-format</span>
          </div>
          <a 
            href="https://github.com/dnlbox/fhir-format-skill" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="relative pt-40 pb-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
              <Tag size={12} />
              <span>Plugin Version: {currentVersion}</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
              Accurate, <span className="text-accent italic font-serif">source-aware</span> FHIR guidance.
            </h1>
            <p className="text-xl text-muted max-w-xl mb-10 leading-relaxed">
              An accuracy-first Claude plugin for FHIR R4, R4B, and R5. 
              Emphasizing explicit claim labeling and safer boundaries between local validation and full conformance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/dnlbox/fhir-format-skill"
                className="px-8 py-4 bg-accent text-bg-dark font-bold rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a 
                href="#usage"
                className="px-8 py-4 bg-bg-card border border-line text-slate-200 font-bold rounded-xl flex items-center gap-2 hover:bg-line transition-colors"
              >
                View Usage
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 glass-panel p-6 overflow-hidden shadow-2xl shadow-accent/10 font-mono text-sm">
              <div className="flex items-center justify-between mb-4 border-b border-line pb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted">Patient.json — FHIR R5</span>
              </div>
              <div className="space-y-1 text-accent-soft/90">
                <p><span className="text-accent">{"{"}</span></p>
                <p className="pl-4"><span className="text-muted">"resourceType"</span>: <span className="text-accent">"Patient"</span>,</p>
                <p className="pl-4"><span className="text-muted">"id"</span>: <span className="text-accent">"example"</span>,</p>
                <p className="pl-4"><span className="text-muted">"active"</span>: <span className="text-accent">true</span>,</p>
                <p className="pl-4"><span className="text-muted">"name"</span>: <span className="text-accent">[</span></p>
                <p className="pl-8"><span className="text-accent">{"{"}</span></p>
                <p className="pl-12"><span className="text-muted">"use"</span>: <span className="text-accent">"official"</span>,</p>
                <p className="pl-12"><span className="text-muted">"family"</span>: <span className="text-accent">"Chalmers"</span>,</p>
                <p className="pl-12"><span className="text-muted">"given"</span>: <span className="text-accent">["Peter", "James"]</span></p>
                <p className="pl-8"><span className="text-accent">{"}"}</span></p>
                <p className="pl-4"><span className="text-accent">]</span>,</p>
                <p className="pl-4"><span className="text-muted">"gender"</span>: <span className="text-accent">"male"</span>,</p>
                <p className="pl-4"><span className="text-muted">"birthDate"</span>: <span className="text-accent">"1974-12-25"</span></p>
                <p><span className="text-accent">{"}"}</span></p>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl" />
          </motion.div>
        </div>
      </Section>

      {/* Why Relevant Section */}
      <Section id="features" className="bg-bg-card/30 border-y border-line">
        <div className="text-center mb-20">
          <h2 className="text-sm font-mono text-accent uppercase tracking-[0.3em] mb-4 italic font-serif">Why it matters</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Precision in Healthcare Data</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <ShieldCheck className="text-accent mb-6" size={40} />
            <h4 className="text-xl font-bold mb-4">Accuracy First</h4>
            <p className="text-muted leading-relaxed">
              Explicit claim labeling ensures that every piece of guidance is backed by official FHIR specifications, reducing hallucinations.
            </p>
          </Card>
          <Card>
            <Zap className="text-accent mb-6" size={40} />
            <h4 className="text-xl font-bold mb-4">Version Aware</h4>
            <p className="text-muted leading-relaxed">
              Native support for FHIR R4, R4B, and R5. The plugin understands the nuances and breaking changes between versions.
            </p>
          </Card>
          <Card>
            <Terminal className="text-accent mb-6" size={40} />
            <h4 className="text-xl font-bold mb-4">Developer Friendly</h4>
            <p className="text-muted leading-relaxed">
              Designed for the Claude CLI and marketplace, providing a seamless workflow for healthcare developers and data engineers.
            </p>
          </Card>
        </div>
      </Section>

      {/* How to Use Section */}
      <Section id="usage">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight">How to use it</h2>
            <div className="space-y-8">
              {[
                { 
                  step: "01", 
                  title: "Add to Marketplace", 
                  desc: "Add the repository to your Claude plugin marketplace configuration." 
                },
                { 
                  step: "02", 
                  title: "Install Plugin", 
                  desc: "Run the installation command to pull the fhir-format skill into your environment." 
                },
                { 
                  step: "03", 
                  title: "Start Reasoning", 
                  desc: "Use the /fhir-format command to start querying the FHIR specification with high accuracy." 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-4xl font-serif italic text-accent/40 font-bold leading-none">{item.step}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card className="bg-bg-dark border-accent/20">
            <div className="flex items-center justify-between mb-6 border-b border-line pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-xs font-mono text-muted">terminal — bash</span>
            </div>
            <pre className="font-mono text-sm overflow-x-auto text-accent-soft leading-relaxed">
              <code>{`# Add the marketplace source
claude plugin marketplace add \\
  https://github.com/dnlbox/fhir-format-skill

# Install the plugin
claude plugin install fhir-format@fhir-format-marketplace

# Use the skill
/fhir-format:fhir-format "What are the required 
fields for a Patient resource in R5?"`}</code>
            </pre>
          </Card>
        </div>
      </Section>

      {/* Documentation & Additional Links */}
      <Section id="docs" className="bg-bg-card/30 border-y border-line">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col h-full">
            <BookOpen className="text-accent mb-6" size={32} />
            <h4 className="text-2xl font-bold mb-4">Documentation</h4>
            <p className="text-muted mb-8 flex-grow">
              Deep dive into the architecture, benchmark lanes, and implementation details of the fhir-format skill.
            </p>
            <a 
              href="https://github.com/dnlbox/fhir-format-skill/blob/main/README.md"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
            >
              Read Docs <ArrowRight size={18} />
            </a>
          </Card>
          <Card className="flex flex-col h-full">
            <GitPullRequest className="text-accent mb-6" size={32} />
            <h4 className="text-2xl font-bold mb-4">Contributing</h4>
            <p className="text-muted mb-8 flex-grow">
              We welcome contributions! Whether it's fixing a bug, adding a new benchmark, or improving documentation.
            </p>
            <a 
              href="https://github.com/dnlbox/fhir-format-skill/blob/main/CONTRIBUTING.md"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all"
            >
              View Guidelines <ArrowRight size={18} />
            </a>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-line py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Layers className="text-accent w-5 h-5" />
            <span className="font-mono font-bold text-lg tracking-tight">fhir-format</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-muted">
            <a href="https://github.com/dnlbox/fhir-format-skill" className="hover:text-accent transition-colors flex items-center gap-1">
              <Github size={14} /> GitHub
            </a>
            <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
              <ExternalLink size={14} /> Marketplace
            </a>
          </div>
          <p className="text-sm text-muted">
            &copy; 2026 MIT License. Built for the FHIR community.
          </p>
        </div>
      </footer>
    </div>
  );
}
