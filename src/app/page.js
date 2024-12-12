import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="pt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 home-banner-text">
              <div className="">
                <h1 className="">Sunny Rathaur</h1>
                <p className="">Hi, I’m Sunny Rathaur, a passionate Front-End Developer with 2 years of experience crafting user-friendly, responsive, and visually appealing web applications. I specialize in modern front-end technologies, including HTML, CSS, JavaScript, React.js, and Next.js, to deliver seamless user experiences.</p>
                <p className="">As a creative problem-solver, I thrive on building intuitive interfaces and bringing design ideas to life. Whether collaborating with teams or working independently, I focus on clean code, attention to detail, and staying up-to-date with the latest industry trends.</p>
                <p className="">Explore my portfolio to see how I turn ideas into reality. Let’s connect and create something amazing together!</p>
                <button className="btn btn-primary">Let her Started </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 home-banner-text-center">
              <img className="portfolio-img" src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/333/original/SUNNY_RATHAUR.png?1734007009" alt="Sunny Rathaur" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
