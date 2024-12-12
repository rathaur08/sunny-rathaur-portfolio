import Footer from "../_components/Footer";
import Header from "../_components/Header";

export const metadata = {
  title: "About Me | Sunny Rathaur",
  description: "Learn more about Sunny Rathaur, a passionate Front-End Developer and freelancer with expertise in HTML, CSS, JavaScript, React.js, and Next.js."
};

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="">
          <h1>AboutUs</h1>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default AboutUs