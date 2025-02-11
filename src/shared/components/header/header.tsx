import Link from "next/link";
import Image from "next/image";
import logo from "public/next.svg";

import { Container } from "@/shared/components/container";
import { ROUTES_MAP } from "@/shared/constants/routes-map.constants";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 h-[60px] w-full border-b border-gray-300 bg-white">
      <Container classes={{ root: "h-full flex" }}>
        <div className="flex h-full w-full items-center">
          <Link href={ROUTES_MAP.home}>
            <Image src={logo} alt="Vercel" height={32} width={32} />
          </Link>
        </div>
      </Container>
    </header>
  );
};
