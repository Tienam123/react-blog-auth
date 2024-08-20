import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

const Layout = () => {
    return (
        <div className='w-full h-screen flex flex-col'>
            <Header />
            <main className='flex-1'>
                <Outlet/>
            </main>
            <Footer />
        </div>
    );
};
export default Layout