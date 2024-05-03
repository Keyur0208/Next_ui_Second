import { Link } from "@nextui-org/react"

export default function Buid_Section() {
    return (
        <>
            <section className="pt-20 " data-aos="zoom-y-in" >
                <div className="flex flex-col animation pt-28  dark:bg-black dark:border-1   ">
                    <div className="text-center" >
                        <h1 className="text-white text-4xl lg:text-7xl font-bold text-center">What will you build?</h1>
                        <p className="text-gray-400 text-center text-xl mt-12">Don't just take our word for it - see what leaders in digital are saying</p>
                    </div>

                    <div className="pt-20 flex  flex-wrap  justify-center p-5  gap-10  items-center " >
                        <div className="w-full sm:w-5/12 md:w-5/12 lg:w-3/12 cursor-pointer hover:scale-105
              ease-in duration-300" >
                            <div className="h-60">
                                <img src="/case-1.webp"
                                    className="h-full w-full object-cover overflow-hidden rounded" />
                            </div>
                            <div className="text-center p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative" >
                                <h1 className="uppercase text-sm text-gray-700 text-center pb-1">CASE STUDY</h1>
                                <p className="text-gray-500 text-center pb-1 text-sm">Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-5/12 md:w-5/12 lg:w-3/12 cursor-pointer hover:scale-105 ease-in duration-300" >
                            <div className="h-60">
                                <img src="/case-2.webp"
                                    className="h-full w-full object-cover overflow-hidden rounded" />
                            </div>
                            <div className="text-center p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative" >
                                <h1 className="uppercase text-sm text-gray-700 text-center pb-1">CASE STUDY</h1>
                                <p className="text-gray-500 text-center pb-1 text-sm">Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-5/12 md:w-5/12 lg:w-3/12 cursor-pointer hover:scale-105 ease-in duration-300" >
                            <div className="h-60"  >
                                <img src="/case-3.webp"
                                    className="h-full w-full object-cover overflow-hidden rounded" />
                            </div>
                            <div className="text-center p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative" >
                                <h1 className="uppercase text-sm text-gray-700 text-center pb-1">CASE STUDY</h1>
                                <p className="text-gray-500 text-center pb-1 text-sm">Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.</p>
                            </div>
                        </div>

                        <div className="w-full sm:w-5/12 md:w-5/12 lg:w-3/12 cursor-pointer text-center " >
                            <Link
                                color="secondary"
                                size="lg"
                                showAnchorIcon
                                anchorIcon={<img src="/download (4).svg" className="h-6 w-6 fill-current ml-2" />}
                                className="mt-8 pb-12 lg:mt-4 text-xl text-indigo-400 cursor-pointer z-30 hover:text-indigo-600"
                            >See all case studies</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
