import { useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent, Button, Input } from "@heroui/react";

export default function PopChat() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-5 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isSticky ? "top-auto bottom-0" : "top-0"
      }`}
    >
      <Popover showArrow offset={10} placement="bottom">
       
        <PopoverTrigger>
          <Button color="primary" className=" relative px-7 rounded-tr-3xl">Chat with Us, we are online <div className="bg-green-400 h-16 w-16 top-2  absolute left-[13rem] " /></Button>
           
        </PopoverTrigger>
       
        <PopoverContent className="w-[240px]">
          {(titleProps) => (
            <div className="px-1 py-2 w-full">
              <p className="text-small font-bold text-foreground" {...titleProps}>
                Please introduce yourself
              </p>
              <div className="mt-2 flex flex-col gap-2 w-full">
                <Input defaultValue="" label="Your Name" size="sm" variant="underlined" />
                <Input defaultValue="" label="Your email" size="sm" variant="underlined" />
                <Input defaultValue="+880" label="Your phone" size="sm" variant="underlined" />
               <Button className="bg-green-600 text-white font-semibold" >Send</Button>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}