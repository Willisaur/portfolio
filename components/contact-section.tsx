import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
	{
		name: "LinkedIn",
		icon: Linkedin,
		url: "https://linkedin.com/in/willstarling",
		color: "hover:text-blue-600",
	},
	{
		name: "GitHub",
		icon: Github,
		url: "https://github.com/willisaur",
		color: "hover:text-gray-900",
	},
	{
		name: "Email",
		icon: Mail,
		url: "mailto:willstar2003+pf-site-inquiry@gmail.com",
		color: "hover:text-red-500",
	},
]

export function ContactSection() {
	return (
		<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto text-center">
				<div className="mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
						Let's Connect
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
						I'm always interested in new opportunities and collaborations. Let's
						connect and discuss how we can work together!
					</p>
				</div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-3 px-6 py-4 border-2 border-muted-foreground hover:border-current transition-colors rounded-lg ${link.color} group w-full sm:w-auto justify-center sm:justify-start max-w-xs`}
              aria-label={link.name}
            >
              <link.icon className="w-8 h-8" />
              <span className="text-lg font-medium">{link.name}</span>
            </a>
          ))}
        </div>
				<div className="mt-16 pt-8 border-t border-border">
					<p className="text-muted-foreground text-sm">
						© 2025 Will Starling. All Rights Reserved.
					</p>
				</div>
			</div>
		</section>
	)
}
