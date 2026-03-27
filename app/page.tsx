"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Mail,
  Code,
  Database,
  Server,
  Smartphone,
  Moon,
  Sun,
  MapPin,
  GraduationCap,
  User,
  Briefcase,
  Star,
  ExternalLink,
  Menu,
  X,
  Phone,
  ArrowRight,
  Zap,
  Rocket,
  Award,
  Target,
  Sparkles,
  ShieldCheck,
  FolderKanban,
  Globe,
  Cpu,
} from "lucide-react"

const projects = [
  {
    name: "NetWatchApp",
    description:
      "Real-time network monitoring platform with live dashboards, alerting workflows, and data visualization for infrastructure tracking.",
    tech: ["React", "Node.js", "MongoDB", "Express", "WebSocket", "Chart.js"],
    repo: "andresarzz/NetWatchApp",
    featured: true,
    category: "Monitoring",
  },
  {
    name: "Glossa Lesco Translator",
    description:
      "Costa Rican sign language translation project powered by AI concepts, modern frontend architecture, and accessible interface design.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "AI/ML"],
    repo: "andresarzz/glossa-app",
    featured: true,
    category: "AI Project",
  },
  {
    name: "SistemaPermisos",
    description:
      "Role and permission management system with administrative controls, secure access handling, and scalable backend structure.",
    tech: ["Laravel", "Vue.js", "MySQL", "JWT", "Redis"],
    repo: "andresarzz/SistemaPermisos",
    featured: true,
    category: "Enterprise",
  },
  {
    name: "GestionPeliculas",
    description:
      "Full movie management system with CRUD operations, JWT authentication, review workflows, and recommendation logic.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    repo: "andresarzz/GestionPeliculas",
    featured: true,
    category: "Web System",
  },
  {
    name: "ProgramacionAvanzadaWeb",
    description:
      "Academic web application built with backend architecture, database integration, and maintainable MVC patterns.",
    tech: ["ASP.NET", "C#", "SQL Server", "Entity Framework", "MVC"],
    repo: "andresarzz/ProgramacionAvanzadaWeb",
    featured: false,
    category: "Backend",
  },
  {
    name: "ControlMigracion",
    description:
      "Migration control system focused on record management, validation logic, reporting, and secure information handling.",
    tech: ["Java", "Spring Boot", "MySQL", "JPA", "Thymeleaf"],
    repo: "andresarzz/ControlMigracion",
    featured: false,
    category: "Java",
  },
]

const skillGroups = [
  {
    title: "Frontend",
    icon: Smartphone,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "PHP", "Laravel", "Python", "ASP.NET", "Java", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "SQLite", "Redis"],
  },
  {
    title: "Tools",
    icon: Cpu,
    items: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Linux", "REST APIs", "JWT"],
  },
]

const highlights = [
  {
    icon: Briefcase,
    title: "DataOps Experience",
    description: "Hands-on internship experience at TransUnion supporting data-related workflows and operational processes.",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Experience building web applications from frontend interfaces to backend logic and database integration.",
  },
  {
    icon: Target,
    title: "Job-Ready Mindset",
    description: "Focused on writing clean code, learning fast, collaborating well, and delivering practical business solutions.",
  },
]

const stats = [
  { label: "Years Building Projects", value: "2+" },
  { label: "Technical Projects", value: "15+" },
  { label: "Core Technologies", value: "10+" },
  { label: "Focus", value: "Full Stack" },
]

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl bg-blue-500/20" />
      <div className="absolute top-40 right-10 h-72 w-72 rounded-full blur-3xl bg-purple-500/20" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full blur-3xl bg-cyan-500/20" />
    </div>
  )
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle: string
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14">
      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">{title}</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{subtitle}</p>
    </div>
  )
}

export default function PortfolioPremium() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const sections = useMemo(() => ["home", "about", "skills", "projects", "contact"], [])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [darkMode])

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + 120
      for (const section of sections) {
        const el = document.getElementById(section)
        if (!el) continue
        const { offsetTop, offsetHeight } = el
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [sections])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#09090b] dark:text-white transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="font-bold text-lg tracking-tight">
            Andrés Araya
          </button>

          <div className="hidden md:flex items-center gap-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeSection === section
                    ? "bg-gray-900 text-white dark:bg-white dark:text-black"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDarkMode((prev) => !prev)}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen((prev) => !prev)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111113] p-3 flex flex-col gap-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-left px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden border-b border-gray-200 dark:border-white/10"
      >
        <AnimatedBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-400/20 bg-blue-50 dark:bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Junior Full Stack Developer • Software Engineering Student
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-6">
                Building modern web solutions with clean code and real-world impact.
              </h1>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mb-8">
                Software Engineering student with 2+ years of experience building web applications, working with
                databases, and developing backend and frontend solutions. Internship experience in DataOps at
                TransUnion, with a strong interest in scalable systems, software quality, and business-focused
                development.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Costa Rica
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Software Engineering Student
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  DataOps Internship at TransUnion
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-2xl px-6"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl px-6 bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="rounded-2xl px-6"
                  onClick={() => window.open("https://github.com/andresarzz", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-[32px] border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-6 md:p-8">
                <div className="rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white/10 dark:to-white/5 p-8">
                  <div className="flex items-center justify-between mb-10">
                    <div>
                      <p className="text-white/70 text-sm">Profile Snapshot</p>
                      <h3 className="text-white text-2xl font-semibold">Andrés Araya</h3>
                    </div>
                    <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl bg-white/10 p-4">
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-white/70">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {["React / Next.js", "Node.js / Express", "SQL / NoSQL Databases", "Python / PHP / Java"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-white"
                        >
                          <span>{item}</span>
                          <Star className="w-4 h-4 text-yellow-300" />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-28 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="A developer focused on growth, execution, and real value."
            subtitle="I am building my career around software development, practical problem solving, and strong technical foundations across modern web technologies."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="rounded-3xl border-gray-200 dark:border-white/10 shadow-sm h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <Card className="rounded-3xl border-gray-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 dark:text-gray-400 leading-relaxed text-base space-y-4">
                <p>
                  I have experience building academic and personal software projects using technologies such as React,
                  Next.js, Node.js, PHP, Laravel, Java, ASP.NET, and SQL-based databases.
                </p>
                <p>
                  My background includes web development, database design, authentication flows, dashboards, CRUD
                  systems, and backend logic. I enjoy turning requirements into usable products with clear structure and
                  maintainable code.
                </p>
                <p>
                  I am currently focused on getting my first strong full-time opportunity in software development, QA
                  automation, or related technical roles where I can contribute, learn quickly, and grow long term.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-gray-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl">What I Bring</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Strong willingness to learn and adapt fast",
                  "Hands-on experience with full stack project development",
                  "Exposure to data operations in a corporate environment",
                  "Good technical communication and structured thinking",
                  "Commitment to clean, readable, and scalable code",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <p className="text-gray-600 dark:text-gray-400">{point}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 md:py-28 border-b border-gray-200 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Skills"
            title="Technical stack built for modern development."
            subtitle="A solid base across frontend, backend, data, and development tools."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Card className="rounded-3xl border-gray-200 dark:border-white/10 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="w-11 h-11 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-black flex items-center justify-center">
                        <group.icon className="w-5 h-5" />
                      </div>
                      {group.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1 text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 md:py-28 border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work that reflects my technical growth."
            subtitle="Projects that showcase web development, backend structure, data handling, and software problem solving."
          />

          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <Card className="rounded-3xl border-gray-200 dark:border-white/10 h-full overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="rounded-full">Featured</Badge>
                          <Badge variant="secondary" className="rounded-full">
                            {project.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl">{project.name}</CardTitle>
                      </div>
                      <div className="w-11 h-11 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                        <FolderKanban className="w-5 h-5" />
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        className="rounded-2xl"
                        onClick={() => window.open(`https://github.com/${project.repo}`, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Repository
                      </Button>

                      <Button
                        variant="outline"
                        className="rounded-2xl bg-transparent"
                        onClick={() => window.open(`https://github.com/${project.repo}`, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <Card className="rounded-3xl border-gray-200 dark:border-white/10 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="rounded-full">
                          {project.category}
                        </Badge>
                        <Globe className="w-4 h-4 text-gray-500" />
                      </div>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="rounded-full">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        className="w-full rounded-2xl bg-transparent"
                        onClick={() => window.open(`https://github.com/${project.repo}`, "_blank")}
                      >
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect and build something valuable."
            subtitle="I am open to junior developer roles, internships, QA automation opportunities, and software-related positions."
          />

          <Card className="rounded-[32px] border-gray-200 dark:border-white/10 overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="rounded-3xl bg-gray-50 dark:bg-white/5 p-6">
                  <Mail className="w-6 h-6 mb-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400 break-all">aara28312@gmail.com</p>
                </div>

                <div className="rounded-3xl bg-gray-50 dark:bg-white/5 p-6">
                  <Phone className="w-6 h-6 mb-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+506 8853-8999</p>
                </div>

                <div className="rounded-3xl bg-gray-50 dark:bg-white/5 p-6">
                  <Github className="w-6 h-6 mb-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-lg mb-2">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400">@andresarzz</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-2xl px-6"
                  onClick={() => window.open("mailto:aara28312@gmail.com", "_blank")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl px-6 bg-transparent"
                  onClick={() => window.open("https://github.com/andresarzz", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-gray-200 dark:border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2026 Andrés Araya. Built with Next.js, TypeScript, Tailwind CSS, and ambition.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Award className="w-4 h-4" />
            Based in Costa Rica
          </div>
        </div>
      </footer>
    </div>
  )
}
