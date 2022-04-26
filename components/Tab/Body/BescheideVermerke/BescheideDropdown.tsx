import { SlideDown } from "react-slidedown";

export const BescheideDropdown = (props) => {
    return (
        <>
            <div>
                {props.open ? (
                    <div>
                        <div className="flex flex-row w-full h-28 bg-neutral-50 shadow mt-0 justify-center items-center">
                            <div className="flex w-2/3 h-full p-3 align-center items-center">
                                <span className="text-sm">
                                    Wenn du mit dem Bescheid fertig bist, schick
                                    ihn sobald wie möglich an die Gemeinde.
                                </span>
                            </div>

                            <div className="w-1/3 h-full flex align-center items-center">
                                <button className="bg-pink-500 text-white m-auto px-4 py-2 rounded-xl text-sm font-semibold">
                                    abschicken
                                </button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};
