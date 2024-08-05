import React from "react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen w-full bg-black p-4 text-white">
      <h1 className="mx-auto p-4 text-center text-2xl font-semibold md:w-126 md:text-4xl">
        Have they finally made the perfect workout shoe?
      </h1>
      <div className="relative mt-40 flex items-center justify-center bg-black md:mt-0">
        <div className="absolute -top-32 left-0 md:left-44 md:top-8">
          <div className="relative left-10">
            <h1 className="text-xl font-semibold">THE HEEL</h1>
            <p className="text-xs">
              The heel is well-built, has <br /> appropriate elevation and is{" "}
              <br /> not too rigid.
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a134/74ae/abc47ad166d1c5732008d90c1a2edbba?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lu9pPgh2Y4Qi8P2ASLUimZUg6pR7U5n4-lMYzIvgkgor3YkFngU7HB2VDqFiBMzAzQVKD1MccfRYp-1YpLccAE0~cCj9RLo2VqA~f30QxmLdrucvv7oiAEvQdzY1PCkfuzArZS9rCdPoJH5hJ4rI6hnLtDn2mApVbhzl4rNl~I4SHBcYAW3yhhUNZtSA7TSo9aYXZs0Hvd8najRVd81V4MtELzOKoFx6Aj3jjfOWnElOJp0rQx-YOT~uAdZ7YmJwga73EpTJ43B38Rud9WUUBrdoMax08UPHX4PntCXhqRpjShYfRTQXAoA6x-iDfkPvy3hvW49bMP68Bf5wgicPLQ__"
            alt=""
            className="absolute left-7 w-20 rotate-45 md:left-28 md:top-16 md:w-28 md:rotate-0"
          />
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/b0e8/3e6b/e703fafb3a8a3d3c53c33c5daa2974af?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T~IZmLxoA~BDDiaKJSjQ5QVdVIUC5HIGmOmDDI3AC9xyg~gKX6OOxJBSWuSGQL48cqC2yYN2QZyW3bMKNmEhMo7fbIKMypVIUEL8DoUBwFhjV~Brdueiyj9xlNvrUlUoswekeqe0kVfTpkogW~wD~Bzn~XgysISCKIr14Ckx1l0Elpsi7NAtbDduMcnIsPcYoi1xYlASnzKXXYVqa2WeLk4q4-5cHeM~sa2z~ZT7w4ssLjGMuJu0OJCU8fqk1MSfSDSFviFY036J5U2tokvCPRq6e9fxzcsT2VD5GS6KD5u-hzD4lElsnclV~KzpIGx8mvE6vQ~WeLCijb7JesZwfQ__"
          alt=""
          className="w-60 md:w-126"
        />
        <div className="absolute -top-20 right-7 md:right-80 md:top-32">
          <div className="relative left-10">
            <h1 className="text-xl font-semibold">THE FRONT</h1>
            <p className="text-xs">
              The front is comfortable and <br /> adjusts well to the shape of{" "}
              <br /> your foot.
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/a826/d5d5/9eab6feeca510275609785371af26741?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dOaZ7DqI-Nz~WUySkD2GuYgdwhUiVu~Wrual6HZ9MdopdDs3Wv6iHRGj4enP25brAzqd9IbeJ9wG6tyNI6lFvXDS6sDLDh~Ul3lFmJVEmeuy94vSB47tmqeco9H0zIDuYXF4rEQBGd48Vo4-D8qkYpBsqQmPwESAS9Fv7UVk0cYut5rUDEKkwuRWoOJD5M24M~jYKkWnrGAsvirwX3vhVnp3-pV0cGlOaKxehaTU9bUUrL14tHBHLU1HB4ZqCaJ43mx-rzYo~TkzksbQ9r~PcxSkUjx~Hn4FxJiNSTEtt-Wg7-s457FMWr-xxqyELAMRA-rq1bJ0W8THp~i3Km~7cA__"
            alt=""
            className="rotate-127 absolute right-10 top-20 w-20 md:-top-9 md:right-24 md:w-28 md:rotate-0"
          />
        </div>
        <div className="absolute -bottom-16 left-0 md:bottom-14 md:left-1/4">
          <div className="relative -top-3 left-10">
            <h1 className="text-xl font-semibold">TRACTION</h1>
            <p className="text-xs">
              The shoe has good traction <br /> and doesn't slip easily.
            </p>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/78a9/c0c5/2ce5e670a97cf917d2b87894a3dc5326?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwQJOkcUhHwI4YmAnI0BbeMlcB3GLS-xkVdY5YfpCOZfclLf44eSwx7UGXz4nqFl~d6hO~0pEAxTHfXyy9OPyvaIN6grEhRidMAO9OfdZrmssMf5pgNvFf5EAyma~X31HzkL8PXzOfXiL9Tk5Z6rrRXBGerNnc1RDPdUam~Z1qkMnothyudtPWMLLsBBUnT8LsocPWrbMw0pIwak16apTWaquFanPh34T8dJnqsspLrHPl1HBVqdcOtLVld21NCpy4uMkLtTpIXF4t3qRXedou0gEPBRdIW8fo4UeeedXxwrHy687cJV19wYqWiUk2sqr~Bz0XNMrC6VK4Y2icCydg__"
            alt=""
            className="absolute -right-28 -top-14 w-28"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
