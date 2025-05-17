import {
  Mail,
  Zap,
  BarChart,
  Smile,
  Command,
} from "lucide-react";

const features = [
  {
    title: "Resource Management",
    description:
      "See all of your resources in one place, update issues, and dynamically plan your resources.",
    icon: <Mail className="h-5 w-5 text-white" />,
  },
  {
    title: "Deployment Automation",
    description:
      "From design, sourcing, supply, manufacturing, and deployment – our system automates the entire process.",
    icon: <Zap className="h-5 w-5 text-white" />,
  },
  {
    title: "Networking",
    description:
      "Ensure that your networking infrastructure is always in place and ready to scale with your deployments.",
    icon: <BarChart className="h-5 w-5 text-white" />,
  },
  {
    title: "Firmware Versioning",
    description:
      "Ensure that your firmware is always up to date and secure with our automated versioning system.",
    icon: <Smile className="h-5 w-5 text-white" />,
  },
  {
    title: "Digital Twins",
    description:
      "Plan capacity intelligently with our digital twin technology.",
    icon: <Command className="h-5 w-5 text-white" />,
  },
];

const DynamicResourceManagementSection = () => {
  return (
    <section className="w-full px-6 py-14 md:py-20 lg:py-28 flex justify-center bg-transparent">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-10">
        {/* Left Side */}
        <div className="max-w-lg text-left space-y-4 shrink-0">
          <span className="inline-block text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
            Built for Scale
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Dynamic Resource<br />Management
          </h2>
          <p className="text-white/60 text-base">
            Seamlessly expand from racks to data centers. Our system grows with you,
            automatically managing resources across your entire infrastructure.
          </p>
        </div>

        {/* Right Side Cards */}
        <div
          className="flex w-full lg:gap-10 gap-4 overflow-x-auto lg:overflow-visible flex-row lg:flex-col"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 flex w-[280px] shrink-0 flex-col gap-4 rounded-lg p-4 lg:w-full lg:flex-row lg:p-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.06))",
              }}
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-semibold text-base">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicResourceManagementSection;
