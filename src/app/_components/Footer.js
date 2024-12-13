import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <Image src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/330/original/Fab_icon.svg?1733917004" width={40} height={40} alt="SUNNY LOGO" />
          </Link>
          <span className="mb-3 mb-md-0 text-muted">&copy; 2025 All right reserved by SR.</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link className="text-muted" href="https://github.com/rathaur08">
              <Image className="icon-primary-color" src="https://cdn-icons-png.flaticon.com/128/14715/14715341.png" width={25} height={25} alt="icon" />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-muted" href="https://github.com/rathaur08">
              <Image className="icon-primary-color" src="https://cdn-icons-png.flaticon.com/128/254/254412.png" width={25} height={25} alt="icon" />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-muted" href="https://github.com/rathaur08">
              <Image className="icon-primary-color" src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" width={25} height={25} alt="icon" />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-muted" href="https://github.com/rathaur08">
              <Image className="icon-primary-color" src="https://cdn-icons-png.flaticon.com/128/254/254390.png" width={25} height={25} alt="icon" />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-muted" href="https://github.com/rathaur08">
              <Image className="icon-primary-color" src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" width={25} height={25} alt="icon" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
