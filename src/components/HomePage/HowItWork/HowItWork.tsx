import { motion, useInView } from "framer-motion";
import { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { FaListUl } from "react-icons/fa6";
import SecondaryButton from "../../Buttons/SecondaryButton";

type PropsType = {
  title: string;
  description: string;
  image: StaticImageData;
  svg_icon: React.ReactNode;
  handleClick: () => void;
};

const HowItWork = ({
  title,
  description,
  svg_icon,
  image,
  handleClick,
}: PropsType) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="flex gap-4 min-[850px]:p-0 p-4 bg-no-repeat bg-center h-[75vh] min-[850px]:h-auto bg-cover min-[850px]:!bg-none pb-10 "
      style={{
        backgroundImage: `url(${image.src})`,
      }}
    >
      {/* Left Section */}
      <div className="flex-1 w-full flex flex-col gap-5 min-[850px]:justify-normal justify-between">
        <div>
          <div className="flex items-center justify-between">
            <div className="min-[575px]:hidden block">
              <button onClick={handleClick}>
                <FaListUl size={22} />
              </button>
            </div>
            <motion.div
              key={title}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 40,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 0.3,
                delay: 0.05,
              }}
            >
              <SecondaryButton
                href="/"
                textColor="#fff"
                backgroundColor="linear-gradient(180deg, rgba(58, 71, 225, 0) 0%, rgba(58, 71, 225, 0.5) 100%)"
              />
            </motion.div>
          </div>
          <motion.h1
            key={title}
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : 40,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.3,
              delay: 0.1,
            }}
            className="mt-5 font-almarai font-light sm:text-5xl text-3xl -tracking-[1px] min-[575px]:text-start text-center"
          >
            {title}
          </motion.h1>
        </div>

        <motion.p
          key={description}
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 40,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            duration: 0.3,
            delay: 0.2,
          }}
          className="font-barlow sm:text-base text-xs font-light text-[#DEDEDE] min-[575px]:text-start text-center"
        >
          {description}
        </motion.p>
      </div>

      {/* Right Section: Image */}
      <motion.div
        key={title}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          duration: 0.3,
        }}
        className="min-[850px]:flex hidden flex-1 h-[462px] max-w-max items-center justify-center rounded overflow-hidden "
      >
        {svg_icon}
      </motion.div>
    </motion.div>
  );
};

export default HowItWork;
