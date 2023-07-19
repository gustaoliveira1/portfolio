import { ElementType } from "react";

interface LinkSocialIconProps {
  link: string;
  icon: ElementType;
}

export function LinkSocialIcon({ link, icon: Icon }: LinkSocialIconProps) {
  return (
    <a
      href={link}
      target="_blank"
      referrerPolicy="no-referrer"
      className="hover:text-white hover:bg-secondary p-2 rounded-full transition-colors duration-300"
    >
      <Icon className="text-2xl" />
    </a>
  );
}
