import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/headshot.jpg"
            alt="Profile picture"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
          />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
          Hi, I'm <span className="text-primary">Will Starling 👋🏻</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-balance">
          A new graduate software engineer passionate about impact, leadership, and cutting-edge tech.
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Welcome to my portfolio! I'm excited to share my journey in software development, from side projects to
          real-world applications. Let's build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-3">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="mt-16">
          <a
            href="#about"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
