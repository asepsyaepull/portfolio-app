import Image from "next/image"

export default function Profile() {
    return (
        <div className="rounded-3xl overflow-hidden bg-[#18181b] aspect-square max-w-xs mx-auto md:max-w-md lg:max-w-lg">
            <Image
                src="/profile.jpg"
                alt="Profile"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
            />
        </div>
    )
}
