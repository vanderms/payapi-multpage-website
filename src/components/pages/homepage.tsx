import { BrandsSection } from "../sections/brands-section";
import { CallToActionSection } from "../sections/call-to-action-section";
import { EasyToImplementSection } from "../sections/easy-to-implement-section";
import { FeaturesSection } from "../sections/features-section";
import { HeroSection } from "../sections/hero-section";
import { SimpleUiSection } from "../sections/simple-ui-section";

export const Homepage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <EasyToImplementSection />
      <SimpleUiSection />
      <FeaturesSection />
      <CallToActionSection />
    </>
  );
};
