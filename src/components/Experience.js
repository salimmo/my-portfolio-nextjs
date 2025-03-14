import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Online Marketing Manager"
              company="NetAds"
              companyLink="#"
              time="07.2022 - 10.2022"
              address="Hamburg, DE, Remote"
              work={
                <ul>
                  <li>● Built and managed new Google Ads campaigns using best practices, including competitive keyword research, ad group organization, and device segmentation.</li>
                  <li>● Audited and optimized existing Google Ads campaigns to improve performance, restructuring ad groups, keywords, bids, and ad copy.</li>
                  <li>● Collaborated with clients to understand their challenges, goals, and unique selling propositions, creating tailored strategies to meet their needs.</li>
                  <li>● Analyzed search queries to identify new keyword opportunities and negative keywords, reducing irrelevant traffic.</li>
                  <li>● Conducted A/B split testing on landing pages to optimize conversion rates and improve ad quality scores.</li>
                  <li>● Utilized Google Analytics to assess visitor behavior and make data-driven adjustments to paid campaigns.</li>
                </ul>
              }
            
          
            />

            <Details
              position="Freelance Online Marketing Specialist"
              company="Online"
              companyLink="#"
              time="05.2021 - 07.2022"
              address="Online, DE, US."
              work={
                <ul>
                  <li>● Successfully managed and executed online marketing and web development projects for a diverse portfolio of clients across various industries.</li>
                  <li>● Delivered results in paid and organic search, lead generation, analytics, paid social advertising, email marketing, and landing page optimization.</li>
                  <li>● Demonstrated strong problem-solving skills and the ability to meet deadlines under pressure.</li>
                </ul>
              }
            />

            <Details
              position=" eBay Seller"
              company="eBay"
              companyLink="https://ebay.com"
              time="2015 - 2020"
              address="Moers, DE."
              work={
                <ul>
                  <li>● Sold a variety of products on eBay, managing all aspects of the sales process, including listing creation, order fulfillment, and customer service.</li>
                  <li>● Leveraged SEO-optimized product titles, email campaigns, and social media promotion to drive traffic and increase sales.</li>
                  <li>● Analyzed market trends and competitive pricing to make informed decisions about product selection and pricing strategies.</li>
                  <li>● Earned positive feedback and high ratings for exceptional customer service and sales performance.</li>
                </ul>
              }
            />

            
          </ul>
        </div>
        </div>
    );
};

export default Experience;
