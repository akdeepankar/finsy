import Image from "next/image";
import Spline from '@splinetool/react-spline/next';
import { Input } from "@nextui-org/react";
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
      <section id="about" className="min-h-screen bg-black dark:bg-black p-4">
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
            <span className="font-semibold text-white">Finsy&apos;s weekly dose of future-proof finance tips, insights, and newsletters delivered straight to your inbox!&quot;</span>
          </p>
          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </section>

      {/* About Finsights */}
      <section id="about" className="min-h-screen bg-black dark:black p-4">
        <div className="">
          <p className="pb-4">
            <span className="text-8xl font-semibold text-green-500"> Fin</span>
            <span className="text-8xl font-semibold text-red-300">Sights</span>
          </p>
          <p className="text-4xl text-gray-700 dark:text-gray-200 max-w-6xl animate-slide-up">  
            <span className="font-semibold text-white">Finsy&apos;s weekly dose of future-proof finance tips, insights, and newsletters delivered straight to your inbox!&quot;</span>
          </p>
          <Input
            type="email"
            label="Email"
            placeholder="you@example.com"
            labelPlacement="outside"
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="products" className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-center p-8">
        <div className="flex overflow-x-auto space-x-8 max-w-full scrollbar-hide scrollbar-thumb-rounded-full scrollbar-thumb-gray-400">
          
          {/* Finlearn Card */}
          <div className="flex-none bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Image 
              src="/finlearn.png" // Replace with your image path
              alt="Finlearn"
              width={500} // Adjust width to match the square size
              height={320} // Adjust height to match the square size
              className="rounded-lg mx-auto object-cover"
            />
            <p className="text-lg font-semibold mt-4">Finlearn</p>
          </div>

          {/* Finastra Card */}
          <div className="flex-none bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Image 
              src="/finastra.png" // Replace with your image path
              alt="Finastra"
              width={500} // Adjust width to match the square size
              height={320} // Adjust height to match the square size
              className="rounded-lg mx-auto object-cover"
            />
            <p className="text-lg font-semibold mt-4">Finastra</p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-center p-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">For inquiries, please reach out to us at:</p>
        <p className="text-lg text-green-500 dark:text-green-300">contact@finsy.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-900 text-center py-4">
        <p className="text-gray-700 dark:text-gray-300">© 2024 Finsy. All rights reserved.</p>
      </footer>
    </main>
  );
}
