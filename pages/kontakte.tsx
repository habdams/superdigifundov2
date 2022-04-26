import { Fragment, useState, useEffect, ReactElement } from "react";
import Layout from "../components/layout";
import {
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
    ChevronRightIcon,
    MailIcon,
    SearchIcon,
} from "@heroicons/react/solid";
import { ChevronLeftIcon, FilterIcon } from "@heroicons/react/solid";
import { userSelector } from "../features/authReducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const profile = {
    name: "Sabina Olger",
    imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    coverImageUrl:
        "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    fields: {
        Telefon: "(555) 123-4567",
        Email: "sabina.olger@gmail.com",
        Titel: "Fondsspezialist",
        Team: "Wirtschaftliche Wiederherstellung",
    },
};

const team = [
    {
        name: "Leslie Alexander",
        griff: "lesliealexander",
        role: "Co-Founder / CEO",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Michael Foster",
        griff: "michaelfoster",
        role: "Co-Founder / CTO",
        imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
];

const candidates = [
    {
        name: "Sabina Olger",
        email: "sabina.olger@akte.com",
        imageUrl:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        applied: "January 7, 2020",
        appliedDatetime: "2020-07-01T15:34:56",
        role: "Bonus Experte",
        status: "Vollständiges Telefonscreening",
    },
    {
        name: "Jorge Kimmich",
        email: "jorge.kimmich@gmail.com",
        imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        applied: "January 7, 2020",
        appliedDatetime: "2020-07-01T15:34:56",
        role: "Bonus Experte",
        status: "Vollständiges Telefonscreening",
    },
];
const publishingOptions = [
    {
        name: "Published",
        beschreibung:
            "This job posting can be viewed by anyone who has the link.",
        aktuell: true,
    },
    {
        name: "Draft",
        beschreibung: "This job posting will no longer be publicly accessible.",
        aktuell: false,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Kontakte = () => {
    const [selected, setSelected] = useState(publishingOptions[0]);

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full max-h-screen flex flex-row overflow-hidden relative">
                {/* Navbar */}
                <main className="pt-8 pb-16 w-1/2 max-h-screen overflow-auto divide-x">
                    <div className="max-w-7xl mx-auto border-r-2">
                        <div className="px-4 sm:px-0">
                            <div className="px-10 pt-6 pb-4 w-2/3">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Verzeichnis
                                </h2>
                                <p className="mt-1 text-sm text-gray-600">
                                    Suche im Verzeichnis der 300 Mitarbeiter
                                </p>
                                <form
                                    className="mt-6 flex space-x-4"
                                    action="#"
                                >
                                    <div className="flex-1 min-w-0">
                                        <label
                                            htmlFor="search"
                                            className="sr-only"
                                        >
                                            Suche
                                        </label>
                                        <div className="relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <SearchIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <input
                                                type="search"
                                                name="search"
                                                id="search"
                                                className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                                placeholder="Suche"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                    >
                                        <FilterIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Suche</span>
                                    </button>
                                </form>
                            </div>

                            {/* Tabs */}

                            <div className="hidden sm:block">
                                <div className="border-b border-gray-200"></div>
                            </div>
                        </div>

                        {/* Stacked list */}
                        <ul
                            role="list"
                            className="mt-5 divide-y divide-gray-200 sm:mt-0 px-10"
                        >
                            {candidates.map((candidate) => (
                                <li key={candidate.email}>
                                    <a href="#" className="group block">
                                        <div className="flex items-center py-5 px-4 sm:py-6 sm:px-0">
                                            <div className="min-w-0 flex-1 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-12 w-12 rounded-full group-hover:opacity-75"
                                                        src={candidate.imageUrl}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                                    <div>
                                                        <p className="text-sm font-medium text-purple-600 truncate">
                                                            {candidate.name}
                                                        </p>
                                                        <p className="mt-2 flex items-center text-sm text-gray-500">
                                                            <MailIcon
                                                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                            <span className="truncate">
                                                                {
                                                                    candidate.email
                                                                }
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="hidden md:block">
                                                        <div>
                                                            <p className="text-sm text-gray-900">
                                                                {candidate.role}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <ChevronRightIcon
                                                    className="h-5 w-5 text-gray-400 group-hover:text-gray-700"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Pagination */}
                        <nav
                            className="border-t border-gray-200 flex items-center justify-between sm:px-0 px-10"
                            aria-label="Pagination"
                        >
                            <div className="-mt-px w-0 flex-1 flex px-10">
                                <a
                                    href="#"
                                    className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
                                >
                                    <ArrowNarrowLeftIcon
                                        className="mr-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                    Vorherige
                                </a>
                            </div>
                            <div className="hidden md:-mt-px md:flex">
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                >
                                    1
                                </a>
                                {/* Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" */}
                                <a
                                    href="#"
                                    className="border-purple-500 text-purple-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                    aria-current="page"
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                >
                                    3
                                </a>
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                >
                                    4
                                </a>
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                >
                                    5
                                </a>
                                <a
                                    href="#"
                                    className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                >
                                    6
                                </a>
                            </div>
                            <div className="-mt-px w-0 flex-1 flex justify-end px-10">
                                <a
                                    href="#"
                                    className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
                                >
                                    Weiter
                                    <ArrowNarrowRightIcon
                                        className="ml-3 h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </nav>
                    </div>
                </main>
                <div className="w-1/2 flex-shrink-0 max-h-screen overflow-auto">
                    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                        {/* Breadcrumb */}
                        <nav
                            className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
                            aria-label="Breadcrumb"
                        >
                            <a
                                href="#"
                                className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
                            >
                                <ChevronLeftIcon
                                    className="-ml-2 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <span>Verzeichnis</span>
                            </a>
                        </nav>

                        <article>
                            {/* Profile header */}
                            <div>
                                <div>
                                    <img
                                        className="h-32 w-full object-cover lg:h-48"
                                        src={profile.coverImageUrl}
                                        alt=""
                                    />
                                </div>
                                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                        <div className="flex">
                                            <img
                                                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                src={profile.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                            <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                <h1 className="text-2xl font-bold text-gray-900 truncate">
                                                    {profile.name}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                                        <h1 className="text-2xl font-bold text-gray-900 truncate">
                                            {profile.name}
                                        </h1>
                                    </div>
                                </div>
                            </div>

                            {/* Description list */}
                            <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    {Object.keys(profile.fields).map(
                                        (field) => (
                                            <div
                                                key={field}
                                                className="sm:col-span-1"
                                            >
                                                <dt className="text-sm font-medium text-gray-500">
                                                    {field}
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {profile.fields[field]}
                                                </dd>
                                            </div>
                                        )
                                    )}
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Über
                                        </dt>
                                    </div>
                                </dl>
                            </div>

                            {/* Team member list */}
                            <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
                                <h2 className="text-sm font-medium text-gray-500">
                                    Teammitglied
                                </h2>
                                <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {team.map((person, index) => (
                                        <div
                                            key={index}
                                            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                                        >
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={person.imageUrl}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <a
                                                    href="#"
                                                    className="focus:outline-none"
                                                >
                                                    <span
                                                        className="absolute inset-0"
                                                        aria-hidden="true"
                                                    />
                                                    <p className="text-sm font-medium text-gray-900">
                                                        {person.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500 truncate">
                                                        {person.role}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </>
    );
};

Kontakte.getLayout = function getLayout(kontakte: ReactElement) {
    return <Layout>{kontakte}</Layout>;
};

export default Kontakte;
