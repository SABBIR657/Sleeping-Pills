import Hero from "../components/Home/Hero";
import ClientNav from "../components/Home/ClientNav";

import NavSection from "../components/Home/NavSection";
// import CommonWrapper from "../components/CommonWrapper";

export default function Navigation() {
  return (
    <>
      <div className="mt-2">
        {/* <CommonWrapper>
          <NavSection />
          <Hero />
          <ClientNav />
        </CommonWrapper> */}
        <NavSection/>
      <Hero/>
      <ClientNav/>
      </div>
    </>
  );
}
