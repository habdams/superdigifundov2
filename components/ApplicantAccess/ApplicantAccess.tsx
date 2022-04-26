import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

export function ApplicantAccess() {
    const [accessCode, setAccessCode] = useState("");

    function timeout(delay: number) {
        return new Promise((res) => setTimeout(res, delay));
    }

    const handleAccessCode = async (e) => {
        if (accessCode == "digifundo22") {
            await timeout(500);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Fetching information for you...",
                showConfirmButton: false,
                timer: 1500,
            });
            await timeout(2500);
            return (window.location.href = "/update/update-form");
        } else {
            await timeout(500);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorrect access code!",
            });
        }
    };
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <Image src={"/padlock.svg"} height={75} width={75} />
                <div className="flex flex-col items-center my-10">
                    <h1 className="text-sm p-2 rounded border border-none bg-pink-100 text-pink-600 mb-2">
                        Anwendungs-ID
                    </h1>
                    <p className="text-4xl font-mono mb-5 px-2">68HTU789</p>
                    <p className="px-2 max-w-xl text-center text-gray-600">
                        Bitte geben Sie den an Ihre E-Mail gesendeten
                        Zugangscode in das Feld unten ein.
                    </p>
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="zugangscode"
                        className=" mb-1 text-gray-800"
                    >
                        Zugangscode
                    </label>
                    <span className="flex">
                        <input
                            type="text"
                            name="Zugangscode"
                            id="zugangscode"
                            className=" border border-gray-200 text-pink-600 focus:ring-pink-400 focus:border-pink-400"
                            value={accessCode}
                            onChange={(e) => setAccessCode(e.target.value)}
                        />
                        <a
                            className="py-2 px-10 bg-pink-600 text-white cursor-pointer"
                            onClick={handleAccessCode}
                        >
                            Einreichen
                        </a>
                    </span>
                </div>
            </div>
        </>
    );
}
