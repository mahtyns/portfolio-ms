
const Footer = () => {
  return (
    <footer className="bg-main-dark w-full h-12 flex items-center justify-center font-lato uppercase text-main-white tracking-widest gap-3 dark:bg-gray-800 dark:text-main dark">
          <div>
            <a href="https://github.com/mahtyns" target="_blank">
              <img className="w-6 h-6 invert" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="github"/>
            </a>
          </div>
          <div>
        <a href="https://www.linkedin.com/in/msmolarek/" target="_blank">
          <img className="w-6 h-6 invert" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="linkedin"/>
            </a>
          </div>
          <div>
            <a href="mailto:m.smolarek19@gmail.com" target="_blank">
          <img className="w-6 h-6 invert" src="https://cdn-icons-png.flaticon.com/512/181/181535.png" alt="mailme"/>
            </a>
          </div>
    </footer>
  )
}

export default Footer