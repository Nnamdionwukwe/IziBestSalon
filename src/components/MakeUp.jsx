import NavBar from "./NavBar";
import Footer from "./Footer";
import MakeUpComp from "./MakeUpComp";
import MakeUpNavigation from "./MakeUpNavigation";

export default function MakeUp() {
  return (
    <div>
      <NavBar />

      <MakeUpComp />

      <MakeUpNavigation />

      <Footer />
    </div>
  );
}
