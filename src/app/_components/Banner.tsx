import { useEffect, useRef } from "react";

export default function Banner(): JSX.Element {
  const bannerRef = useRef<HTMLDivElement>(null); // Ref for the banner div

  const atOptions = {
    key: "a8ce3ac70a0467df0823cbea30743e2a",
    format: "iframe",
    height: 50,
    width: 320,
    params: {},
  };

  useEffect(() => {
    if (bannerRef.current && !bannerRef.current.firstChild) {
      const scriptConf = document.createElement("script");
      const scriptInvoke = document.createElement("script");

      scriptInvoke.type = "text/javascript";
      scriptInvoke.src = `//www.topcreativeformat.com/a8ce3ac70a0467df0823cbea30743e2a/invoke.js`;

      scriptConf.type = "text/javascript";
      scriptConf.innerHTML = `var atOptions = ${JSON.stringify(atOptions)};`;

      bannerRef.current.appendChild(scriptConf);
      bannerRef.current.appendChild(scriptInvoke);
    }
  }, []);

  return (
    <div
      className="mx-2 my-5 border border-gray-200 justify-center items-center text-white text-center"
      ref={bannerRef}
    ></div>
  );
}
