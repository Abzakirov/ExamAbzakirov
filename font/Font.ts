import localFont from "next/font/local";

export const integralCF = localFont({
  src: [
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-demibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Fontspring-DEMO-integralcf-extrabold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-integralcf",
});

export const satoshi = localFont({
  src: [
    { 
      path: "../public/fonts/Satoshi-Light.woff2", 
      weight: "300", 
      style: "normal" 
    },
    { 
      path: "../public/fonts/Satoshi-Regular.woff2", 
      weight: "400", 
      style: "normal" 
    },
    { 
      path: "../public/fonts/Satoshi-Medium.woff2", 
      weight: "500", 
      style: "normal" 
    },
    { 
      path: "../public/fonts/Satoshi-Bold.woff2", 
      weight: "700", 
      style: "normal" 
    },
    { 
      path: "../public/fonts/Satoshi-Black.woff2", 
      weight: "900", 
      style: "normal" 
    },
    // Italic variants
    { 
      path: "../public/fonts/Satoshi-LightItalic.woff2", 
      weight: "300", 
      style: "italic" 
    },
    { 
      path: "../public/fonts/Satoshi-Italic.woff2", 
      weight: "400", 
      style: "italic" 
    },
    { 
      path: "../public/fonts/Satoshi-MediumItalic.woff2", 
      weight: "500", 
      style: "italic" 
    },
    { 
      path: "../public/fonts/Satoshi-BoldItalic.woff2", 
      weight: "700", 
      style: "italic" 
    },
    { 
      path: "../public/fonts/Satoshi-BlackItalic.woff2", 
      weight: "900", 
      style: "italic" 
    }
  ],
  display: "swap",
  variable: "--font-satoshi",
});