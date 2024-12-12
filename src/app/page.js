import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="pt-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 home-banner-text">
              <div className="">
                <h1 className="">JetSetGO</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum</p>
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
