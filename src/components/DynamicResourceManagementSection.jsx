import { Mail, Zap, BarChart3, CircleDot, Grid } from "lucide-react"

export default function ResourceManagement() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="text-gray-400 text-sm">Built for Scale</div>
            <h1 className="text-4xl md:text-5xl font-bold">Dynamic Resource Management</h1>
            <p className="text-gray-400 text-lg">
              Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources
              across your entire infrastructure.
            </p>
          </div>

          {/* Right Column - Desktop View (Large screens only) */}
          <div className="space-y-6 hidden lg:block">
            <FeatureCard
              icon={<Mail className="w-6 h-6" />}
              title="Resource Management"
              description="See all of your resources in one place, update issues, and dynamically plan your resources."
            />

            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Deployment Automation"
              description="From design, sourcing, supply, manufacutining, and deployment - our system automates the entire process."
            />

            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Networking"
              description="Ensure that your networking infrastructure is always in place and ready to scale with your deployments."
            />

            <FeatureCard
              icon={<CircleDot className="w-6 h-6" />}
              title="Firmware Versioning"
              description="Ensure that your firmware is always up to date and secure with our automated versioning system."
            />

            <FeatureCard
              icon={<Grid className="w-6 h-6" />}
              title="Digital Twins"
              description="Plan capacity intelligently with our digital twin technology."
            />
          </div>

          {/* Scrollable Cards (Mobile and Medium screens) */}
          <div className="lg:hidden w-full overflow-x-auto pb-6">
            <div className="flex space-x-4 min-w-max">
              <SquareFeatureCard
                icon={<Mail className="w-6 h-6" />}
                title="Resource Management"
                description="See all of your resources in one place, update issues, and dynamically plan your resources."
              />

              <SquareFeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Deployment Automation"
                description="From design, sourcing, supply, manufacutining, and deployment - our system automates the entire process."
              />

              <SquareFeatureCard
                icon={<BarChart3 className="w-6 h-6" />}
                title="Networking"
                description="Ensure that your networking infrastructure is always in place and ready to scale with your deployments."
              />

              <SquareFeatureCard
                icon={<CircleDot className="w-6 h-6" />}
                title="Firmware Versioning"
                description="Ensure that your firmware is always up to date and secure with our automated versioning system."
              />

              <SquareFeatureCard
                icon={<Grid className="w-6 h-6" />}
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
    <div className="bg-zinc-900 rounded-lg p-6 flex gap-4">
      <div className="bg-zinc-800 rounded-full p-3 h-fit">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}

// Square feature card for mobile scrolling
function SquareFeatureCard({ icon, title, description }) {
  return (
    <div className="bg-zinc-900 rounded-lg p-6 flex flex-col w-64 h-64">
      <div className="bg-zinc-800 rounded-full p-3 w-fit mb-4">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-4">{description}</p>
      </div>
    </div>
  )
}
