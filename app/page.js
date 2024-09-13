import Image from "next/image";
import Spline from '@splinetool/react-spline/next';
import { Input, Button } from "@nextui-org/react";
import { MailIcon } from './MailIcon';



export default function Home() {


  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden ">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#ffffff00] shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-400 dark:text-white">Finsy</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#hero-large" className="text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-800">Home</a>
                <a href="#about" className="text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-800">Finsy</a>
                <a href="#contact" className="text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-800">Contact</a>
                <a href="#blog" className="text-white dark:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-800">Blogs</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero-large" className="hidden lg:flex flex-col items-center justify-center min-h-screen bg-black dark:bg-gray-900 pt-10">
        <div className="w-full h-[700px]">
          <Spline
            scene="https://prod.spline.design/RWB65UNxnkVFnV57/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>
      
     
      <section id="hero-medium" className="hidden md:flex lg:hidden flex-col items-center justify-center min-h-screen bg-black dark:bg-gray-900 pt-10">
        <div className="w-full h-[400px]">
          <Spline
            scene="https://prod.spline.design/5Utzlz83zbHQ7i7h/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>

      <section id="hero-mobile" className="block md:hidden flex-col items-center justify-center bg-black dark:bg-gray- pt-10">
        <div className="w-full h-[800px]"> {/* Shortened height */}
          <Spline
            scene="https://prod.spline.design/5Utzlz83zbHQ7i7h/scene.splinecode"
            style={{ width: '100%', height: '130%' }}
          />
        </div>
      </section>


      {/* About Section - Visible only on Mobile */}
      <section id="about" className="block md:hidden items-center justify-center min-h-screen bg-black dark:bg-black text-center p-4">
        <div className="justify-center">
          <p className="text-md text-gray-700 dark:text-gray-200 max-w-6xl animate-slide-up font-poppins">
            <span className="font-medium text-green-400">Finsy</span>
            <span className="font-medium text-white">, a robot from the year 3024, was sent back in time to retrieve a powerful financial artifact.</span>
            <span className="font-medium text-white"> However, during the mission, a glitch in time travel technology traps Finsy in 2024.</span>
            <span className="font-medium text-white"> Now stuck in the past, Finsy uses futuristic financial wisdom to help people understand and master money management, hoping to unlock the secret to returning to the future.</span>
            <span className="font-medium text-white"> Each lesson Finsy teaches brings it closer to repairing its time circuits, but it also helps people&apos;s financial futures.</span>
          </p>
          <p className="pt-2">
            <span className="text-3xl font-semibold text-green-500 pt-2">BUILD BETTER FINANCIAL FUTURES.</span>
          </p>
        </div>
      </section>

         {/* About FinLearn */}
         <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
        <div className="">
          <p className="pb-4">
            <span className="text-8xl font-semibold text-green-500"> Fin</span>
            <span className="text-8xl font-semibold text-yellow-300">Learn</span>
          </p>
          <p className="text-4xl text-gray-700 dark:text-gray-200 max-w-6xl animate-slide-up">  
            <span className="font-semibold text-white">In my time, relying on one income stream is a thing of the past. To succeed in the future, you need to diversify your income.&rdquo; Finsy and the --------- discuss the importance of having multiple income streams.</span>
          </p>
        </div>
      </section>

      {/* About Finastra */}
      <section id="about" className="min-h-screen bg-black dark:bg-black p-4">
        <div className="">
          <p className="pb-4">
            <span className="text-8xl font-semibold text-green-500"> Fin</span>
            <span className="text-8xl font-semibold text-blue-300">Astra</span>
          </p>
          <p className="text-4xl text-gray-700 dark:text-gray-200 max-w-6xl animate-slide-up">  
            <span className="font-semibold text-white">Finastra is a Futuristic tools of Finsy.</span>
            
          </p>
          <p className="text-4xl text-gray-700 dark:text-gray-200 max-w-6xl animate-slide-up">  
            <span className="font-semibold text-white">You can try Vidya Rang. Our current Product on Beta Stage.</span>
          </p>
          <a href="https://www.vidyarang.online/" target="_blank" rel="noreferrer"> <Button color="default" className="mt-2 ml-2">
        Vidya Rang
      </Button></a>
          
        </div>
      </section>

      <section id="products" className="flex flex-col items-start justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-6">
        <p className="pb-4">
          <span className="text-8xl font-semibold text-green-500"> Fin</span>
          <span className="text-8xl font-semibold text-yellow-300">Sights</span>
        </p>
        <div className="flex overflow-x-scroll space-x-14 max-w-full scrollbar-hide snap-x snap-mandatory pt-5">
          {/* Portrait Card 1 */}
          <div className="flex-none bg-gray-800 hover:scale-105 transform transition-all duration-300 rounded-lg p-4 shadow-lg snap-center w-[380px] h-[500px]">
            <Image src="/finlearn.png" alt="Finlearn" width={380} height={400} className="rounded-lg object-cover" />
            <p className="text-lg font-semibold mt-4 text-green-400">Finlearn</p>
            <p className="text-sm text-gray-400">A blog about learning the best financial practices for the future.</p>
          </div>
          
          {/* Portrait Card 2 */}
          <div className="flex-none bg-gray-800 hover:scale-105 transform transition-all duration-300 rounded-lg p-4 shadow-lg snap-center w-[380px] h-[500px]">
            <Image src="/finastra.png" alt="Finastra" width={380} height={400} className="rounded-lg object-cover" />
            <p className="text-lg font-semibold mt-4 text-blue-400">Finastra</p>
            <p className="text-sm text-gray-400">A guide to futuristic financial tools and insights from Finsy.</p>
          </div>

          {/* Portrait Card 3 */}
          <div className="flex-none bg-gray-800 hover:scale-105 transform transition-all duration-300 rounded-lg p-4 shadow-lg snap-center w-[380px] h-[500px]">
            <Image src="/fininsights.png" alt="FinInsights" width={380} height={400} className="rounded-lg object-cover" />
            <p className="text-lg font-semibold mt-4 text-red-400">FinInsights</p>
            <p className="text-sm text-gray-400">Get the latest finance tips and insights to secure your future.</p>
          </div>

          {/* Portrait Card 4 */}
          <div className="flex-none bg-gray-800 hover:scale-105 transform transition-all duration-300 rounded-lg p-4 shadow-lg snap-center w-[380px] h-[500px]">
            <Image src="/fintech.png" alt="FinTech" width={380} height={400} className="rounded-lg object-cover" />
            <p className="text-lg font-semibold mt-4 text-purple-400">FinTech</p>
            <p className="text-sm text-gray-400">Exploring the latest in financial technology and its impact.</p>
          </div>

          {/* Portrait Card 5 */}
          <div className="flex-none bg-gray-800 hover:scale-105 transform transition-all duration-300 rounded-lg p-4 shadow-lg snap-center w-[380px] h-[500px]">
            <Image src="/finviews.png" alt="FinViews" width={380} height={400} className="rounded-lg object-cover" />
            <p className="text-lg font-semibold mt-4 text-yellow-400">FinViews</p>
            <p className="text-sm text-gray-400">Diving deep into market trends and financial news with Finsy.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
