import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "./ui/button"

export function SocialLinks({ socialMedia, className = "" }) {
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
  }

  return (
    <div className={`flex gap-2 ${className}`}>
      {Object.entries(socialMedia).map(([platform, url]) => {
        const Icon = socialIcons[platform]
        return (
          <Button key={platform} variant="outline" size="sm" asChild>
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span className="capitalize">{platform}</span>
            </a>
          </Button>
        )
      })}
    </div>
  )
}
