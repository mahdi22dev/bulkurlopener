import { useEffect, useRef } from "react";

export default function Banner2(): JSX.Element {
  const bannerRef = useRef<HTMLDivElement>(null); // Ref for the banner div

  useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
      const scriptInvoke = document.createElement("script");

      scriptInvoke.async = true;
      scriptInvoke.setAttribute("data-cfasync", "false");
      scriptInvoke.src =
        "//pl23704812.highrevenuenetwork.com/b68cb396e8d7119cb35d96bb3984c381/invoke.js";

      bannerRef.current.appendChild(scriptInvoke);
    }
  }, []);

  return (
    <div
      id="container-b68cb396e8d7119cb35d96bb3984c381"
      className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
      ref={bannerRef}
    ></div>
  );
}
