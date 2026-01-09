import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
       <main className="flex-grow flex justify-center items-center relative min-h-screen">

        {/* Pink Blob Mid-Right */}
        <div className="absolute w-[200px] h-[200px] right-0 top-0 translate-y-0 rounded-full bg-[#FF57DD] blur-[150px] -z-10"></div>
        {/* Blue Blob Top */}
        <div className="absolute w-[200px] h-[200px] top-1/2 left-0 -translate-y-1/2 rounded-full bg-[#45A8FF] blur-[150px] -z-10"></div>


        {/* Page Content */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
