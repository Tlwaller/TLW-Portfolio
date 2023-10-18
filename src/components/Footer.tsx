import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary w-screen p-6 flex items-center justify-center bottom-0 absolute left-0 text-left text-2xl md:text-base">
      <div className="max-w-screen-lg w-full">
        <div className="grid grid-rows-3 grid-cols-1 text-md md:grid-cols-3 md:grid-rows-1 gap-4">
          <div className="col-span-1 flex flex-col items-start md:items-center">
            <div className="text-left">
              <h2 className=" text-2xl md:text-lg">Trey Waller</h2>
              <span className="text-black">
                Passionate software engineer crafting
                <br />
                digital solutions with code and creativity.
              </span>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-start md:items-center">
            <div className="text-left flex flex-col">
              <h3 className="text-2xl md:text-lg">Links</h3>
              <a
                href="https://www.linkedin.com/in/trey-waller/"
                className="text-black hover:text-secondary transition-all"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.github.com/tlwaller"
                className="text-black hover:text-secondary transition-all"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-span-1 flex justify-start md:justify-center">
            <div className="text-left flex flex-col">
              <h3 className="text-2xl md:text-lg">Contact</h3>
              <a
                href="mailto: tlwaller99@gmail.com"
                className="text-black hover:text-secondary transition-all"
              >
                tlwaller99@gmail.com
              </a>
              <a
                href="tel:682-667-4968"
                className="text-black hover:text-secondary transition-all"
              >
                682-667-4968
              </a>
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-black my-8" />
        <span className="text-black w-full flex justify-center text-base">
          &copy; 2023 Trey Waller
        </span>
      </div>
    </footer>
  );
};

export default Footer;
