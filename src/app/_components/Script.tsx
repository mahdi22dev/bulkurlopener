import { useEffect } from "react";

const CustomScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `(function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('shoordaird.com',7690927,document.createElement('script'));`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default CustomScript;
