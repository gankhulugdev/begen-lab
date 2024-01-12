
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, styles } from '../utils';
import { TypingText } from '../components';

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title="| About Begen Touch Lab" textStyles="text-center" />

            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-dark-grey"
            >At
                <span className="font-extrabold text-primary"> Begen Touch Lab</span>  , we specialize in the design and
                development of <span className='font-extrabold text-light'>interactive</span>  walls that transform static spaces into dynamic, engaging environments.
                <span className='font-extrabold text-light'> Discover</span> the magic of interactive walls —where every touch tells a story,
                and every wall becomes a canvas of endless <span className='font-extrabold text-light'>possibilities</span>.
            </motion.p>

            {/* <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src="/arrow-down.svg"
                alt="arrow down"
                className="w-[18px] h-[28px] object-contain mt-[28px]"
            /> */}
        </motion.div>
    </section>
);

export default About;