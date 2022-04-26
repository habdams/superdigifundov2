import { ResponsiveBump } from "@nivo/bump";

export const budgetPlotData = [
    {
        id: "2022",
        data: [
            {
                x: 2000,
                y: 3,
            },
            {
                x: 2001,
                y: 12,
            },
            {
                x: 2002,
                y: 9,
            },
            {
                x: 2003,
                y: 9,
            },
            {
                x: 2004,
                y: 1,
            },
        ],
        color: "#ff0000",
    },
    {
        id: "2021",
        data: [
            {
                x: 2000,
                y: 11,
            },
            {
                x: 2001,
                y: 10,
            },
            {
                x: 2002,
                y: 4,
            },
            {
                x: 2003,
                y: 1,
            },
            {
                x: 2004,
                y: 9,
            },
        ],
        color: "#000000",
    },
];

const MyResponsiveBump = ({ data = budgetPlotData /* see data tab */ }) => (
    <ResponsiveBump
        data={data}
        xPadding={0.9}
        colors={{ scheme: "purple_orange" }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: "background" }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: "serie.color" }}
        axisTop={null}
        axisBottom={null}
        axisLeft={null}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />
);

export default MyResponsiveBump;
