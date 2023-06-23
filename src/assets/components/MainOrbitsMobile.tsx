//Smaller diameters and less circles for mobile

const MainOrbitsMobile = () => {
    const orbit = `rounded-full`
    const flex = `flex justify-center items-center`

    return (
        <div className={`w-full pt-28 pb-12 ${flex} overflow-hidden flex-col`}>
            <div className={`${orbit} ${flex} w-[470px] h-[470px] border border-gray-100`}>
                <div
                    className={`${orbit} ${flex} w-[350px] h-[350px] border border-gray-200 before:bg-special-500 before:w-2 before:h-2 before:rounded-full before:absolute before:transform before:translate-y-64 animate-spin`}>
                    <div className={`${orbit} ${flex} w-80 h-80 border border-gray-300`}>
                        <div className={`${orbit} ${flex} w-44 h-44 border border-gray-500`}>
                            <div
                                className={`${orbit} ${flex} w-40 h-40 border border-main-dark before:bg-main-dark before:w-3 before:h-3 before:rounded-full before:absolute before:transform before:translate-x-20`}>
                                <div className={`${orbit} ${flex} w-24 h-24 border border-gray-500`}>
                                    <div className={`${orbit} ${flex} w-10 h-10 border border-gray-100 `}></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainOrbitsMobile