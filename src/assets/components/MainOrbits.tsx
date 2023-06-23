// Circles on the main landing page

const MainOrbits = () => {

    const orbit = `rounded-full`
    const flex = `flex justify-center items-center`

    return (
        <div className={`w-full py-24 ${flex} overflow-hidden flex-col`}>
            <div className={`${orbit} ${flex} w-[700px] h-[700px] border border-gray-100 `}>
                <div className={`${orbit} ${flex} w-[580px] h-[580px] border border-gray-100`}>
                    <div className={`${orbit} ${flex} w-[450px] h-[450px] border border-gray-200 before:bg-gray-400 before:w-2 before:h-2 before:rounded-full before:absolute before:transform before:translate-y-64 animate-spin`}>
                        <div className={`${orbit} ${flex} w-96 h-96 border border-gray-300`}>
                            <div className={`${orbit} ${flex} w-64 h-64 border border-gray-500`}>
                                <div className={`${orbit} ${flex} w-60 h-60 border border-main-dark before:bg-main-dark before:w-4 before:h-4 before:rounded-full before:absolute before:transform before:translate-x-24`}>
                                    <div className={`${orbit} ${flex} w-48 h-48 border border-gray-500`}>
                                        <div className={`${orbit} ${flex} w-36 h-36 border border-gray-100 `}><div className={`${orbit} ${flex} w-36 h-36 border border-gray-100 `}></div></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`${orbit} ${flex} bg-main-dark w-[900px] h-[900px]`}>

            </div> */}
        </div>
    )
}

MainOrbits.propTypes = {}

export default MainOrbits