import { Moon } from "lucide-react"
import { Switch } from "@/components/ui/switch"

export default function ThemeToggle() {
    return (
        <div className="rounded-3xl bg-[#18181b] p-8 flex items-center justify-center">
            <Switch>
                <Moon className="w-5 h-5" />
            </Switch>
        </div>
    )
}