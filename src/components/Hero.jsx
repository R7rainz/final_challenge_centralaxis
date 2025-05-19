"use client"

export default function Hero() {
  const handleRequestDemo = () => {
    window.open("https://calendly.com/margarita-centralaxis/30min", "_blank", "noopener,noreferrer")
  }

  return (
    <section className="relative grid grid-cols-3 pb-8 items-center overflow-hidden">
      {/* Background Grid - Reduced height from 90vh to 70vh */}
      <div className="absolute left-0 top-0 z-[-2] bg-background-black-muted grid h-[70vh] w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-y border-zinc-800">
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex flex-col gap-5 h-full items-center justify-center border-x border-zinc-800" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>

      {/* Hero Content - Reduced padding top from 66px to 50px */}
      <div className="relative flex-col divide-y divide-zinc-800 pt-[50px] col-span-3">
        {/* Purple Glow from Bottom */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[350px] z-[-1] blur-[180px] bg-[#8257e6]/30 pointer-events-none" />

        <div className="pb-8 sm:pb-4">
          {/* Added padding bottom to create more space between content and button on mobile */}
          <div className="mx-auto flex min-h-[220px] sm:min-h-[300px] w-full max-w-[90vw] flex-col items-center justify-start pt-8 sm:justify-center gap-3 px-4 sm:px-6 md:px-16">
            {/* Changed justify-center to justify-start on mobile and added top padding */}
            <h1 className="text-center text-4xl sm:text-5xl md:text-7xl font-medium text-white sm:bg-gradient-to-r sm:from-gray-500 sm:via-white sm:to-gray-500 sm:bg-clip-text sm:text-transparent tracking-[1px] sm:tracking-[1.5px] md:tracking-[-2.5px] leading-tight mb-2">
              <span className="block sm:inline">Data Center</span>{" "}
              <span className="block sm:inline">Management Software</span>
            </h1>

            {/* Changed text color to gray-500 and reduced gap between elements */}
            <h2 className="text-base sm:text-lg md:text-xl text-center text-gray-500 max-w-[320px] sm:max-w-lg md:max-w-3xl mx-auto">
              Increase uptime, reduce costs, automate operations, and stay compliant.
            </h2>
            <h2 className="text-base sm:text-lg md:text-xl text-center text-gray-500 max-w-[320px] sm:max-w-lg md:max-w-3xl mx-auto">
              Built for colocations, data centers, and cloud providers.
            </h2>
          </div>
        </div>

        {/* CTA Button aligned with middle grid column */}
        <div className="w-full relative mt-auto">
          {/* Added mt-auto to push button to bottom */}
          <div className="grid grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] w-full">
            <div />
            <div className="border-x border-zinc-800 flex justify-center">
              <button
                className="w-full md:w-[400px] sm:w-[280px] px-6 py-4 bg-[#8257e6] text-white text-sm sm:text-base hover:bg-[#8257e6]/90 transition"
                type="button"
                onClick={handleRequestDemo}
              >
                Request Demo
              </button>
            </div>
            <div />
          </div>
        </div>
      </div>
    </section>
  )
}
