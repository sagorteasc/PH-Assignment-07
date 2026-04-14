import Banner from "@/components/Banner/Banner";
import Friends from "@/components/Friends/Friends";

const Home = () => {
  return (
    <div>
      <Banner />
      <hr className="text-[#E9E9E9] my-10 w-[70%] mx-auto" />
      <Friends />
    </div>
  );
};

export default Home;