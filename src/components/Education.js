import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Certifications</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Getting Started with Docker"
            time="December 2024"
            place="Simplilearn"
            info="Gained foundational knowledge of Docker, enabling efficient containerization and deployment of applications."
          />

          <Details
            type="Google Analytics Certification"
            time="2017-2019"
            place="Google"
            info="Demonstrated expertise in tracking, analyzing, and optimizing website performance using Google Analytics."
          />

          <Details
            type="Google Ads Search Certification"
            time="2017-2018"
            place="Google"
            info="Proved proficiency in creating and managing effective search advertising campaigns on Google Ads."
          />
          <Details
            type="Google Ads Display Certification"
            time="2023-2024"
            place="Google"
            info="Certified in designing and optimizing display advertising campaigns to reach targeted audiences effectively."
          />
          <Details
            type="Google Ads Search Certification"
            time="2023-2024"
            place="Google"
            info="Advanced expertise in managing search campaigns, including keyword strategy, bidding, and performance optimization."
          />
          <Details
            type="Shopping Ads Certification"
            time="2023-2024"
            place="Google"
            info="Specialized in creating and optimizing shopping ads to drive product visibility and sales on Google."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
