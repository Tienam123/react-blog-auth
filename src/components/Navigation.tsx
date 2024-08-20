import {Link} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.ts";
import AuthNav from "./AuthNav.tsx";
import UserMenu from "./UserMenu.tsx";

const Navigation = () => {
    const {isLoggedIn} = useAuth()
    const navLinks: {
        id: number,
        label: string,
        href: string,
        auth:boolean
    }[] = [
        {
            id: 1,
            label: 'Home',
            href: '/',
            auth: false,
        },
        {
            id: 2,
            label: 'Blog',
            href: '/blog',
            auth: true,

        },
        {
            id: 5,
            label: 'Books',
            href: '/books',
            auth: false,
        },
        {
            id: 3,
            label: 'About',
            href: '/about',
            auth: false,

        },
        {
            id: 4,
            label: 'Contact',
            href: '/contacts',
            auth: false,
        }
    ];
    return (
        <nav className='flex justify-between'>
            <Link to="" className='font-semibold'>Home</Link>
            <ul className='flex justify-center items-center gap-3 font-semibold'>
                {navLinks.filter(link => !link.auth || (link.auth && isLoggedIn)).map(link => (<li key={link.id}
                >
                    <Link className='hover:text-gray-300 transition-all' to={link.href}
                    >{link.label}</Link>
                </li>))}
            </ul>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}

        </nav>
    );
};
export default Navigation