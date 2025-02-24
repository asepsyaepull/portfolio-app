import Image from "next/image"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
    { name: "twitter", icon: "/icons/twitter.svg" },
    { name: "dribbble", icon: "/icons/dribbble.svg" },
    { name: "instagram", icon: "/icons/instagram.svg" },
    { name: "linkedin", icon: "/icons/linkedin.svg" },
    { name: "behance", icon: "/icons/behance.svg" },
    { name: "mail", icon: null },
]

export default function SocialLinks() {
    return (
        <div className="rounded-3xl bg-zinc-900 border border-slate-700 p-8 flex flex-wrap gap-4 justify-center md:justify-start">
            {socialLinks.map((social) => (
                <Button key={social.name} variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-[#090909]">
                    <span className="sr-only">{social.name}</span>
                    {social.name === "mail" ? (
                        <Mail className="w-5 h-5" />
                    ) : (
                        <Image src={social.icon || "/placeholder.svg"} alt={social.name} width={20} height={20} />
                    )}
                </Button>
            ))}
        </div>
    )
}