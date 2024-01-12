import { motion, useCycle } from 'framer-motion';
import { navVariants, styles } from '../utils';
import logo from '../assets/logo.svg'
import { MenuToggle } from '../components';
// import { MenuToggle } from './menu-toggle';
// import { useRef } from 'react';
// import { useDimensions } from './use-dimension';
// import { Navigation } from './navigation';
const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    // const containerRef = useRef(null);
    // const { height } = useDimensions(containerRef);

    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(30px at 40px 40px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
      };
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${styles.xPaddings} py-8 relative`}
        >
            <div className="absolute left-[50%]  w-[50%] inset-0 gradient-01" />
            <div
                className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
            >
                <img
                    src={logo}
                    alt="search"
                    className="h-[36px] object-contain z-10"
                    onClick={() => console.log("s")}
                />

                <ul className="hidden  md:flex items-center gap-2 font-extrabold text-[16px] z-10  text-white">
                    <li className='hover-underline-animation'>FEATURES</li>
                    <li className='hover-underline-animation' >EXPLORE</li>
                    <li className='hover-underline-animation' >GALLERY</li>
                    <li className='hover-underline-animation'>TEMPLATES</li>
                    <li className='hover-underline-animation'>UPDATES</li>
                </ul>

                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    // custom={height}
                    // ref={containerRef}
                    className='flex z-10 md:hidden items-center'
                >
                    {/* <motion.div className="background" variants={sidebar} /> */}
                    {/* <Navigation /> */}
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>

                {/* <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          /> */}
            </div>
        </motion.nav>
    )
}

export default Navbar;