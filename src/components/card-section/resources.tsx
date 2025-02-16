import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resources() {
    return (
        <div className="rounded-3xl bg-[#18181b] p-8 flex flex-col justify-between">
            <div>
                <span className="text-sm font-medium mb-4 block">RESOURCES</span>
                <h3 className="text-2xl text-white">Resources to speed your workflow</h3>
            </div>
            <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full ml-auto">
                <ArrowUpRight className="w-5 h-5" />
            </Button>
        </div>
    )
}