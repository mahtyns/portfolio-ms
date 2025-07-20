type Props = {
    buttonContent: string,
    buttonVariant: boolean
    handleOnClick: () => void
}

const Button = (props: Props) => {

  const buttonBlack = `black dark:bg-main-white dark:text-main-dark dark:hover:bg-gray-300`
  const buttonWhite = `white dark:border-main-white dark:text-main-white dark:hover:bg-gray-800`  

  return (
    <button 
      className={`button button--${props.buttonVariant ? buttonBlack : buttonWhite}`} 
    onClick={()=>props.handleOnClick()}
    >
      {props.buttonContent}
    </button>
  )
}

export default Button