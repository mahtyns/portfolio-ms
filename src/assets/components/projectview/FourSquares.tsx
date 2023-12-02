type Props = {
    isActive: boolean
}

const FourSquares = (props : Props) => {

    const active = 'bg-main-dark';
    const notActive = 'border border-main-dark';

    return ( 
    <> 
    <div className="flex flex-row flex-wrap w-6 gap-[2px]">
        <div className={`h-2 w-2 ${props.isActive ? active : notActive}`} ></div>
        <div className={`h-2 w-2 ${props.isActive ? active : notActive}`} ></div>
        <div className={`h-2 w-2 ${props.isActive ? active : notActive}`} ></div>
        <div className={`h-2 w-2 ${props.isActive ? active : notActive}`} ></div>
    </div> 
    </>
  )
}

export default FourSquares