import * as React from "react";
import { LandingPageHeader } from "./landing-page-header";
import { LandingPageContent } from "./landing-page-content";
import { LandingPageFooter } from "./landing-page-footer";
import { ShopPage } from "../shop-main-page/shop";

export const LandingPage = () => (
  <div className="landing-page-header">
    <LandingPageHeader />
    <LandingPageContent />
    <ShopPage/>
    <LandingPageFooter />
  </div>
);
