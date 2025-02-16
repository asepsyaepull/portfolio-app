import { Button } from "@/components/ui/button"

export default function CopyEmail() {
    return (
        <div className="rounded-3xl bg-[#18181b] p-8">
            <h3 className="text-2xl text-white mb-6">Get design tips & guides straight to your inbox for free!</h3>
            <Button className="rounded-full w-full" variant="secondary">
                Copy email
            </Button>
        </div>
    )
}

