type Props = {
  isActive: boolean
}

const ActiveCircle = (props: Props) => {

  const active = 'bg-main-dark';
  const notActive = 'bg-main-white border border-main-dark';

  return (
    <>
      <div className={`w-3 h-3 rounded-full ${props.isActive ? active : notActive}`}></div>
    </>
  )
}

export default ActiveCircle