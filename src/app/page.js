import Header_Sectioon from "./componets/header_section";
import Buid_Section from "./componets/buid_section";
import Review_Section from "./componets/review_section";
import Ready_Section from "./componets/ready_section";
import Business_Section from "./componets/business_section";


export default function Home() {
  return (
    <>
      <Header_Sectioon />
      <Business_Section/>
      <Buid_Section />
      <Review_Section/>
      <Ready_Section/>
    </>
  );
}
