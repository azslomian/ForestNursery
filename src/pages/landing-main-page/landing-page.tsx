import * as React from "react";
import { LandingPageHeader } from "./landing-page-header";
import { LandingPageContent } from "./landing-page-content";
import { LandingPageFooter } from "./landing-page-footer";

export const LandingPage = () => (
  <div className="landing-page-header">
    <LandingPageHeader />
    <LandingPageContent />
    <LandingPageFooter />
  </div>
);
