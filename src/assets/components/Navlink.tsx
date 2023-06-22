type Props = {
    pageName: string
}

export const Navlink = (props: Props) => {
  
    return (
    <div className={`tracking-wider uppercase text-base text-gray-500`}>
        {props.pageName}
    </div>
  )
}

export default Navlink