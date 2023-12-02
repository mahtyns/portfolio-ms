type Props = {
    isActive: boolean
}

const DoubleSplit = (props: Props) => {

const active = 'bg-main-dark';
const notActive = 'border border-main-dark';

  return (
      <>
          <div className="flex flex-row gap-[3px]">
              <div className={`h-5 w-[7px] ${props.isActive ? active : notActive}`} ></div>
              <div className={`h-5 w-[7px] ${props.isActive ? active : notActive}`} ></div>

          </div>
      </>
  )
}

export default DoubleSplit