import Banner from "@/components/Banner/Banner";
import Friends from "@/components/Friends/Friends";
import { Suspense } from "react";
import { PulseLoader } from "react-spinners";

const Home = () => {
  return (
    <div>
      <Banner />
      <hr className="text-[#E9E9E9] my-10 w-[70%] mx-auto" />

      <Suspense fallback={<span className="flex justify-center items-center h-40"><PulseLoader color="#36d7b7" />
      </span>}>
        <Friends />
      </Suspense>
    </div>
  );
};

export default Home;