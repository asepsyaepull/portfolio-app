import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
    return (
        <div className="rounded-3xl bg-[#18181b] p-8 flex flex-col justify-between">
            <div>
                <span className="text-sm font-medium mb-4 block">ABOUT</span>
                <p className="text-2xl text-white">
                    I am passionate about design and frontend development, and I enjoy solving problems.
                </p>
            </div>
            <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full ml-auto">
                <ArrowUpRight className="w-5 h-5" />
            </Button>
        </div>
    )
}