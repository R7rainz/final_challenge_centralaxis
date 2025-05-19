import { FeatureCard } from "./FeatureCard";

const features = [
    {
        title: "Resource Management",
        description:
            "See all of your resources in one place, update issues, and dynamically plan your resources.",
        icon: "https://assets.basehub.com/fa068a12/4tjfOxi91wk29BRy6jH1p/mail.svg",
        alt: "Real-time Messaging",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Deployment Automation",
        description:
            "From design, sourcing, supply, manufacutinring, and deployment - our system automates the entire process.",
        icon: "https://assets.basehub.com/fa068a12/xGzl38RZpWQq8bij8Hzhu/zap.svg",
        alt: "Task Management",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Networking",
        description:
            "Ensure that your networking infrastructure is always in place and ready to scale with your deployments.",
        icon: "https://assets.basehub.com/fa068a12/bp99UZ-NioE-mvd_ZLLh-/bar-chart-2.svg",
        alt: "File Sharing",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 20V10M12 20V4M6 20V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Firmware Versioning",
        description:
            "Ensure that your firmware is always up to date and secure with our automated versioning system.",
        icon: "https://assets.basehub.com/fa068a12/ZJG_2vVCKgVzSUrxdDMHo/smile.svg",
        alt: "Real-time Insights",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "Digital Twins",
        description:
            "Plan capacity intelligently with our digital twin technology.",
        icon: "https://assets.basehub.com/fa068a12/IDiRkDVimmZ2V_id1-FX7/command.svg",
        alt: "Smart Notifications",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6V18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15H6C5.20435 15 4.44129 15.3161 3.87868 15.8787C3.31607 16.4413 3 17.2044 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18V6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

export const FeaturesList = () => {
    return (
        <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
            <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
                {features.map((feature) => (
                    <FeatureCard key={feature.title} {...feature} />
                ))}
            </div>
        </div>
    );
};