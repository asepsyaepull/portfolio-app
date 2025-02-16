import Image from "next/image"

interface PortfolioImageProps {
    src: string
    alt: string
}

export default function PortfolioImage({ src, alt }: PortfolioImageProps) {
    return (
        <div className="rounded-3xl overflow-hidden bg-[#18181b] aspect-square">
            <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
            />
        </div>
    )
}