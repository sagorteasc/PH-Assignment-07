const Banner = () => {
    return (
        <div className="w-11/12 md:w-3/4 mx-auto my-12 sm:my-16 lg:my-20">
            <div className="hero">
                <div className="hero-content text-center mb-10">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold leading-14">Friends to keep close in your life</h1>
                        <p className="py-5 text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            relationships that matter most.</p>
                        <button className="btn font-semibold bg-[#244D3F] rounded text-white">+ Add a Friend</button>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4">
                <div className="stats shadow w-full bg-white">
                    <div className="stat text-center grow">
                        <h2 className="font-semibold text-3xl text-[#244D3F]">10</h2>
                        <p className="text-lg text-[#64748B]">Total Friends</p>
                    </div>
                </div>
                <div className="stats shadow w-full bg-white">
                    <div className="stat text-center">
                        <h2 className="font-semibold text-3xl text-[#244D3F]">3</h2>
                        <p className="text-lg text-[#64748B]">On Track</p>
                    </div>
                </div>
                <div className="stats shadow w-full bg-white">
                    <div className="stat text-center">
                        <h2 className="font-semibold text-3xl text-[#244D3F]">6</h2>
                        <p className="text-lg text-[#64748B]">Need Attention</p>
                    </div>
                </div>
                <div className="stats shadow w-full bg-white">
                    <div className="stat text-center">
                        <h2 className="font-semibold text-3xl text-[#244D3F]">12</h2>
                        <p className="text-lg text-[#64748B]">Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;