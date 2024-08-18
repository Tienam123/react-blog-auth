import {Link, useLocation} from "react-router-dom";

const Navigation = () => {
    const router = useLocation();
    const navLinks: {
        id: number,
        label: string,
        href: string
    }[] = [
        {
            id: 1,
            label: 'Home',
            href: '/'
        },
        {
            id: 2,
            label: 'Blog',
            href: '/blog'
        }, {
            id: 3,
            label: 'About',
            href: '/about'
        },
        {
            id: 4,
            label: 'Contact',
            href: '/contacts'
        }
    ];
    return (
        <nav>
            <ul className='flex justify-center items-center gap-3 font-semibold'>
                {navLinks.map(link => (<li key={link.id}
                >
                    <Link to={link.href}
                    className={link.href === router.pathname ? 'text-red-400':''}
                    >{link.label}</Link>
                </li>))}
            </ul>
        </nav>
    );
};
export default Navigation