import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-[10vh]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Section - Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo"
              className="w-8 h-8"
            />
            <h1 className="font-semibold text-2xl pb-2">Furniture</h1>
          </div>
          <p className="text-lg">
            Proin a interdum elit. Etiam eu sapien sem. Suspendisse a massa justo.
            Cras eget lorem nunc. Fusce nec urna tempus tempus.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://instagram.com" aria-label="Instagram">
              <img
                src="https://via.placeholder.com/20"
                alt="Instagram"
                className="w-5 h-5"
              />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <img
                src="https://via.placeholder.com/20"
                alt="Facebook"
                className="w-5 h-5"
              />
            </a>
            <a href="https://youtube.com" aria-label="YouTube">
              <img
                src="https://via.placeholder.com/20"
                alt="YouTube"
                className="w-5 h-5"
              />
            </a>
            <a href="https://x.com" aria-label="Twitter">
              <img
                src="https://via.placeholder.com/20"
                alt="Twitter"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl pb-2">Useful Links</h2>
          <ul className="space-y-2 text-lg">
            <li><a href="#">History</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Services Offered</a></li>
            <li><a href="#">Product Catalog</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl pb-2">Information</h2>
          <ul className="space-y-2 text-lg">
            <li><a href="#">FAQ/Return</a></li>
            <li><a href="#">Privacy/Terms</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">Sizing Guide</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-2">
          <h2 className="font-semibold text-2xl pb-2">Support</h2>
          <ul className="space-y-2 text-lg">
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Press Release</a></li>
            <li><a href="#">Return Centre</a></li>
            <li><a href="#">App Download</a></li>
            <li><a href="#">Advertisements</a></li>
          </ul>
        </div>
        <div className="container mx-auto grid grid-cols-3 gap-2 mb-8 h-[30vh] w-[45vh]">
        <img
          src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-01.jpg"
          alt="Insta 1"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-02.jpg"
          alt="Insta 2"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-03.jpg"
          alt="Insta 3"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-04.jpg"
          alt="Insta 4"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-05.jpg"
          alt="Insta 5"
          className="w-full h-auto rounded-lg"
        />
        <img
          src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/05/Instagram-06.jpg"
          alt="Insta 6"
          className="w-full h-auto rounded-lg"
        />
      </div>
      </div>

      {/* Instagram Images */}
     

      {/* Payment Methods */}
      <div className="mt-[10vh] container mx-auto flex justify-between items-center text-sm border-t border-gray-700 pt-4 pb-2">
        <p>©furniture site all rights reserved</p>
        <div className="flex space-x-4">
          <img
            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/01/master-card.png"
            alt="Visa"
            className="w-10"
          />
          <img
            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/01/visa@4x.png"
            alt="MasterCard"
            className="w-10"
          />
          <img
            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/01/Amex@4x.png"
            alt="Amex"
            className="w-10"
          />
          <img
            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/01/apay@4x.png"
            alt="Apple Pay"
            className="w-10"
          />
          <img
            src="https://wdtteapoy.wpengine.com/wp-content/uploads/2024/01/skrill@4x.png"
            alt="Skrill"
            className="w-10"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
