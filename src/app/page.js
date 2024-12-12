import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main class="container">
        <div className="">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 ">
              <div className="">
                <h1 className="">JetSetGO</h1>
                <p className="">Master Private Aviation with Our Exclusive eBook</p>
                <button className="btn btn-primary">Let her Started </button>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12">
              <img className="" src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/243/original/Tablet_eBook.webp?1730703063" alt="Sunny Rathaur" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
