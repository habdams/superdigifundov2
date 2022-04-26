import Image from "next/image";

import React from "react";

const CreateAccount = () => {

    return (
        <>
            <div className="min-h-full ">
                <div className="flex flex-row min-w-full">
                    <div className="flex-1 flex justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-1/2">
                        <div className="mx-auto w-full max-w-sm lg flex flex-col justify-center items-center">
                            <Image src={"/logo.png"} width={320} height={65} alt="brand image" />
                            <div className="mb-8 mt-6">
                                <h2 className="text-xl text-gray-900 text-center">
                                    Wilkommen zur bayrischen
                                    Förderungsanfragensbearbeitungsplatform
                                </h2>
                            </div>

                            <div className="mt-6 w-full">
                                <form
                                    action="#"
                                    method="POST"
                                    className="space-y-6"
                                >
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="userID"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Persönliche Staats ID
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="userID"
                                                name="userID"
                                                type="text"
                                                value="BAY92389080"
                                                autoComplete="current-password"
                                                disabled
                                                className=" block w-full px-3 py-2 placeholder-gray-400 focus:outline-none border border-none bg-gray-100 rounded-md text-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label
                                            htmlFor="newPassword"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Wähle neues Passwort
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="newPassword"
                                                name="newPassword"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Passwort bestätigen
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="confirmNewPassword"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                            />
                                        </div>
                                        <label htmlFor="userID">
                                            <p className="text-pink-700 text-xs mt-1">
                                            </p>
                                        </label>
                                    </div>

                                    <div>
                                        <button
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:pink-sky-500"
                                        >
                                            Weiter
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="lg:bg-[url('/bg1.png')] lg:w-1/2 bg-cover min-h-screen"></div>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
