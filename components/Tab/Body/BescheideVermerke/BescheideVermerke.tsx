import React, { useState } from "react";
import { UserPlus, FilePdf, FileDoc, ArrowRight } from "phosphor-react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { BescheideDropdown } from "./BescheideDropdown";

const documents = [
    {
        name: "Zuwendungsbescheid",
        type: "pdf",
        notice: "Wenn du mit dem Bescheid fertig bist, schick ihn sobald wie möglich an die Gemeinde.",
        url: "/pdfs/Zuwendungscbescheid.pdf",
    },
    {
        name: "Auszahlungsbescheid",
        type: "pdf",
        notice: "Wenn du mit dem Bescheid fertig bist, schick ihn sobald wie möglich an die Gemeinde.",
        url: "/pdfs/Zuwendungscbescheid.pdf",
    },
    {
        name: "Schlussbescheid",
        type: "pdf",
        notice: "Wenn du mit dem Bescheid fertig bist, schick ihn sobald wie möglich an die Gemeinde.",
        url: "/pdfs/Zuwendungscbescheid.pdf",
    },
];

const default_pdf = "/pdfs/default.pdf";

export const BescheideVermerke = () => {
    const [viewUrl, setViewUrl] = useState(default_pdf);
    const [dropdownState, setDropdownState] = useState([
        {
            id: 0,
            open: false,
        },
        {
            id: 1,
            open: false,
        },
        {
            id: 2,
            open: false,
        },
    ]);

    const handleToggle = (index) => {
        let temp = [...dropdownState];
        temp[index].open = !temp[index].open;
        setDropdownState(temp);
    };

    const handlePdfView = (url) => {
        setViewUrl(url);
    };

    const handleClick = (index, url) => {
        handleToggle(index);
        handlePdfView(url);
    };

    return (
        <>
            <div className="flex py-6 mt-4 ">
                <div className="w-1/2 px-4 ">
                    <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center mb-4">
                        <div className="px-2 flex items-center gap-2">
                            <UserPlus size={32} />
                            <h1 className="text-2xl font-mono">
                                Bescheide & Vermerke
                            </h1>
                        </div>
                    </div>
                    <div className="mb-8">
                        <p className="w-3/4 px-2 text-sm text-neutral-800 mb-4">
                            Hier können Sie die für den Antrag relevanten
                            Dokumente generieren, bearbeiten und an die
                            Gemeinden schicken.
                        </p>
                    </div>
                    <div className="mt-10 justify-center">
                        {documents.map((document, index) => (
                            <div className="flex flex-col" key={index}>
                                <div
                                    key={index}
                                    className="bg-gray-50 p-3 px-2 flex items-center justify-evenly gap-1 bg-stone-100 mt-6 flex flex-row rounded"
                                >
                                    <span className="flex gap-1 w-1/2">
                                        {document.type == "pdf" ? (
                                            <FilePdf size={24} />
                                        ) : (
                                            <FileDoc size={24} />
                                        )}
                                        <p className="text-sm font-semibold">
                                            {document.name}
                                        </p>
                                    </span>
                                    <span className="flex gap-2 w-1/2 justify-center items-center align-center">
                                        <a
                                            href="#"
                                            onClick={(event) => {
                                                event.preventDefault();
                                                handleClick(
                                                    index,
                                                    document.url
                                                );
                                            }}
                                            className="flex"
                                        >
                                            <p className=" py-2 px-10 bg-neutral-300 rounded-lg text-sm align-center">
                                                Ausstehend
                                            </p>
                                            <ChevronRightIcon
                                                className="h-9 w-6 text-gray-400 group-hover:text-gray-700 ml-4"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </span>
                                </div>
                                <div>
                                    <BescheideDropdown
                                        values={index}
                                        open={dropdownState[index].open}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="w-1/2">
                    <object
                        type="application/pdf"
                        data={viewUrl}
                        width="700"
                        height="1000"
                    ></object>
                </aside>
            </div>
        </>
    );
};
