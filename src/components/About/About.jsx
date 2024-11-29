import { about } from "@/lib/about";
import AboutCard from "./aboutCard";

const About = () => {
  
  return (
    <div className="px-20 animate-fade s_sm:px-30 s_lg:px-40 s_wide:px-52 py-20 text-gray-500 tracking-wider font-mono w-full ">
      <h1 className="text-[25px] before:w-[80%] before:h-[3px] before:absolute before:top-[80%] before:rounded-xl before:bg-hoverColor inline-block before:left-0 before:inset-1 relative ">About</h1>
      <div className=" pt-6 s_sm:grid ssm:grid-cols-2 justify-start s_sm:justify-between items-center gap-5">
        <p className=" text-[18px] s_sm:text-[23px] font-[200] leading-[2.5rem]  ">
          We are an international award-winning IT company with 6 offices across
          India, and offers web design, web development and digital marketing
          services.
        </p>
        <p className="hidden s_sm:block text-[18px] ">
          Acodez is rated as one of the top web agencies in India by various
          industry magazines and review sites. We have a right blend of
          award-winning designers, expert web developers and Google certified
          digital marketers which make us a unique one-stop solution for
          hundreds of our clients, spread across 80+ countries.
        </p>
      </div>
      <div className="flex gap-4 flex-wrap mt-10 justify-center items-center">
        {about.map((data, index)=> {
          return <AboutCard key={index} data={data}/>
        })}
      </div>
    </div>
  );
};

export default About;
