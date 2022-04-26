export const PeriodData = (props) => {
    const { records, year, month } = props;
    return (
        <>
            <div className="px-4 mb-8">
                <span className="flex gap-x-2 mb-4 font-bold text-xl p-2">
                    <legend className="">{year}</legend>

                    <h3>| {month}</h3>
                </span>

                <div className="flex">
                    <div className="w-4/5"></div>
                    <div className="w-1/5">
                        <span className="text-center">
                            <h4 className="mb-4">Förderfähig</h4>
                        </span>
                        <span className=" flex justify-between p-2 ">
                            <p>Nien</p>
                            <p>Ja</p>
                        </span>
                    </div>
                </div>

                {records.map((record, index) => (
                    <>
                        <div key={index} className="flex justify-between items-center mb-2 gap-x-2 text-gray-700">
                            <div className="w-4/5 flex justify-between items-center p-2 bg-slate-100">
                                <span>{record.item}</span>
                                <span>{record.amount}</span>
                            </div>
                            <div className="w-1/5 flex justify-between bg-gray-50 p-2 px-6 items-center">
                                <span>
                                    <input
                                        type="radio"
                                        className="checked:bg-gray-500 rounded-none "
                                        name={record.item}
                                        id={record.item}
                                    />
                                </span>
                                <span>
                                    <input
                                        type="radio"
                                        className="checked:bg-green-500 rounded-none"
                                        name={record.item}
                                        id={record.item}
                                    />
                                </span>
                            </div>
                        </div>
                    </>
                ))}

                <div className="p-2 text-lg font-bold bg-slate-100 text-pink-700 mb-12 w-4/5 flex items-center justify-between">
                    <p className=" ">Gesamtkosten</p>
                    <p>2,900,989,000</p>
                </div>
                <div>
                    <a
                        href="#"
                        className="px-8 py-2 bg-pink-700 text-white rounded"
                    >
                        Als Geprüft makieren
                    </a>
                </div>
            </div>
        </>
    );
};
