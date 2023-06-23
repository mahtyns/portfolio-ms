type Props = {
    pageName: string
}

export const Navlink = (props: Props) => {
  
    return (
    <div className={`tracking-wider uppercase text-base text-gray-500 hover:text-special-500 transition-all hover:tracking-widest`}>
        {props.pageName}
    </div>
  )
}

export default Navlink