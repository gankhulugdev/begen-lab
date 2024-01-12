import { planetVariants, styles, zoomIn } from "../utils";
import { StepTitle } from "./custom-text";
import { motion } from "framer-motion";

const StartSteps = ({ number, feature }) => (
  <div className="border-l-[3.2px] md:border-none border-bone relative md:flex gap-x-4">
    <div className="md:hidden h-3 w-3 -translate-x-[7.6px] absolute border-primary border-4 top-1/2 rounded-full bg-primary"></div>
    <motion.div
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className={`md:w-1/2 mb-4 ml-8 md:ml-0 mb-24 
      ${number % 2 === 0 ? "md:order-last" : "md:order-first"}
      
      `}
      variants={zoomIn(0.2, 0.4)}
    >
      <div
        className={`${styles.flexCenter} w-[96px] h-[] md:w-[120px] md:h-[32px] rounded-[24px] bg-bone mb-4`}
      >
        <p className="font-bold text-[16px] md:text-[20px] text-black">
          <span>Step </span>
          {number}
        </p>
      </div>
      <StepTitle title={feature.title} />
      <p className="flex-1  font-normal text-[16px] md:text-[18px] text-[#B0B0B0] leading-[32.4px]">
        {feature.description}
      </p>
    </motion.div>

    <div
      className={`hidden md:block border-2 border-bone order-2 mx-8 relative`}
    >
      <div className="h-3 w-3 -translate-x-1.5 absolute top-1/3 border-4 border-primary rounded-full bg-primary"></div>
    </div>

    <motion.div
      variants={zoomIn(0.1, 0.4)}
      initial="hidden"
      viewport={{ once: true }}
      whileInView={"show"}
      className={`md:w-1/2 ml-8 md:ml-0
      ${number % 2 === 0 ? "md:order-first" : "md:order-last"}`}
    >
      <img
        src={feature.image}
        alt={`step-${number}`}
        className="rounded-xl max-h-[260px] border-2 border-primary mb-24 object-contain"
      />
    </motion.div>
  </div>
);

export default StartSteps;
