import { useState } from "react"
import About from "./components/about"
import Achievements from "./components/achievements"
import Certifications from "./components/certifications"
import ContactForm from "./components/contact-form"
import Experience from "./components/experience"
import Header from "./components/header"
import Navigation from "./components/navigation"
import ProjectDialog from "./components/project-dialog"
import Projects, { Project } from "./components/projects"
import Skills from "./components/skills"
import SparkApp from "./components/spark-app"

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  return (
    <SparkApp>
      <Header />
      <Navigation />
      <About />
      <Certifications />
      <Projects onProjectSelect={setSelectedProject} />
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <Achievements />
      <Experience />
      <Skills />
      <ContactForm />
    </SparkApp>
  )
}

export default App
