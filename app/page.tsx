"use client"

import { useState, useEffect, useRef } from "react"
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
  Heart,
  Coffee,
  Award,
  Target,
  Sparkles,
} from "lucide-react"

const projects = [
  {
    name: "NetWatchApp",
    description:
      "Aplicación de monitoreo de red en tiempo real con dashboard interactivo, alertas automáticas y análisis predictivo",
    tech: ["React", "Node.js", "WebSocket", "MongoDB", "Express", "Chart.js"],
    repo: "andresarzz/NetWatchApp",
    featured: true,
    category: "Web App",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "GestionPeliculas",
    description:
      "Sistema completo de gestión de películas con CRUD, autenticación JWT, sistema de reseñas y recomendaciones IA",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery", "API REST"],
    repo: "andresarzz/GestionPeliculas",
    featured: true,
    category: "Web System",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "SistemaPermisos",
    description:
      "Sistema de gestión de permisos y roles con interfaz administrativa avanzada, auditoría y control granular",
    tech: ["Laravel", "Vue.js", "MySQL", "Tailwind", "JWT", "Redis"],
    repo: "andresarzz/SistemaPermisos",
    featured: true,
    category: "Enterprise",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Glossa Lesco Translator",
    description:
      "Traductor de lenguaje de señas costarricense usando inteligencia artificial, visión por computadora y ML",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "MediaPipe", "AI/ML"],
    repo: "andresarzz/glossa-lesco-translator",
    featured: true,
    category: "AI/ML",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Especialidad Desarrollo Web",
    description:
      "Proyecto final de especialidad con arquitectura moderna, microservicios, CI/CD y despliegue en la nube",
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Kubernetes"],
    repo: "andresarzz/Especialidad-Desarrollo-Web",
    featured: true,
    category: "Academic",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "MediaTracker",
    description: "Aplicación para rastrear y organizar contenido multimedia personal con recomendaciones inteligentes",
    tech: ["React", "Express", "PostgreSQL", "Redux", "Material-UI"],
    repo: "andresarzz/MediaTracker",
    featured: false,
    category: "Web App",
    color: "from-teal-500 to-blue-500",
  },
  {
    name: "MovieSeriesManagement",
    description: "Plataforma de gestión de series y películas con sistema de recomendaciones basado en IA",
    tech: ["Next.js", "Prisma", "TypeScript", "Tailwind", "NextAuth"],
    repo: "Roxana0976/MovieSeriesManagement",
    featured: false,
    category: "Platform",
    color: "from-rose-500 to-pink-500",
  },
  {
    name: "GestorMultimedia",
    description: "Gestor avanzado de archivos multimedia con preview, organización automática y metadatos",
    tech: ["Python", "Django", "SQLite", "Bootstrap", "Pillow"],
    repo: "andresarzz/GestorMultimedia",
    featured: false,
    category: "Desktop App",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "ControlMigracion",
    description: "Sistema de control migratorio con validación biométrica, reportes estadísticos y dashboard ejecutivo",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "JPA"],
    repo: "andresarzz/ControlMigracion",
    featured: false,
    category: "Enterprise",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "ProgramacionAvanzadaWeb",
    description: "Proyecto académico de programación web avanzada con patrones de diseño y arquitectura limpia",
    tech: ["ASP.NET", "C#", "SQL Server", "Entity Framework", "MVC"],
    repo: "andresarzz/ProgramacionAvanzadaWeb",
    featured: false,
    category: "Academic",
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "AdminEmpleados",
    description: "Sistema administrativo para gestión de empleados, nómina, recursos humanos y analytics",
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    repo: "andresarzz/AdminEmpleados",
    featured: false,
    category: "Enterprise",
    color: "from-sky-500 to-blue-500",
  },
  {
    name: "Game Development",
    description: "Juego 2D con mecánicas avanzadas, física realista, sistema de puntuación y multijugador",
    tech: ["Unity", "C#", "Photoshop", "Blender", "Git LFS"],
    repo: "andresarzz/Game",
    featured: false,
    category: "Game",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "AdminSeguridad",
    description: "Sistema de administración de seguridad con monitoreo en tiempo real, alertas y dashboard",
    tech: ["Vue.js", "Laravel", "MySQL", "WebSocket", "Redis"],
    repo: "andresarzz/AdminSeguridad",
    featured: false,
    category: "Security",
    color: "from-red-500 to-rose-500",
  },
  {
    name: "Proyecto Boleta",
    description: "Sistema de generación y gestión de boletas electrónicas con validación fiscal y reportes",
    tech: ["PHP", "MySQL", "jQuery", "Bootstrap", "FPDF"],
    repo: "andresarzz/Proyecto-Boleta",
    featured: false,
    category: "Financial",
    color: "from-lime-500 to-green-500",
  },
  {
    name: "Python Projects",
    description: "Colección de proyectos en Python para análisis de datos, machine learning y automatización",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    repo: "andresarzz/Phyton",
    featured: false,
    category: "Data Science",
    color: "from-yellow-500 to-amber-500",
  },
  {
    name: "XAnderXZ",
    description: "Proyecto personal de desarrollo de herramientas web innovadoras y utilidades avanzadas",
    tech: ["JavaScript", "HTML5", "CSS3", "API REST", "LocalStorage"],
    repo: "andresarzz/XAnderXZ",
    featured: false,
    category: "Tools",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Proyectos Programación",
    description: "Repositorio con múltiples proyectos de programación en diferentes lenguajes y frameworks",
    tech: ["Multiple", "Various", "Languages", "Frameworks", "Libraries"],
    repo: "andresarzz/Proyectos-Progra",
    featured: false,
    category: "Collection",
    color: "from-indigo-500 to-blue-500",
  },
]

const skills = {
  frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "Sass",
  ],
  backend: ["Node.js", "PHP", "Laravel", "Python", "Django", "Express", "ASP.NET", "Java", "Spring Boot", "Go"],
  database: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "SQL Server", "Redis", "Firebase"],
  tools: ["Git", "Docker", "VS Code", "Figma", "Postman", "AWS", "Linux", "Photoshop", "Kubernetes"],
  mobile: ["React Native", "Flutter", "Android Studio", "Ionic"],
  other: ["Unity", "C#", "WebSocket", "REST APIs", "GraphQL", "JWT", "OAuth", "CI/CD", "Microservices"],
}

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-float opacity-20 ${
            i % 4 === 0
              ? "text-blue-500"
              : i % 4 === 1
                ? "text-purple-500"
                : i % 4 === 2
                  ? "text-pink-500"
                  : "text-cyan-500"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        >
          {i % 6 === 0 ? (
            <Code className="w-6 h-6" />
          ) : i % 6 === 1 ? (
            <Rocket className="w-6 h-6" />
          ) : i % 6 === 2 ? (
            <Zap className="w-6 h-6" />
          ) : i % 6 === 3 ? (
            <Star className="w-6 h-6" />
          ) : i % 6 === 4 ? (
            <Sparkles className="w-6 h-6" />
          ) : (
            <Heart className="w-6 h-6" />
          )}
        </div>
      ))}
    </div>
  )
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
}: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl font-bold">
      {count}
      {suffix}
    </div>
  )
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [filter, setFilter] = useState("all")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase())

  const categories = ["all", "featured", ...Array.from(new Set(projects.map((p) => p.category)))]

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""} relative overflow-x-hidden`}>
      <FloatingElements />

      {/* Cursor personalizado */}
      <div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: "all 0.1s ease",
        }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-80"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl z-40 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Andrés Araya
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 px-4 py-2 rounded-full relative overflow-hidden group ${
                    activeSection === section
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105"
                      : "text-gray-600 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:shadow-md hover:scale-105"
                  }`}
                >
                  <span className="relative z-10">
                    {section === "home"
                      ? "Inicio"
                      : section === "about"
                        ? "Acerca"
                        : section === "skills"
                          ? "Habilidades"
                          : section === "projects"
                            ? "Proyectos"
                            : "Contacto"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 animate-slide-down">
              <div className="flex flex-col space-y-2">
                {["home", "about", "skills", "projects", "contact"].map((section, index) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      activeSection === section
                        ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                        : "text-gray-600 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {section === "home"
                      ? "Inicio"
                      : section === "about"
                        ? "Acerca"
                        : section === "skills"
                          ? "Habilidades"
                          : section === "projects"
                            ? "Proyectos"
                            : "Contacto"}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 min-h-screen flex items-center relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #667eea 0%, #764ba2 100%)
          `,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-gray-900/80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center">
            <div className="mb-8 animate-fade-in-up">
              <div className="relative mb-8 group">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <User className="w-24 h-24 text-gray-600 dark:text-gray-300" />
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-text-shimmer">
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Andrés Araya
                </span>
              </h1>

              <div className="relative mb-8">
                <p className="text-3xl md:text-4xl text-white/90 mb-6 font-medium animate-bounce-slow">
                  Desarrollador Full Stack
                </p>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg rounded-lg"></div>
              </div>

              <div
                className="flex flex-wrap items-center justify-center gap-8 text-white/80 mb-10 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center group hover:text-white transition-colors duration-300">
                  <GraduationCap className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg">CTP Mercedes Norte</span>
                </div>
                <div className="flex items-center group hover:text-white transition-colors duration-300">
                  <MapPin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg">Costa Rica</span>
                </div>
                <div className="flex items-center group hover:text-white transition-colors duration-300">
                  <Briefcase className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg">Estudiante 12°</span>
                </div>
              </div>

              <p
                className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                Estudiante apasionado por el desarrollo de software y la innovación tecnológica. Especializado en crear{" "}
                <span className="text-yellow-300 font-semibold">soluciones web modernas</span>,
                <span className="text-pink-300 font-semibold"> aplicaciones robustas</span> y
                <span className="text-cyan-300 font-semibold"> sistemas escalables</span> que transforman ideas en
                realidad.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
                style={{ animationDelay: "0.9s" }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group"
                >
                  <Rocket className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Ver Proyectos
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="px-10 py-4 text-xl border-2 border-white/80 text-white bg-white/10 hover:bg-white/20 hover:border-white hover:text-white backdrop-blur-md rounded-full transform hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-900/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Acerca de Mí
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Soy un desarrollador full stack en formación con una pasión genuina por la tecnología y la innovación. Mi
              enfoque se centra en crear soluciones que marquen la diferencia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                icon: Code,
                title: "Frontend Development",
                description:
                  "Creación de interfaces modernas, responsivas y accesibles con las últimas tecnologías y mejores prácticas de UX/UI.",
                color: "from-blue-500 to-cyan-500",
                delay: "0s",
              },
              {
                icon: Server,
                title: "Backend Development",
                description:
                  "Desarrollo de APIs robustas, sistemas escalables y arquitecturas eficientes con tecnologías de vanguardia.",
                color: "from-green-500 to-emerald-500",
                delay: "0.2s",
              },
              {
                icon: Database,
                title: "Database Management",
                description:
                  "Diseño, optimización y gestión de bases de datos relacionales y NoSQL con enfoque en performance.",
                color: "from-purple-500 to-pink-500",
                delay: "0.4s",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: item.delay }}
              >
                <CardHeader className="pb-6">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl p-12 md:p-16 shadow-2xl animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Mi Filosofía de Desarrollo
                  </span>
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Target,
                      title: "Código limpio y mantenible",
                      description: "Escribo código que otros desarrolladores puedan entender y mantener fácilmente.",
                      color: "bg-blue-500",
                    },
                    {
                      icon: Heart,
                      title: "Experiencia del usuario",
                      description: "Priorizo interfaces intuitivas y experiencias fluidas en cada proyecto.",
                      color: "bg-purple-500",
                    },
                    {
                      icon: Zap,
                      title: "Aprendizaje continuo",
                      description: "Me mantengo actualizado con las últimas tecnologías y mejores prácticas.",
                      color: "bg-pink-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start group hover:transform hover:scale-105 transition-all duration-300"
                    >
                      <div
                        className={`w-3 h-3 ${item.color} rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-300`}
                      ></div>
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                          <strong className="text-gray-900 dark:text-white">{item.title}:</strong> {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="inline-block p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center group">
                      <div className="text-blue-600 mb-2">
                        <AnimatedCounter end={19} suffix="+" />
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">Proyectos</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-purple-600 mb-2">
                        <AnimatedCounter end={10} suffix="+" />
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">Tecnologías</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-green-600 mb-2">
                        <AnimatedCounter end={2} suffix="+" />
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">Años Experiencia</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-pink-600 mb-2">
                        <AnimatedCounter end={100} suffix="%" />
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">Dedicación</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Habilidades Técnicas
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones completas y escalables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Frontend",
                skills: skills.frontend,
                color: "from-blue-500 to-cyan-500",
                delay: "0s",
              },
              {
                icon: Server,
                title: "Backend",
                skills: skills.backend,
                color: "from-green-500 to-emerald-500",
                delay: "0.1s",
              },
              {
                icon: Database,
                title: "Bases de Datos",
                skills: skills.database,
                color: "from-purple-500 to-pink-500",
                delay: "0.2s",
              },
              {
                icon: Briefcase,
                title: "Herramientas",
                skills: skills.tools,
                color: "from-orange-500 to-red-500",
                delay: "0.3s",
              },
              {
                icon: Smartphone,
                title: "Mobile",
                skills: skills.mobile,
                color: "from-pink-500 to-rose-500",
                delay: "0.4s",
              },
              {
                icon: Code,
                title: "Otros",
                skills: skills.other,
                color: "from-indigo-500 to-purple-500",
                delay: "0.5s",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: category.delay }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer animate-fade-in-up"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-gray-800/30 dark:to-gray-900/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mis Proyectos
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-12">
              Una selección de mis trabajos más destacados y proyectos innovadores
            </p>

            {/* Filter Buttons */}
            <div
              className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className={`capitalize transition-all duration-300 transform hover:scale-105 ${
                    filter === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                      : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:border-blue-500"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {category === "all" ? "Todos" : category === "featured" ? "Destacados" : category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.name}
                className={`hover:shadow-2xl transition-all duration-500 border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm transform hover:scale-105 hover:-translate-y-3 animate-fade-in-up group relative overflow-hidden ${
                  project.featured ? "ring-2 ring-yellow-400 dark:ring-yellow-500" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      {project.featured && (
                        <Badge
                          variant="outline"
                          className="text-yellow-600 border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 animate-pulse"
                        >
                          <Star className="w-3 h-3 mr-1" />
                          Destacado
                        </Badge>
                      )}
                      <Badge
                        variant="secondary"
                        className={`text-xs bg-gradient-to-r ${project.color} text-white border-0`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer animate-fade-in-up"
                        style={{ animationDelay: `${techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 4} más
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 group/btn bg-transparent"
                      onClick={() => window.open(`https://github.com/${project.repo}`, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Código
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 group/btn"
                      onClick={() => window.open(`https://github.com/${project.repo}`, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 animate-fade-in-up">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 dark:text-gray-400 text-xl">
                No se encontraron proyectos para esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 relative overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #667eea 0%, #764ba2 100%)
          `,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-900/80"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 relative">
              <span className="text-white drop-shadow-2xl">Contacto</span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/60 rounded-full"></div>
            </h2>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto">
              ¿Interesado en colaborar o tienes alguna pregunta? ¡Me encantaría escuchar de ti!
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card
              className="border-0 shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-12 md:p-16">
                <div className="grid md:grid-cols-3 gap-10 mb-12">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      value: "aara28312@gmail.com",
                      color: "from-blue-500 to-cyan-500",
                      action: () => window.open("mailto:aara28312@gmail.com", "_blank"),
                    },
                    {
                      icon: Github,
                      title: "GitHub",
                      value: "@andresarzz",
                      color: "from-gray-700 to-gray-900",
                      action: () => window.open("https://github.com/andresarzz", "_blank"),
                    },
                    {
                      icon: Phone,
                      title: "Teléfono",
                      value: "+506 8853-8999",
                      color: "from-green-500 to-emerald-500",
                      action: () => window.open("tel:+50688538999", "_blank"),
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${0.1 * index}s` }}
                      onClick={contact.action}
                    >
                      <div
                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}
                      >
                        <contact.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="text-center border-t border-gray-200 dark:border-gray-700 pt-12 animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <div className="mb-8">
                    <Coffee className="w-12 h-12 mx-auto text-amber-500 mb-4 animate-bounce" />
                    <p className="text-gray-600 dark:text-gray-400 mb-2 text-xl">
                      Siempre abierto a nuevas oportunidades y colaboraciones
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-lg">
                      ¡Hablemos sobre tu próximo proyecto increíble!
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      size="lg"
                      onClick={() => window.open("mailto:aara28312@gmail.com", "_blank")}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 group"
                    >
                      <Mail className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      Enviar Mensaje
                      <Sparkles className="w-6 h-6 ml-3 group-hover:rotate-12 transition-transform duration-300" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => window.open("https://github.com/andresarzz", "_blank")}
                      className="px-10 py-4 text-xl border-2 border-gray-300 dark:border-gray-600 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white hover:border-transparent rounded-full transform hover:scale-105 transition-all duration-300 group"
                    >
                      <Github className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                      Ver GitHub
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black border-t border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2 animate-fade-in-up">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Andrés Araya
              </h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Desarrollador Full Stack especializado en crear soluciones web modernas, escalables e innovadoras que
                transforman ideas en realidad digital.
              </p>
              <div className="flex space-x-6">
                {[
                  { icon: Github, url: "https://github.com/andresarzz", color: "hover:text-gray-300" },
                  { icon: Mail, url: "mailto:aara28312@gmail.com", color: "hover:text-blue-400" },
                  { icon: Phone, url: "tel:+50688538999", color: "hover:text-green-400" },
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(social.url, "_blank")}
                    className={`text-gray-500 ${social.color} hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-6 h-6" />
                  </Button>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-xl font-semibold text-white mb-6">Navegación</h4>
              <div className="space-y-3">
                {["home", "about", "skills", "projects", "contact"].map((section, index) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 capitalize text-lg"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {section === "home"
                      ? "Inicio"
                      : section === "about"
                        ? "Acerca"
                        : section === "skills"
                          ? "Habilidades"
                          : section === "projects"
                            ? "Proyectos"
                            : "Contacto"}
                  </button>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h4 className="text-xl font-semibold text-white mb-6">Tecnologías</h4>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Node.js", "TypeScript", "Python", "Laravel"].map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div
            className="border-t border-gray-800 pt-8 text-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-lg mb-4 md:mb-0">
                © 2024 Andrés Araya. Desarrollado usando Next.js, TypeScript y Tailwind CSS.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>Hecho en Costa Rica</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
