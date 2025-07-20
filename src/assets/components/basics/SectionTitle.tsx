type Props = {
    sectionTitle: string,
    sectionVariant: boolean
}

export const SectionTitle = (props: Props) => {

    const textDark = `text-gray-500 dark:text-gray-200`
    const textWhite = `text-main-white`

  return (
    <header>
      <h2 className={`font-playfair text-2xl ${props.sectionVariant ? textDark : textWhite} dark:text-gray-100`}>
        {props.sectionTitle}
      </h2>
    </header>
  )
}
