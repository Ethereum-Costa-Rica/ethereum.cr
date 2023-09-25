import React, { useEffect } from "react";

const SubstackWidget = () => {
  useEffect(() => {
    (window as Window).CustomSubstackWidget = {
      substackUrl: "ethereumcostarica.substack.com",
      placeholder: "ejemplo@gmail.com",
      buttonText: "Suscribite",
      theme: "custom",
      colors: {
        primary: "red",
        input: "#fffff",
        email: "#fffff",
        text: "white",
      },
      // Go to substackapi.com to unlock custom redirect
    };

  // Verificar si el elemento existe antes de anexar el script
    const embedElement = document.getElementById("custom-substack-embed");
    if (embedElement) {
      const script = document.createElement("script");
      script.src = "https://substackapi.com/widget.js";
      script.async = true;
      embedElement.appendChild(script);
    }

    return () => {
      // Cleanup if needed
      if (embedElement) {
        embedElement.innerHTML = "";
      }
    };
  }, []);

  return (
    <div id="custom-substack-embed"></div>
  );
};

export default SubstackWidget;





