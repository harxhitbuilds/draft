import Navbar from "@/components/global/navigation/navbar";
import Background from "@/components/land/background";
import Footer from "@/components/global/navigation/footer";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
