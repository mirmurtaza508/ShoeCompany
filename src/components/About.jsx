import React from "react";

const About = () => {
  return (
    <div className="relative flex h-screen flex-wrap border-t-2 bg-black md:grid md:grid-cols-2">
      <div className="relative mt-20 h-1/2 w-full md:mt-0 md:h-full">
        <div className="bg-about-backImage h-2/3 brightness-50"></div>
        <img
          src="https://s3-alpha-sig.figma.com/img/78d6/2842/51253a82fd5d21364752ab4f158c81f8?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBAhjF0NuFSPf5vHuC51k42R6KYM9AYot8b2GMJAlKOIMqkwjPlbbvYXTgIZ4-jN6WpH8tvwGxzM~yfoYeGxsEkVYUsicjO0wNX~HhOeXO8vNVCCtHZzegBMsBC930K0R0T0f~JhReFLnTyoq9Q~hLWd-N9OGvMW9i0GINLMd-SJorJHK2kENKu5gzQYzvJhZ89JmPHOji6xJeJQIGeiT4VxfRbWeQMeBTc4lxMMO-u~lLI8TDRDfRWLgelwZZLLChOYIk3pG2~4AAeUsO~r8T~-5r0QK6FdPH1tZ3tTAPoqGul5OqLZ0FXHDn6SP4h~vlNFtE1Qf9WlXyDmQ69Jcw__"
          alt=""
          className="absolute top-0 h-96 object-cover md:h-full"
        />
      </div>
      <div className="flex w-full flex-wrap items-center bg-black p-8 text-white md:mt-0">
        <div className="flex flex-col gap-8">
          <h1 className="z-16 absolute left-24 top-0 text-5xl font-semibold text-white md:static md:text-left">
            About Us!
          </h1>
          <p className="text-center md:static md:text-start">
            For each one of those shoe sweethearts out there, THE SHOE COMPANY
            offer the one-stop goal to pick the correct match of footwear Gone
            are the days when you needed to go from store to store to locate the
            <br />
            <br />
            correct style and size for yourself At THE SHOE COMPANY, you can
            locate a vast accumulation of dashing footwear in all sizes and
            <br /> <br />
            {/* styles, all inside a couple of snaps. Simple right? Not just we are
            here to spare your time, we are putting forth you the most dazzling
            footwear alternatives from all the first-rate brands like DAVINCHI,
            PRINCESS, and SIGNATURE. At ‘Organization Name’, we offer men,
            ladies, and child’s shoes perfect for any and each event. */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
