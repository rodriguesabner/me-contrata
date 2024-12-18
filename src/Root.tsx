import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Root() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
