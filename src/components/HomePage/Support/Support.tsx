"use client";
import Ipad from "@/../public/images/Screen.png";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function Support() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const titleIsInView = useInView(titleRef);
  const descriptionIsInView = useInView(descriptionRef);

  return (
    <section className=" bg-[#030C14] w-full overflow-hidden">
      <div className=" bg-[#030C14] w-full text-white md:py-24 py-14 pl-8 lg:pr-0 pr-8 flex   justify-between rounded-b-[50px] gap-16 relative ">
        <div
          className="bg-no-repeat bg-contain bg-center lg:!bg-none min-[1200px]:flex-[0_0_45%]"
          style={{
            backgroundImage: `url(${Ipad.src})`,
          }}
        >
          <div className="flex flex-col  gap-36  justify-between bg-[#030C14]/10 backdrop-blur-sm lg:bg-none ">
            <div>
              <div className=" max-w-max">
                <SecondaryButton
                  href="/"
                  textColor="#ffffff"
                  backgroundColor="linear-gradient(180deg, rgba(58, 71, 225, 0) 0%, rgba(58, 71, 225, 0.5) 100%)"
                />
              </div>
              <motion.h1
                ref={titleRef}
                initial={{
                  x: 40,
                  opacity: 0,
                }}
                animate={{
                  x: titleIsInView ? 0 : 40,
                  opacity: titleIsInView ? 1 : 0,
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  delay: 0.5,
                  stiffness: 200,
                }}
                className=" font-almarai font-light sm:text-6xl text-3xl  mt-3 -tracking-[1px]"
              >
                Support for Popular Assets
              </motion.h1>
            </div>
            <motion.div
              ref={descriptionRef}
              initial={{
                x: 40,
                opacity: 0,
              }}
              animate={{
                x: descriptionIsInView ? 0 : 40,
                opacity: descriptionIsInView ? 1 : 0,
              }}
              transition={{
                type: "spring",
                duration: 0.3,
                delay: 0.5,
                stiffness: 200,
              }}
              className=" font-barlow"
            >
              <p className="font-light text-xs sm:text-base">
                {`Enjoy the flexibility of managing multiple cryptocurrencies all in
              one place. CEBOT supports a wide range of popular digital assets,
              allowing you to diversify your portfolio with ease. Whether you're
              dealing with Bitcoin (BTC), Ethereum (ETH), Tether (USDT - ERC-20,
              TRC-20), USD Coin (USDC), Binance Coin (BNB), Litecoin (LTC), Tron
              (TRX), Solana (SOL), or Toncoin (TON).`}
              </p>
              <p className=" font-medium sm:text-lg text-base  mt-3">
                Our platform provides a seamless and user-friendly experience to
                handle all your crypto transactions efficiently.
              </p>
            </motion.div>
          </div>
        </div>
        <div
          className=" lg:block hidden rounded-3xl flex-[0_0_40%] relative"
          style={{
            boxShadow: "-90px -101px 135px -67px rgba(67,45,207,0.51)",
          }}
        >
          <Image src={Ipad} alt="Ipad" />

          <div className=" bg-white/20 p-3 rounded-xl backdrop-blur-md absolute min-[1200px]:bottom-14 bottom-0 min-[1200px]:-left-[120px] -left-[0px] ">
            <h4 className=" font-barlow font-medium text-lg text-neutrals-dark-grey">
              Wallet
            </h4>
            <div className="flex">
              <h1 className=" font-almarai font-light text-[50px] leading-[1]">
                64.3
              </h1>
              <span>%</span>
            </div>
            <svg
              width="180"
              height="68"
              viewBox="0 0 221 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{
                  opacity: 0,
                  pathLength: 0,
                }}
                animate={{
                  opacity: descriptionIsInView ? 1 : 0,
                  pathLength: descriptionIsInView ? 1 : 0,
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                d="M0 66.7578C27.8998 66.7578 24.6002 14.2578 52.5 14.2578C80.3998 14.2578 76.1002 32.7578 104 32.7578C131.9 32.7578 126.1 38.2578 154 38.2578C181.9 38.2578 191.1 4.75781 219 4.75781"
                stroke="white"
                stroke-opacity="0.4"
                stroke-width="2"
                stroke-linecap="round"
              />
              <motion.path
                initial={{
                  opacity: 0,
                  pathLength: 0,
                }}
                animate={{
                  opacity: descriptionIsInView ? 1 : 0,
                  pathLength: descriptionIsInView ? 1 : 0,
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                d="M0 66.7578C27.2601 66.7578 30.7399 30.2578 58 30.2578C85.2601 30.2578 80.7399 1.25781 108 1.25781C135.26 1.25781 134.74 22.2578 162 22.2578C189.26 22.2578 192.24 4.75781 219.5 4.75781"
                stroke="url(#paint0_radial_47_4244)"
                stroke-width="2"
                stroke-linecap="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_47_4244"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(176.234 53.7118) rotate(16.9496) scale(152.768 564.204)"
                >
                  <stop stop-color="#A5B7F8" />
                  <stop offset="0.520098" stop-color="#E879F8" />
                  <stop offset="1" stop-color="#F1A2AA" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
