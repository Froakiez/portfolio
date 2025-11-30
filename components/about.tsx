export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            About <span className="text-primary">Me</span>
          </h2>

          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Computer Science student passionate about building AI that solves real-world problems. I love
              working on projects that involve understanding data, designing models, and deploying practical solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Whether it's detecting phishing URLs, predicting health risks, or recognizing sign language, I enjoy the
              challenge of making AI more accessible and useful. I'm committed to continuous learning and improving
              every project I create.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
