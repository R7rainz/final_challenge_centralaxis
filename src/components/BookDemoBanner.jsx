import backgroundImage from '../assets/background.png';

const BookDemoBanner = () => {
  return (
    <section className="w-full px-4 py-8 flex justify-center items-center">
      <div
        className="w-full max-w-6xl relative rounded-xl overflow-hidden text-center px-6 py-12 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Semi-transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/50 backdrop-blur-sm z-0" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
            Book a Demo
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-5">
            See how CentralAxis can revolutionize your data center operations.
          </p>
          <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition">
            Schedule Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDemoBanner;
