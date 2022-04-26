import React, { ReactElement } from "react";
import DocComp from "../../../docComp";
import { Files } from "phosphor-react";

export const FachlicheDokumente = () => {
    return (
        <>
            <div className="">
                <div className="flex flex-col md:flex-row justify-center lg:justify-between items-center py-6 mt-4">
                    <div className="flex items-center gap-2 mb-4 px-6">
                        <Files size={32} />
                        <h1 className="text-2xl font-mono">
                            Fachliche Dokumente
                        </h1>
                    </div>
                </div>
                <div className="my-2 flex-col flex px-6">
                    <span>
                        <h2 className="font-bold">Von dem Landesratsamt:</h2>
                    </span>
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />
                </div>
                <div className="my-2 flex-col flex px-6">
                    <span>
                        <h2 className="font-bold">
                            Von der Kindergartenfachaufsicht:
                        </h2>
                    </span>
                    <DocComp
                        btnTitle="offnen"
                        itemName="KinderHochstadt_zimmer"
                        itemLocation="/pdfs/kindergarden.pdf"
                    />
                </div>
            </div>
        </>
    );
};
