type Props = {
    sectionTitle: string,
    sectionVariant: boolean
}

export const SectionTitle = (props: Props) => {

    const textDark = `text-gray-500`
    const textWhite = `text-main-white`

  return (
    <div className={`font-playfair text-2xl ${props.sectionVariant ? textDark : textWhite}`}>
        {props.sectionTitle}
    </div>
  )
}
