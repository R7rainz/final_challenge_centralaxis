"use client"

export default function Hero() {
  const handleRequestDemo = () => {
    window.open("https://calendly.com/margarita-centralaxis/30min", "_blank", "noopener,noreferrer")
  }

  return (
    <section className="grid grid-cols-3 pb-10 items-center">
      {/* Background Grid */}
      <div className="absolute left-0 top-16 z-[-1] bg-background-black-muted grid h-[70vh] w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-y border-border-dark">
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex flex-col gap-5 h-full items-center justify-center border-x border-border-dark" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>

      {/* Hero Content */}
      <div className="relative mt-16 flex-col divide-y divide-border-dark pt-[35px] col-span-3">
        <div>
          <div className="mx-auto flex min-h-[200px] sm:min-h-[288px] w-full max-w-[90vw] flex-col items-center justify-center gap-2 px-4 sm:px-6 md:px-16">
            <h1 className="text-center text-3xl sm:text-4xl md:text-6xl font-medium text-white sm:bg-gradient-to-r sm:from-gray-500 sm:via-white sm:to-gray-500 sm:bg-clip-text sm:text-transparent tracking-[0.8px] sm:tracking-[1.2px] md:tracking-[-2.16px] leading-tight mb-2">
              <span className="block sm:inline">Data Center</span>{" "}
              <span className="block sm:inline">Management Software</span>
            </h1>

            <h2 className="text-sm sm:text-base md:text-lg text-center text-gray-400 max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto">
              Increase uptime, reduce costs, automate operations, and stay compliant.
            </h2>
            <h2 className="text-sm sm:text-base md:text-lg text-center text-gray-400 max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto">
              Built for colocations, data centers, and cloud providers.
            </h2>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-start justify-center px-4 sm:px-8 md:px-24 pt-6 w-full">
          {/* Background Gradient */}
          <div className="absolute inset-0 w-full h-[90vh] z-[-1] blur-[150px] pointer-events-none rounded-full bg-radial-[at_50%_60%] from-background-purple-soft from-10% to-transparent to-50%" />

          <button
            className="w-full sm:w-[320px] px-6 py-4 bg-[#8257e6] text-white text-sm sm:text-base hover:bg-[#8257e6]/90 transition"
            type="button"
            onClick={handleRequestDemo}
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  )
}
