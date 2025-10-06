import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "International Research Delegate",
    description:
      "Presented findings in Rome, Italy, to NATO. Researched mediation & negotiation techniques and provided recommendations for artificial intelligence use.",
    image: "/research-team.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: null,
    demoUrl: "https://www.liberty.edu/news/2025/01/08/liberty-students-present-research-on-intercultural-peacekeeping-for-nato-centre-of-excellence-in-rome/",
    hasDemo: false,
    featured: true,
  },
  {
    title: "Competitive Programming Club Vice President",
    description:
    "Competed in ICPC, taught advanced programming topics, hosted recruitment sessions, and managed $3,000 in club budget.",
    image: "/club-vp.jpg",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: null,
    demoUrl: "https://lucpc.org/",
    hasDemo: false,
    featured: false,
  },
  {
    title: "Things To Rent - Hackathon Site",
    description:
      "My 12-hour hackathon submission created by myself and two others. A full-stack site using drizzle, next.js, tailwind CSS, and turso DB.",
    image: "/things-to-rent.png",
    technologies: ["React Native", "OpenWeather API", "Redux"],
    githubUrl: "https://github.com/wzid/things-to-rent",
    demoUrl: "https://hackathon-self-six.vercel.app",
    hasDemo: true,
    featured: false,
  },
  {
    title: "Submission Saver - Chrome Extension",
    description:
      "A Chrome extension that automates uploading LeetCode submissions to GitHub. Includes OAuth integration and has 70+ users.",
    image: "/submission-saver.png",
    technologies: ["Next.js", "Chart.js", "PostgreSQL"],
    githubUrl: "https://github.com/Willisaur/LeetCode-to-GitHub",
    demoUrl: "https://bit.ly/L2G-CWS-v2",
    hasDemo: true,
    featured: false,
  },
  {
    title: "TAWG Bot Script",
    description:
      "A script to track daily Bible-reading accountability posts on GroupMe. Executes daily with GitHub Actions.",
    image: "/tawg-bot.jpeg",
    technologies: ["Django", "Python", "SQLite", "Bootstrap"],
    githubUrl: "https://github.com/Willisaur/TAWG-Bot-Script",
    demoUrl: "",
    hasDemo: false,
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Projects & Extracurriculars</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* {project.featured && <Badge className="absolute top-3 left-3 bg-primary">Featured</Badge>} */}
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                {/* <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div> */}
                <div className="flex gap-3 pt-2">
                  {project.demoUrl && (
                    <Button size="sm" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {project.hasDemo ? "Live Demo" : "Website"}
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
