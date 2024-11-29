// import Image from "next/image";

import About from "@/components/About/About";
import ChangeText from "@/components/changeText/ChangeText";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className='absolute top-0 left-0'>
      <ChangeText className='' />
      <About />
      <Footer />
    </div>
  );
}
