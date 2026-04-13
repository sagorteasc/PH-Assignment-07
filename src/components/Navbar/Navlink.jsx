"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children }) => {

    const pathname = usePathname()

    return (
        <Link
            className={`font-medium  
                ${pathname === href ?
                    "bg-[#244D3F] btn rounded text-white w-fit ml-2 md:ml-0"
                    : "p-0 ml-2 text-[#64748B] md:ml-0"
                }`}
            href={href}>
            {children}
        </Link>
    );
};

export default Navlink;