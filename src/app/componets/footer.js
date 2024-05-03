import { Button } from "@nextui-org/react";

export default function Footer() {

    const itemList = ['Features', 'Customers', 'Platform', 'Pricing', 'Enterprise'];

    const navigationItems = [
        "Get started",
        "Guides",
        "Tools",
        "Case studies",
        "Solutions",
        "FAQs",
        "Help Center",
        "Training",
        "Other resources"
    ];

    const menuItems = [
        "About Us",
        "Careers",
        "Leadership",
        "Blog",
        "Events",
        "Press"
    ];



    return (
        <>
            <section className="bg-white border-t border-gray-400 pt-14 pb-10 dark:text-white dark:bg-black" >
                <div className="w-full flex flex-col justify-center items-center"  >
                    <div className="w-10/12 lex flex-col "  >
                        <div className="flex flex-row my-5 mb-10">
                            <div>
                                <img src="/logo.svg" className="h-12 w-12 mr-4" />
                            </div>
                            <div>
                                <h1 className="text-4xl text-indigo-500 font-bold" >STARTD</h1>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row  justify-between item-center">
                            <div className="flex flex-row flex-wrap justify-between item-center py-4  px-2 lg:px-0 w-full sm:w-full md:w-full lg:w-5/12" >
                                <div  >
                                    <ul>
                                        <h4 className="text-gray-900 text-base font-bold mb-1 dark:text-white">Product</h4>
                                        {
                                            itemList.map((item) => {

                                                return (
                                                    <>
                                                        <li className="text-gray-800 text-sm font-medium leading-6 dark:text-gray-500">
                                                            <a href="/" >{item}</a>
                                                        </li>
                                                    </>
                                                )

                                            })
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4 className="text-gray-900 text-base font-bold mb-1 dark:text-white">Resources</h4>
                                        {
                                            navigationItems.map((item) => {

                                                return (
                                                    <>
                                                        <li className="text-gray-800 text-sm font-medium leading-6 dark:text-gray-500">
                                                            <a href="/" >{item}</a>
                                                        </li>
                                                    </>
                                                )

                                            })
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <h4 className="text-gray-900 text-base font-bold mb-1 dark:text-white">About Us</h4>
                                        {
                                            menuItems.map((item) => {
                                                return (
                                                    <>
                                                        <li className="text-gray-800 text-sm font-medium leading-6 dark:text-gray-500">
                                                            <a href="/" >{item}</a>
                                                        </li>
                                                    </>
                                                )

                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full sm:w-full md:w-full lg:w-6/12 py-10 ">
                                <div className="border border-gray-400 rounded py-5 px-4">
                                    <h4 className="font-mono text-sm uppercase text-gray-500 mb-3 dark:text-white">
                                    Subscribe our newsletter
                                    </h4>
                                    <div className="flex w-full">
                                        <input type="text" className="border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2" placeholder="Enter your email" />
                                        <Button className="font-sans font-medium py-2 px-4 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100 dark:text-black">Subscribe</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}