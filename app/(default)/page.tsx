import AboutMe from "@/components/about-me";
import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import Services from "@/components/services";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Clinical from "@/components/clinical";

export const metadata = {
  title: "Início - Joelson Mascarenhas | Psicólogo",
};

export default function Home() {
  return (
    <>
      <Hero/>
      <BusinessCategories/>
      <Services/>
      <AboutMe/>
      <Clinical/>
      <LargeTestimonial/>
      <Cta/>
    </>
  );
}
