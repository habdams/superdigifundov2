import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="flex bg-slate-900 text-gray-100 flex-col md:flex-row p-8">
                <div className="md:w-4/5">
                    <ul className="flex flex-col md:flex-row mb-4">
                        <li className="mb-2 mx-4">
                            <Link href="" passHref>
                                <a>StMI</a>
                            </Link>
                        </li>
                        <span className="hidden md:inline">|</span>
                        <li className="mb-2 mx-4">
                            <Link href="" passHref>
                                <a>Impressum</a>
                            </Link>
                        </li>
                        <span className="hidden md:inline">|</span>
                        <li className="mb-2 mx-4">
                            <Link href="" passHref>
                                <a>Benutzerhinweise</a>
                            </Link>
                        </li>
                        <span className="hidden md:inline">|</span>
                        <li className="mb-2 mx-4">
                            <Link href="" passHref>
                                <a>Datenschutz</a>
                            </Link>
                        </li>
                        <span className="hidden md:inline">|</span>
                        <li className="mb-2 mx-4">
                            <Link href="" passHref>
                                <a>Beratung und Kontakt</a>
                            </Link>
                        </li>
                        <span className="hidden md:inline">|</span>
                        <li className="mb-2 mx-4">
                            <Link href="" passHref>
                                <a>Sitemap</a>
                            </Link>
                        </li>
                    </ul>
                    <p className="text-sm mx-4">
                        Zum Bayerischen Staatsministerium für Innen.
                    </p>
                </div>
                <div
                    className="md:w-1/5 sm:mt-10
                md:mt-0 justify-start"
                >
                    <a className="py-2 px-4 bg-rose-400 text-white">
                        Gib uns Feedback
                    </a>
                </div>
            </div>
        </>
    );
}
