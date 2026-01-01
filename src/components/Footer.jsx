import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import Disclaimer from './Disclaimer';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Political Vision</h3>
            <p className="text-sm leading-relaxed">
              Building a better future through transparent governance, inclusive policies, and dedicated public service.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/policies" className="hover:text-white transition-colors">Our Policies</a></li>
              <li><a href="/achievements" className="hover:text-white transition-colors">Achievements</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="mailto:info@example.com" className="hover:text-green-400 transition-colors" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <Disclaimer />
          <p className="text-center text-sm mt-4">
            &copy; {currentYear} Political Vision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
