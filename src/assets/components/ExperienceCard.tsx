import ExperienceDate from "./experience-description/ExperienceDate"
import ExperienceDescription from "./experience-description/ExperienceDescription"
import ExperienceDetail from "./experience-description/ExperienceDetail"
import ExperienceName from "./experience-description/ExperienceName"

type Props = {
    expName: string,
    expDate: string,
    expCat: string,
    expDescr: string,
    expDetails: Array<string>
}

const ExperienceCard = (props: Props) => {
  return (
    <article className="border-gray-400 border w-96 h-96 bg-main-white">
        <div className="w-full border-b border-gray-400 py-4 flex flex-col items-center">
            <ExperienceName 
            expName={props.expName}
            />
        </div>
        <div className="w-full flex flex-col items-center">
              <ExperienceDate 
               expDate={props.expDate} />
              <ExperienceDescription
               expDescr={props.expDescr} />
              <ExperienceDetail expDetails={props.expDetails} />
        </div>
    </article>
  )
}

export default ExperienceCard