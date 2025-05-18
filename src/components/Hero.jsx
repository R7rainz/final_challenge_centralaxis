const Hero = () => {
    return (
      <section className='grid gird-col-3 pb-10 items-center'>
        <div className='absolute left-0 top-16 z-[-1] bg-background-black-muted grid h-[70vh] w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-y border-border-dark'>
          {/* left box */}
          <div className='col-span-1 flex h-full items-center justify-center' />
  
          {/* middle box */}
          <div className='col-span-1 flex flex-col gap-5 h-full items-center justify-center border-x border-border-dark' />
  
          {/* right box */}
          <div className='col-span-1 flex h-full items-center justify-center' />
        </div>
        <div className='relative mt-16 flex-col divide-y divide-border-dark pt-[35px]'>
          <div>
            {/* headings */}
            <div className='mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 py-4 px-2 sm:px-16 lg:px-22'>
              <h1 className='max-w-screen text-center text-4xl md:text-6xl font-medium text-txt-muted loading-none tracking-[1.44px] md:tracking-[-2.16px] mb-2 md:mb-0'>
                Data Center Management Software
              </h1>
  
              <h2 className='text-md md:text-lg text-center text-txt-gray-dark max-w-2xl mx-auto'>
                Increase uptime, reduce costs, automate operations, and stay
                compliant.
              </h2>
              <h2 className='text-md md:text-lg text-center text-txt-gray-dark max-w-2xl mx-auto'>
                Built for colocations, data centers, and cloud providers.
              </h2>
            </div>
          </div>
  
          {/* button */}
          <div className='flex items-start justify-center px-8 sm:px-24'>
            {/* background gradient */}
            <div
              class='absolute inset-0 w-full h-[90vh] z-[-1] blur-[150px] pointer-events-none rounded-full
              bg-radial-[at_50%_60%] from-background-purple-soft from-10% to-transparent to-50%'></div>
  
            <button className='min-w-sm px-6 py-4 bg-background-purple text-txt-text text-base hover:bg-background-purple/80 transition'>
              Request Demo
            </button>
          </div>
        </div>
      </section>
    );
  };
export default Hero;