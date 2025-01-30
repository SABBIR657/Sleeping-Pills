import NavSection from "../Home/NavSection";
import CommonWrapper from "../CommonWrapper";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

const Testimonial = () => {
  return (
    <div>
      <NavSection />

      <div className="mt-2 bg-[#E9ECEF] p-2 font-bold">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Testimonial</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="pt-3">
        <hr className="border-2 border-gray-700" />
      </div>
      <CommonWrapper>
        <div>
          <h1 className="font-bold text-lg">Testimonials</h1>
        </div>
        <div>
          <div className="w-full flex ">
            {/* <div className="relative  max-w-3xl p-6"> */}
            {/* Background Image */}
            <div
              className="relative inset-0 bg-no-repeat bg-left-top  w-10 h-10"
              style={{
                backgroundImage:
                  "url('https://www.sleepingpillsuk.com/images/quotes.png')",
                backgroundSize: "40px", // Increase size for visibility
                // backgroundColor: "rgba(0, 0, 0, 0.5)", // Slight gray overlay
              }}
            ></div>

            {/* Paragraph Text */}

            <p className="absolute  text-lg  text-black w-full  p-4 ">
              “Really impressed. Received my order today two days after ordering
              online. Refreshing to find someone who does the job right!”
            </p>

            {/* </div> */}
          </div>
          <p className="text-end font-bold">Alan, Colchester</p>
        </div>
        <div className="mt-3">
          <div className=" flex ">
            {/* <div className="relative  max-w-3xl p-6"> */}
            {/* Background Image */}
            <div
              className="relative inset-0 bg-no-repeat bg-left-top opacity-80 w-10 h-10"
              style={{
                backgroundImage:
                  "url('https://www.sleepingpillsuk.com/images/quotes.png')",
                backgroundSize: "40px", // Increase size for visibility
                // backgroundColor: "rgba(0, 0, 0, 0.5)", // Slight gray overlay
              }}
            ></div>

            {/* Paragraph Text */}

            <p className="absolute  text-lg w-[1220px] text-black   p-4 ">
              I was a little sceptical when I first found your site as I had
              been let down by another supplier. Really pleased when my order
              arrived the next day. Will be using you every time from now on
            </p>

            {/* </div> */}
          </div>
          <p className="text-end font-bold">Steve, London</p>
        </div>
        <div className="mt-3">
          <div className="w-full flex ">
            {/* <div className="relative  max-w-3xl p-6"> */}
            {/* Background Image */}
            <div
              className="relative inset-0 bg-no-repeat bg-left-top opacity-80 w-10 h-10"
              style={{
                backgroundImage:
                  "url('https://www.sleepingpillsuk.com/images/quotes.png')",
                backgroundSize: "40px", // Increase size for visibility
                // backgroundColor: "rgba(0, 0, 0, 0.5)", // Slight gray overlay
              }}
            ></div>

            {/* Paragraph Text */}

            <p className="absolute  text-lg  text-black w-[1220px]  p-4 ">
              Sleeping at night used to be a problem for me for a number of
              years but since buying zopiclone from your website this is no
              longer a problem. Thank you so much.
            </p>

            {/* </div> */}
          </div>
          <p className="text-end font-bold">Ann, Liverpool</p>
        </div>
        <div className="mt-3">
          <div className="w-full flex ">
            {/* <div className="relative  max-w-3xl p-6"> */}
            {/* Background Image */}
            <div
              className="relative inset-0 bg-no-repeat bg-left-top opacity-80 w-10 h-10"
              style={{
                backgroundImage:
                  "url('https://www.sleepingpillsuk.com/images/quotes.png')",
                backgroundSize: "40px", // Increase size for visibility
                // backgroundColor: "rgba(0, 0, 0, 0.5)", // Slight gray overlay
              }}
            ></div>

            {/* Paragraph Text */}

            <p className="absolute  text-lg  text-black w-[1220px]  p-4 ">
              I usually fall asleep ok at night when I go to bed but then I
              always seem to wake up halfway through the night. Since I have
              been taking Ambien, this does not happen anymore. So pleased I
              found your site.
            </p>

            {/* </div> */}
          </div>
          <p className="text-end font-bold">Lynn, Belfast</p>
        </div>
        <div className="mt-3">
          <div className="w-full flex ">
            {/* <div className="relative  max-w-3xl p-6"> */}
            {/* Background Image */}
            <div
              className="relative inset-0 bg-no-repeat bg-left-top opacity-80 w-10 h-10"
              style={{
                backgroundImage:
                  "url('https://www.sleepingpillsuk.com/images/quotes.png')",
                backgroundSize: "40px", // Increase size for visibility
                // backgroundColor: "rgba(0, 0, 0, 0.5)", // Slight gray overlay
              }}
            ></div>

            {/* Paragraph Text */}

            <p className="absolute  text-lg  text-black w-[1220px] p-4 ">
              Just thought I would thank you for your first class service.....I will
              be ordering again soon.
            </p>

            {/* </div> */}
          </div>
          <p className="text-end font-bold">Nina, Leeds</p>
        </div>
        <div className="mt-3">
          <div className="w-full flex ">
            {/* <div className="relative  max-w-3xl p-6"> */}
            {/* Background Image */}
            <div
              className="relative inset-0 bg-no-repeat bg-left-top opacity-80 w-10 h-10"
              style={{
                backgroundImage:
                  "url('https://www.sleepingpillsuk.com/images/quotes.png')",
                backgroundSize: "40px", // Increase size for visibility
                // backgroundColor: "rgba(0, 0, 0, 0.5)", // Slight gray overlay
              }}
            ></div>

            {/* Paragraph Text */}

            <p className="absolute  text-lg  text-black w-[1220px]  p-4 ">
              I thought I would try your website after a recommendation from a
              friend. So glad I found a reliable supplier whose sleeping pills
              really work
            </p>

            {/* </div> */}
          </div>
          <p className="text-end font-bold">Peter, Edinburgh</p>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Testimonial;
