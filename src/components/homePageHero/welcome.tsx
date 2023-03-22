import React from "react";

const WelcomeComponent = () => {
  return (
    <div className="lg:w-1/2">
      <p className="text-koii-purple-3 font-semibold text-[40px] leading-[48px]">
        Welcome to the new internet
      </p>
      <p className="text-koii-purple-3 font-semibold text-[24px] leading-[34px]">
        We built Koii to make the internet better for everyone. How will you
        push the web forward?
      </p>
      <p className="text-koii-purple-3 text-[16px]">
        Our mission at Koii is to provide the infrastructure to produce better
        decentralized applications and make it easier for developers and
        community members to participate at any level.
        </p>
        <p className="text-koii-purple-3 text-[16px]">
        We want tools like Ethereum, Filecoin, and so many other important
        innovations to be easily accessible—used by anyone around the world
        through simplified templates and tools—while still being transparent,
        trustworthy, and rewarding contributors.
      </p>
    </div>
  );
};

export default WelcomeComponent;
