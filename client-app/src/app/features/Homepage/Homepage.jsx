import Banner from "./Banner";
import { NewsEvents } from "./NewsEvents";
import { Learning } from "./Learning";
const Homepage = () => {
  return (
    <>
      <Banner />
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <a href="">NEWS &amp; EVENTS</a>
        </h1>
      </div>
      <NewsEvents />
      <div className="bg-yellow-600 p-5 text-white font-bold text-lg w-full h-full">
        <h1 className="uppercase text-center mt-0">
          <a href="">Learning & Resource</a>
        </h1>
      </div>
      <Learning />
    </>
  );
};

export default Homepage;
