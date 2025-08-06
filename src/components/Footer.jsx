import "../styles/footer.css"


const Footer = () => {
  return (
    <section>
      <div className="footer-cont">
        <p>Sitio creado por <a href="https://www.linkedin.com/in/juan-franco-aranzabal-5a63762b7/" target="blank_">Juan Franco Aranzabal</a></p>
        <div className="footer-links">
          <a href="https://github.com/Francoaranzabal9"><img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF" alt="icono de git" /></a>
          <a href="https://steamcommunity.com/profiles/76561199249750087/"><img src="https://img.icons8.com/?size=100&id=kBZ9gLW27vrQ&format=png&color=FFFFFF" alt="icono de steam" /></a>
          <a href="https://www.instagram.com/francoaranzabal9/"><img src="https://img.icons8.com/?size=100&id=RhYNENh5cxlS&format=png&color=FFFFFF" alt="icono de instagram" /></a>
        </div>
      </div>
    </section>
  )
}

export { Footer }