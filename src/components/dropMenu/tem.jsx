// import { navLinks } from "@/lib/navData";

// import { AnimatePresence, motion } from "framer-motion";

// // title: "About",
// // link: "#",
// // desc: "At Acodez, we're obsessed with quality.",
// // works: [{ title: "Our Profile", link: "#" }],

// const DropMenu = ({ showMenu }) => {
//   const dropData = navLinks;
//   const menuVars = {
//     initial: {
//       scaleY: 0,
//     },
//     animate: {
//       scaleY: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.12, 0, 0.39, 0],
//       },
//     },
//     exit: {
//       scaleY: 0,
//       transition: {
//         delay: 0.5,
//         duration: 0.5,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };
//   const containerVars = {
//     initial: {
//       transition: {
//         staggerChildren: 0.09,
//         staggerDirection: -1,
//       },
//     },
//     open: {
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.09,
//         staggerDirection: 1,
//       },
//     },
//   };

//   return (
//     <motion.div
//     variants={menuVars}
//     initial="initial"
//     animate="animate"
//     exit="exit"
//       className={`text-shadowText hover:text-shadowText bg-white border-b-[1px] border-shadowText pl-5 text-lg 
//         transition-[height] duration-[0.3s] ease-[ease-in-out] delay-[0.1s] absolute w-full 
//         ${showMenu ? "h-screen" : "h-0 overflow-hidden"}`}
//     >
//       <motion.div></motion.div>
//       {dropData.map((data, index) => (
//         <div
//           key={index}
//           className={`py-2 relative ease-[ease-in-out] delay-[2s] transition border-b-[1px] ${
//             showMenu ? "visible opacity-100" : "hidden opacity-0"
//           }`}
//         >
//           <a href={data.link} className='block py-4 h-10'>
//             <h1>{data.title}</h1>
//           </a>
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export default DropMenu;


import { navLinks } from "@/lib/navData";

import { AnimatePresence, motion } from "framer-motion";

// title: "About",
// link: "#",
// desc: "At Acodez, we're obsessed with quality.",
// works: [{ title: "Our Profile", link: "#" }],

const DropMenu = ({ showMenu }) => {
  const dropData = navLinks;
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVars}
        initial='initial'
        animate='open'
        exit='initial'
        className={`text-shadowText hover:text-shadowText bg-white border-b-[1px] border-shadowText pl-5 text-lg absolute w-full `}
      >
        {dropData.map((data, index) => (
          <div key={index} className={``}>
            <a href={data.link} className='block py-4 h-10'>
              <h1>{data.title}</h1>
            </a>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default DropMenu;
