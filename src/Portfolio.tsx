import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronDown, 
  ExternalLink,
  Code2,
  Database,
  Brain,
  Briefcase,
  Award,
  Users,
  Send,
  Menu,
  X,
  Terminal,
  Cpu,
  GitBranch,
  Layers,
  Zap,
  Target,
  TrendingUp,
  BarChart3,
  FileCode,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  icon: React.ReactNode;
}

interface Experience {
  position: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

interface Leadership {
  title: string;
  organization: string;
  logo: string;
  responsibilities: string[];
  icon: React.ReactNode;
}

interface TechItem {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-slate-950" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
    </div>
  );
};

const FloatingIcons = () => {
  const icons = [
    { Icon: Code2, delay: 0 },
    { Icon: Database, delay: 2 },
    { Icon: Brain, delay: 4 },
    { Icon: Terminal, delay: 1 },
    { Icon: Cpu, delay: 3 },
    { Icon: GitBranch, delay: 5 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/10"
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Tech Stack', 'Experience', 'Projects', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Natan's Portfolio
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingIcons />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Available for Opportunities
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Natanael Rehuel Santoso
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Computer Science Student | Data Scientist | Machine Learning Enthusiast
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Passionate about building intelligent systems that transform raw data into meaningful insights and predictive solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
        <a href="/CV-Natanael-Rehuel-Santoso.pdf" download>
            <Button size="lg" variant="outline" className="group">
              Download CV
              <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
        </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
              <Mail className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://github.com/TEXTRAX28"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/natanaelrehuels"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:natanaelrehuels@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-muted-foreground" size={32} />
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Projects Completed", value: "10+", icon: Target },
    { label: "Years Studying CS", value: "3+", icon: BookOpen },
    { label: "ML Models Built", value: "20+", icon: Brain },
    { label: "Leadership Roles", value: "5+", icon: Users }
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-sm border border-border flex items-center justify-center">
                  <Code2 size={120} className="text-primary/40" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                Hi! I'm Natanael, a computer science student at Newcastle University. I'm passionate about
                coding, web development, data, software, and building projects that combine both creativity
                and functionality. I enjoy learning new technologies and experimenting with different ways
                to solve problems efficiently.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                Over the years, I've worked on a variety of projects, from interactive portfolio websites to 
                automation systems and data analysis tools. I enjoy msotly using Python and a few others such as SQL, Java, C, and many more 
                to bring ideas to life. Each project teaches me somethig new, whether it's improving my coding 
                practices, design sense, or problem-solving skills.
              </p>
              <p className='text-muted-foreground leading-relaxed'>
                Beyond coding, I love badminton, staying active, and exploring new experiences. I thirve on 
                challenges and enjoy collaborating with others to bring ideas  to reality. My goal is to continue
                building impactful projects that showcase both my technical skills and creativity while growing as
                a developer and learner.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const techStack: TechItem[] = [
    { name: "Python", icon: <FileCode className="w-6 h-6" />, category: "Programming Languages" },
    { name: "SQL", icon: <Database className="w-6 h-6" />, category: "Programming Languages" },
    { name: "Java", icon: <Code2 className="w-6 h-6" />, category: "Programming Languages" },
    { name: "HTML", icon: <Layers className="w-6 h-6" />, category: "Programming Languages" },
    { name: "CSS", icon: <Layers className="w-6 h-6" />, category: "Programming Languages" },
    { name: "Pandas", icon: <BarChart3 className="w-6 h-6" />, category: "Data Science" },
    { name: "NumPy", icon: <BarChart3 className="w-6 h-6" />, category: "Data Science" },
    { name: "Scikit-learn", icon: <Brain className="w-6 h-6" />, category: "Data Science" },
    { name: "Random Forest", icon: <Brain className="w-6 h-6" />, category: "Data Science" },
    { name: "XGBoost", icon: <TrendingUp className="w-6 h-6" />, category: "Data Science" },
    { name: "Neural Networks", icon: <Cpu className="w-6 h-6" />, category: "Data Science" },
    { name: "Data Visualization", icon: <BarChart3 className="w-6 h-6" />, category: "Data Analysis" },
    { name: "EDA", icon: <Target className="w-6 h-6" />, category: "Data Analysis" },
    { name: "Feature Engineering", icon: <Zap className="w-6 h-6" />, category: "Data Analysis" },
    { name: "Predictive Modeling", icon: <TrendingUp className="w-6 h-6" />, category: "Data Analysis" },
    { name: "Git", icon: <GitBranch className="w-6 h-6" />, category: "Tools" },
    { name: "GitHub", icon: <Github className="w-6 h-6" />, category: "Tools" },
    { name: "Excel", icon: <BarChart3 className="w-6 h-6" />, category: "Tools" },
    { name: "Jupyter", icon: <Terminal className="w-6 h-6" />, category: "Tools" },
    { name: "OOP", icon: <Code2 className="w-6 h-6" />, category: "Concepts" },
    { name: "Graph Algorithms", icon: <GitBranch className="w-6 h-6" />, category: "Concepts" },
    { name: "Machine Learning", icon: <Brain className="w-6 h-6" />, category: "Concepts" },
    { name: "Data Pipelines", icon: <Layers className="w-6 h-6" />, category: "Concepts" },
    { name: "Time Series", icon: <TrendingUp className="w-6 h-6" />, category: "Concepts" }
  ];

  // Create duplicated array for infinite scroll
  const allTechStack = [...techStack, ...techStack];

  return (
    <section id="tech-stack" ref={ref} className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent systems
          </p>

          {/* Infinite Scrolling Tech Stack */}
          <div 
            className="relative mb-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <motion.div
              className="flex gap-6 py-8"
              animate={{
                x: [0, -techStack.length * 200]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: isHovered ? 30 : 60,
                  ease: "linear"
                }
              }}
            >
              {allTechStack.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Card className="w-44 h-32 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="h-full flex flex-col items-center justify-center text-center gap-3 p-4">
                      <div className="text-primary">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-medium">{tech.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {tech.category.split(' ')[0]}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences: Experience[] = [
    {
      position: "Data Scientist Intern",
      company: "TechConnect",
      location: "Jakarta, Indonesia",
      duration: "June 2025 – August 2025",
      description: [
        "Collected and processed large datasets for business analytics.",
        "Built predictive machine learning models including Random Forest, XGBoost, and Neural Networks.",
        "Evaluated model performance using Accuracy, Precision, Recall, and F1 Score.",
        "Developed visual dashboards to present insights to stakeholders.",
        "Collaborated with senior data scientists on feature engineering and model optimization."
      ]
    }
  ];

  const leadership: Leadership[] = [
    {
      title: "Head of Club of Interest",
      organization: "PPI Newcastle",
      responsibilities: [
        "Organized weekly sports activities including fun runs and tournaments.",
        "Led Newcastle's participation and hosting for the PPI UK Olympics.",
        "Managed teams and logistics for multiple sports events.",
        "Coordinated marketing initiatives for sports jerseys and community events."
      ],
      icon: <Users className="w-6 h-6" />,
      logo: "/ppi_newcastle.png"
    },
    {
      title: "Student Peer Mentor",
      organization: "Newcastle University",
      responsibilities: [
        "Helped first-year students adapt to university life.",
        "Provided academic support and guidance.",
        "Promoted wellbeing and engagement within the student community."
      ],
      icon: <BookOpen className="w-6 h-6" />,
      logo: "/newcastle_uni.png"
    },
    {
      title: "Head of Tech Management and Stage",
      organization: "Discovery Indonesia x The Changcuters",
      responsibilities: [
        "Led stage and techinal operations for a live performance by one of the most popular band from Indonesia, The Changcuters.",
        "Supervised techincal crew and volunteers, ensuring smooth rehearsals, timely stage transitions, and high quality production.",
        "Troubleshot and resolved live event techincal challenges in real time, maintaining seamless performance for the audience."
      ],
      icon: <Target className="w-6 h-6" />,
      logo:"/discovery_indonesia.png"
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Experience
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional experience and leadership roles
          </p>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-500" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="relative pl-20 pb-12"
                >
                  <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background" />
                  
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-xl mb-1">{exp.position}</CardTitle>
                          <CardDescription className="text-base">
                            <Briefcase className="w-4 h-4 inline mr-2" />
                            {exp.company} • {exp.location}
                          </CardDescription>
                        </div>
                        <Badge variant="outline">{exp.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-8 text-center">Leadership & Activities</h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {role.icon}
                    </div>
                    <img
                        src={role.logo}
                        alt={role.organization}
                        className="w-12 h-12 object-contain rounded-lg"
                    />
                    <CardTitle className="text-lg">{role.title}</CardTitle>
                    <CardDescription>{role.organization}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {role.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Mergers & Acquisitions ML Classifier",
      description: "Machine learning classification system designed to predict outcomes of mergers and acquisitions using structured financial datasets.",
      technologies: ["Python", "Machine Learning", "Random Forest", "XGBoost", "Neural Networks"],
      features: [
        "Feature engineering",
        "Data preprocessing",
        "Random Forest models",
        "XGBoost models",
        "Neural Networks",
        "Evaluation using F1 Score, Precision, Recall"
      ],
      github: "https://github.com/TEXTRAX28/Mergers-and-Acquisitions-ML-Classifier",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Copper Price Forecasting",
      description: "Predictive modeling project forecasting copper prices using historical financial data and machine learning algorithms.",
      technologies: ["Python", "Time Series Analysis", "XGBoost", "Random Forest"],
      features: [
        "Data collection using yFinance",
        "Time series decomposition",
        "Linear Regression",
        "Random Forest",
        "XGBoost",
        "Decision Tree",
        "Evaluation using MAE, RMSE, MAPE, and R²"
      ],
      github: "https://github.com/TEXTRAX28/Copper-Forecasting-Time-Series-ML-models",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Room Booking System",
      description: "Room booking management system designed using object-oriented programming concepts and strong input validation.",
      technologies: ["Python", "OOP"],
      features: [
        "Booking class design",
        "BookingManager class",
        "Input validation",
        "Exception handling",
        "Scheduling constraints"
      ],
      github: "https://github.com/TEXTRAX28/room_booking_system",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      title: "PageRank Algorithm Implementation",
      description: "Implementation of a simplified PageRank algorithm demonstrating how web pages can be ranked using link structures.",
      technologies: ["Python", "Graph Algorithms"],
      features: [
        "Graph-based data structures",
        "Iterative ranking algorithm",
        "Convergence detection",
        "Probability distribution modeling"
      ],
      github: "https://github.com/TEXTRAX28/PageRank_algo_implementation",
      icon: <GitBranch className="w-8 h-8" />
    },
    {
      title: "Car Manufacturer Management System",
      description: "Java-based software system managing car manufacturers and models with reporting functionality and file input/output support.",
      technologies: ["Java"],
      features: [
        "Manufacturer class implementation",
        "Reporting modules",
        "File persistence",
        "Data processing"
      ],
      github: "https://github.com/TEXTRAX28/car_manufacturer_management_system",
      icon: <Database className="w-8 h-8" />
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A collection of my work in data science, machine learning, and software development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="max-w-2xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary">
                        {selectedProject.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{selectedProject.title}</CardTitle>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedProject(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {selectedProject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "British Airways Data Science Job Simulation",
      issuer: "Forage",
      description: "Completed a real-world simulation focused on applying data science techniques within the airline industry.",
      tasks: [
        "Scraping and analyzing customer review data",
        "Identifying key drivers of customer purchasing behaviour",
        "Building predictive models"
      ],
      icon: <Award className="w-8 h-8" />,
      certificate: "/British_Airways_Certification_Forage.pdf"
    }
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Certifications
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>

          <div className="max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary flex-shrink-0">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{cert.title}</CardTitle>
                        <CardDescription className="text-base">{cert.issuer}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{cert.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Tasks included:</h4>
                      <ul className="space-y-2">
                        {cert.tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={cert.certificate}
                      download
                      className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline"
                    >
                      <Download className="w-4 h-4" />
                      Download Certificate
                    </a>                   
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hardSkills = [
    "Machine Learning",
    "Data Analysis",
    "Predictive Modeling",
    "Reporting",
    "Research",
    "Pitching Ideas",
    "Object-Oriented Programming",
    "Debugging and Testing",
    "Git and Github",
    "Frontend UI Development",
    "Market Research",
    "Basic Data Analysis",
    "Forecasing Models"
  ];

  const softSkills = [
    "Leadership",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Communication",
    "Collaboration",
    "Analytical Thinking",
    "Self-learning",
    "Project Coordination",
    "Conflit Resolution",
    "Peer Collaboration"
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Technical expertise and soft skills
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="w-6 h-6 text-primary" />
                    Hard Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {hardSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="px-4 py-2 text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="secondary" className="px-4 py-2 text-sm">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form and I'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-background/50 min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" className="w-full group">
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:natanaelrehuels@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-muted-foreground">natanaelrehuels@gmail.com</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/TEXTRAX28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">GitHub</div>
                      <div className="text-sm text-muted-foreground">@TEXTRAX28</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/natanaelrehuels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">natanaelrehuels</div>
                    </div>
                  </motion.a>
                </div>
              </div>

              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Location</span>
                  </div>
                  <p className="font-semibold">Newcastle University, United Kingdom</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Natanael Rehuel Santoso</h3>
              <p className="text-muted-foreground text-sm">
                Computer Science Student – Newcastle University
              </p>
            </div>

            <div className="flex gap-6">
              <motion.a
                href="https://github.com/TEXTRAX28"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/natanaelrehuels"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:natanaelrehuels@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 Natanael Rehuel Santoso. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PortfolioWebsite = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PortfolioWebsite;
