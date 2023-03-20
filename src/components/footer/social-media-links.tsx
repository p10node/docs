import React from "react";

export const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row items-center self-center justify-between gap-8 px-6 pb-6 align-bottom">
      <a href="https://twitter.com/KoiiNetwork">
        <img
          src="@site/static/img/twitter-lightblue.svg"
          alt="Twitter logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://discord.gg/koii">
        <img
          src="@site/static/img/discord-lightblue.svg"
          alt="Discord logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://t.me/koiinetwork">
        <img
          src="@site/static/img/telegram-lightblue.svg"
          alt="Telegram logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://github.com/koii-network/">
        <img src="@site/static/img/github-lightblue.svg" alt="Github logo" width={32} height={32} />
      </a>
      <a href="https://www.linkedin.com/company/open-koi/">
        <img src="@site/static/img/linkedin-lightblue.svg" alt="linkedin" width={32} height={32} />
      </a>
      <a href="https://www.youtube.com/c/KoiiNetwork">
        <img src="@site/static/img/youtube-lightblue.svg" alt="linkedin" width={32} height={32} />
      </a>
    </div>
  );
};
