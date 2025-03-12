import { HeroSection } from "@/features/post-pilot/hero-section";
import { Navigation } from "@/features/post-pilot/navigation";

import "./styles.css";
import { TrustedByDTC } from "@/features/post-pilot/trusted-by-DTC";
import { WhyUseDirectMail } from "@/features/post-pilot/why-use-direct-mail";
import { CinchSection } from "@/features/post-pilot/cinch-section";
import { EverythingYourBrandNeeds } from "@/features/post-pilot/everything-your-brand-needs";
import { FastLaunch } from "@/features/post-pilot/fast-launch";
import { PostPilotIsForDTC } from "@/features/post-pilot/post-pilot-is-for-DTC";
import { ObviSection } from "@/features/post-pilot/obvi-section";
import { TryPostPilotRiskFree } from "@/features/post-pilot/try-post-pilot-risk-free";
import { InsightsSection } from "@/features/post-pilot/insights-section";
import { Footer } from "@/features/post-pilot/footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function PostPilotPage() {
  return (
    <div className={cn(inter.className)}>
      <Navigation/>
      <HeroSection/>
      <TrustedByDTC/>
      <WhyUseDirectMail/>
      <CinchSection/>
      <EverythingYourBrandNeeds/>
      <FastLaunch/>
      <PostPilotIsForDTC/>
      <ObviSection/>
      <TryPostPilotRiskFree/>
      <InsightsSection/>
      <Footer/>
    </div>
  )
}
