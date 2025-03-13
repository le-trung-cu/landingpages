import { BuiltSection } from "@/features/miro/built-section";
import { CollaborateSection } from "@/features/miro/collaborate-section";
import { ConnectSection } from "@/features/miro/connect-section";
import { Footer } from "@/features/miro/footer";
import { HeroSection } from "@/features/miro/hero-section";
import { LovedSection } from "@/features/miro/loved-section";
import { Navigation } from "@/features/miro/navigation";
import { TrustMiroSection } from "@/features/miro/trust-miro-section";
import { WorkTogetherSection } from "@/features/miro/work-together-section";
import { cn } from "@/lib/utils";
import {Inter} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"]
})
export default function MiroPage() {
  return (
    <div className={cn("font-normal text-[#050038]", inter.className)}>
      <Navigation/>
      <HeroSection/>
      <CollaborateSection/>
      <WorkTogetherSection/>
      <ConnectSection/>
      <BuiltSection/>
      <TrustMiroSection/>
      <LovedSection/>
      <Footer/>
    </div>
  )
}