import logo from "../assets/FooterLogo.svg";
import  { Insta } from "@/assets/icons";


const Footer = () => {
  return (
    <footer className="w-full bg-text-blue   ">
      <div className="max-w-7xl mx-auto px-6 py-4 lg:h-25 flex flex-col lg:flex-row items-center lg:justify-between ">
        {/* Logo + Title */}
        <div className="flex items-center gap-2 mt-0 ">
          <img
            src={logo}
            alt="Browser Themes"
            className="w-56 h-12"
          />
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col lg:flex-row items-center gap-8 text-sm font-medium text-white mt-4 lg:mt-0">
          <a
            href="/themes"
            className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-5 hover:after:-translate-x-1/2 after:-bottom-1"
          >
            Themes
          </a>
          <a
            href="/build-new-tab"
            className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-15 hover:after:-translate-x-1/2 after:-bottom-1"
          >
            Build A New Tab
          </a>
          <a
            href="/how-to-build"
            className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-15 hover:after:-translate-x-1/2 after:-bottom-1"
          >
            How To Build
          </a>
          <a
            href="/how-to-upload"
            className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-15 hover:after:-translate-x-1/2 after:-bottom-1"
          >
            How To Upload
          </a>
          <a
            href="/about"
            className="relative after:absolute after:left-1/2 after:h-0.5 after:w-0 after:bg-text-light-blue after:transition-all hover:text-text-light-blue hover:after:w-5 hover:after:-translate-x-1/2 after:-bottom-1"
          >
            About
          </a>
        </nav>
      </div>
      <hr className="border-t border-[#215E96] " />
       <div className="flex  flex-col-reverse lg:flex-row items-center lg:justify-between  lg:mx-10 my-6 lg:my-0">
        <p className="text-sm text-white py-4">© 2024 New Tab Theme Builder Inc. All rights reserved.</p>
        <a href="" className="">
          <img src={Insta} alt="Instagram"  />
        </a>
      </div>
    </footer>
  );
}

export default Footer