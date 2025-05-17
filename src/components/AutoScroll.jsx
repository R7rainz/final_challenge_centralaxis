import { motion } from "framer-motion";

import nvidia from "../assets/nvidia.svg";
import amd from "../assets/amd.svg";
import cisco from "../assets/cisco.svg";
import dell from "../assets/dell.svg";
import hp from "../assets/hp.svg";
import intel from "../assets/intel.svg";
import lenovo from "../assets/lenovo.svg";
import schneider from "../assets/schneider.svg";
import supermicro from "../assets/supermicro.svg";

const logos = [
  { name: "Nvidia", logo: nvidia },
  { name: "AMD", logo: amd },
  { name: "Cisco", logo: cisco },
  { name: "Dell", logo: dell },
  { name: "HP", logo: hp },
  { name: "Intel", logo: intel },
  { name: "Lenovo", logo: lenovo },
  { name: "Schneider Electric", logo: schneider },
  { name: "Supermicro", logo: supermicro },
];
const HardwareIntegrations = () => {
  const scrollingLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className='relative flex flex-col items-center gap-10 py-14 md:py-[72px] w-full overflow-hidden bg-background-black border-t border-border-dark'>
      <h2 className='text-md font-medium text-txt-gray-dark text-center'>
        Seamless integrations with any data center hardware
      </h2>

      <div className='relative w-ful overflow-hidden'>
        <motion.div
          className='flex gap-12'
          style={{ whiteSpace: "nowrap" }}
          animate={{ x: ["10%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          }}>
          {scrollingLogos.map(({ name, logo }, index) => (
            <figure
              key={`logo-${index}`}
              className='inline-block w-32 select-none'>
              <img
                src={logo}
                alt={name}
                className='w-full h-full object-contain'
                draggable={false}
              />

              <figcaption className='sr-only'>{name}</figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HardwareIntegrations;