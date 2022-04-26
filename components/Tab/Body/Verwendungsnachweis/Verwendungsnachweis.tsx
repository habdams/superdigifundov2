import React, { useState } from "react";
import { data } from '../../../bar'
import dynamic from "next/dynamic";
import { Calendar, WarningCircle } from 'phosphor-react';
import { PeriodData } from "../../../PeriodData";


const MyResponsivePie = dynamic(() => import('../../../bar'), { ssr: false })


const keyDates = [
    {
        year: 2000,
        month: "Oktober",
        status: "Gepruft",
        record: [
            {
                item: "Neuer Zimer",
                amount: 2307
            },
            {
                item: "Neuer Zimmer",
                amount: 2304
            },
            {
                item: "Neuer Zimme",
                amount: 23098
            },
            {
                item: "Neuer Zmmer",
                amount: 2307
            },
            {
                item: "Neuer immer",
                amount: 2306
            },

        ]
    },

    {
        year: 2001,
        month: "Juni",
        status: "Eingereicht",
        record: [
            {
                item: "Olger Kimmich",
                amount: 56098
            },
            {
                item: "John Bosco",
                amount: 450908
            },
            {
                item: "Neuer Zimme",
                amount: 45379
            },
            {
                item: "Neuer Zmmer",
                amount: 2307
            },
            {
                item: "Neuer immer",
                amount: 900405
            },

        ]
    },

]




export const Verwendungsnachweis = () => {
    const [periodData, setPeriodData] = useState([]);
    const [periodMonth, setPeriodMonth] = useState([]);
    const [periodYear, setPeriodYear] = useState([]);

    const handlePeriodData = (record, month, year) => {
        setPeriodData(record)
        setPeriodMonth(month)
        setPeriodYear(year)
    }

    return (
        <div className='px-6 py-6 mt-4 h-screen w-screen'>
            <section className="flex items-center gap-x-2">
                <Calendar size={32} />
                <h1 className="text-2xl font-mono">Verwendungsnachweis</h1>
            </section>

            <section className="h-1/2">
                <MyResponsivePie data={data} />
            </section>

            <section className='flex mt-8'>
                <div className='w-2/5 border-r border-r-grey-400 p-2'>
                    <div className='flex shadow-xl border-gray-50 p-8 mb-12 w-4/5 rounded items-center gap-x-8'>
                        <div>
                            <WarningCircle size={56} />
                        </div>
                        <div>
                            <p className='mb-4'>Der Verwendungsnachweis für
                                <span className='text-pink-600 font bold'> Feburar 2022</span> ist überfällig.
                            </p>
                            <a href="#" className='py-2 px-4 rounded bg-pink-600 text-white text-sm '>Gemeinde kontaktieren</a>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg mb-8'>Empfangen: </h3>
                        {keyDates.map((keyDate, index) => (

                            <div key={index} onClick={() => handlePeriodData(keyDate.record, keyDate.month, keyDate.year)} className=' flex py-2 px-4 items-center border border-gray-200 w-4/5 mb-4 justify-between cursor-pointer'>
                                <span className='flex items-center gap-x-2'>
                                    <span>{keyDate.year}</span>
                                    <span>{keyDate.month}</span>
                                </span>

                                <span className='p-2 px-4 text-sm border border-gray-100 bg-gray-700 text-white rounded-3xl '>
                                    {keyDate.status}
                                </span>
                            </div>

                        ))}

                    </div>

                </div>

                <div className="w-3/5 mb-4">
                    <PeriodData records={periodData} month={periodMonth} year={periodYear} />
                </div>


            </section>
        </div>
    )
}