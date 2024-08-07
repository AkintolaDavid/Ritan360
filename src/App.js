import { useLocation } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Aboutus } from "./Aboutus/Aboutus";
import { Contactme } from "./Contactme/Contactme";
import { Navbar } from "./Navbar/Navbar";
import { Ourservices } from "./Ourservices/Ourservices";
import { ContactUs } from "./ContactUs/ContactUs";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Policy } from "./Policy/Policy";
import { Blog } from "./Blog/Blog";
import ScrollToTop from "./ScrollToTop";
import { SerBranding } from "./SerBranding/SerBranding";
import { Ecommsolution } from "./Ecommsolution/Ecommsolution";
import { MobileAppDev } from "./MobileAppDev/MobileAppDev";
import { SeoAndDigital } from "./SeoAndDigital/SeoAndDigital";
import { WebDesCom } from "./WebDesCom";
import { WebDevCom } from "./WebDevCom";
import { WordPressDev } from "./WordPressDev";
import { Sidemenu } from "./Sidemenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {/* <Navbar /> */}
        <Routes>
          <Route>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/ourservices" element={<Ourservices />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/brandingservice" element={<SerBranding />} />
            <Route path="/eCommercesolution" element={<Ecommsolution />} />
            <Route path="/mobileAppDev" element={<MobileAppDev />} />
            <Route path="/seoAndDigital" element={<SeoAndDigital />} />
            <Route path="/webDesignCompany" element={<WebDesCom />} />
            <Route path="/webDevCompany" element={<WebDevCom />} />
            <Route path="/wordPress" element={<WordPressDev />} />
            <Route path="/Sidemenu" element={<Sidemenu />} />
          </Route>
        </Routes>
        {/* <Contactme /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
