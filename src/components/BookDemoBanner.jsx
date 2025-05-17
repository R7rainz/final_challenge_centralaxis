import React from "react";

const BookDemoBanner = () => {
    return (
        <section className="container relative mx-auto flex flex-col items-center gap-10 px-6 pb-14">
            <article
                className="dark:bg-dark-surface-secondary relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border-border p-6"
                style={{ height: "250px" }}
            >
                <img
                    className="absolute left-0 top-0 h-full w-full object-cover"
                    src="https://www.centralaxis.com/background.png"
                    style={{ filter: "blur(2px)" }}
                    alt="Demo Background"
                />
                {/* Overlay Layer */}
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-60 z-10" />
                <div className="absolute left-0 top-0 z-10 h-full w-full filter" />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center gap-2 text-center">
                    <h4 className="text-3xl font-medium tracking-tighter text-white md:text-4xl">
                        Book a Demo
                    </h4>
                    <p className="mb-4 text-lg text-white/70 md:text-xl">
                        See how CentralAxis can revolutionize your data center operations.
                    </p>
                    <div className="flex items-center gap-2">
                        <a
                            target="_blank"
                            href="https://calendly.com/margarita-centralaxis/30min"
                            rel="noreferrer"
                        >
                            <span className="rounded bg-white px-4 py-2 text-base font-semibold text-black">
                                Schedule Now
                            </span>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default BookDemoBanner;