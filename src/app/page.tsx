import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import CaseStudiesPreviewSection from "@/components/home/CaseStudiesPreviewSection";
import ComplianceCertificationsSection from "@/components/home/ComplianceCertificationsSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import CoreServicesSection from "@/components/home/CoreServicesSection";
import HeroSection from "@/components/home/HeroSection";
import MetricsSection from "@/components/home/MetricsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import TrustedClientsSection from "@/components/home/TrustedClientsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <div className="space-y-24 md:space-y-32">
        <TrustedClientsSection />
        <CoreServicesSection />
        <MetricsSection />
        <CaseStudiesPreviewSection />
        <ComplianceCertificationsSection />
        <BlogPreviewSection />
        <TestimonialSection />
        <ContactCTASection />
      </div>
    </main>
  );
}
