import "./globals.css";
export const metadata = {
  title: "Sunny Rathaur | Front-End Developer",
  description: "Welcome to the portfolio of Sunny Rathaur, a skilled Front-End Developer with 2 years of experience in creating user-friendly web applications using HTML, CSS, JavaScript, React.js, and Next.js."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Link */}
        <link rel="icon" href="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/330/original/Fab_icon.svg?1733917004" type="image/svg+xml/png" />

        {/* bootstrap@5.0.2 CSS link */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />

        <meta name="keywords" content="Front-End Developer, Sunny Rathaur, HTML, CSS, JavaScript, React.js, Next.js, Portfolio" />
        <meta name="author" content="Sunny Rathaur" />

        {/* Add Schema Markup */}
        {/* <script type="application/ld+json">
          {
            "@context": "http://schema.org",
          "@type": "Person",
          "name": "Sunny Rathaur",
          "jobTitle": "Front-End Developer",
          "url": "https://yourportfolio.com",
          "sameAs": [
          "https://linkedin.com/in/rathaur08",
          "https://github.com/rathaur08"
          ]
          }
        </script> */}
      </head>

      <body>

        <div>{children}</div>

        {/* bootstrap@5.0.2 JS link */}
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous"></script>




      </body>
    </html>
  );
}
