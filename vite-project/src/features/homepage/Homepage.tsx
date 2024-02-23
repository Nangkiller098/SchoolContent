import Banner from "./Banner";
import { Learning } from "./Learning";
import ManagementTeam from "./ManagementTeam";
import { NewsEvents } from "./NewsEvents";
import OurPartner from "./OurPartner";
import OurProgram from "./OurProgram";
import Testimotional from "./Testimotional";

const Homepage = () => {
  return (
    <>
      <Banner />
      <OurProgram />
      <NewsEvents />
      <Learning />
      <Testimotional />
      <ManagementTeam />
      <OurPartner />
    </>
  );
};

export default Homepage;
