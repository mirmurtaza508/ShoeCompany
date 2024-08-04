import React from "react";

const HeroSection = () => {
  return (
    <div className="absolute top-0 z-10 flex h-full w-full flex-wrap bg-green-400 text-white">
      <div className="md:bg-hero-color-2 h-1/2 w-full overflow-hidden bg-hero-pattern-2 brightness-50 md:h-full md:w-1/2"></div>
      <div className="h-1/2 w-full bg-hero-pattern-1 bg-cover brightness-50 md:absolute md:right-0 md:h-full md:w-1/2"></div>
      <div className="absolute flex h-screen w-full flex-col items-center justify-evenly md:flex-row">
        <h1 className="mt-20 text-6xl font-semibold text-white md:text-7xl">
          The <br /> Shoe <br /> Company
        </h1>
        <img
          src="https://s3-alpha-sig.figma.com/img/83b3/5666/548fd9338c88ab42c1c77dcf86bcb661?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VisFjpqEnlxRScGysik3mh4bBxqfm1aSadJuZlJ20obg6m2A7mOFOpyFY4TY1EbAkDXnUuIMlHABbMWKDMUNPbJo729W~VNFi9CG2t3tn4CAb9BLssplYjWFr3R1elL0wIC4kewxHDKctUcoTdnTXjGqXZlaMLcf05HVmQdUScJOilHjy6kTMXGFehPRLMEUks4qKmP95pNayhCFIDMZ4q5r1jVys2HlS3H~b9xRija4c4CAA-mTDFlQOnFK6vFEJcuJjOXITY7Rs~7RmJeRLsSIaNE9aeOnx4gh1ArsA8PLrOz0SjEvrrUrbWfrl7r0SB-KH89RQJtyF5EL4447zg__"
          alt=""
          className="w-96 object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
