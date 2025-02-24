'use client';

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    name: string;
}

export const ActiveLink = ({ path, name }: Props) => {

    const pathName = usePathname();

    return (
        <Link
            className={`${style.link} ${ pathName === path && style['active-link']}`}
            href={path}
        >
            {name}
        </Link>
    )
}
