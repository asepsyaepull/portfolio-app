import About from "@/components/card-section/about";
import Layout from "@/components/layout";
import Portfolio from "@/components/card-section/portfolio";
import Contact from "@/components/card-section/contact";
import { Services } from "@/components/card-section/services";

export default function Home() {
  return (
    <Layout>
        <About />
        <Services />
        <Portfolio />
        <Contact />
    </Layout>
  )
}
