import React from "react";

const Footer = () => {
  return (
    <footer className="section-container flex items-center justify-center gap-4">
      <div className="relative">
        <img
          src="https://s3-alpha-sig.figma.com/img/8395/c9d4/68c5a1ccc8ca330987738f866e9e96b3?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agPZ2BKxsusB8g7JulBxKWTx0lrip~Y7VDAF3D2WJEg6zU6air91xKhXfiOypz7yWQ7GkLobxNNGbly2jFQBZd3cBLvI~KcH7M44FheFJ9fnFnALN3Dtxn-z1MN1lNta59FzOt~o0mLs8vmLTKEJeiFFAHuwxpPtsX1WUOq7gXBxPkuIORM-ftk0Uk-oHfVDVJsrGJR8Er~u5THWp8wGD6PZF18T~u88gSAvxnfDkrvSQLnSx~ak6y8uowfxuyEcBHcQrouiLj8Eos0RTjP1D2XMItHgkdEGwpPQWbojWCfNsZ57jmgi0LR3rjFXL7pGpI3AIo4JGRUIzFUkik9OSg__"
          alt="logo"
          className="w-14 media440:w-20"
        />
        <h2 className="absolute bottom-2 w-40 text-[6px] media440:text-[9px]">
          The Shoe Company
        </h2>
      </div>
      <h3 className="text-lg">Made with 🤍 by Mir Murtaza Bashir</h3>
    </footer>
  );
};

export default Footer;
