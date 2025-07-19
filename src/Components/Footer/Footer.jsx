
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import logo from '../../assets/icons/1.png'

const Footer = () => {
  return (
    <footer className="bg-[url('/pattern-bg.png')] bg-cover bg-center text-gray-800 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <img src={logo} alt="Logo" className="mx-auto md:mx-0 w-20 mb-4" />
          <h2 className="text-3xl font-semibold text-[#331A15] mb-2">Espresso Emporium</h2>
          <p className="text-gray-600 mb-4">
            Always ready to be your friend. Come & Contact with us to share your memorable
            moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-white text-lg">
            <div className="bg-[#331A15] p-2 rounded-full"><FaFacebookF /></div>
            <div className="bg-[#331A15] p-2 rounded-full"><FaTwitter /></div>
            <div className="bg-[#331A15] p-2 rounded-full"><FaInstagram /></div>
            <div className="bg-[#331A15] p-2 rounded-full"><FaLinkedinIn /></div>
          </div>

          {/* Contact */}
          <div className="mt-8 text-left">
            <h3 className="text-xl font-bold mb-2 text-[#331A15]">Get in Touch</h3>
            <p className="flex items-center gap-2 mb-1"><FaPhone /> +88 01876*****78</p>
            <p className="flex items-center gap-2 mb-1"><FaEnvelope /> apurbaroy00011@gmail.com</p>
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> BoiKali, Khalishpur, Khulna</p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-[#331A15] mb-6 text-center md:text-left">Connect with Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border border-gray-300 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="border border-[#331A15] text-[#331A15] px-6 py-2 rounded-full hover:bg-[#331A15] hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-white mt-10 bg-[#331A15] py-4 rounded-md">
        Copyright © Espresso Emporium | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
