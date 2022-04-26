import { ResponsiveCirclePacking } from "@nivo/circle-packing";

export const budgetCircleData = {
    name: "nivo",
    color: "#ffffff",
    children: [
        {
            name: "Ausgabenverteilung",
            color: "#ffffff",
            children: [
                {
                    name: "Ande",
                    color: "#735FF0",
                    loc: 47,
                },
                {
                    name: "Neubau",
                    color: "#F05F80",
                    loc: 19,
                },
                {
                    name: "Renovier",
                    color: "#53C8C1",
                    loc: 34,
                },
            ],
        },
    ],
};

const MyResponsiveCirclePacking = ({
    data = budgetCircleData /* see data tab */,
}) => (
    <ResponsiveCirclePacking
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="loc"
        colors={{ datum: "data.color" }}
        childColor={{
            from: "color",
            modifiers: [["brighter", 0.4]],
        }}
        padding={4}
        enableLabels={true}
        labelsFilter={function (n) {
            return 2 === n.node.depth;
        }}
        labelsSkipRadius={10}
        labelTextColor="#ffffff"
    />
);

export default MyResponsiveCirclePacking;
