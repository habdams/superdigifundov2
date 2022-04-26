import { ResponsivePie } from "@nivo/pie";

export const data = [
    {
        id: "Verfugbar",
        label: "Verfugbar",
        value: 130,
        color: "hsl(176, 52%, 55%)",
    },
    {
        id: "Geplannt",
        label: "Geplannt",
        value: 90,
        color: "#EFF0FE",
    },
    {
        id: "Ausgezahlt",
        label: "Ausgezahlt",
        value: 110,
        color: "#FEEFF2",
    },
];

const MyResponsivePie = ({ data /* see data tab */ }) => (
    <ResponsivePie
        colors={{ datum: "data.color" }}
        data={data}
        margin={{ top: 20, right: 20, bottom: 80, left: 20 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
        }}
        enableArcLabels={false}
        // enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
        }}
        legends={[
            {
                anchor: "bottom",
                direction: "row",
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 10,
                itemTextColor: "#999",
                itemDirection: "left-to-right",
                itemOpacity: 1,
                symbolSize: 12,
                symbolShape: "circle",
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemTextColor: "#000",
                        },
                    },
                ],
            },
        ]}
    />
);

export default MyResponsivePie;
