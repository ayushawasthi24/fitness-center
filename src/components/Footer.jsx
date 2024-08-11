import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We are committed to providing the best fitness experience. Join us
            to achieve your fitness goals with top-notch facilities and
            professional trainers.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Fitness Centers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Classes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">
            IIT Indore, Khandwa Road, Simrol, Indore, Madhya Pradesh - 453552
          </p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <p className="text-gray-400">Email: contact@fitnesscenter.com</p>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Fitness Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
