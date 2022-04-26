import Sidebar from "./sidebar";
import TopHeader from "./top-header";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col h-screen md-flex pb-28">
                <TopHeader />
                <div className="w-full flex h-auto  flex-col items-center justify-center">
                    <div className="w-screen">{children}</div>
                </div>
                <Footer />
            </div>
        </>
    );
}
