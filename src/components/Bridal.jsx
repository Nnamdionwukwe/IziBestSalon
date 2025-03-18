import BridalComp from "./BridalComp";
import BridalNavigation from "./BridalNavigation";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Bridal() {
  return (
    <div>
      <NavBar />

      <>
        <BridalComp />
      </>

      <BridalNavigation />

      <Footer />
    </div>
  );
}
