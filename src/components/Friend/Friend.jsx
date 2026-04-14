import Image from "next/image";

const Friend = ({ friend }) => {

    const { name, picture, days_since_contact, status, tags } = friend

    return (
        <div>
            <div className="card bg-base-100 w-full shadow-sm hover:scale-105 transition-all hover:shadow-lg">
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
                        <div className="flex gap-1 flex-wrap">
                            {
                                tags.map((tag, idx) => <span
                                    className="badge bg-[#CBFADB] text-[#244D3F]"
                                    key={idx}>
                                    {tag}
                                </span>)
                            }
                        </div>
                        <div
                            className={`badge font-medium text-xs text-white ${status === "Overdue" ?
                                "bg-[#EF4444]"
                                : status === "On-Track" ?
                                    "bg-[#244D3F]"
                                    : "bg-[#EFAD44]"
                                }`}>
                            {status}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friend;