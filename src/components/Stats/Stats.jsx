"use client";

import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useContext } from 'react';
import { DataContext } from '@/context/DataProvider';
import Image from 'next/image';

const Stats = () => {

    const { list } = useContext(DataContext);
    const callData = list.filter(data => data.type === 'call');
    const textData = list.filter(data => data.type === 'text');
    const videoData = list.filter(data => data.type === 'video');

    const data = [
        { name: "Call", value: callData.length, fill: "#1cd295" },
        { name: "Text", value: textData.length, fill: "#f2bf07" },
        { name: "Video", value: videoData.length, fill: "#5107f2" }
    ]

    return (
        <div className="w-11/12 md:w-3/4 mx-auto my-12 sm:my-16 lg:my-20">

            {
                list.length === 0 ?
                    <div className="flex justify-center items-center h-full my-10 lg:h-screen">
                        <Image
                            className="w-60 h-60 md:h-auto md:w-4/5 lg:w-auto"
                            src={"https://imgs.search.brave.com/iHOr0xQD_lEARrs_pl_Ukhyl15Kq8oc6nGtJVd2WI8I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8y/MS8xMS9uby1kYXRh/LWZvdW5kLWZvci1z/aXRlcy1iYW5uZXIt/ZGVzaWduLXZlY3Rv/ci01MDY0MjExMS5q/cGc"}
                            alt="No Data Found"
                            width={500}
                            height={500}
                        />
                    </div>
                    :
                    <div>
                        <h1 className="font-bold text-3xl md:text-5xl mb-6">Friendship Analytics</h1>

                        <div className="bg-white shadow-md drop-shadow-2xl p-8">
                            <h3 className="font-medium text-xl text-[#244D3F] mb-6">By Interaction Type</h3>

                            <div>
                                <ResponsiveContainer width="100%" height={400}>
                                    <PieChart>
                                        <Pie
                                            data={data}
                                            innerRadius="80%"
                                            outerRadius="100%"
                                            cornerRadius="50%"
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                            isAnimationActive={true}
                                        />
                                        <Legend />
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Stats;
