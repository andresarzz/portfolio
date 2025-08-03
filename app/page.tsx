"use client"

import { useState, useEffect } from "react"
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
} from "lucide-react"

const projects = [
  {
    name: "NetWatchApp",
    description: "Aplicación de monitoreo de red en tiempo real con dashboard interactivo y alertas automáticas",
    tech: ["React", "Node.js", "WebSocket", "MongoDB", "Express"],
    repo: "andresarzz/NetWatchApp",
    featured: true,
    category: "Web App",
  },
  {
    name: "GestionPeliculas",
    description: "Sistema completo de gestión de películas con CRUD, autenticación y sistema de reseñas",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "jQuery"],
    repo: "andresarzz/GestionPeliculas",
    featured: true,
    category: "Web System",
  },
  {
    name: "SistemaPermisos",
    description: "Sistema de gestión de permisos y roles con interfaz administrativa avanzada",
    tech: ["Laravel", "Vue.js", "MySQL", "Tailwind", "JWT"],
    repo: "andresarzz/SistemaPermisos",
    featured: true,
    category: "Enterprise",
  },
  {
    name: "Glossa Lesco Translator",
    description: "Traductor de lenguaje de señas costarricense usando inteligencia artificial y visión por computadora",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "MediaPipe"],
    repo: "andresarzz/glossa-lesco-translator",
    featured: true,
    category: "AI/ML",
  },
  {
    name: "Especialidad Desarrollo Web",
    description: "Proyecto final de especialidad en desarrollo web con arquitectura moderna y escalable",
    tech: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    repo: "andresarzz/Especialidad-Desarrollo-Web",
    featured: true,
    category: "Academic",
  },
  {
    name: "MediaTracker",
    description: "Aplicación para rastrear y organizar contenido multimedia personal con recomendaciones",
    tech: ["React", "Express", "PostgreSQL", "Redux", "Material-UI"],
    repo: "andresarzz/MediaTracker",
    featured: false,
    category: "Web App",
  },
  {
    name: "MovieSeriesManagement",
    description: "Plataforma de gestión de series y películas con sistema de recomendaciones inteligente",
    tech: ["Next.js", "Prisma", "TypeScript", "Tailwind", "NextAuth"],
    repo: "Roxana0976/MovieSeriesManagement",
    featured: false,
    category: "Platform",
  },
  {
    name: "GestorMultimedia",
    description: "Gestor avanzado de archivos multimedia con preview, organización y metadatos",
    tech: ["Python", "Django", "SQLite", "Bootstrap", "Pillow"],
    repo: "andresarzz/GestorMultimedia",
    featured: false,
    category: "Desktop App",
  },
  {
    name: "ControlMigracion",
    description: "Sistema de control migratorio con validación de documentos y reportes estadísticos",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "JPA"],
    repo: "andresarzz/ControlMigracion",
    featured: false,
    category: "Enterprise",
  },
  {
    name: "ProgramacionAvanzadaWeb",
    description: "Proyecto académico de programación web avanzada con patrones de diseño",
    tech: ["ASP.NET", "C#", "SQL Server", "Entity Framework", "MVC"],
    repo: "andresarzz/ProgramacionAvanzadaWeb",
    featured: false,
    category: "Academic",
  },
  {
    name: "AdminEmpleados",
    description: "Sistema administrativo para gestión de empleados, nómina y recursos humanos",
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    repo: "andresarzz/AdminEmpleados",
    featured: false,
    category: "Enterprise",
  },
  {
    name: "Game Development",
    description: "Juego 2D desarrollado con mecánicas avanzadas, física y sistema de puntuación",
    tech: ["Unity", "C#", "Photoshop", "Blender", "Git LFS"],
    repo: "andresarzz/Game",
    featured: false,
    category: "Game",
  },
  {
    name: "AdminSeguridad",
    description: "Sistema de administración de seguridad con monitoreo en tiempo real y alertas",
    tech: ["Vue.js", "Laravel", "MySQL", "WebSocket", "Redis"],
    repo: "andresarzz/AdminSeguridad",
    featured: false,
    category: "Security",
  },
  {
    name: "Proyecto Boleta",
    description: "Sistema de generación y gestión de boletas electrónicas con validación fiscal",
    tech: ["PHP", "MySQL", "jQuery", "Bootstrap", "FPDF"],
    repo: "andresarzz/Proyecto-Boleta",
    featured: false,
    category: "Financial",
  },
  {
    name: "SecProyecto",
    description: "Proyecto de seguridad informática con algoritmos de encriptación avanzados",
    tech: ["Python", "Cryptography", "Flask", "SQLite", "Bcrypt"],
    repo: "pgn3/SecProyecto",
    featured: false,
    category: "Security",
  },
  {
    name: "Health Checker",
    description: "Aplicación de monitoreo de salud de servicios web con métricas y dashboards",
    tech: ["Go", "Docker", "Prometheus", "Grafana", "Kubernetes"],
    repo: "pgn3/JMeter_HealthChecker",
    featured: false,
    category: "DevOps",
  },
  {
    name: "Python Projects",
    description: "Colección de proyectos y scripts en Python para análisis de datos y automatización",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    repo: "andresarzz/Phyton",
    featured: false,
    category: "Data Science",
  },
  {
    name: "XAnderXZ",
    description: "Proyecto personal de desarrollo de herramientas y utilidades web",
    tech: ["JavaScript", "HTML5", "CSS3", "API REST", "LocalStorage"],
    repo: "andresarzz/XAnderXZ",
    featured: false,
    category: "Tools",
  },
  {
    name: "Proyectos Programación",
    description: "Repositorio con múltiples proyectos de programación en diferentes lenguajes",
    tech: ["Multiple", "Various", "Languages", "Frameworks", "Libraries"],
    repo: "andresarzz/Proyectos-Progra",
    featured: false,
    category: "Collection",
  },
]

const skills = {
  frontend: ["React", "Next.js", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  backend: ["Node.js", "PHP", "Laravel", "Python", "Django", "Express", "ASP.NET", "Java", "Spring Boot"],
  database: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "SQL Server", "Redis"],
  tools: ["Git", "Docker", "VS Code", "Figma", "Postman", "AWS", "Linux", "Photoshop"],
  mobile: ["React Native", "Flutter", "Android Studio"],
  other: ["Unity", "C#", "Go", "WebSocket", "REST APIs", "GraphQL", "JWT", "OAuth"],
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [filter, setFilter] = useState("all")

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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Andrés Araya
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-200 px-3 py-2 rounded-md ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
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

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2">
                {["home", "about", "skills", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left px-3 py-2 rounded-md transition-colors duration-200 ${
                      activeSection === section
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
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
        className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center animate-fade-in-up">
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <User className="w-20 h-20 text-gray-600 dark:text-gray-300" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Andrés Araya
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
                Desarrollador Full Stack
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
                <div className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  <span>CTP Mercedes Norte</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Costa Rica</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  <span>Estudiante 12°</span>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                Estudiante de duodécimo año apasionado por el desarrollo de software y la innovación tecnológica.
                Especializado en crear soluciones web modernas, aplicaciones robustas y sistemas escalables que
                resuelven problemas reales y mejoran la experiencia del usuario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Ver Proyectos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 text-lg border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Acerca de Mí</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Soy un desarrollador full stack en formación con una pasión genuina por la tecnología y la innovación. Mi
              enfoque se centra en crear soluciones eficientes, escalables y centradas en el usuario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Creación de interfaces modernas, responsivas y accesibles con React, Next.js, Vue.js y las últimas
                  tecnologías frontend.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Backend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Desarrollo de APIs robustas, sistemas escalables y arquitecturas eficientes con Node.js, PHP, Python y
                  Java.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Database Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Diseño, optimización y gestión de bases de datos relacionales y NoSQL con MySQL, PostgreSQL y MongoDB.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Mi Filosofía de Desarrollo
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Código limpio y mantenible:</strong> Escribo código que otros desarrolladores puedan
                      entender y mantener fácilmente.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Experiencia del usuario:</strong> Priorizo interfaces intuitivas y experiencias fluidas en
                      cada proyecto.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Aprendizaje continuo:</strong> Me mantengo actualizado con las últimas tecnologías y
                      mejores prácticas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">19+</div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">Proyectos Completados</div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">Lenguajes Dominados</div>
                  <div className="text-4xl font-bold text-green-600 mb-2">2+</div>
                  <div className="text-gray-600 dark:text-gray-400">Años de Experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Habilidades Técnicas</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones completas y escalables
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mr-3">
                    <Server className="w-5 h-5 text-white" />
                  </div>
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-green-100 dark:hover:bg-green-900 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mr-3">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  Bases de Datos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mr-3">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  Herramientas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-orange-100 dark:hover:bg-orange-900 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center mr-3">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  Mobile
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center mr-3">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  Otros
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Mis Proyectos</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Una selección de mis trabajos más destacados y proyectos en desarrollo
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className={`capitalize ${
                    filter === category ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  }`}
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
                className={`hover-scale hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${
                  project.featured ? "ring-2 ring-yellow-400 dark:ring-yellow-500" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg font-bold">{project.name}</CardTitle>
                    <div className="flex gap-2">
                      {project.featured && (
                        <Badge
                          variant="outline"
                          className="text-yellow-600 border-yellow-600 bg-yellow-50 dark:bg-yellow-900/20"
                        >
                          <Star className="w-3 h-3 mr-1" />
                          Destacado
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tech.length - 4} más
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                      onClick={() => window.open(`https://github.com/${project.repo}`, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(`https://github.com/${project.repo}`, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No se encontraron proyectos para esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Contacto</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              ¿Interesado en colaborar o tienes alguna pregunta? ¡Me encantaría escuchar de ti!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">andres.araya.dev@gmail.com</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
                    <Button
                      variant="link"
                      onClick={() => window.open("https://github.com/andresarzz", "_blank")}
                      className="text-blue-600 hover:text-blue-700 p-0 h-auto"
                    >
                      @andresarzz
                    </Button>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-400">+506 XXXX-XXXX</p>
                  </div>
                </div>

                <div className="text-center border-t border-gray-200 dark:border-gray-700 pt-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                    Siempre abierto a nuevas oportunidades, proyectos interesantes y colaboraciones
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      onClick={() => window.open("mailto:andres.araya.dev@gmail.com", "_blank")}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => window.open("https://github.com/andresarzz", "_blank")}
                      className="px-8 border-2"
                    >
                      <Github className="w-5 h-5 mr-2" />
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
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Andrés Araya
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Desarrollador Full Stack especializado en crear soluciones web modernas y escalables.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("https://github.com/andresarzz", "_blank")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("mailto:andres.araya.dev@gmail.com", "_blank")}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navegación</h4>
              <div className="space-y-2">
                {["home", "about", "skills", "projects", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
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

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "TypeScript", "Python"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Andrés Araya. Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
