import Footer from "../_components/Footer";
import Header from "../_components/Header";

export const metadata = {
  title: "Projects | Sunny Rathaur",
  description: "Explore the projects developed by Sunny Rathaur, including web applications and dynamic user interfaces built with modern front-end technologies."
};

const Projects = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="">
          <h1>Projects</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
