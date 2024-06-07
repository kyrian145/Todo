import { ReactNode } from "react";
import Link from "next/link";

interface hy {
    children: ReactNode;
}

export default function Mum({ children }: hy) {
    const Links = [
        { href: "/contact-us", label: "contact-us" },
        { href: "/share", label: "share" },
        { href: "/share", label: "share" },
        { href: "/share", label: "share" },
        { href: "/share", label: "share" }
    ];

    return (
        <>
            <ul className="flex mx-4">
                {Links.map(({ href, label }) => (
                    <li key={href} className="px-4 text-xl">
                        <Link href={href}>{label}</Link>
                    </li>
                ))}
            </ul>

            <div>{children}</div>
        </>
    );
}

