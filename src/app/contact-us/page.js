import Footer from "../_components/Footer";
import Header from "../_components/Header";

export const metadata = {
  title: "Contact Us | Sunny Rathaur",
  description: "Get in touch with Sunny Rathaur for collaboration, project inquiries, or freelance work. Connect via email or LinkedIn."
};

const ContactUs = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="">
          <h1>contact-us</h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
