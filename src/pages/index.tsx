import localFont from "next/font/local";
import Profile from "@/components/card-section/profile";
import Intro from "@/components/card-section/intro";
import PortfolioImage from "@/components/card-section/portfolio-image";
import About from "@/components/card-section/about";
import TechStack from "@/components/card-section/tech-stack";
import Newsletter from "@/components/card-section/news-letter";
import ThemeToggle from "@/components/card-section/theme-toggle";
import Resources from "@/components/card-section/resources";
import SocialLinks from "@/components/card-section/social-links";
import CopyEmail from "@/components/card-section/copy-email";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-[#d4d4d8] p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Profile />
        <Intro />
        <PortfolioImage src="/portfolio-1.jpg" alt="Portfolio 1" />
        <About />
        <PortfolioImage src="/portfolio-2.jpg" alt="Portfolio 2" />
        <PortfolioImage src="/portfolio-3.jpg" alt="Portfolio 3" />
        <TechStack />
        <Newsletter />
        <ThemeToggle />
        <Resources />
        <SocialLinks />
        <CopyEmail />
      </div>
    </main>
  )
}
