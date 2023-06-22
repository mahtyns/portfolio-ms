type Props = {
    pageName: string
}

export const Navlink = (props: Props) => {
  
    return (
    <div className={`tracking-wide uppercase text-base text-gray-500`}>
        {props.pageName}
    </div>
  )
}

export default Navlink