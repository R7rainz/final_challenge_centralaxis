import { motion } from "framer-motion"

import nvidia from "../assets/nvidia.svg"
import amd from "../assets/amd.svg"
import cisco from "../assets/cisco.svg"
import dell from "../assets/dell.svg"
import hp from "../assets/hp.svg"
import intel from "../assets/intel.svg"
import lenovo from "../assets/lenovo.svg"
import schneider from "../assets/schneider.svg"
import supermicro from "../assets/supermicro.svg"

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
]

const HardwareIntegrations = () => {
  const scrollingLogos = [...logos, ...logos, ...logos] // enough to overflow the screen

  return (
    <section className="relative flex flex-col items-center gap-10 py-14 md:py-[72px] w-full overflow-hidden bg-black border-t border-zinc-800/30">
      <h2 className="text-md font-medium text-gray-400 text-center">
        Seamless integrations with any data center hardware
      </h2>

      <div className="relative w-full overflow-hidden group">
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60, // Adjust speed as needed
              ease: "linear",
            },
          }}
          // Pause on hover
          whileHover={{ animationPlayState: "paused" }}
        >
          {scrollingLogos.map(({ name, logo }, index) => (
            <figure key={`logo-${index}`} className="inline-block w-32 select-none shrink-0">
              <img
                src={logo || "/placeholder.svg"}
                alt={name}
                className="w-full h-full object-contain"
                draggable={false}
              />
              <figcaption className="sr-only">{name}</figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HardwareIntegrations
