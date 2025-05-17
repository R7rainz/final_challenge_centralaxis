import React from "react";
import { CheckCircle } from "lucide-react";

// Videos
import vidmonitoring from "../assets/hb-monitoring.mp4";
import vidnetworking from "../assets/vidnetworking.mp4";
import assetmanagement from "../assets/asset-management-b.mp4";
import singlepane from "../assets/SinglePane-b.mp4";
import compliance from "../assets/__compliance.mp4";
import datacenterplanning from "../assets/dc-planning.mp4";

// Data
const features = [
  {
    title: "Advanced Monitoring",
    description:
      "CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.",
    points: [
      "Real-time performance metrics and predictive analytics",
      "Automated alerts and intelligent incident response",
      "Comprehensive reporting and trend analysis",
    ],
    video: vidmonitoring,
    reverse: false,
  },
  {
    title: "Network Management and Monitoring",
    description:
      "Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure.",
    points: [
      "Real-time network performance monitoring and bandwidth optimization",
      "Automated network security and threat detection",
      "Advanced network diagnostics and troubleshooting tools",
    ],
    video: vidnetworking,
    reverse: true,
  },
  {
    title: "Asset Management",
    description:
      "Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease.",
    points: [
      "Automated inventory tracking and lifecycle management",
      "Intelligent tracking based on asset health and performance",
      "Efficient resource allocation and optimization",
    ],
    video: assetmanagement,
    reverse: false,
  },
  {
    title: "A Single Pane of Glass",
    description:
      "A unified view across all of your BMS and EPMS systems, tailored to your needs.",
    points: [
      "Comprehensive visibility across all of your colocation infrastructure",
      "Customizable interface tailored to your specific operational requirements and priorities",
      "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management",
    ],
    video: singlepane,
    reverse: true,
  },
  {
    title: "Built-In Compliance",
    description:
      "CentralAxis provides compliance as a service for data centers.",
    points: [
      "Track data for EU, US, and global regulatory standards",
      "We guarantee compliance and hands-away time between monitoring and reporting",
    ],
    video: compliance,
    reverse: false,
  },
  {
    title: "Data Center Planning",
    description:
      "CentralAxis provides a comprehensive data center planning solution that streamlines the design, deployment, and management of your data center infrastructure.",
    points: [
      "Automated data center design and layout optimization",
      "Real-time capacity planning and resource allocation",
      "Integrated project management and collaboration tools",
    ],
    video: datacenterplanning,
    reverse: true,
  },
];

const FeaturesSection = () => {
  return (
    <section className="container relative mx-auto flex flex-col items-center gap-6 px-6 py-14 md:py-[72px] bg-background-black text-white md:px-12">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 self-center max-w-4xl mx-auto text-center">
        <h3 className="text-sm text-txt-gray bg-fill-card rounded-full px-3 py-1">
          Built for AI
        </h3>
        <h4 className="text-pretty text-3xl font-medium md:text-4xl">
          Modernizing the Digital Backbone
        </h4>
        <p className="text-txt-gray text-lg">
          Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.
        </p>
      </div>

      {/* Cards */}
      {features.map((feature, index) => (
        <article
          key={index}
          className={`min-h-96 w-full max-w-[380px] sm:max-w-full md:w-full rounded-xl border border-white/10 bg-[#161616] p-6 md:p-2 flex flex-col md:flex-row ${
            feature.reverse ? "md:flex-row-reverse" : ""
          } items-center gap-8 md:gap-12`}
        >
          {/* Text */}
          <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10 text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-white/80 text-base md:text-lg">
              {feature.description}
            </p>
            <ul className="space-y-4">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 min-w-[20px] flex items-center justify-center rounded-full bg-white/10">
                    <CheckCircle className="w-4 h-4 text-white/70" />
                  </div>
                  <span className="text-white/90 text-sm md:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video */}
          <div className="p-2">
            <div className="w-[544px] h-[364px] overflow-hidden rounded-lg shadow-lg border border-white/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={feature.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default FeaturesSection;
