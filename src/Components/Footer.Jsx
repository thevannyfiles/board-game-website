import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <address className="not-italic mb-4">
          <a href="https://goo.gl/maps/JDx7jE2zE7ZxBqQr6" target="_blank" rel="noopener noreferrer" className="block hover:underline">
            471 5th Ave, Brooklyn, NY 11215
          </a>
          <a href="tel:+17189711684" className="block hover:underline">718-971-1684</a>
          <a href="mailto:sipnplaynyc@gmail.com" className="block hover:underline">sipnplaynyc@gmail.com</a>
        </address>
        <nav className="flex space-x-4 mb-4">
          <a href="https://www.facebook.com/sipnplaynyc/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6 inline" />
          </a>
          <a href="https://www.instagram.com/sipnplaynyc/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6 inline" />
          </a>
        </nav>
        <a href="https://www.sipnplaynyc.com/feedback" className="text-white hover:underline">
          Feedback
        </a>
        <p className="mt-4">&copy; 2024 Sip & Play. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
