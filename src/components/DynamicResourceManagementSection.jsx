export default function ResourceManagement() {
  // SVG icons defined as constants
  const icons = {
    mail: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6M22 6L12 13L2 6"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    zap: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    barChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 20V10M12 20V4M6 20V14"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    circleDot: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    grid: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 3C17.2044 3 16.4413 3.31607 15.8787 3.87868C15.3161 4.44129 15 5.20435 15 6V18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15H6C5.20435 15 4.44129 15.3161 3.87868 15.8787C3.31607 16.4413 3 17.2044 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18V6C9 5.20435 8.68393 4.44129 8.12132 3.87868C7.55871 3.31607 6.79565 3 3 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6C3 6.79565 3.31607 7.55871 3.87868 8.12132C4.44129 8.68393 5.20435 9 6 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  }

  return (
    <div className="bg-[#08090a] text-white p-6 md:p-12 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-2">
            <div className="inline-block bg-zinc-800/80 rounded-full px-4 py-1.5 text-gray-400 text-xs font-light">
              Built for Scale
            </div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Dynamic Resource Management</h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources
              across your entire infrastructure.
            </p>
          </div>

          {/* Right Column - Desktop View (Large screens only) */}
          <div className="space-y-6 hidden lg:block">
            <FeatureCard
              icon={icons.mail}
              title="Resource Management"
              description="See all of your resources in one place, update issues, and dynamically plan your resources."
            />

            <FeatureCard
              icon={icons.zap}
              title="Deployment Automation"
              description="From design, sourcing, supply, manufacutining, and deployment - our system automates the entire process."
            />

            <FeatureCard
              icon={icons.barChart}
              title="Networking"
              description="Ensure that your networking infrastructure is always in place and ready to scale with your deployments."
            />

            <FeatureCard
              icon={icons.circleDot}
              title="Firmware Versioning"
              description="Ensure that your firmware is always up to date and secure with our automated versioning system."
            />

            <FeatureCard
              icon={icons.grid}
              title="Digital Twins"
              description="Plan capacity intelligently with our digital twin technology."
            />
          </div>

          {/* Scrollable Cards (Mobile and Medium screens) */}
          <div className="lg:hidden w-full overflow-x-auto pb-6">
            <div className="flex space-x-4 min-w-max">
              <SquareFeatureCard
                icon={icons.mail}
                title="Resource Management"
                description="See all of your resources in one place, update issues, and dynamically plan your resources."
              />

              <SquareFeatureCard
                icon={icons.zap}
                title="Deployment Automation"
                description="From design, sourcing, supply, manufacutining, and deployment - our system automates the entire process."
              />

              <SquareFeatureCard
                icon={icons.barChart}
                title="Networking"
                description="Ensure that your networking infrastructure is always in place and ready to scale with your deployments."
              />

              <SquareFeatureCard
                icon={icons.circleDot}
                title="Firmware Versioning"
                description="Ensure that your firmware is always up to date and secure with our automated versioning system."
              />

              <SquareFeatureCard
                icon={icons.grid}
                title="Digital Twins"
                description="Plan capacity intelligently with our digital twin technology."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Original feature card for desktop
function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-zinc-900/80 rounded-lg p-6 flex gap-4 border border-zinc-800">
      <div className="bg-zinc-800 rounded-full p-3 h-fit">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-medium text-lg text-white">{title}</h3>
        <p className="text-gray-400 font-light">{description}</p>
      </div>
    </div>
  )
}

// Square feature card for mobile scrolling
function SquareFeatureCard({ icon, title, description }) {
  return (
    <div className="bg-zinc-900/80 rounded-lg p-6 flex flex-col w-64 h-64 border border-zinc-800">
      <div className="bg-zinc-800 rounded-full p-3 w-fit mb-4">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-medium text-lg text-white">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-4 font-light">{description}</p>
      </div>
    </div>
  )
}
