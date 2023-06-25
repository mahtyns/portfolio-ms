type Props = {
    stackImg: string,
    stackName: string
}

const StackCard = (props: Props) => {
  return (
    <figure className="w-20 flex gap-2 flex-col items-center z-50">
        <img src={props.stackImg} alt={props.stackName} className="xl:w-16 xl:h-16 w-12 h-12 grayscale"/>
        <figcaption className="text-sm uppercase font-lato w-full text-center">{props.stackName}</figcaption>
    </figure>
  )
}

export default StackCard