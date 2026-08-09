import { TechStack } from "../../types/stack"

export const StackItem = (stack: TechStack) => {
    return (
        <div className="stack__item">
            <img src={stack.tech_img} alt={stack.tech_name + ' icon'} className="stack__item__image" />
            <p className="stack__item__text">{stack.tech_name}</p>
        </div>
    )
}
