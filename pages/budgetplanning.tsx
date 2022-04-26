import Layout from "../components/layout";
import type { ReactElement } from "react";
import dynamic from "next/dynamic";
import { ResponsiveBar } from "@nivo/bar";
import { data } from "../components/Graphs/budgetPie";
import { budgetPlotData } from "../components/Graphs/budgetPlot";
import { budgetCircleData } from "../components/Graphs/budgetCircles";
import BudgetTable from "../components/budgetTable";

const BudgetPie = dynamic(() => import("../components/Graphs/budgetPie"), {
    ssr: false,
});

const BudgetPlot = dynamic(() => import("../components/Graphs/budgetPlot"), {
    ssr: false,
});

const BudgetCircle = dynamic(
    () => import("../components/Graphs/budgetCircles"),
    {
        ssr: false,
    }
);

const BudgetPlanning = () => {

    return (
        <div className="h-screen max-w-screen overflow-x-hidden">
            <div className="container min-h-full mx-auto overflow-x-hidden overflow-y-auto justify-start flex flex-col mt-10 ">
                <h1 className="font-mono font-medium text-2xl">
                    Budgetplannnung
                </h1>
                <div className="flex flex-col h-auto w-full mt-10">
                    <div className="flex flex-row w-full h-64 bg-slate-50 py-4">
                        <div className="w-1/3  h-full justify-center items-center text-center">
                            <h2 className="text-base font-extralight">
                                <span className="">
                                    Fördeungsbudget Kindergarten{" "}
                                </span>
                            </h2>
                            <BudgetPie data={data} />
                        </div>
                        <div className="w-1/3  h-full justify-center items-center text-center">
                            <h2 className="text-base font-extralight">
                                Ausgabenverlauf im Jahr
                            </h2>
                            <BudgetPlot data={budgetPlotData} />
                        </div>
                        <div className="w-1/3  h-full justify-center items-center text-center">
                            <h2 className="text-base font-extralight">
                                Ausgabenverteilung 2022
                            </h2>
                            <BudgetCircle data={budgetCircleData} />
                        </div>
                    </div>
                    <div>
                        <h1 className="font-mono font-medium text-2xl mt-10">
                            Höchste Ausgaben 2022
                        </h1>
                        <BudgetTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

BudgetPlanning.getLayout = function getLayout(budgetplanning: ReactElement) {
    return <Layout>{budgetplanning}</Layout>;
};

export default BudgetPlanning;
