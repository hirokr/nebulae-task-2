import { navLinks } from "@/lib/navData";

// title: "About",
// link: "#",
// desc: "At Acodez, we're obsessed with quality.",
// works: [{ title: "Our Profile", link: "#" }],

const DropMenu = ({ showMenu }) => {
  const dropData = navLinks;

  return (
    <div
      className={`text-shadowText hover:text-shadowText bg-white border-b-[1px] border-shadowText pl-5 text-lg 
        transition-[height] duration-[0.3s] ease-[ease-in-out] delay-[0.1s] absolute w-full 
        ${showMenu ? "h-screen" : "h-0 overflow-hidden"}`}
    >
      {dropData.map((data, index) => (
        <div
          key={index}
          className={`py-2 relative ease-[ease-in-out] delay-[2s] transition border-b-[1px] ${
            showMenu ? "visible opacity-100" : "hidden opacity-0"
          }`}
        >
          <a href={data.link} className="block py-4 h-10">
            <h1>{data.title}</h1>
          </a>
        </div>
      ))}
    </div>
  );
};

export default DropMenu;
