type Props = {
  isActive: boolean
}

const PaginationCircle = (props: Props) => {

  const active = 'active dark:bg-gray-50';
  const notActive = 'basic dark:bg-main-dark dark:border-main-white';

  return (
    <>
      <span className={`pagination pagination--${props.isActive ? active : notActive}`}></span>
    </>
  )
}

export default PaginationCircle