import {
    ChevronRightIcon,
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
const plans = [
    {
        id: 1,
        aktenzeichen: "ID 674 947 659",
        titel: "Neues Gebäude",
        gemeinde: "Eching",
        gesamtsumme: "993 029 €",
        bisher: "439 1oo €",
        ausstehend: "211 029 €",
        nachste: "21.02.2022",
    },
    {
        id: 2,
        aktenzeichen: "ID 673 927 459",
        titel: "Neubau",
        gemeinde: "Schwürbiz",
        gesamtsumme: "900 344 €",
        bisher: "231 313 €",
        ausstehend: "44 231 €",
        nachste: "31.01.2022",
    },
    {
        id: 2,
        aktenzeichen: "ID 674 947 659",
        titel: "Neues Gebäude",
        gemeinde: "Eching",
        gesamtsumme: "993 029 €",
        bisher: "439 1oo €",
        ausstehend: "211 029 €",
        nachste: "21.02.2022",
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function BudgetTable() {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mb-20">
            <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                                Aktenzeichen
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                            >
                                Titel
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                            >
                                Gemeinde
                            </th>
                            <th
                                scope="col"
                                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                            >
                                Gesamtsumme
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Bisher ausgezahlt
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                Ausstehend
                            </th>
                            <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                                nächste Auszahlung erwartet am
                            </th>
                            <th
                                scope="col"
                                className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                            >
                                <span className="sr-only">Select</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((plan, planIdx) => (
                            <tr key={plan.id}>
                                <td
                                    className={classNames(
                                        planIdx === 0
                                            ? ""
                                            : "border-t border-transparent",
                                        "relative py-4 pl-4 sm:pl-6 pr-3 text-sm"
                                    )}
                                >
                                    <div className="font-medium text-gray-900">
                                        {plan.aktenzeichen}
                                    </div>
                                    <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                                        <span>
                                            {plan.titel} / {plan.gemeinde}
                                        </span>
                                        <span className="hidden sm:inline">
                                            {" "}
                                            ·{" "}
                                        </span>
                                        <span>{plan.gesamtsumme}</span>
                                    </div>
                                    {planIdx !== 0 ? (
                                        <div className="absolute right-0 left-6 -top-px h-px bg-gray-200" />
                                    ) : null}
                                </td>
                                <td
                                    className={classNames(
                                        planIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                                    )}
                                >
                                    {plan.titel}
                                </td>
                                <td
                                    className={classNames(
                                        planIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
                                    )}
                                >
                                    {plan.gemeinde}
                                </td>
                                <td
                                    className={classNames(
                                        planIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell text-pink-500"
                                    )}
                                >
                                    {plan.gesamtsumme}
                                </td>
                                <td
                                    className={classNames(
                                        planIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "px-3 py-3.5 text-sm text-gray-500"
                                    )}
                                >
                                    <div className="sm:hidden">
                                        {plan.bisher}
                                    </div>
                                    <div className="hidden sm:block">
                                        {plan.bisher}
                                    </div>
                                </td>
                                <td
                                    className={classNames(
                                        planIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "px-3 py-3.5 text-sm text-gray-500"
                                    )}
                                >
                                    <div className="sm:hidden">
                                        {plan.ausstehend}
                                    </div>
                                    <div className="hidden sm:block">
                                        {plan.ausstehend}
                                    </div>
                                </td>
                                <td
                                    className={classNames(
                                        planIdx === 0
                                            ? ""
                                            : "border-t border-gray-200",
                                        "px-3 py-3.5 text-sm text-gray-500"
                                    )}
                                >
                                    <div className="sm:hidden">
                                        {plan.nachste}
                                    </div>
                                    <div className="hidden sm:block">
                                        {plan.nachste}
                                    </div>
                                </td>
                                <td
                                    className={classNames(
                                        planIdx === 0
                                            ? ""
                                            : "border-t border-transparent",
                                        "relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium"
                                    )}
                                >
                                    <ChevronRightIcon
                                        className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <nav
                    className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 px-10 w-full pb-4"
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
                            Previous
                        </a>
                    </div>
                    <div className="hidden md:-mt-px md:flex">
                        <a
                            href="#"
                            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            aria-current="page"
                        >
                            1
                        </a>
                        {/* Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" */}
                        <a
                            href="#"
                            className="border-purple-500 text-purple-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
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
                            Next
                            <ArrowNarrowRightIcon
                                className="ml-3 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}
