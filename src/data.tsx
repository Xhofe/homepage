import { SocialProps } from "./components/Socials";

interface Data {
  name: string;
  sentences: string[];
  socials: SocialProps[];
  github: string;
  avatar?: string;
}

export const data: Data = {
  name: "Noah Hsu",
  sentences: [
    "Developer / Master's student",
    "It is always morning somewhere in the world.",
  ],
  socials: [
    {
      text: "Github",
      link: "https://github.com/Xhofe",
      icon: "i-ri-github-fill",
      class: "hover:bg-gray-700 dark:hover:bg-white dark:hover:text-gray-900",
    },
    {
      text: "Blog",
      link: "https://nn.ci",
      icon: "i-ri-book-2-line",
      class: "hover:bg-gradient-to-r from-[#fd5949] to-[#d6249f]",
    },
    {
      text: "",
      link: "https://stackoverflow.com/users/10545416/xhofe",
      icon: "i-jam-stackoverflow",
      class: "hover:bg-#ff8200",
    },
    {
      text: "",
      link: "https://twitter.com/Xh0fe",
      icon: "i-ri-twitter-fill",
      class: "hover:bg-[#00ACEE]",
    },
    {
      text: "",
      link: "https://space.bilibili.com/1520762073",
      icon: "i-ri-bilibili-fill",
      class: "hover:bg-[#fb7299]",
    },
    {
      text: "",
      link: "mailto:i@nn.ci",
      icon: "i-ri-mail-fill",
      class: "hover:bg-[#00b0ff]",
    },
  ],
  github: "Xhofe",
  avatar:"https://nn.ci/images/avatar.svg",
};
