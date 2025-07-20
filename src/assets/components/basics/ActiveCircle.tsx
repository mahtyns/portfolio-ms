type Props = {
  isActive: boolean
}

const ActiveCircle = (props: Props) => {

  const active = 'active dark:bg-gray-50';
  const notActive = 'basic dark:bg-main-dark dark:border-main-white';

  return (
    <>
      <div className={`pagination pagination--${props.isActive ? active : notActive}`}></div>
    </>
  )
}

export default ActiveCircle