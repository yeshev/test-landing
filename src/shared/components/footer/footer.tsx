import Link from "next/link";
import Image from "next/image";

import logo from "public/next.svg";

import { ROUTES_MAP } from "@/shared/constants/routes-map.constants";
import { Container } from "@/shared/components/container";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-5">
      <Container>
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <Link href={ROUTES_MAP.home}>
            <Image src={logo} alt="Vercel" height={32} width={32} />
          </Link>
          <span>© 2025 Test, All Rights Reserved</span>
          <Link href={ROUTES_MAP.cookiePolicy} target="_blank">
            Cookies Policy
          </Link>
          <Link href={ROUTES_MAP.privacyPolicy} target="_blank">
            Privacy Policy
          </Link>
          <Link href={ROUTES_MAP.termsAndConditions} target="_blank">
            Terms & Conditions
          </Link>
        </div>
      </Container>
    </footer>
  );
};
