import Image from "next/image";
import Navlink from "./Navlink";

const Navbar = () => {

    const navItems = [
        {
            path: "/",
            name: "Home",
            logo: "🏠︎"
        },
        {
            path: "/timeline",
            name: "Timeline",
            logo: "◴"
        },
        {
            path: "/stats",
            name: "Stats",
            logo: "↗"
        },
    ]

    return (
        <div className="shadow-md">
            <nav className="navbar container mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex justify-center gap-2">
                            {
                                navItems.map((navItem, idx) => (
                                    <li key={idx}>
                                        <Navlink href={navItem.path}>
                                            {navItem.logo} {navItem.name}
                                        </Navlink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <Image
                        className="hidden md:flex"
                        src="/assets/logo.png"
                        alt="Navbar Logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="navbar-end">
                    <div className="hidden md:flex">
                        <ul className="menu menu-horizontal flex items-center gap-5">
                            {
                                navItems.map((navItem, idx) => (
                                    <li key={idx}>
                                        <Navlink href={navItem.path}>
                                            {navItem.logo} {navItem.name}
                                        </Navlink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <Image
                        className="md:hidden"
                        src="/assets/logo.png"
                        alt="Navbar Logo"
                        width={200}
                        height={200}
                    />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;