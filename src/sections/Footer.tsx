
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__copyright">
        <p>Martyna Smolarek - Frontend Developer © / {year}</p>
      </div>
      <div className="footer__links">
        <div className="footer__icon">
          <a href="https://github.com/mahtyns" target="_blank">
            <img src="/images/footer/footer-github.png" alt="github icon" loading="lazy" />
          </a>
        </div>
        <div className="footer__icon">
          <a href="https://www.linkedin.com/in/msmolarek/" target="_blank">
            <img src="/images/footer/footer-linkedin.png" alt="linkedin icon" loading="lazy" />
          </a>
        </div>
        <div className="footer__icon">
          <a href="mailto:martyna.smolarek19@gmail.com" target="_blank">
            <img src="/images/footer/footer-mail.png" alt="mailme icon" loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer