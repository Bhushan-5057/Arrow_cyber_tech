import StoreProvider from "@/providers/StoreProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import WebsiteLoader from "../components/ui/WebsiteLoader";
import AOSInit from "@/components/ui/AOSInit";
import "@/styles/globals.css";

export const metadata = {
  title: {
    default: "Arrow CyberTech - Premium Enterprise VAPT & Compliance",
    template: "%s | Arrow CyberTech"
  },
  description: "Global trust-based cybersecurity assessments. We execute penetration testing, SOC2/ISO 27001 readiness, secure source code review, and physical cyber simulations.",
  keywords: ["Cybersecurity", "Penetration Testing", "VAPT", "SOC2 Compliance", "ISO 27001", "Threat Simulation", "Security Audit"],
  authors: [{ name: "Arrow CyberTech" }],
  icons: {
    icon: "/logo.png"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arrowcybertech.com",
    title: "Arrow CyberTech - Premium Enterprise VAPT & Compliance",
    description: "Global trust-based cybersecurity assessments. We execute penetration testing, SOC2/ISO 27001 readiness, secure source code review, and physical cyber simulations.",
    siteName: "Arrow CyberTech"
  }
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased min-h-screen flex flex-col">
        <WebsiteLoader>
          <StoreProvider>
            <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none z-0" />
            <div className="fixed inset-0 cyber-grid-dots opacity-40 pointer-events-none z-0" />

            <AOSInit />
            <Header />
            <main className="relative z-10 flex-grow pt-[68px] sm:pt-[72px] lg:pt-[80px] xl:pt-[88px]">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </StoreProvider>
        </WebsiteLoader>
      </body>
    </html>
  );
}
