// Feature data
const features = [
  {
    poster_url: "https://www.centralaxis.com/posters/monitoring.png",
    video_url: "https://www.centralaxis.com/hb-monitoring.mp4",
    title: "Advanced Monitoring",
    description:
      "CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.",
    features: [
      "Real-time performance metrics and predictive analytics",
      "Automated alerts and intelligent incident response",
      "Comprehensive reporting and trend analysis",
    ],
  },
  {
    poster_url: "https://www.centralaxis.com/posters/networking.png",
    video_url: "https://www.centralaxis.com/landing/networking-b.mp4",
    title: "Network Management and Monitoring",
    description:
      "Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.",
    features: [
      "Real-time network performance monitoring and bandwidth optimization",
      "Automated network security and threat detection",
      "Advanced network diagnostics and troubleshooting tools",
    ],
  },
  {
    video_url: "https://www.centralaxis.com/landing/asset-management-b.mp4",
    title: "Asset Management",
    description:
      "Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.",
    features: [
      "Automated inventory tracking and lifecycle management",
      "Intelligent ticketing based on asset health and performance",
      "Efficient resource allocation and optimization",
    ],
  },
  {
    video_url: "https://www.centralaxis.com/landing/SinglePane-b.mp4",
    title: "A Single Pane of Glass",
    description: "A unified view across all of your BMS and EPMS systems, tailored to your needs.",
    features: [
      "Comprehensive visibility across all of your colocation infrastructure",
      "Customizable interface tailored to your specific operational requirements and priorities.",
      "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management.",
    ],
  },
  {
    video_url: "https://www.centralaxis.com/landing/__compliance.mp4",
    title: "Built-In Compliance",
    description: "CentralAxis provides compliance as a service for data centers.",
    features: [
      "Track data for EU, US, and global regulatory standards.",
      "We guarantee compliance and handle every step between monitoring and reporting.",
    ],
  },
  {
    video_url: "https://www.centralaxis.com/landing/dc-planning.mp4",
    title: "Data Center Planning",
    description:
      "Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.",
    features: [
      "Model new architectures and see detailed implications on power and cooling needs.",
      "Design unique specifications for your data center.",
      "Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability.",
    ],
  },
]

function FeaturesSection() {
  return (
    <section className="bg-black min-h-screen w-full">
      <div className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 self-center">
          <h3 className="bg-zinc-800/80 text-gray-400 flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium md:text-base">
            Built for AI
          </h3>
          <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
            <h4 className="text-pretty text-center text-3xl font-medium text-white md:text-4xl">
              Modernizing the Digital Backbone
            </h4>
          </div>
          <p className="text-gray-400 max-w-screen-md text-pretty text-center text-lg font-light md:text-xl">
            Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col items-center gap-6 w-full">
          {features.map((item, index) => (
            <article
              key={index}
              className={`bg-[#111111] flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-zinc-800/50 p-px sm:max-w-full md:w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} xl:gap-16 mx-auto`}
            >
              {/* Video Section */}
              <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "var(--radius, 0.5rem)",
                    display: "block",
                    height: "100%",
                    width: "100%",
                    aspectRatio: "16 / 9",
                    inset: "0px",
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={item.poster_url || ""}
                    style={{
                      aspectRatio: "16 / 9",
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      border: "none",
                      objectFit: "contain",
                      borderRadius: "var(--radius, 0.5rem)",
                    }}
                  >
                    <source src={item.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </figure>

              {/* Content Section */}
              <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
                <div className="flex flex-col items-start gap-2">
                  <h5 className="text-white text-2xl font-medium md:text-3xl">{item.title}</h5>
                  <p className="text-gray-400 font-normal md:text-lg">{item.description}</p>
                </div>
                <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center gap-4 font-normal">
                      <span
                        className="bg-zinc-800 flex size-6 items-center justify-center rounded-full"
                        style={{ minWidth: "1.5rem" }}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-gray-500"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
