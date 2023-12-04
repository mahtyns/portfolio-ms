type Props = {
  isActive: boolean
}

const ActiveCircle = (props: Props) => {

  const active = 'bg-main-dark dark:bg-gray-50';
  const notActive = 'bg-main-white border border-main-dark dark:bg-main-dark dark:border-main-white';

  return (
    <>
      <div className={`w-3 h-3 rounded-full ${props.isActive ? active : notActive}`}></div>
    </>
  )
}

export default ActiveCircle