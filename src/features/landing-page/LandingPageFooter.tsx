import React from "react";

const LandingPageFooter: React.FC = () => {
  return (
    <footer className="h-screen bg-teal-800 text-stone-50">
      <div className="tab:px-[50px] tab:py-[50px] mx-auto flex w-full max-w-[1200px] flex-col gap-[40px] px-[20px] py-[40px] md:flex-row md:justify-between">
        {/* Column 1: Brand */}
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-bold text-white">TechBridge</h2>
          <p className="mt-3 text-sm text-stone-300">
            Connecting clients with top-tier developers to build powerful
            digital products.
          </p>
        </div>

        {/* Column 2: Product */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Product</h4>
          <ul className="space-y-2 text-sm text-stone-300">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Get started</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Company</h4>
          <ul className="space-y-2 text-sm text-stone-300">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-white">Resources</h4>
          <ul className="space-y-2 text-sm text-stone-300">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-stone-600 py-[20px] text-center text-sm text-stone-400">
        © {new Date().getFullYear()} TechBridge. All rights reserved.
      </div>
    </footer>
  );
};

export default LandingPageFooter;
