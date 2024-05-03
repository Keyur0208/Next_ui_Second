import "aos/dist/aos.css"
import { Button } from "@nextui-org/react"

export default function Header_Sectioon() {

  return (
    <>
      <section data-aos="fade-up">
        <div className="flex flex-col  justify-start items-center  lg:pt-26 pt-20 " >
          <div className="w-full sm:w-full md:w-full  lg:w-6/12 xl:w-5/12 ">
            <div className="px-12 text-center lg:px-0" >
              <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800  dark:text-white">Your website, beyond expectations</h1>
            </div>
            <div className="px-10 lg:px-0">
              <p className="mt-10 text-gray-500 text-center text-xl lg:text-3xl dark:text-white "> Make your website wonderful and build beyond your expectations.</p>
            </div>
            <div className="mt-10 flex justify-center items-center px-12 lg:px-0" >
              <Button className="font-sans font-medium p-5  text-md border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700">Get Started</Button>
              <small className="mx-2" >Or</small>
              <Button className="font-sans font-medium  text-md p-5 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100">Contact Us</Button>
            </div>
            <div className="max-w-xl mx-auto pt-20">
              <div className="flex flex-col justify-center" >
                <div className="font-mono uppercase text-center font-medium text-sm text-gray-600 dark:text-white" >
                  <p>These Folks get it</p>
                </div>
                <div className="flex flex-row items-center justify-center flex-wrap"  >
                  <div className="m-12 mb-8">
                    <img src="/download (6).svg" />
                  </div>
                  <div className="m-12 mb-8">
                    <img src="/download (7).svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}