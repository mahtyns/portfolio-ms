
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__links">
        <div className="footer__icon">
          <a href="https://github.com/mahtyns" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="github icon" loading="lazy" />
          </a>
        </div>
        <div className="footer__icon">
          <a href="https://www.linkedin.com/in/msmolarek/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="linkedin icon" loading="lazy" />
          </a>
        </div>
        <div className="footer__icon">
          <a href="mailto:martyna.smolarek19@gmail.com" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/181/181535.png" alt="mailme icon" loading="lazy" />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Page created by Martyna Smolarek © / {year}</p>
      </div>
    </section>
  )
}

export default Footer