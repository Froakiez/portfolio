import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "FoodyAI",
      description:
        "An AI model that receives a food image from the user and displays the name of the food and also the nutrients that the food contains.",
      image: "/images/foodyai.png",
      technologies: ["Python", "Tensorflow", "Pandas", "NumPy"],
      liveUrl: "https://drive.google.com/drive/folders/1D-6IcJJPoTIgWMpelOVZUHaRSV_LXhUY?usp=sharing",
      githubUrl: "https://drive.google.com/drive/folders/1D-6IcJJPoTIgWMpelOVZUHaRSV_LXhUY?usp=sharing",
    },
    {
      title: "SignTalk",
      description:
        "An AI-powered real-time video conferencing application that provides real-time speech-to-text and sign-language-to-text translation using custom AI models.",
      image: "/images/signtalk.png",
      technologies: ["Python", "Mediapipe", "Tensorflow", "Flask"],
      liveUrl: "https://github.com/HenryGunadi/Signtalk-UGM-Hackathon",
      githubUrl: "https://github.com/HenryGunadi/Signtalk-UGM-Hackathon",
    },
    {
      title: "AI vs Real Image Detection",
      description:
        "An AI model that is able to analyze and distinguish if the image is created by an AI or taken by a human.",
      image: "/images/ai-20vs-20real.png",
      technologies: ["Python", "Tensorflow", "Pandas", "NumPy"],
      liveUrl: "https://github.com/kennyjanson1/AI-Image-Classification.git",
      githubUrl: "https://github.com/kennyjanson1/AI-Image-Classification.git",
    },
    {
      title: "Relapse Predictor",
      description:
        "A website that can predict if the user will relapse or not from schizophrenia using machine learning models.",
      image: "/images/relapsepredictor.jpeg",
      technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Flask", "React"],
      liveUrl: "https://github.com/Oostitin11/Schizoprenia",
      githubUrl: "https://github.com/Oostitin11/Schizoprenia",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Froakiez" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
