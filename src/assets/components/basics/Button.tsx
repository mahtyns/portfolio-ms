import ScrambleText from "./ScrambleText";

type Props = {
  buttonContent: string,
  buttonVariant: boolean,
  handleOnClick: () => void,
  scramble?: boolean
}

const Button = (props: Props) => {

  const buttonPrimary = `primary`
  const buttonSecondary = `secondary`

  return (
    <>
      {
        props.scramble ?

          <button
            className={`button button--${props.buttonVariant ? buttonPrimary : buttonSecondary}`}
            onClick={() => props.handleOnClick()}
          >
            <ScrambleText>{props.buttonContent}</ScrambleText>
          </button>
          : <button
            className={`button button--${props.buttonVariant ? buttonPrimary : buttonSecondary}`}
            onClick={() => props.handleOnClick()}
          >
            {props.buttonContent}
          </button>
      }
    </>
  )
}

export default Button