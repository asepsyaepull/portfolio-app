import Image from "next/image"

const technologies = [
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
]

export default function TechStack() {
    return (
        <div className="rounded-3xl bg-[#18181b] p-8">
            <h3 className="text-xl mb-6">Stack I use</h3>
            <div className="flex gap-4">
                {technologies.map((tech) => (
                    <div key={tech.name} className="w-12 h-12 bg-[#090909] rounded-full flex items-center justify-center">
                        <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} width={24} height={24} />
                    </div>
                ))}
            </div>
        </div>
    )
}