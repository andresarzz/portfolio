"use client"

import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  ArrowRight,
  Briefcase,
  Code,
  Cpu,
  Database,
  FolderKanban,
  Github,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Sun,
  Target,
  User,
  X,
} from "lucide-react"

const projects = [
  {
    name: "QA Validation Testing",
    description:
      "Python-based QA validation project that simulates real-world testing workflows, including data validation, bug detection, and automated test cases using pytest.",
    tech: ["Python", "Pytest", "Data Validation", "Testing", "Automation"],
    repo: "andresarzz/testing-practice",
    featured: true,
    category: "Quality Assurance",
  },
  {
    name: "Glossa Lesco Translator",
    description:
      "Accessibility-focused project for Costa Rican sign language translation using modern frontend architecture and AI-oriented concepts.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI/ML"],
    repo: "andresarzz/glossa-app",
    featured: true,
    category: "AI Project",
  },
  {
    name: "SistemaPermisos",
    description:
      "Role and permission management system with secure access control, administrative workflows, and scalable backend structure.",
    tech: ["Laravel", "Vue.js", "MySQL", "JWT", "Redis"],
    repo: "andresarzz/SistemaPermisos",
    featured: true,
    category: "Enterprise",
  },
  {
    name: "GestionPeliculas",
    description:
      "Movie management system with CRUD operations, JWT authentication, review workflows, and recommendation logic.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
    repo: "andresarzz/GestionPeliculas",
    featured: true,
    category: "Web System",
  },
  {
    name: "ProgramacionAvanzadaWeb",
    description:
      "Academic web application built with MVC structure, database integration, and maintainable backend patterns.",
    tech: ["ASP.NET", "C#", "SQL Server", "Entity Framework", "MVC"],
    repo: "andresarzz/ProgramacionAvanzadaWeb",
    featured: false,
    category: "Backend",
  },
  {
    name: "ControlMigracion",
    description:
      "Migration control system focused on record management, business validation, reporting, and secure data handling.",
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
    description: "Internship experience at TransUnion supporting data-related workflows in a corporate environment.",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Hands-on experience building web applications across frontend, backend, and database layers.",
  },
  {
    icon: Target,
    title: "Career Focus",
    description: "Motivated to contribute in junior software, QA automation, or backend-oriented roles and keep growing fast.",
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
      <div className="absolute top-16 left-6 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute top-28 right-8 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
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
    <div className="mx-auto mb-14 max-w-3xl text-center animate-fade-in-up">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">{eyebrow}</p>
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">{title}</h2>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">{subtitle}</p>
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
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-[#09090b] dark:text-white">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#09090b]/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollToSection("home")} className="text-lg font-bold tracking-tight">
            Andrés Araya
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
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
            <Button variant="ghost" size="icon" onClick={() => setDarkMode((prev) => !prev)} aria-label="Toggle theme">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="px-4 pb-4 md:hidden">
            <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-3 dark:border-white/10 dark:bg-[#111113]">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="rounded-xl px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-white/5"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative overflow-hidden border-b border-gray-200 pt-28 pb-20 dark:border-white/10 md:pt-36 md:pb-28">
        <AnimatedBackground />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="animate-fade-in-up">
              <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="mr-2 h-4 w-4" />
                Junior Full Stack Developer • Software Engineering Student
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                Building modern web solutions with clean code and real-world impact.
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl">
                Software Engineering student with 2+ years of experience building web applications, working with
                databases, and developing backend and frontend solutions. Internship experience in DataOps at
                TransUnion, with a strong interest in scalable systems, software quality, and business-focused
                development.
              </p>

              <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Costa Rica
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Software Engineering Student
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  DataOps Internship at TransUnion
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="rounded-2xl px-6" onClick={() => scrollToSection("projects")}>
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-2xl bg-transparent px-6"
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
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="rounded-[32px] border border-gray-200 bg-white/70 p-6 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8">
                <div className="rounded-[28px] bg-gradient-to-br from-gray-900 to-gray-700 p-8 dark:from-white/10 dark:to-white/5">
                  <div className="mb-10 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/70">Profile Snapshot</p>
                      <h3 className="text-2xl font-semibold text-white">Andrés Araya</h3>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                      <User className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="mb-8 grid grid-cols-2 gap-4">
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
                        <div key={item} className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-white">
                          <span>{item}</span>
                          <Star className="h-4 w-4 text-yellow-300" />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-gray-200 py-20 dark:border-white/10 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="About"
            title="A developer focused on growth, execution, and real value."
            subtitle="I am building my career around software development, practical problem solving, and strong technical foundations across modern web technologies."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="h-full rounded-3xl border-gray-200 shadow-sm animate-fade-in-up dark:border-white/10"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-500/10">
                    <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Card className="rounded-3xl border-gray-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-400">
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
                  "Strong willingness to learn and adapt quickly",
                  "Hands-on experience with full stack project development",
                  "Exposure to data operations in a corporate environment",
                  "Clear technical communication and structured thinking",
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

      <section id="skills" className="border-b border-gray-200 bg-gray-50/70 py-20 dark:border-white/10 dark:bg-white/[0.02] md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Skills"
            title="Technical stack built for modern development."
            subtitle="A solid base across frontend, backend, data, and development tools."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Card
                key={group.title}
                className="h-full rounded-3xl border-gray-200 animate-fade-in-up dark:border-white/10"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-black">
                      <group.icon className="h-5 w-5" />
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
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-gray-200 py-20 dark:border-white/10 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work that reflects my technical growth."
            subtitle="Projects that showcase web development, backend structure, data handling, and software problem solving."
          />

          <div className="mb-12 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.name}
                className="h-full overflow-hidden rounded-3xl border-gray-200 animate-fade-in-up dark:border-white/10"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <Badge className="rounded-full">Featured</Badge>
                        <Badge variant="secondary" className="rounded-full">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl">{project.name}</CardTitle>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 dark:bg-white/5">
                      <FolderKanban className="h-5 w-5" />
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button className="rounded-2xl" onClick={() => window.open(`https://github.com/${project.repo}`, "_blank")}>
                      <Github className="mr-2 h-4 w-4" />
                      View Repository
                    </Button>

                    <Button
                      variant="outline"
                      className="rounded-2xl bg-transparent"
                      onClick={() => window.open(`https://github.com/${project.repo}`, "_blank")}
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Open
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {otherProjects.map((project, index) => (
              <Card
                key={project.name}
                className="h-full rounded-3xl border-gray-200 animate-fade-in-up dark:border-white/10"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <Badge variant="secondary" className="rounded-full">
                      {project.category}
                    </Badge>
                    <Globe className="h-4 w-4 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-5 flex flex-wrap gap-2">
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
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect and build something valuable."
            subtitle="I am open to junior developer roles, internships, QA automation opportunities, and software-related positions."
          />

          <Card className="overflow-hidden rounded-[32px] border-gray-200 dark:border-white/10">
            <CardContent className="p-8 md:p-10">
              <div className="mb-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-gray-50 p-6 dark:bg-white/5">
                  <Mail className="mb-4 h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="mb-2 text-lg font-semibold">Email</h3>
                  <p className="break-all text-gray-600 dark:text-gray-400">aara28312@gmail.com</p>
                </div>

                <div className="rounded-3xl bg-gray-50 p-6 dark:bg-white/5">
                  <Phone className="mb-4 h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="mb-2 text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+506 8853-8999</p>
                </div>

                <div className="rounded-3xl bg-gray-50 p-6 dark:bg-white/5">
                  <Github className="mb-4 h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="mb-2 text-lg font-semibold">GitHub</h3>
                  <p className="text-gray-600 dark:text-gray-400">@andresarzz</p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" className="rounded-2xl px-6" onClick={() => window.open("mailto:aara28312@gmail.com", "_blank")}>
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl bg-transparent px-6"
                  onClick={() => window.open("https://github.com/andresarzz", "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-gray-600 dark:text-gray-400 sm:px-6 lg:flex-row lg:px-8">
          <p>© 2026 Andrés Araya. Built with Next.js, TypeScript, Tailwind CSS, and ambition.</p>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            Based in Costa Rica
          </div>
        </div>
      </footer>
    </div>
  )
}
