import ExperienceDate from "./experience-description/ExperienceDate"
import ExperienceDescription from "./experience-description/ExperienceDescription"
import ExperienceDetail from "./experience-description/ExperienceDetail"
import ExperienceName from "./experience-description/ExperienceName"

type Props = {
    expName: string,
    expDate: string,
    expCat: string,
    expDescr: string,
    expDetails: Array < string >
}

const ExperienceCardMobile = (props : Props) => {
    return (
        <div className="flex gap-1 py-8">

            <article className="border-gray-400 border w-96 h-96 bg-main-white">
                <div
                    className="w-full border-b border-gray-400 py-4 flex flex-col items-center">
                    <ExperienceName expName={props.expName}/>
                </div>
                <div className="w-full flex flex-col items-center mb-4">
                    <ExperienceDate expDate={props.expDate}/>
                    <ExperienceDescription expDescr={props.expDescr}/>
                    <ExperienceDetail expDetails={props.expDetails}/>
                </div>
                <div className="flex justify-center gap-24 py-8">
                    <div >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png"
                            alt="prev"
                            className="w-10 h-10 rotate-180"/>
                    </div>
                    <div >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/9229/9229001.png"
                            alt="next"
                            className="w-10 h-10"/>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ExperienceCardMobile