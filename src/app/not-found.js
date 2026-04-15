"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {

    const route = useRouter();

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-bold text-8xl text-[#244D3F] pb-2">404</h1>
            <h3 className="font-bold text-3xl">Page Not Found</h3>
            <p className="text-lg text-[#64748B] py-2">The page you are looking for does not exist.</p>
            <button
                onClick={() => route.back()}
                className="btn bg-[#244D3F] text-white rounded-md">
                🏠︎  Go Back
            </button>
        </div>
    );
};

export default NotFound;