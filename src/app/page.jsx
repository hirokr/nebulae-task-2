// import Image from "next/image";

import About from "@/components/About/About";
import Award from "@/components/awards/Award";
import ChangeText from "@/components/changeText/ChangeText";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot/Mascot";

export default function Home() {
  return (
    <div className='absolute top-0 left-0'>
      <ChangeText className='' />
      <About />
      <Award/>
      <Mascot/>
      <Footer />
    </div>
  );
}
