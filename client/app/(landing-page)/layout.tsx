import Navbar from "@/components/global/navigation/navbar";
import Footer from "@/components/global/navigation/footer";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
