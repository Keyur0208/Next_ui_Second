import { Button } from "@nextui-org/react"

export default function Business_Section() {

    const Business_point = [
        {
            no: 1,
            title: "Designers",
            dec: "Officia et fugiat mollit qui. Dolor elit aliqua voluptate ipsum excepteur cillum consequat consectetur duis magna qui eu consequat occaecat. Deserunt nisi sit."
        },
        {
            no: 2,
            title: "Developers",
            dec: "Pariatur consectetur laboris exercitation duis laboris. Commodo duis fugiat magna fugiat et ut anim elit. Tempor aute ex qui tempor tempor."
        },
        {
            no: 3,
            title: "Product owners",
            dec: "Ullamco consectetur ipsum eiusmod nisi adipisicing sint anim dolore aute excepteur. Voluptate ea ullamco sunt eu elit qui aliquip. Adipisicing."
        },
    ]

    return (
        <>
            <section className="bg-gradient-to-b from-gray-50 to-white shadow-inner  dark:text-white dark:from-black " >
                <div className="flex flex-col justify-center items-center  py-20 lg:py-28" data-aos="fade-down" >
                    <div className="w-11/12 lg:w-7/12 p-2 lg:p-0 relative shadow-2xl mx-6 lg:mx-0" >
                        <img src="/download.svg" className="w-screen" />
                        <div>
                            <Button startContent={<img src="/download (5).svg " className="size-5 " />} className="w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-6 shadow-2xl dark:text-black ">
                                Watch The video (5 min)
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center p-4 lg:p-0 lg:py-10" >
                        <p className="text-base text-indigo-600 font-bold tracking-wide uppercase" >GROW YOUR REVENUE</p>
                        <h1 className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">Transform your business</h1>
                    </div>
                    <div className="flex justify-center  items-center  px-4  sm:px-10 md:px-14 lg:px-28 w-full   " >
                        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row  items-center  gap-10 lg:gap-20  pb-20 " >
                            <div data-aos="fade-right">
                                {
                                    Business_point.map((item,index) => {
                                        return (
                                            <>
                                                <div className="flex flex-row  gap-2  lg:gap-10 my-5 " key={index}  >
                                                    <div className="mt-5" >
                                                        <p className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-50 text-blue-500" >{item.no}</p>
                                                    </div>
                                                    <div className="mt-5" >
                                                        <h1 className="my-4 text-xl font-bold" >{item.title}</h1>
                                                        <p className="text-gray-500 leading-loose" >{item.dec}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="w-full p-5 lg:p-0" data-aos="fade-left">
                                <img src="/download (1).svg" className="w-screen" />
                            </div>
                        </div>
                    </div>
                </div>

                <div  data-aos="zoom-y-out">
                    <div className="text-center p-4 lg:p-0 lg:py-10">
                        <p className="text-base text-indigo-600 font-bold tracking-wide uppercase" >FEATURES</p>
                        <h1 className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">How we change the game</h1>
                    </div>

                    <div className="flex justify-center  items-center  px-4 sm:px-10 md:px-14 lg:px-28 py-5 w-full  " >
                        <div className="flex flex-row flex-wrap xl:px-16 " >
                            <div className="w-full border-b md:w-6/12 md:border-r lg:w-4/12 p-8">
                                <div className="flex flex-row items-center mb-6" >
                                    <img src="/download (2).svg" className="w-6 " />
                                    <h1 className="ml-4 text-xl" >Increase sales</h1>
                                </div>
                                <div>
                                    <p className="leading-loose text-gray-500" >
                                        Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui velit.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full border-b md:w-6/12  md:border-r-0  lg:border-r lg:w-4/12 p-8">
                                <div className="flex flex-row items-center mb-6" >
                                    <img src="/download (2).svg" className="w-6 " />
                                    <h1 className="ml-4 text-xl" >Enterprise-ready</h1>
                                </div>
                                <div>
                                    <p className="leading-loose text-gray-500" >
                                        Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full border-b md:w-6/12 md:border-r  lg:border-r-0   lg:w-4/12 p-8">
                                <div className="flex flex-row items-center mb-6" >
                                    <img src="/download (2).svg" className="w-6 " />
                                    <h1 className="ml-4 text-xl" >Unlimited growth</h1>
                                </div>
                                <div>
                                    <p className="leading-loose text-gray-500" >
                                        Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full  md:w-6/12 border-b md:border-r-0  md:border-b lg:border-b-0 xl:border-b-0  lg:border-r lg:w-4/12 p-8">
                                <div className="flex flex-row items-center mb-6" >
                                    <img src="/download (2).svg" className="w-6 " />
                                    <h1 className="ml-4 text-xl" >Recommended by experts</h1>
                                </div>
                                <div>
                                    <p className="leading-loose text-gray-500" >
                                        Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 border-b md:border-r md:border-b-0 lg:border-b-0 xl:border-b-0  lg:w-4/12 p-8">
                                <div className="flex flex-row items-center mb-6" >
                                    <img src="/download (2).svg" className="w-6 " />
                                    <h1 className="ml-4 text-xl" >Modern platform</h1>
                                </div>
                                <div>
                                    <p className="leading-loose text-gray-500" >
                                        Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 md:border-r-0 md:border-b-0  lg:border-r-0   lg:w-4/12 p-8">
                                <div className="flex flex-row items-center mb-6" >
                                    <img src="/download (2).svg" className="w-6 " />
                                    <h1 className="ml-4 text-xl" >Integrations</h1>
                                </div>
                                <div>
                                    <p className="leading-loose text-gray-500" >
                                        Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia consectetur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
