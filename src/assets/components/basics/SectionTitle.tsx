type Props = {
    sectionTitle: string,
    sectionVariant: boolean
}

export const SectionTitle = (props: Props) => {

    const textDark = `black`
    const textWhite = `white`

  return (
    <header>
      <h2 className={`title-h2 title-h2--${props.sectionVariant ? textDark : textWhite} dark:text-gray-100`}>
        {props.sectionTitle}
      </h2>
    </header>
  )
}
