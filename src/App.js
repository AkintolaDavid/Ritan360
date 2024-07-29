import { LandingPage } from "./components/LandingPage/LandingPage";
import { Aboutus } from "./Aboutus/Aboutus";
import { Contactme } from "./Contactme/Contactme";
import { Navbar } from "./Navbar/Navbar";
import { Ourservices } from "./Ourservices/Ourservices";
import { ContactUs } from "./ContactUs/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/ourservices" element={<Ourservices />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/brandingservice" element={<SerBranding />}></Route>
          <Route path="/eCommercesolution" element={<Ecommsolution />}></Route>
          <Route path="/mobileAppDev" element={<MobileAppDev />}></Route>
          <Route path="/seoAndDigital" element={<SeoAndDigital />}></Route>
          <Route path="/webDesignCompany" element={<WebDesCom />}></Route>
          <Route path="/webDevCompany" element={<WebDevCom />}></Route>
          <Route path="/wordPress" element={<WordPressDev />}></Route>
        </Routes>
        <Contactme />
      </BrowserRouter>
    </>
  );
}

export default App;
