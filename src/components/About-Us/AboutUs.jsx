import CommonWrapper from "../CommonWrapper";
import NavSection from "../Home/NavSection";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

const AboutUs = () => {
  return (
    <div className="">
      <NavSection />

      <div className="mt-2 bg-[#E9ECEF] p-2 font-bold">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>About Us</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="pt-3">
        <hr className="border-2 border-gray-700" />
      </div>

      <CommonWrapper>
        <div>
          <h1 className="text-lg font-bold">Who we are</h1>
          <p>
            The effects of insomnia can impact nearly every aspect of a person's
            life and although there is effective medication available, it is
            often left untreated. This is why our team have come together to
            develop an online platform to address this need. With the internet
            and modern technology, our customers are now able to make use of
            e-commerce convenience and order their medication online.
          </p>
        </div>
        <div className="mt-3">
          <h1 className="text-lg font-semibold">How our e-pharmacy can help</h1>
          <p>
            Studies have shown that insomnia can negatively affect
            decision-making, reduce productivity and cause relationship
            difficulties. As many as 30 to 35 percent of adults suffer from this
            condition and most people with insomnia experience a worse overall
            quality of life. While some people have the occasional sleepless
            night which can be treated by simple changes to sleep hygiene,
            others experience trouble sleeping more frequently. Long-term
            insomnia can have devastating effects on a person's psychological
            and physical well-being. It can cause anxiety and depression and
            lead to health issues such as a weakened immune system and
            cardiovascular problems.
          </p>
        </div>
        <div className="mt-3">
          <h1 className="text-lg font-semibold">Safe and effective treatment</h1>
          <p>
            Our website is a licensed online pharmacy that sells FDA-approved
            medications to relieve insomnia, anxiety and pain. Although insomnia
            can be a long-term condition that may seem difficult to treat,
            choosing a medication that works for you from our wide product range
            can provide an effective solution. The products we offer to treat
            insomnia include some of the most popular and frequently prescribed
            medications such as zolpidem and zopiclone.
          </p>
          <p className="pt-4">
            Another common mental health condition is anxiety. One quarter of
            the adult population suffers from anxiety and only about 37% of
            people receive effective treatment. Having anxiety on occasion is
            considered normal but when it becomes continuous and has a negative
            impact on a person's quality of life, treatment is advisable. We
            provide medications that are commonly used to treat anxiety such as
            Xanax and Valium.
          </p>
        </div>
        <div className="mt-3">
          <h1 className="text-lg font-semibold">Affordable medication</h1>
          <p>
            We also sell generic medications which are medically identical to
            their branded counterparts, so they offer the same effective
            results. The main difference is the price. Manufacturers of generics
            are able to produce and sell these medications at a much lower price
            because they did not incur the initial costs of launching a new
            medication to the market. Once the patent expires, they are
            permitted to produce generics. Competition in the market reduces the
            price even further.
          </p>
        </div>
        <div className="mt-3">
          <h1 className="text-lg font-semibold">Order the medication you need without a prescription</h1>
          <p>
            If you are suffering from anxiety or insomnia and know that you
            could benefit from the use of medication, you can easily place an
            order online here. You do not need a prescription and our customer
            support team is available 24/7 to answer any questions you may have.
            We utilize express delivery to anywhere in the world. Once you have
            placed your order, we deliver the medication discreetly to you in
            carefully concealed packaging to ensure your privacy.
          </p>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default AboutUs;
