import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light p-0">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/332/original/SUNNY_LOGO.svg?1733919683" width={180} height={60} alt="SUNNY LOGO" />
            </Link>
            {/* <Link className="navbar-brand" href="/">
              <Image src="https://d3tfanr7troppj.cloudfront.net/static_files/images/000/006/331/original/SUNNY_LOGO-1.svg?1733919325" width={100} height={100} alt="SUNNY LOGO"/>
            </Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-link" href="/about-us">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header