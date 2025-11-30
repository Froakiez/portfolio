import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "SQL", "C"],
    },
    {
      title: "Machine Learning & AI",
      skills: [
        "Supervised Learning",
        "Neural Networks",
        "Computer Vision",
        "NLP Preprocessing",
        "Model Evaluation",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "PyTorch",
      ],
    },
    {
      title: "Tools & Frameworks",
      skills: [
        "Jupyter Notebook",
        "Google Colab",
        "Flask",
        "Streamlit",
        "Git & GitHub",
        "VS Code",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      title: "Currently Learning",
      skills: [
        "Deep Learning with PyTorch",
        "Model Deployment",
        "Advanced NLP",
        "Data Engineering fundamentals",
        "Cloud Computing",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Skills & <span className="text-primary">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
