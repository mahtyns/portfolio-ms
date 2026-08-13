import { useScrambleText } from '../../hooks/useScrambleText';

type Props = {
    children: string
    className?: string
}

const ScrambleText = ({ children, className }: Props) => {
    const { displayText, scramble } = useScrambleText(children)

    return (
        <span
            className={className}
            onMouseEnter={scramble}
        >
            {displayText}
        </span>
    )
}

export default ScrambleText