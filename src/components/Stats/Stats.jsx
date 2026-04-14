"use client";

import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import data from "../../../public/data.json"

const Stats = ({ isAnimationActive = true }) => {
    return (
        <div className="w-11/12 md:w-3/4 mx-auto my-12 sm:my-16 lg:my-20">
            <h1 className="font-bold text-3xl md:text-5xl mb-6">Friendship Analytics</h1>

            <div className="bg-white shadow-md drop-shadow-2xl p-8">
                <h3 className="font-medium text-xl text-[#244D3F] mb-6">By Interaction Type</h3>

                <div>
                    <ResponsiveContainer>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                cornerRadius="50%"
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={isAnimationActive}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Stats;
