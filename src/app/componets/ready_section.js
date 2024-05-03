import { Button } from "@nextui-org/react"

export default function Ready_Section() {


    const list = [
        {
            image: '/correct.svg',
            name: "Laboris nulla"
        },
        {
            image: '/correct.svg',
            name: "Loren pariatur nisi"
        },
        {
            image: '/correct.svg',
            name: "id aute sint aliquip"
        },
        {
            image: '/correct.svg',
            name: "Do duis sint aliquip"
        },
        {
            image: '/correct.svg',
            name: "Nostrud duis temporp"
        },
        {
            image: '/correct.svg',
            name: "consequat qiusmod"
        },
        {
            image: '/correct.svg',
            name: "reprehenderit"
        },
        {
            image: '/correct.svg',
            name: "Adipising reprehenderit"
        },
    ]

    return (
        <>
            <section className=" from-gray-100 to-white shadow-inner pt-12 pb-28 ">
                <div className="w-full p-5 " >
                    <div className="lg:w-11/12 flex flex-col lg:flex-row  items-center justify-center " >
                        <div className="w-full lg:w-full flex  justify-center" data-aos="fade-right" >
                            <div className="w-full  sm:w-11/12 md:w-10/12 lg:w-10/12" >
                                <h1 className="text-4xl lg:text-7xl font-bold text-gray-800 mb-12 dark:text-white">Are You ready ?</h1>
                                <p className="mt-6 text-base leading-6 text-gray-500">Lorem id ullamco pariatur eiusmod labore qui deserunt incididunt deserunt nostrud. Tempor duis in adipisicing exrcitation ipsum nostrud esse. Reprehenderit cupidatat sint est deserunt id eiusmod amet aliqua officia.</p>

                                <div className="py-10 flex flex-row items-center" >
                                    <p className="flex-shrink-0 pr-4 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                                        What is included</p>
                                    <span className="h-1 w-full max-w-full border-t-2  border-gray-200"></span>
                                </div>

                                <div className="flex flex-wrap " >
                                    {
                                        list.map((item,index) => {
                                            return (
                                                <div className="flex flex-row items-center gap-3 w-full sm:w-6/12 md:w-6/12 lg:w-6/12" key={index} >
                                                    <div className="flex-shrink-0">
                                                        <img src={`${item.image}`} className="w-8" style={{fill:"#a6acb7"}}  />
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-600 dark:text-white">
                                                            {item.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="my-10 lg:my-0" data-aos="fade-left">
                            <div className="text-center">
                                <p className="w-full text-lg font-medium text-gray-800 dark:text-white">If you order now...</p>
                            </div>
                            <h1 className="my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800 dark:text-white">$99/mo</h1>
                            <div className="text-center">
                                <Button href="#" className="font-sans text-md font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700 mt-6">Contact sales</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
