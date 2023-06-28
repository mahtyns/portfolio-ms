type Props = {
    buttonContent: string,
    buttonVariant: boolean
    handleOnClick: () => void
}

const Button = (props: Props) => {

  const buttonBlack = `bg-main-dark text-main-white`
  const buttonWhite= `border-main-dark border text-main-dark`  

  return (
    <button 
    className={`${props.buttonVariant ? buttonBlack : buttonWhite} py-2 px-4 md:py-3 md:px-16 uppercase`} 
    onClick={()=>props.handleOnClick()}
    >
      {props.buttonContent}
    </button>
  )
}

export default Button