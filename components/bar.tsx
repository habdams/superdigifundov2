import { ResponsiveBar } from "@nivo/bar";

export const data = [
    {
        "month_year": "Okt 2018",
        "Personalkosten": 45530,
        "PersonalkostenColor": "hsl(176, 75%, 41%)",
        "Materialkosten": 90149,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },
    {
        "month_year": "Feb 2019",
        "Personalkosten": 5000,
        "PersonalkostenColor": "hsl(176, 75%, 41%)",
        "Materialkosten": 67000,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },
    {
        "month_year": "Jun 2019",
        "Personalkosten": 50000,
        "PersonalkostenColor": "hslhsl(176, 75%, 41%)",
        "Materialkosten": 30007,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },
    {
        "month_year": "Okt 2019",
        "Personalkosten": 25090,
        "PersonalkostenColor": "hsl(176, 75%, 41%)",
        "Materialkosten": 67900,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },
    {
        "month_year": "Feb 2020",
        "Personalkosten": 19005,
        "PersonalkostenColor": "hsl(176, 75%, 41%)",
        "Materialkosten": 16179,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },
    {
        "month_year": "Jun 2020",
        "Personalkosten": 100059,
        "PersonalkostenColor": "hsl(176, 75%, 41%)",
        "Materialkosten": 250006,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },
    {
        "month_year": "Okt 2020",
        "Personalkosten": 50980,
        "PersonalkostenColor": "hsl(176, 75%, 41%)",
        "Materialkosten": 26560,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },
    {
        "month_year": "Feb 2021",
        "Personalkosten": 33455,
        "PersonalkostenColor": "hsl(176, 75%, 41%)",
        "Materialkosten": 129997,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },
    {
        "month_year": "Jun 2021",
        "Personalkosten": 150000,
        "PersonalkostenColor": "hsl(176, 75%, 41%)",
        "Materialkosten": 80006,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },
    {
        "month_year": "Okt 2021",
        "Personalkosten": 24789,
        "PersonalkostenColor": "hsl(176, 75%, 41%)",
        "Materialkosten": 67089,
        "MaterialkostenColor": "hsl(248, 83%, 66%)"
    },


]


const MyResponsiveBar = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={[
            'Personalkosten',
            'Materialkosten'
        ]}
        indexBy="month_year"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'category10' }}
        colorBy="id"
        defs={[
            {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
            },
            {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
            },
        ]}
        fill={[
            {
                match: {
                    id: ''
                },
                id: "dots",
            },
            {
                match: {
                    id: ''
                },
                id: "lines",
            },
        ]}
        borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'month and year',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'amount',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
        }}
        legends={[
            {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: "hover",
                        style: {
                            itemOpacity: 1,
                        },
                    },
                ],
            },
        ]}
        role="application"
        ariaLabel="Antragsliste"
        barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " en Antragsliste: " + e.indexValue }}
    />
);

export default MyResponsiveBar;
