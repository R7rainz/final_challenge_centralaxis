import { useState } from "react";
import icon from "../assets/logo.webp";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    title: "Data Center Infrastructure Management",
    submenu: [
      "Monitoring Devices",
      "Asset Tracking",
      "Network Management",
      "Change Management",
      "Colocation Management",
      "Data Center Planner",
      "Firmware Management",
      "IP Address Management",
      "Customer Portal",
      "Custom Insights",
      "Custom Data Center Solutions",
    ],
  },
  {
    title: "Intelligence Solutions",
    submenu: [
      "Digital Twins",
      "Smart Power Mapping",
      "Predictive Failure and Alerting",
      "Smart Control Systems",
      "Automated Discovery",
    ],
  },
  {
    title: "Data Center Compliance",
    submenu: [
      "DCOI Compliance",
      "(EU) 2023/1791",
      "EN 50600",
      "LEED Certification",
      "ISO/IEC 30134-2",
      "(EPA) ENERGY STAR",
      "European Commission Joint Research Centre (JRC)",
    ],
  },
  {
    title: "Sustainability Blog",
    submenu: [
      "Energy Efficiency",
      "Stranded Energy Map",
      "Environmental Product Declaration",
      "Renewables Integration",
      "Power Resource Management",
    ],
  },
];

const Header = () => {
  const [hoverIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState({});

  const toggleMobileSubMenu = (index) => {
    setOpenMobileMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <header className='fixed top-0 w-full border-b border-border-dark bg-background-black/60 z-20 backdrop-blur-xl'>
      <div className='max-w-[120rem] mx-auto px-8 md:px-6 py-4 flex justify-between items-center'>

        {/* icon and name with anchor tag */}
        <a href="/" className='flex items-center gap-2'>
          <img src={icon} alt='Central Axis Logo' className='w-9' />
          <span className='font-bold text-md lg:text-2xl text-txt-text'>
            CentralAxis
          </span>
        </a>

        {/* navigation links */}
        <nav className='hidden lg:flex gap-2 relative'>
          {navItems.map((item, index) => (
            <div
              key={index}
              className='relative'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button className='p-2 text-sm hover:text-txt-gray'>
                {item.title} ▼
              </button>

              {hoverIndex === index && (
                <ul className='absolute right-0 p-1 bg-background-black border border-white rounded w-64 z-30'>
                  {item.submenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className='px-4 py-2 text-txt-text hover:text-txt-gray cursor-pointer text-sm font-semibold'
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        {/* mobile menu button */}
        <button
          className='lg:hidden text-white p-2 border border-border-soft rounded'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={25} />
        </button>
      </div>

      {/* mobile dropdown menu */}
      {isMenuOpen && (
        <div className='absolute top-16 w-full lg:hidden bg-background-black-soft border-t border-border-soft p-10 space-y-6'>
          {navItems.map((item, index) => (
            <div key={index}>
              <button
                className='flex justify-start gap-2 w-full items-center text-md text-txt-text font-medium mb-2'
                onClick={() => toggleMobileSubMenu(index)}
              >
                {item.title}
                <ChevronDown
                  className={`text-txt-gray-dark transition-transform duration-300 ${
                    openMobileMenus[index] && "rotate-180"
                  }`}
                  size={20}
                />
              </button>

              <AnimatePresence initial={false}>
                {openMobileMenus[index] && (
                  <motion.ul
                    key={`submenu-${index}`}
                    initial={{ height: 0, opacity: 1 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='overflow-hidden space-y-4 pl-2'
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className='text-md text-txt-gray-dark hover:text-txt-gray cursor-pointer pl-2'
                      >
                        {subItem}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
