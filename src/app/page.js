'use client'

import Picture1 from '../../public/images/1.jpg'

import Picture2 from '../../public/images/2.jpg'

import Picture3 from '../../public/images/3.jpg'

import Lenis from 'lenis';

import Image from 'next/image';

import { useEffect } from 'react';

import Slide from '../components/Slide';



export default function Home() {



  useEffect( () => {

    const lenis = new Lenis()



    function raf(time) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

  }, [])



  return (

    <main className='overflow-hidden'>

      <div className='h-[100vh]'/>

      <Slide src={Picture1} left={"-40%"}/>

      <Slide src={Picture2} left={"-25%"}/>

      <Slide src={Picture3} left={"-75%"}/>

      <div className='h-[100vh]' />

    </main>

  );

}