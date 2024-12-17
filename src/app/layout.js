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
        <link
          rel="icon"
          href="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/330/original/Fab_icon.svg?1733917004"
          type="image/svg+xml"
        />

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZgEEXw5FvcpV/QtSTVgK43+8F6BxNh5P3x7mdQAZj9Wrly5HpK0V6iY9cW3e"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <div>{children}</div>

        {/* Bootstrap JS */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-dTDtMIqzL+zKc+5wt+BDEfW5R06YAc3EsriMB/P46FIghbtflSZT33o2ISWf5Dq0"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
