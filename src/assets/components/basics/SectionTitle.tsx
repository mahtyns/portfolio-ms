type Props = {
  sectionTitle: string,
  sectionVariant: boolean,
  textAlign: 'left' | 'center' | 'right'
}

export const SectionTitle = (props: Props) => {

  const textDark = `black`
  const textWhite = `white`



  return (
    <header>
      <h2 className={`title-h2 title-h2--${props.sectionVariant ? textDark : textWhite} title-h2--${props.textAlign}`}>
        {props.sectionTitle}
      </h2>
    </header>
  )
}
