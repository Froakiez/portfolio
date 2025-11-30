"use client"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      title: "Email",
      value: "joshua.fariman@gmail.com",
      href: "mailto:joshua.fariman@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "joshua-fariman-742452298",
      href: "https://www.linkedin.com/in/joshua-fariman-742452298/",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Froakiez",
      href: "https://github.com/Froakiez",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-12 leading-relaxed text-center">
              I'm always interested in new opportunities and exciting projects. Feel free to reach out through any of
              these channels!
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {contactLinks.map((item, index) => (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg h-full flex flex-col items-center text-center cursor-pointer">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
