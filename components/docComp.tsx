import Image from "next/image";
import PdfViewer from "./pdfViewer";

export default function DocComp(props) {
    const { btnTitle, itemName, itemLocation } = props;
    return (
        <>
            <div className="bg-gray-200 flex flex-row items-center justify-between py-2 px-4 rounded mb-10 mt-2 h-full w-full">
                <div className="flex flex-row items-center gap-2 w-2/4">
                    <Image
                        src={"/FilePdf.svg"}
                        width={35}
                        height={35}
                        className=" flex-1"
                        alt="pdf logo"
                    />
                    <p className="text-sm font-semibold font-sans text-stone-700 w-1/3">
                        {itemName}
                    </p>
                </div>

                <div className="flex flex-row items-center gap-2 w-1/4">
                    <Image
                        src={"/ellipse-blue.svg"}
                        width={20}
                        height={20}
                        className=" flex-1"
                        alt="blue tag"
                    />
                    <p className="text-sm font-semibold font-sans text-stone-700 w-2/3">
                        nicht geprüft
                    </p>
                </div>

                <div className="w-1/4 float-right items-right flex justify-end mr-6">
                    <PdfViewer
                        title={btnTitle}
                        item={itemLocation}
                        name={itemName}
                    />
                </div>
            </div>
        </>
    );
}
