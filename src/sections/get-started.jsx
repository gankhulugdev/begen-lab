import { motion } from "framer-motion";
import { fadeIn, planetVariants, staggerContainer, styles } from "../utils";
import { StartSteps, StepTitle, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="flex-[1] flex justify-center flex-col"
      >
        <TypingText title="| How It Works" />
        <TitleText title={<>Interactive Wall Creation:</>} />
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <div className="text-lg">
          At Begen Touch Lab, we've revolutionized the concept of interactive
          walls to bring creativity, engagement, and innovation to your spaces.
          Here's a glimpse into how our interactive wall creation process
          unfolds:
        </div>
      </motion.div>
    </motion.div>
    <div className={`${styles.innerWidth} mx-auto  mt-[31px] flex flex-col  gap-x-[24px]`}>
      {startingFeatures.map((feature, index) => (
        <StartSteps
          key={index}
          number={`${index + 1}`}
          feature={feature}
        />
      ))}
    </div>
  </section>
);

export default GetStarted;
