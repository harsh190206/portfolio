"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Menu,
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  Briefcase,
  User,
  Home,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: BookOpen },
    { id: "projects", label: "Projects", icon: Code },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const generateResume = () => {
    // Portfolio data extraction
    const portfolioData = {
      personalInfo: {
        name: "Harsh Kumar",
        title: "CEO & Founder of NearBux | Computer Science Student",
        email: "iharshkr1@gmail.com",
        phone: "+91-7654454660",
        location: "Jodhpur, Rajasthan",
        linkedin: "linkedin.com/in/harsh-kumar-a7894128b",
      },
      summary:
        "A dedicated and motivated student with a strong focus on maintaining a creative mindset while striving to achieve our goals and enhance my skills and knowledge. Passionate about innovation, technology, and entrepreneurship.",
      experience: [
        {
          title: "CEO & Founder",
          company: "NearBux",
          period: "Present",
          description:
            "Transforming Indian local shops into digital businesses while rewarding customers for every purchase. Building the future of local commerce in India.",
        },
      ],
      projects: [
        {
          name: "NearBux",
          description:
            "Transforming Indian local shops into digital businesses while rewarding customers for every purchase",
          technologies: ["Entrepreneurship", "Digital Marketing", "Business Strategy"],
        },
        {
          name: "Billing and Inventory Management System",
          description:
            "A complete software platform supporting Admins, Overseers, and Sellers to manage daily business operations efficiently",
          technologies: ["Java", "Database Management", "UI/UX Design"],
        },
      ],
      education: [
        {
          degree: "B.Tech in Computer Science",
          institution: "Jodhpur Institute of Engineering and Technology",
          status: "Pursuing",
        },
        {
          degree: "12th Grade",
          institution: "Bihar School Examination Board",
          status: "Completed",
        },
        {
          degree: "10th Grade",
          institution: "Central Board of Secondary Education (CBSE)",
          status: "Completed",
        },
      ],
      skills: {
        programming: ["Java", "JavaScript", "Python", "HTML", "CSS", "SQL"],
        frameworks: ["Node.js", "React.js", "Flutter", "WordPress", "Figma", "Android Studio"],
        languages: ["English", "Hindi", "Maithili"],
        additional: ["Web Development", "UI/UX Design", "Android Development"],
      },
      certifications: [
        { name: "Programming in Java", year: "2024" },
        { name: "Cybersecurity Essentials", year: "2023" },
        { name: "Virtual Internship in Cybersecurity", year: "2027" },
        { name: "Reckon 5.0", year: "2021" },
      ],
      achievements: [
        {
          title: "Top 6 Finalist in LaunchPad Challenge 2024",
          description:
            "Team NearBux achieved Top 6 at the prestigious LaunchPad Challenge 2024 hosted by JESC (JIET Entrepreneurship and Start-Up Cell), held at iStart Rajasthan Nest, Jodhpur.",
        },
      ],
    }

    // Generate HTML for PDF
    const resumeHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Harsh Kumar - Resume</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563eb; padding-bottom: 20px; }
          .header h1 { font-size: 2.5em; color: #2563eb; margin-bottom: 10px; }
          .header p { font-size: 1.2em; color: #666; margin-bottom: 5px; }
          .contact-info { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 15px; }
          .contact-item { font-size: 0.9em; color: #555; }
          .section { margin-bottom: 25px; }
          .section h2 { font-size: 1.5em; color: #2563eb; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 15px; }
          .summary { font-style: italic; color: #555; margin-bottom: 20px; }
          .experience-item, .project-item, .education-item { margin-bottom: 15px; }
          .experience-item h3, .project-item h3, .education-item h3 { color: #333; margin-bottom: 5px; }
          .company, .institution { color: #2563eb; font-weight: bold; }
          .period { color: #666; font-style: italic; }
          .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
          .skill-category h4 { color: #2563eb; margin-bottom: 8px; }
          .skill-list { display: flex; flex-wrap: wrap; gap: 5px; }
          .skill-tag { background: #f3f4f6; padding: 3px 8px; border-radius: 12px; font-size: 0.8em; color: #374151; }
          .achievement { background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; }
          .achievement h4 { color: #92400e; margin-bottom: 8px; }
          .certifications { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }
          .cert-item { background: #f9fafb; padding: 10px; border-radius: 6px; text-align: center; }
          @media print { body { padding: 10px; } .header h1 { font-size: 2em; } }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${portfolioData.personalInfo.name}</h1>
          <p>${portfolioData.personalInfo.title}</p>
          <div class="contact-info">
            <span class="contact-item">📧 ${portfolioData.personalInfo.email}</span>
            <span class="contact-item">📱 ${portfolioData.personalInfo.phone}</span>
            <span class="contact-item">📍 ${portfolioData.personalInfo.location}</span>
            <span class="contact-item">💼 ${portfolioData.personalInfo.linkedin}</span>
          </div>
        </div>

        <div class="section">
          <h2>Professional Summary</h2>
          <p class="summary">${portfolioData.summary}</p>
        </div>

        <div class="section">
          <h2>Professional Experience</h2>
          ${portfolioData.experience
            .map(
              (exp) => `
            <div class="experience-item">
              <h3>${exp.title} at <span class="company">${exp.company}</span></h3>
              <p class="period">${exp.period}</p>
              <p>${exp.description}</p>
            </div>
          `,
            )
            .join("")}
        </div>

        <div class="section">
          <h2>Key Projects</h2>
          ${portfolioData.projects
            .map(
              (project) => `
            <div class="project-item">
              <h3>${project.name}</h3>
              <p>${project.description}</p>
              <div class="skill-list" style="margin-top: 8px;">
                ${project.technologies.map((tech) => `<span class="skill-tag">${tech}</span>`).join("")}
              </div>
            </div>
          `,
            )
            .join("")}
        </div>

        <div class="section">
          <h2>Education</h2>
          ${portfolioData.education
            .map(
              (edu) => `
            <div class="education-item">
              <h3>${edu.degree}</h3>
              <p><span class="institution">${edu.institution}</span> - <span class="period">${edu.status}</span></p>
            </div>
          `,
            )
            .join("")}
        </div>

        <div class="section">
          <h2>Technical Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Programming Languages</h4>
              <div class="skill-list">
                ${portfolioData.skills.programming.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
              </div>
            </div>
            <div class="skill-category">
              <h4>Frameworks & Tools</h4>
              <div class="skill-list">
                ${portfolioData.skills.frameworks.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
              </div>
            </div>
            <div class="skill-category">
              <h4>Languages</h4>
              <div class="skill-list">
                ${portfolioData.skills.languages.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
              </div>
            </div>
            <div class="skill-category">
              <h4>Additional Skills</h4>
              <div class="skill-list">
                ${portfolioData.skills.additional.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2>Certifications</h2>
          <div class="certifications">
            ${portfolioData.certifications
              .map(
                (cert) => `
              <div class="cert-item">
                <strong>${cert.name}</strong><br>
                <span class="period">${cert.year}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <div class="section">
          <h2>Achievements</h2>
          ${portfolioData.achievements
            .map(
              (achievement) => `
            <div class="achievement">
              <h4>🏆 ${achievement.title}</h4>
              <p>${achievement.description}</p>
            </div>
          `,
            )
            .join("")}
        </div>
      </body>
      </html>
    `

    // Open in new tab and trigger print
    const newWindow = window.open("", "_blank")
    newWindow.document.write(resumeHTML)
    newWindow.document.close()

    // Wait for content to load then trigger print dialog
    newWindow.onload = () => {
      setTimeout(() => {
        newWindow.print()
      }, 500)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Harsh Kumar</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        activeSection === item.id
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Harsh Kumar
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-4">CEO & Founder of NearBux | Computer Science Student</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                A dedicated and motivated student with a strong focus on maintaining a creative mindset while striving
                to achieve our goals and enhance my skills and knowledge. Passionate about innovation, technology, and
                entrepreneurship.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Get In Touch
                </Button>
                <Button
                  onClick={generateResume}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg bg-transparent"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/myself.jpg-gu7ewuWB0PKSLylaEkYnuk5cmlcyni.jpeg"
                    alt="Harsh Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                  <Code className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Get to know me better</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <span>Professional Role</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 mb-4">
                  <strong>CEO & Founder of NearBux</strong> - Transforming Indian local shops into digital businesses
                  while rewarding customers for every purchase.
                </p>
                <p className="text-gray-600">
                  Currently pursuing B.Tech in Computer Science, combining academic excellence with entrepreneurial
                  ventures.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-6 h-6 text-blue-600" />
                  <span>Hobbies & Interests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {["Reading", "Playing Badminton", "Traveling", "Listening to Music"].map((hobby) => (
                    <Badge key={hobby} variant="secondary" className="justify-center py-2">
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education & Skills</h2>
            <p className="text-xl text-gray-600">My academic journey and technical expertise</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">B.Tech in Computer Science</h3>
                  <p className="text-gray-600">Jodhpur Institute of Engineering and Technology</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg">12th Grade</h3>
                  <p className="text-gray-600">Bihar School Examination Board</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-lg">10th Grade</h3>
                  <p className="text-gray-600">Central Board of Secondary Education (CBSE)</p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="w-6 h-6 text-blue-600" />
                  <span>Technical Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "JavaScript", "Python", "HTML", "CSS", "SQL"].map((skill) => (
                      <Badge key={skill} className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Frameworks & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "React.js", "Flutter", "WordPress", "Figma", "Android Studio"].map((skill) => (
                      <Badge key={skill} className="bg-green-100 text-green-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["English", "Hindi", "Maithili"].map((lang) => (
                      <Badge key={lang} variant="outline">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects & Experience Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects & Experience</h2>
            <p className="text-xl text-gray-600">My work and entrepreneurial ventures</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Billing and Inventory Management System</CardTitle>
                <CardDescription>Complete Business Management Platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A complete software platform supporting Admins, Overseers, and Sellers to manage daily business
                  operations efficiently.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Database Management</Badge>
                  <Badge variant="secondary">UI/UX Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <span>NearBux</span>
                  <Badge className="bg-blue-600">Founder</Badge>
                </CardTitle>
                <CardDescription>Digital Engagement Startup</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Transforming Indian local shops into digital businesses while rewarding customers for every purchase.
                  Building the future of local commerce in India.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Entrepreneurship</Badge>
                  <Badge variant="secondary">Digital Marketing</Badge>
                  <Badge variant="secondary">Business Strategy</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Courses & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Programming in Java", year: "2024" },
                { name: "Cybersecurity Essentials", year: "2023" },
                { name: "Virtual Internship in Cybersecurity", year: "2027" },
                { name: "Reckon 5.0", year: "2021" },
              ].map((cert) => (
                <Card key={cert.name} className="p-4 text-center hover:shadow-md transition-shadow">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-sm mb-2">{cert.name}</h4>
                    <Badge variant="outline">{cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Awards & Achievements</h2>
            <p className="text-xl text-gray-600">Recognition and milestones</p>
          </div>

          <Card className="p-8 max-w-4xl mx-auto border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-400 p-4 rounded-full">
                  <Award className="w-8 h-8 text-yellow-800" />
                </div>
              </div>
              <CardTitle className="text-2xl text-gray-900">Top 6 Finalist in LaunchPad Challenge 2024</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Celebrating success! Team NearBux, co-led by Harsh Kumar, achieved Top 6 at the prestigious LaunchPad
                Challenge 2024 hosted by JESC (JIET Entrepreneurship and Start-Up Cell), held at iStart Rajasthan Nest,
                Jodhpur.
              </p>
              <div className="mt-6 flex justify-center">
                <Badge className="bg-yellow-500 text-yellow-900 px-4 py-2 text-lg">🏆 Top 6 Finalist</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Additional Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Web Development", "UI/UX Design", "Android Development", "WordPress", "Figma", "Android Studio"].map(
                (skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-lg">
                    {skill}
                  </Badge>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-xl text-gray-300">Let's connect and collaborate</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">iharshkr1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+91-7654454660</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Jodhpur, Rajasthan</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/harsh-kumar-a7894128b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 flex items-center space-x-1"
                    >
                      <span>linkedin.com/in/harsh-kumar-a7894128b</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Harsh Kumar. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
