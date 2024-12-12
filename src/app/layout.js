import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Sunny Rathaur | Front-End Developer",
  description: "Welcome to the portfolio of Sunny Rathaur, a skilled Front-End Developer with 2 years of experience in creating user-friendly web applications using HTML, CSS, JavaScript, React.js, and Next.js.",
  keywords: "Front-End Developer, Sunny Rathaur, HTML, CSS, JavaScript, React.js, Next.js, Portfolio",
  author: "Sunny Rathaur",
  url: "https://sunny-rathaur.in",
  metadataBase: new URL("https://sunny-rathaur.in"),
  siteName: "sunny-rathaur.in",
  openGraph: {
    title: "Sunny Rathaur | Front-End Developer",
    description: "Welcome to the portfolio of Sunny Rathaur, a skilled Front-End Developer with 2 years of experience in creating user-friendly web applications using HTML, CSS, JavaScript, React.js, and Next.js.",
    url: "https://sunny-rathaur.in/",
    siteName: "sunny-rathaur.in",
    images: [
      {
        url: "https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/332/original/SUNNY_LOGO.svg?1733919683",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://sunny-rathaur.in",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Link */}
        <link rel="icon" href="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/330/original/Fab_icon.svg?1733917004" type="image/svg+xml" />

        {/* Bootstrap CSS link */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
      </head>

      <body>
        <div>{children}</div>

        {/* Bootstrap JS */}
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous" />

      </body>
    </html>
  );
}
