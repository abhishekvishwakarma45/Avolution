import React from "react";
import { NavLink } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <section className="w-full px-6 py-4 bg-white text-gray-800">
      <p className="text-sm uppercase font-extrabold text-indigo-400 flex justify-center items-center mx-4 my-4">
        <NavLink to="/">
          <span className="transition ease-in  hover:text-black ">Home</span>
        </NavLink>
        <span className="text-black mx-1">
          <IoIosArrowForward />
        </span>
        <NavLink to="/allproducts">
          <span className="transition ease-in  hover:text-black ">
            About us
          </span>
        </NavLink>
      </p>
      <div className="container my-3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1
            className="text-3xl lg:text-4xl font-extrabold uppercase mb-4"
            style={{ fontFamily: "Unbounded, serif" }}
          >
            About Us
          </h1>

          <p className="text-xl lg:text-2xl mb-4">
            Welcome to
            <span
              className="text-amber-400 mx-1 font-extrabold uppercase"
              style={{ fontFamily: "Unbounded, serif" }}
            >
              Avolution
            </span>
            — where fashion meets individuality.
          </p>
          <p className="text-lg">
            Founded in 2025, our mission is to make fashion bold, inclusive, and
            accessible. Whether you're chasing the latest trends or creating
            your own, we bring you statement-making pieces that fit your style,
            your budget, and your lifestyle.
          </p>
        </div>
        <div className="w-full h-[400px] overflow-hidden rounded-sm shadow-lg">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/8117545/pexels-photo-8117545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Fashion"
            loading="lazy"
          />
        </div>
      </div>

      <div className="container mx-auto my-12 text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold uppercase my-6"
          style={{ fontFamily: "Unbounded, serif" }}
        >
          Why Choose Us
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          Because we’re not just another fashion brand — we’re a movement. We
          blend cutting-edge style with inclusivity and sustainability, and we
          make sure every piece reflects our values: boldness, creativity, and
          authenticity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-tl-xl rounded-br-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p>
              Every item is crafted with premium materials and attention to
              detail.
            </p>
          </div>
          <div className="bg-gray-50 p-6  border border-gray-200 rounded-tl-xl rounded-br-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Inclusive for All</h3>
            <p>We design with every body, identity, and story in mind.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-tl-xl rounded-br-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Affordable Style</h3>
            <p>Look good, feel good — without breaking your bank.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="w-full h-[400px] overflow-hidden rounded-sm shadow-lg order-2 lg:order-1">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/4872014/pexels-photo-4872014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Creative process"
            loading="lazy"
          />
        </div>
        <div className="text-center lg:text-left order-1 lg:order-2">
          <h2
            className="text-3xl md:text-4xl font-extrabold uppercase mb-6"
            style={{ fontFamily: "Unbounded, serif" }}
          >
            What We Do
          </h2>
          <p className="text-lg">
            We create fashion-forward collections that challenge norms and spark
            confidence. From everyday essentials to runway-inspired pieces, we
            design clothes that empower people to tell their story through
            style.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-24 text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold uppercase mb-6"
          style={{ fontFamily: "Unbounded, serif" }}
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white border border-gray-200 rounded-sm p-4 shadow-xl">
            <div className="w-full h-40 overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover"
                src="./support.jpg"
                alt="24/7 Service"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p>
              Our team is available around the clock to assist you with any
              inquiries or issues, ensuring you're always taken care of.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-sm p-4 shadow-xl">
            <div className="w-full h-40 overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover"
                src="./shipping.jpg"
                alt="Fast Shipping"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p>
              Receive your orders quickly with our efficient and reliable
              shipping partners, no matter where you are.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-sm p-4 shadow-xl">
            <div className="w-full h-40 overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover"
                src="./payment.jpg"
                alt="Secure Payment"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p>
              Your payment information is always safe with us, thanks to our
              secure checkout system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
