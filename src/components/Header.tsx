import { HeaderNav } from "./HeaderNav";
import { LinkSocialIcon } from "./LinkSocialIcon";
import { Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="flex justify-between p-3 bg-white w-full shadow items-center fixed top-0 left-0 z-50">
      <div className="flex gap-2 items-center">
        <LinkSocialIcon
          icon={Github}
          link="https://github.com/gustaoliveira1"
        />
        <LinkSocialIcon
          icon={Linkedin}
          link="https://www.linkedin.com/in/gustavo-oliveira-araujo-b552b0266/"
        />
        <LinkSocialIcon icon={Mail} link="mailto:gusta01.oliveira@gmail.com?subject=Oferta de trabalho" />
      </div>
      <HeaderNav />
    </header>
  );
}
