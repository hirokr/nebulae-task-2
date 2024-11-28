import useWindowDimensions from "@/helpers/getWindowSize";
import { navLinks } from "@/lib/navData";
import Link from "next/link";
import { useState } from "react";

// title: "About",
// link: "#",
// desc: "At Acodez, we're obsessed with quality.",
// works: [{ title: "Our Profile", link: "#" }],

const DropMenu = ({ showMenu }) => {
  const { height, width } = useWindowDimensions();
  const dropData = navLinks;
  const [open, setOpen] = useState(null);

  const handleClick = (index) => {
    if (index === open) {
      setOpen(null);
      return;
    }
    setOpen(index);
  };

  const [hoverElement, setHoverElement] = useState(navLinks[0]);
  if (width <= 800) {
    return (
      <div
        className={`text-shadowText hover:text-shadowText bg-white border-b-[1px] border-shadowText pl-8 text-lg transition-[height] h-screen z-10 duration-[0.3s] ease-[ease-in-out] delay-[0.1s] absolute w-full font-mono tracking-wider`}
      >
        {dropData.map((data, index) => (
          <div key={index} className={`border-b-[1px]`}>
            <div className='py-2 relative ease-[ease-in-out] delay-[2s] transition flex justify-between pr-10'>
              <a href={data.link} className='py-4 h-10'>
                <h1 className='hover:text-hoverColor transition-all'>
                  {data.title}
                </h1>
              </a>
              {data.works.length > 2 && (
                <button
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  {" "}
                  {"\\/"}{" "}
                </button>
              )}
            </div>
            <div className='pl-10 text-base'>
              {open == index &&
                data.works.map((work, index) => {
                  return (
                    <div key={index} className='my-2 '>
                      <Link href={work.link}>{work.title}</Link>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div
        className={`text-shadowText font-thin hover:text-shadowText bg-white border-b-[1px] border-shadowText 
          text-xl transition-[height] h-screen z-10 duration-[0.3s] ease-[ease-in-out] delay-[0.1s] absolute w-full font-mono tracking-wider pt-10 px-52 flex justify-between`}
      >
        <div className="relative after:h-4/5 after:w-[1px] after:z-10 after:top-5 after:absolute after:bg-slate-200 after:left-full after:rounded-lg">
          {dropData.map((data, index) => {
            return (
              <div
                key={index}
                className='py-2 relative ease-[ease-in-out] delay-[2s] transition flex justify-between pr-10  '
              >
                <a
                  href={data.link}
                  onMouseOver={() => {
                    setHoverElement(navLinks[index]);
                  }}
                  className='py-4 h-10 '
                >
                  <h1 className='hover:text-hoverColor font-thin transition-all'>
                    {data.title}
                  </h1>
                </a>
              </div>
            );
          })}
        </div>
        <div className='flex ml-10 w-full justify-between py-4 text-base'>
          <div>
            {hoverElement.works.map((links, index) => {
              return (
                <div key={index} className='py-3 min-w-56 hover:text-hoverColor font-thin'>
                  <Link href={links.link}>{links.title}</Link>
                </div>
              );
            })}
          </div>
          <div className="text-xl leading-10 mt-5 mr-10">{hoverElement.desc}</div>
        </div>
      </div>
    );
  }
};

export default DropMenu;
