
const ProjectCard = () => {
  return (
    <article className={`w-96 h-96 border border-gray-500 bg-gray-50 drop-shadow-lg`}>
      <img src="https://i.pinimg.com/564x/73/b5/c3/73b5c3bf88ee01c196c7ad703f7d225d.jpg" className="w-full h-56 object-cover"/>
      <div className="text-2xl font-playfair w-full text-center py-3">
          Project Name
      </div>
      <div className="w-full flex gap-x-2 justify-center flex-wrap text-sm uppercase text-gray-400 px-2">
        <p>React</p>
        <p>HTML</p>
        <p>Tailwind</p>
        <p>SQL</p>
        <p>NEXT</p>
      </div>
    </article>
  )
}

export default ProjectCard