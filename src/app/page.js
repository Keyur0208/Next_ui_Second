import { Button } from "@nextui-org/react";


export default function Home() {
  return (
    <>
      <div className="container" >
        <div className="max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8">
          <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800">Your website, beyond expectations</h1>
          <div className="max-w-xl mx-auto">
            <p className="mt-10 text-gray-500 text-center text-xl lg:text-3xl"> Make your website wonderful and build beyond your expectations.</p>
          </div>
          <div className="mt-10 flex justify-center items-center w-full mx-auto" >
            <Button className="font-sans font-medium p-5  text-md border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700">Get Started</Button>
            <small className="mx-2" >Or</small>
            <Button className="font-sans font-medium  text-md p-5 border rounded bg-white text-gray-600 border-gray-300 hover:bg-gray-100">Contact Us</Button>
          </div>
        </div>
        <div class="max-w-xl mx-auto">
          <div className="flex flex-col justify-center" >
            <div class="font-mono uppercase text-center font-medium text-sm text-gray-600" >
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
      <section>
        <div className="w-full  from-gray-50 to-white shadow-inner">
          <div className="py-20 px-5 lg:p-32  lg:mt-20 flex flex-col justify-center items-center" >
            <img className="lg:w-4/5" src="/download.svg"/>
            <div>
            <Button startContent={<img className="h-4"   src="/download (5).svg"/>}  className="w-64 lg:w-auto  flex items-center transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl" > Watch the video (5 min)</Button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
