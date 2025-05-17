const CallToActionSection = () => {
  return (
    <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
      <article className="bg-[#160f23] bg-gradient-to-br from-[#1c142d] to-[#0f0b1a] text-white flex flex-col justify-center gap-9 self-stretch rounded-xl p-6 lg:flex-row lg:justify-between lg:p-10">
        
        {/* Text */}
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            We've Built the Future of Data Centers
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Contact our team for a demo
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 items-center gap-2 md:flex lg:flex-col">
          <button className="bg-[#a379ff] text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
            Set Up a Time
          </button>
          <button className="bg-[#1c1c1c] text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
            Learn More
          </button>
        </div>

      </article>
    </section>
  );
};

export default CallToActionSection;
