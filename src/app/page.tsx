import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card'
import { AnimatedTestimonialsDemo } from '@/components/global/AnimatedTestimonialsDemo'
import { CardSpotlight } from '@/components/global/CardSpotlight'
import { CardSpotlightDemo } from '@/components/global/CardSpotlightDemo'
import { HeroParallax } from '@/components/global/connect-parallax'
import { ContainerScroll } from '@/components/global/container-scroll-animation'
import CreativeBtn from '@/components/global/CreativeBtn'
import DownloadApp from '@/components/global/DownloadApp'
import FAQ from '@/components/global/FAQ/FAQ'
import Footer from '@/components/global/Footer/Footer'
import { HoverEffect } from '@/components/global/HoverEffect'
import HowItWorks from '@/components/global/HowItWorks/HowItWorks'
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'
import { LampComponent } from '@/components/global/lamp'
import Navbar from '@/components/global/navbar'

import QRSection from '@/components/global/QRSection'
import TableReservation from '@/components/global/TableReservation'
import { Button } from '@/components/ui/button'
import { clients, products } from '@/lib/constant'
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'





export default function Home() {
  //WIP: remove fault IMAge for home page
  return (

    <main className="min-h-screen bg-white">

      <div className='relative w-full max-w-[1440px] px-[50px] pt-[10px] mx-auto'>
      <Navbar />
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"> */}
      <div className="max-w-[1440px] mx-auto">
        {/* <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-gray-600 tracking-tight">
              Contact<span className="text-gray-600">-less</span>
              <br />
              QR Menu
            </h1>
            <p className="text-gray-600 text-lg max-w-lg">
              Make a QR code menu for your restaurant, bar or cafe so customers can enjoy a contactless dining experience.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Submit
            </button>
          </div>
          
        
        </div> */}

        <QRSection />

      
        <TableReservation />

        {/* <HoverEffect/> */}

       

        {/* <Pricing/> */}

        <CardSpotlightDemo/>

        {/* <CardSpotlight/> */}



        <DownloadApp />
         

         {/* <CreativeBtn/> */}

         <AnimatedTestimonialsDemo/>

        <FAQ />
      </div>
      <Footer />


      {/* <QRMenuLandingu/> */}

      </div>


    </main>

  )
}
