type Props = {
    buttonContent: string,
    buttonVariant: boolean
}

const Button = (props: Props) => {

  const buttonBlack = `bg-main-dark text-main-white`
  const buttonWhite= `border-main-dark border text-main-dark`  

  return (
    <button className={`${props.buttonVariant ? buttonBlack : buttonWhite} py-2 px-8 md:py-3 md:px-16 uppercase`} >{props.buttonContent}</button>
  )
}

export default Button