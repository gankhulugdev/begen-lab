

import { motion } from 'framer-motion';
import logo from '../../public/assets/logo.svg'
import { slideIn, staggerContainer, textVariant,styles } from '../utils';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
        Transform Surfaces into
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}><span className='text-primary'>Interactive</span> Works of Art</h1>
          {/* <div className={styles.heroDText} /> */}
          {/* <h1 className={styles.heroHeading}>ll</h1> */}
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px]  z-[0] -top-[30px]" />

        <img
          src="https://www.bareconductive.com/cdn/shop/articles/4a077254462789.595cd4112eb4e_cc_16x9_d9c0cb9c-979b-4927-8266-483808f6f912_1080x.jpg?v=1616412127"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px]  z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src={logo}
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;