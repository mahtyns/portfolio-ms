type Props = {
    sectionTitle: string,
    sectionVariant: boolean
}

export const SectionTitle = (props: Props) => {

    const textDark = `text-gray-500`
    const textWhite = `text-main-white`

  return (
    <header>
      <h1 className={`font-playfair text-2xl ${props.sectionVariant ? textDark : textWhite}`}>
        {props.sectionTitle}
      </h1>
    </header>
  )
}
