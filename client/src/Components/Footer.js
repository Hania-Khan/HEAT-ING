import React from "react";
import "../Styling/Footer.css";

const Footer = () => {
  return (
    <footer className="p-10">
      <div className="footer-content">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src="https://placehold.co/200x100"
              alt="Company logo"
              className="mb-4"
            />
            <div className="flex space-x-4 mb-4">
              <a href="#" className="icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
            <p className="text-sm">
              We are an approved installer for South Tyneside Council
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="font-bold text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Solar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="font-bold text-lg mb-4">Contact</h2>
            <p className="text-gray-400 mb-4">Tel 0191 6804575</p>
            <p className="text-gray-400 mb-4">
              enquiries@northeastinsulationservices.co.uk
            </p>
            <p className="text-gray-400 mb-4">
              1 Charles Street
              <br />
              Sunderland
              <br />
              SR6 0AN
            </p>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-sm text-gray-400">
          <p>
            NORTH EAST INSULATION SERVICES LTD registered as a limited company
            in England and Wales under company number: 11780476
          </p>
          <p>
            Registered Company Address: 15 Riverside Studios Amethyst Road,
            Newcastle Business Park, Newcastle Upon Tyne, England NE4 7YL
          </p>
          <p className="my-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Use
            </a>{" "}
            |
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy & Cookie Policy
            </a>{" "}
            |
            <a href="#" className="text-gray-400 hover:text-white">
              Trading Terms
            </a>
          </p>
          <p>
            Powered by Yell Business © 2022. The content on this website is
            owned by us and our licensors. Do not copy any content (including
            images) without our consent.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
