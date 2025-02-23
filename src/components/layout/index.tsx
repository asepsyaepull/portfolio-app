import { ReactNode, JSX } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] p-6">
            <div className="max-w-6xl mx-auto">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
