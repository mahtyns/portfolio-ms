type Props = {
    pageName: string
}

export const Navlink = (props: Props) => {
  
    return (
    <div className={`tracking-wider uppercase text-base text-gray-500 hover:text-special-500 transition-all`}>
        {props.pageName}
    </div>
  )
}

export default Navlink