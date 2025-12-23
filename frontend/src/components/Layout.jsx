// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const Layout = ({ children }) => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">{children}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Layout;

import Navbar from "./Navbar";
import Footer from "./Footer";
import StarBackground from "../components/StarBackground"; // Import your background

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#0f172a]">
      {/* 1. The Background Layer (Fixed) */}
      <div className="fixed inset-0 z-0">
        <StarBackground />
      </div>

      {/* 2. Navbar (Fixed or Sticky) */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* 3. Main Content (Scrollable) */}
      <main className="flex-grow relative z-10">{children}</main>

      {/* 4. Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
