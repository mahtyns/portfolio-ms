type Props = {
  buttonContent: string,
  buttonVariant: boolean
  handleOnClick: () => void
}

const Button = (props: Props) => {

  const buttonPrimary = `primary`
  const buttonSecondary = `secondary`

  return (
    <button
      className={`button button--${props.buttonVariant ? buttonPrimary : buttonSecondary}`}
      onClick={() => props.handleOnClick()}
    >
      {props.buttonContent}
    </button>
  )
}

export default Button