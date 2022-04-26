import React, { useState } from "react";
import Modal from "react-modal";
import { PhoneCall, Envelope } from "phosphor-react";

// const url = "/pdfs/kindergarden.pdf"
export default function PdfViewer(props) {
    const { title, item, name } = props;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    //When document loads successfully
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <>
            <div className="main">
                <button
                    className="bg-pink-500 text-white px-8 py-2 rounded-md text-sm"
                    onClick={openModal}
                >
                    {title}
                </button>
                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="flex flex-row bg-black/60 backdrop-blur-sm items-center justify-center h-screen"
                >
                    <div className="flex items-center justify-center bg-white max-h-screen">
                        <div className="w-6/8 m-auto">
                            <object
                                type="application/pdf"
                                data={item}
                                width="700"
                                height="1000"
                            ></object>
                        </div>

                        <div className=" w-2/8 px-8 flex justify-start">
                            <div className="flex flex-col justify-between text-left">
                                <h1 className=" text-2xl font-semibold my-6">
                                    {name}
                                </h1>
                                <div className="flex flex-col p-2 mb-4 gap-2">
                                    <label
                                        htmlFor="flache"
                                        className="flex gap-2 items-center text-base mt-4"
                                    >
                                        Flache
                                        <input
                                            type="text"
                                            name="flache"
                                            id="flache"
                                            placeholder="Geben Sie die Fläche in sqm ein"
                                            className="rounded h-12 p-2 text-sm"
                                        />
                                    </label>

                                    <label
                                        htmlFor="kinder"
                                        className="flex gap-2 items-center text-base mt-4"
                                    >
                                        Kinder
                                        <input
                                            type="text"
                                            name="kinder"
                                            id="kinder"
                                            placeholder="Geben Sie die Anzahl der Kinder an"
                                            className="rounded h-12 p-2 text-sm"
                                        />
                                    </label>
                                </div>

                                <div className="my-4">
                                    <span className="">
                                        <h3 className="font-bold text-lg">
                                            Landesratesamt
                                        </h3>
                                        <h3 className="font-bold text-lg text-pink-500 mt-5">
                                            Frau Mai
                                        </h3>
                                    </span>

                                    <span className="flex gap-4 items-center mb-2 mt-1 text-sm">
                                        <p>+49 92 52909302</p>
                                        <PhoneCall />
                                    </span>

                                    <span className="flex gap-4 items-center mb-2 mt-1 text-sm">
                                        <p>helge.mai@bayern.de</p>
                                        <Envelope />
                                    </span>
                                </div>

                                <div className="flex flex-row items-center justify-start mt-10">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="py-3 px-8 bg-white border border-black mr-4 rounded text-sm text-semibold hover:text-gray-900"
                                    >
                                        abbrechen
                                    </button>

                                    <button
                                        type="button"
                                        className="py-3 px-8 bg-pink-500 text-white rounded text-sm text-semibold hover:bg-pink-700"
                                    >
                                        speichern
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
}
