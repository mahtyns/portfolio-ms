const ActiveCircle = () => {

  const active = 'bg-main-dark';
  const notActive = 'bg-main-white border border-main-dark';

  return (
    <>
      <div className={`w-3 h-3 rounded-full ${active}`}></div>
    </>
  )
}

export default ActiveCircle