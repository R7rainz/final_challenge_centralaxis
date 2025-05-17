import React from "react";

const FAQs = () => {
  return (
    <section className="bg-[#0c0c0d] text-white py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-sm font-medium bg-[#1c1c1e] text-gray-300 px-3 py-1 rounded-full">
          FAQs
        </span>
        <h2 className="text-4xl font-semibold mt-4">Frequently asked questions</h2>
        <p className="text-gray-400 mt-2">
          Find answers to common questions about our solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 text-left">
          {/* FAQ 1 */}
          <div>
            <h3 className="font-medium text-lg">
              Are these solutions applicable to me if I am operating a co-location?
            </h3>
            <p className="text-gray-400 mt-2">
              Yes! Our solutions are designed to help co-location operators manage their
              infrastructure more efficiently and effectively.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h3 className="font-medium text-lg">
              How do you ensure data privacy and security?
            </h3>
            <p className="text-gray-400 mt-2">
              We adhere to strict data privacy regulations and implement robust security
              measures to protect sensitive information.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h3 className="font-medium text-lg">How does pricing work?</h3>
            <p className="text-gray-400 mt-2">
              Depending on your requirements, we offer flexible pricing models.
            </p>
          </div>

          {/* FAQ 4 */}
          <div>
            <h3 className="font-medium text-lg">
              Do you provide ongoing support and maintenance for your solutions?
            </h3>
            <p className="text-gray-400 mt-2">
              Absolutely - we offer comprehensive support and maintenance as well as
              customization for your needs.
            </p>
          </div>

          {/* FAQ 5 */}
          <div>
            <h3 className="font-medium text-lg">How do I get started?</h3>
            <p className="text-gray-400 mt-2">
              Set up a demo and we'll guide you through our offerings and start a trial!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
