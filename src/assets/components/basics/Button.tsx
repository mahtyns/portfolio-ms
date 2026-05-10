type Props = {
  buttonContent: string,
  buttonVariant: boolean
  handleOnClick: () => void
}

const Button = (props: Props) => {

  const buttonBlack = `black`
  const buttonWhite = `white`

  return (
    <button
      className={`button button--${props.buttonVariant ? buttonBlack : buttonWhite}`}
      onClick={() => props.handleOnClick()}
    >
      {props.buttonContent}
    </button>
  )
}

export default Button