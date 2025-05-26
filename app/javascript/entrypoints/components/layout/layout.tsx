import { ReactNode } from "react";
import { ScrollToTopButton } from "../parts/scroll-to-top/scroll-to-top-button";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <SiteHeader />
    {children}
    <ScrollToTopButton />
    <SiteFooter />
  </>
);
