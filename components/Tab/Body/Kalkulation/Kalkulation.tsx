import type { ReactElement } from "react";
import React from "react";

const data = [
    {
        title: "Anzahl der Krippenplätze",
        value: 30,
        type: "normal",
    },
    {
        title: "Anzahl der Kindergartenplätze",
        value: 54,
        type: "normal",
    },
    {
        title: "Gesamtzahl Betreuungsplätze",
        value: 84,
        type: "normal",
    },
    {
        title: "Anzahl neue Plätze",
        value: 30,
        type: "normal",
    },
    {
        title: "Bestandsfläche",
        value: 0.0,
        type: "meter",
    },
    {
        title: "Erweiterungsfläche",
        value: 606.58,
        type: "meter",
    },
    {
        title: "Gesamtfläche",
        value: 606.58,
        type: "meter",
    },
    {
        title: "Förderfähige Fläche nach Summenraumprogramm",
        value: 624.0,
        type: "meter",
    },
    {
        title: "Tatsächlich förderfähig",
        value: 606.58,
        type: "meter",
    },
    {
        title: "Kostenrichtwert",
        value: 5010.0,
        type: "meterEuro",
    },
    {
        title: "FAG-Fördersatz",
        value: 65,
        type: "percent",
    },
    {
        title: "Zuweisungsfähigen Kosten Gesamt",
        value: 3038965.8,
        type: "euro",
    },
    {
        title: "Kommunaler Baukostenzuschuss",
        value: 3038965.8,
        type: "euro",
    },
    {
        title: "Zuweisungsfähigen Kosten daher",
        value: 3038965.8,
        type: "euro",
    },
    {
        title: "FAG-Zuweisung",
        value: 1975327.77,
        type: "euro",
    },
    {
        title: "FAG-Zuweisung gerundet",
        value: 1975000.0,
        type: "euro",
    },
];

const tabs = [
    { name: "Raten Zahlung ", href: "#", current: true },
    { name: "Einmalige Zahlung ", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const Kalkulation = () => (
    <>
        <div className="font-mono hover:text-black-400 text-black-600 h-full py-6 mt-4  px-6">
            <div className="container h-full">
                <div className="flex flex-row">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                    </svg>
                    <h1 className="text-2xl text-mono">Kalkulation</h1>
                </div>
                <div className="flex flex-row mt-8 h-auto">
                    <div className="w-7/12 h-full flex flex-row border-r-2 px-2">
                        <ul className="flex flex-col w-full">
                            {data.map((value, index) => (
                                <li
                                    className="flex flex-row justify-center items-center mt-4"
                                    key={index}
                                >
                                    <div className="flex-1 mr-12">
                                        <p className="text-sm font-sans">
                                            {value["title"]}
                                        </p>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="sr-only"
                                        ></label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="h-9 shadow-sm focus:ring-pink-500 focus:border-pink-500 block w-full sm:text-sm border-gray-300 rounded-md text-right w-40"
                                            placeholder="you@example.com"
                                            defaultValue={value["value"]}
                                        />
                                    </div>
                                    <span className="w-16 px-2 font-sans text-sm">
                                        {value["type"] == "normal" ? (
                                            " "
                                        ) : value["type"] == "meter" ? (
                                            <span>
                                                m<sup>2</sup>
                                            </span>
                                        ) : value["type"] == "meterEuro" ? (
                                            <span>
                                                &#8364; / m<sup>2</sup>
                                            </span>
                                        ) : value["type"] == "percent" ? (
                                            <span>%</span>
                                        ) : (
                                            <span>&#8364;</span>
                                        )}
                                    </span>
                                </li>
                            ))}
                            <div className="flex-shrink-0 w-full mt-8">
                                <button
                                    type="submit"
                                    className="flex text-center justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 w-5/12 font-semibold h-12"
                                >
                                    Kalkulate
                                </button>
                            </div>
                        </ul>
                    </div>
                    <div className="w-5/12 h-full flex">
                        <div className="container w-11/12 bg-zinc-50 shadow-xl content-evenly ml-5 flex flex-col pb-12 rounded">
                            <div className="w-full">
                                <div className="hidden sm:block w-full">
                                    <nav className="flex" aria-label="Tabs">
                                        {tabs.map((tab) => (
                                            <a
                                                key={tab.name}
                                                href={tab.href}
                                                className={classNames(
                                                    tab.current
                                                        ? "bg-pink-100 text-pink-700"
                                                        : " text-gray-600 hover:text-gray-800",
                                                    " py-2 font-medium text-sm rounded-tl-md rounded-tr-md w-1/2 h-14 items-center text-center justify-center flex"
                                                )}
                                                aria-current={
                                                    tab.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {tab.name}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="w-full">
                                <ul className="flex flex-col w-full font-sans">
                                    <li className="flex flex-row justify-center items-center mt-8 w-full px-4 mt-12">
                                        <div className="flex-1 mr-12 w-2/3">
                                            <p className="text-sm font-sans font-semibold">
                                                Gesamtkosten
                                            </p>
                                        </div>
                                        <div className="mr-4 w-1/3">
                                            <p className="text-sm font-sans font-bold text-pink-500">
                                                4,306,713.40
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex flex-row justify-center items-center mt-4 w-full px-4 mt-12">
                                        <div className="flex-1 mr-12 w-2/3">
                                            <p className="text-sm font-sans">
                                                Einbehalt
                                                <br />
                                                <span className="text-gray-700 text-xs">
                                                    20% der FAG-Zuweisung
                                                </span>
                                            </p>
                                        </div>
                                        <div className="mr-4 w-1/3">
                                            <p className="text-sm font-sans">
                                                395,000.00
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex flex-row justify-center items-center mt-4 w-full px-4 mt-12">
                                        <div className="flex-1 mr-12 w-2/3">
                                            <p className="text-sm font-sans">
                                                90% der zuweisungsfähigen Kosten
                                                nach FAZR
                                            </p>
                                        </div>
                                        <div className="mr-4 w-1/3">
                                            <p className="text-sm font-sans">
                                                2,735,000.00
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex flex-row justify-center items-center mt-4 w-full px-4 mt-12">
                                        <div className="flex-1 mr-12 w-2/3">
                                            <p className="text-sm font-sans font-semibold">
                                                Gesamtzuweisung FAZR+Krippe
                                            </p>
                                        </div>
                                        <div className="mr-4 w-1/3">
                                            <p className="text-sm font-sans text-teal-500 font-semibold">
                                                1,975,000.00
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex flex-row justify-center items-center mt-4 w-full px-4 mt-12">
                                        <div className="flex-1 mr-12 w-2/3">
                                            <p className="text-sm font-sans font-semibold">
                                                Alle 6 Monate eine Auszahlung
                                                von
                                            </p>
                                        </div>
                                        <div className="mr-4 w-1/3">
                                            <p className="text-sm font-sans text-pink-500 font-semibold">
                                                800,000
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
