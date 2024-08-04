import React, { useEffect, useState } from "react";
import MenuBtn from "./menuButton/MenuBtn";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <header className="relative z-50 mx-4 flex text-white md:mx-14">
      <nav className="flex h-full w-full items-center justify-between">
        <div className="relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/8395/c9d4/68c5a1ccc8ca330987738f866e9e96b3?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agPZ2BKxsusB8g7JulBxKWTx0lrip~Y7VDAF3D2WJEg6zU6air91xKhXfiOypz7yWQ7GkLobxNNGbly2jFQBZd3cBLvI~KcH7M44FheFJ9fnFnALN3Dtxn-z1MN1lNta59FzOt~o0mLs8vmLTKEJeiFFAHuwxpPtsX1WUOq7gXBxPkuIORM-ftk0Uk-oHfVDVJsrGJR8Er~u5THWp8wGD6PZF18T~u88gSAvxnfDkrvSQLnSx~ak6y8uowfxuyEcBHcQrouiLj8Eos0RTjP1D2XMItHgkdEGwpPQWbojWCfNsZ57jmgi0LR3rjFXL7pGpI3AIo4JGRUIzFUkik9OSg__"
            alt="logo"
            className="w-24"
          />
          <h2 className="absolute bottom-2 w-40 text-xs">The Shoe Company</h2>
        </div>
        <div
          className={`fixed right-4 top-4 ${isOpen ? "block" : "hidden"} h-72 w-56 rounded-md bg-gray-400 bg-opacity-55 md:static md:block md:h-auto md:w-auto md:bg-transparent`}
        >
          <ul className="flex flex-col gap-8 p-4 font-semibold md:flex-row md:items-center md:justify-between md:gap-14 md:p-0">
            <li>Home</li>
            <li>How it Works?</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="mt-6 flex items-center justify-center md:hidden">
          <MenuBtn setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </nav>
    </header>
  );
};
