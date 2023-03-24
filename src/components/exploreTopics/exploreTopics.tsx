import React from "react";
import { exploreTopics } from "./exploreTopicsList";

export const ExploreTopics = () => {
  return (
    <section className="px-10">
      <div className="container">
        <p className="text-center text-koii-purple-2 font-semibold text-[40px] leading-[48px]">
          {" "}
          Explore by Topic{" "}
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 lg:gap-4 my-[2rem] lg:my-[5rem]">
          {exploreTopics.map((element) => (
            <div>
              <p className="text-center text-koii-purple-2 font-semibold text-[24px] leading-[48px]">
                {element.title}
              </p>
              {element.items.map((item) => (
                <div className="flex items-center my-[20px]">
                  <a
                    target={
                      item.link.substring(0, 8) === "https://" && "_blank"
                    }
                    href={item.link}
                  >
                    {" "}
                    <img
                      className="mr-[30px]"
                      width={50}
                      height={50}
                      src={item.icon}
                      alt={item.title}
                    />
                  </a>
                  <a
                    className="font-semibold text-koii-purple-2"
                    target={
                      item.link.substring(0, 8) === "https://" && "_blank"
                    }
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};