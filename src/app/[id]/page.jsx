"use client";
import Image from "next/image";
import data from "../../../public/data.json"
import { Archive, Bell, Trash2 } from "lucide-react";
import { use, useContext } from "react";
import { DataContext } from "@/context/DataProvider";
import { notFound } from "next/navigation";

const FriendDetails = ({ params }) => {
    const { id } = use(params);
    const currentFriend = data.find(friend => friend.id === +id);

    if (!currentFriend) {
        notFound();
    }

    const { name, picture, days_since_contact, status, tags, bio, email, goal, next_due_date } = currentFriend;

    const { handleList } = useContext(DataContext);

    return (
        <div className="w-11/12 md:w-3/4 mx-auto my-12 sm:my-16 lg:my-20">
            <div className="grid md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr] gap-4">
                {/* left side */}
                <div>
                    <div className="card bg-base-100 w-full shadow-sm hover:scale-105 transition-all hover:shadow-lg mb-4">
                        <figure className="px-10 pt-10">
                            <Image
                                className="rounded-full"
                                src={picture}
                                alt="Friend Photo"
                                width={80}
                                height={80}
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="font-semibold text-xl">{name}</h2>
                            <p className="text-[#64748B] text-xs">{days_since_contact}d ago</p>
                            <div className="flex flex-col gap-3 items-center">

                                <div
                                    className={`badge font-medium text-xs text-white grow ${status === "Overdue" ?
                                        "bg-[#EF4444]"
                                        : status === "On-Track" ?
                                            "bg-[#244D3F]"
                                            : "bg-[#EFAD44]"
                                        }`}>
                                    {status}
                                </div>

                                <div className="flex gap-1 justify-center items-center flex-wrap grow">
                                    {
                                        tags.map((tag, idx) => <span
                                            className="badge bg-[#CBFADB] text-[#244D3F]"
                                            key={idx}>
                                            {tag}
                                        </span>)
                                    }
                                </div>

                                <div>
                                    <p className="font-medium text-[#64748B] mb-1.5">{`"${bio}"`}</p>
                                    <p className="text-sm text-[#64748B]">Preferred: {email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="btn w-full font-medium bg-white shadow-sm hover:scale-105 transition-all hover:shadow-lg"><Bell /> Snooze 2 weeks</button>

                        <button className="btn w-full font-medium bg-white shadow-sm hover:scale-105 transition-all hover:shadow-lg"><Archive /> Archive</button>

                        <button className="btn w-full font-medium bg-white text-[#EF4444] shadow-sm hover:scale-105 transition-all hover:shadow-lg"><Trash2 /> Delete</button>
                    </div>
                </div>

                {/* right side */}
                <div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 mb-4">
                        <div className="stats shadow w-full bg-white">
                            <div className="stat text-center grow">
                                <h2 className="font-semibold text-2xl text-[#244D3F]">{days_since_contact}</h2>
                                <p className="text-lg text-[#64748B]">Days Since Contact</p>
                            </div>
                        </div>
                        <div className="stats shadow w-full bg-white">
                            <div className="stat text-center">
                                <h2 className="font-semibold text-2xl text-[#244D3F]">{goal}</h2>
                                <p className="text-lg text-[#64748B]">Goal (Days)</p>
                            </div>
                        </div>
                        <div className="stats shadow w-full bg-white">
                            <div className="stat text-center">
                                <h2 className="font-semibold text-2xl text-[#244D3F]">{next_due_date}</h2>
                                <p className="text-lg text-[#64748B]">Next Due</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-full shadow-sm mb-4">
                        <div className="card-body">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="font-medium text-xl text-[#244D3F]">Relationship Goal</h2>
                                <button className="btn font-medium text-sm w-fit">Edit</button>
                            </div>

                            <p className="text-lg text-[#64748B]">Connect every <span className="font-bold text-black">{goal} days</span></p>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-full shadow-sm">
                        <div className="card-body">
                            <h2 className="font-medium text-xl text-[#244D3F] mb-2">Quick Check-In</h2>

                            <div>
                                <div className="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
                                    <button className="w-full" onClick={() => handleList(id, "call")}>
                                        <div className="stats bg-[#F8FAFC] shadow w-full hover:scale-105 transition-all hover:shadow-md">
                                            <div className="stat text-center grow">
                                                <Image
                                                    className="mx-auto mb-1"
                                                    src={"/assets/call.png"}
                                                    alt="Call"
                                                    width={30}
                                                    height={30}
                                                />
                                                <p className="text-lg">Call</p>
                                            </div>
                                        </div>
                                    </button>

                                    <button className="w-full" onClick={() => handleList(id, "text")}>
                                        <div className="stats bg-[#F8FAFC] shadow w-full hover:scale-105 transition-all hover:shadow-md">
                                            <div className="stat text-center">
                                                <Image
                                                    className="mx-auto mb-1"
                                                    src={"/assets/text.png"}
                                                    alt="Text"
                                                    width={30}
                                                    height={30}
                                                />
                                                <p className="text-lg">Text</p>
                                            </div>
                                        </div>
                                    </button>

                                    <button className="w-full" onClick={() => handleList(id, "video")}>
                                        <div className="stats bg-[#F8FAFC] shadow w-full hover:scale-105 transition-all hover:shadow-md">
                                            <div className="stat text-center">
                                                <Image
                                                    className="mx-auto mb-1"
                                                    src={"/assets/video.png"}
                                                    alt="Video"
                                                    width={30}
                                                    height={30}
                                                />
                                                <p className="text-lg">Video</p>
                                            </div>
                                        </div>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;