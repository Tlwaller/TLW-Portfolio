import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary w-screen h-64 flex items-center justify-center bottom-0 absolute left-0 text-left">
      <div className="max-w-screen-lg w-full">
        <div className="grid grid-cols-3 text-md">
          <div className="col-span-1 flex flex-col items-center">
            <div className="text-left">
              <h2 className="text-lg ">Trey Waller</h2>
              <span className="text-black">
                Passionate software engineer crafting
                <br />
                digital solutions with code and creativity.
              </span>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div className="text-left flex flex-col">
              <h3 className="">Links</h3>
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
          <div className="col-span-1 flex justify-center">
            <div className="text-left flex flex-col">
              <h3>Contact</h3>
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
        <span className="text-black w-full flex justify-center">
          &copy; 2023 Trey Waller
        </span>
      </div>
    </footer>
  );
};

export default Footer;
