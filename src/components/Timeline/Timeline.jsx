"use client";
import { DataContext } from "@/context/DataProvider";
import Image from "next/image";
import { useContext } from "react";
import { BiDownArrow } from "react-icons/bi";

const Timeline = () => {

    const { list } = useContext(DataContext);

    return (
        <div className="w-11/12 md:w-3/4 mx-auto my-12 sm:my-16 lg:my-20">
            {
                list.length === 0 ?
                    ""
                    :
                    <div className="mb-6">
                        <h1 className="font-bold text-5xl mb-4">Timeline</h1>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1 text-lg text-[#64748B]">Filter timeline <BiDownArrow /></div>
                            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 flex flex-col gap-3 w-52 p-4 shadow-sm">
                                <li className="hover:bg-gray-300 transition-all cursor-pointer">Call</li>
                                <li className="hover:bg-gray-300 transition-all cursor-pointer">Text</li>
                                <li className="hover:bg-gray-300 transition-all cursor-pointer">Video</li>
                            </ul>
                        </div>
                    </div>
            }

            <div>
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
                        : list.map((item, idx) => (
                            <div key={idx} className="mb-3">
                                <div className="card bg-base-100 shadow-sm hover:scale-105 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-4 ml-5">
                                        <div>
                                            {
                                                item.type === "call" ?
                                                    <Image
                                                        src={"/assets/call.png"}
                                                        alt="Call"
                                                        width={30}
                                                        height={30}
                                                    />
                                                    : item.type === "text" ?
                                                        <Image
                                                            src={"/assets/text.png"}
                                                            alt="Text"
                                                            width={30}
                                                            height={30}
                                                        />
                                                        :
                                                        <Image
                                                            src={"/assets/video.png"}
                                                            alt="Video"
                                                            width={30}
                                                            height={30}
                                                        />
                                            }
                                        </div>

                                        <div className="card-body">
                                            <h2 className="text-[#64748B] text-lg">
                                                <span
                                                    className="font-medium text-xl text-[#244D3F]">
                                                    {item.type.toUpperCase()} </span>
                                                with {item.name}
                                            </h2>

                                            <div className="flex w-fit items-center gap-4">
                                                <p className="font-medium text-[#64748B]">
                                                    {new Date().toLocaleDateString()}
                                                </p>
                                                <p className="font-medium text-[#64748B]">
                                                    {new Date().toLocaleTimeString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default Timeline;