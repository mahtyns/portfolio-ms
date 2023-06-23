import { SectionTitle } from "../components/SectionTitle"

const Technology = () => {
  return (
    <section className={'h-module-medium py-36 flex relative overflow-hidden'}>
      <div className="w-1/2">

      </div>
      <div className="w-1/2 px-36">
        <SectionTitle sectionTitle="My stack." sectionVariant={true}/>
        <p className="w-5/6 py-8 font-lato  tracking-wide font-light text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laboriosam delectus illo iure ex adipisci rem soluta iste, fugiat deserunt!</p>
      </div>
      <div className="absolute -bottom-64 left-1/2 w-96 h-96 border border-gray-100 rotate-45"></div>
      <div className="absolute -bottom-64 left-1/3 w-80 h-80 border border-gray-100 rotate-12"></div>
      <div className="absolute -bottom-36 left-1/2 w-64 h-64 border border-gray-200 rotate-6"></div>
      <div className="absolute -bottom-48 left-1/3 w-80 h-80 border border-gray-300 -rotate-12"></div>
      <div className="absolute -bottom-48 left-96 w-64 h-64 border border-gray-100 -rotate-6"></div>
      <div className="absolute -bottom-48 left-64 w-96 h-96 border border-gray-300 -rotate-45"></div>
      <div className="absolute -bottom-36 left-48 w-48 h-48 border border-gray-50 rotate-12"></div>

      <div className="absolute -bottom-64 right-1/3 w-64 h-64 border border-gray-200 rotate-45"></div>
      <div className="absolute -bottom-64 right-1/3 w-80 h-80 border border-gray-300 -rotate-[36deg]"></div>
      <div className="absolute -bottom-36 right-1/2 w-64 h-64 border border-gray-200 rotate-6"></div>
      <div className="absolute -bottom-48 right-1/3 w-80 h-80 border border-gray-300 rotate-[39deg]"></div>
      <div className="absolute -bottom-48 right-1/4 w-64 h-64 border border-gray-100 -rotate-6"></div>
      <div className="absolute -bottom-48 right-64 w-64 h-64 border border-gray-400 -rotate-45"></div>
      <div className="absolute -bottom-36 right-48 w-48 h-48 border border-gray-50 rotate-12"></div>

      <div className="absolute bottom-64 right-96 w-24 h-24 border border-gray-300 rotate-12"></div>
      <div className="absolute bottom-72 right-96 w-12 h-12 border border-gray-400 -rotate-12"></div>
      <div className="absolute bottom-64 right-80 w-6 h-6 border border-gray-400 rotate-45"></div>
    </section>
  )
}


export default Technology