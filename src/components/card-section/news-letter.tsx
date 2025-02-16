import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
    return (
        <div className="rounded-3xl bg-[#18181b] p-8 col-span-full md:col-span-2">
            <h3 className="text-2xl text-white mb-6">Get design tips & guides straight to your inbox for free!</h3>
            <div className="flex gap-4">
                <Input type="email" placeholder="Your email address" className="bg-[#090909] border-0 rounded-full" />
                <Button className="rounded-full px-6">Subscribe</Button>
            </div>
        </div>
    )
}