import React from "react";
import { NavLink } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-4 bg-white text-gray-800">
      <p className="text-sm uppercase px-4 lg:px-20 md:px-10 font-extrabold text-indigo-400 flex items-center my-5">
        <NavLink to="/">
          <span className="transition ease-in hover:text-black">Home</span>
        </NavLink>
        <span className="text-black mx-1">
          <IoIosArrowForward />
        </span>
        <NavLink to="/allproducts">
          <span className="transition ease-in text-black">About us</span>
        </NavLink>
      </p>

      <hr className="text-gray-500 my-4" />

      <div className="container my-3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="text-xl lg:text-2xl mb-4">
            Welcome to
            <span
              className="text-amber-400 mx-1 font-extrabold uppercase"
              style={{ fontFamily: "Unbounded, serif" }}
            >
              Avora
            </span>
            <br />— where fashion meets individuality.
          </p>
          <p className="text-md">
            Established in 2025, Avora is dedicated to delivering
            high-impact fashion that celebrates diversity, self-expression, and
            sustainability. From everyday wear to bold statements, we empower
            individuals to express their identity through style—without
            compromise.
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

      <div className="container mx-auto my-14 text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold uppercase my-6"
          style={{ fontFamily: "Unbounded, serif" }}
        >
          Why Choose Us
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          “At Avora, we believe in curating moments of elegance, comfort, and innovation in everyday life. Our collection is designed to elevate your lifestyle — from the way you dress, to the spaces you inhabit, to the experiences you embrace. Avora is not just a brand; it’s the first light of a new way of living.”
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-tl-xl rounded-br-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p>
              We prioritize craftsmanship and premium fabrics to ensure lasting
              comfort and elegance.
            </p>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200 rounded-tl-xl rounded-br-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Inclusive for All</h3>
            <p>
              Our collections are thoughtfully designed to embrace all body
              types, identities, and styles.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-tl-xl rounded-br-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Affordable Style</h3>
            <p>
              Experience standout fashion without the premium price tag—style
              that’s accessible to everyone.
            </p>
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
            We design contemporary apparel that inspires self-confidence and
            creative freedom. From trendsetting essentials to avant-garde
            collections, every piece is a canvas for self-expression.
          </p>
        </div>
      </div>

      <div className="container mx-auto my-16 text-center">
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
              Our support team is available anytime to provide prompt assistance
              and ensure a seamless shopping experience.
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
              Enjoy speedy and reliable delivery worldwide through our trusted
              logistics network.
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
              Shop with confidence—our encrypted payment system ensures your
              data remains safe and protected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
