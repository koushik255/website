'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import Grittyourteeth from './Grittyourteeth.png';

function AboutPage() {
  const router = useRouter();
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [hoverState, setHoverState] = useState(null);

  function handleClickBACK() {
    router.push('/');
  }

  function toggleImageSize() {
    setIsEnlarged(!isEnlarged);
  }

  return (
    <div className={`min-h-screen w-full bg-blue-900 ${
      hoverState === 'image' ? 'bg-blue-800' : 
      hoverState === 'back' ? 'bg-blue-950' : 'bg-blue-900'
    }`}>
      <div className="p-5">
        <div className="py-6 text-center">
          <h1 className="text-4xl font-bold text-yellow-300 underline">
            ABOUT ME PAGE
          </h1>
        </div>
        
        <div className="mt-8 flex flex-col items-center">
          <div 
            className={`relative mb-8 border-4 border-yellow-400 rounded ${
              isEnlarged 
                ? 'w-full max-w-xl h-100' 
                : 'w-80 h-60'
            }`}
            onClick={toggleImageSize}
            onMouseEnter={() => setHoverState('image')}
            onMouseLeave={() => setHoverState(null)}
          >
            <div className="relative w-full h-full">
              <Image 
                priority={true}
                src={Grittyourteeth}
                alt="Koushik's photo"
                layout="fill"
                objectFit="cover"
                className="hover:brightness-110"
              />
            </div>
            
            {isEnlarged ? (
              <div className="absolute bottom-2 right-2 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded">
                CLICK AGAIN TO MAKE SMALLER
              </div>
            ) : (
              <div className="absolute bottom-2 right-2 bg-green-600 text-white px-3 py-1 text-sm font-bold rounded">
                CLICK TO ENLARGE
              </div>
            )}
          </div>
          
          <div className="text-center max-w-2xl mb-8 bg-blue-800 p-4 border-2 border-blue-600 rounded">
            <h2 className="text-2xl font-bold text-white mb-4">
              MY NAME IS KOUSHIK AND THIS IS MY PERSONAL SITE
            </h2>
            <p className="text-lg text-blue-200">
              I am a jit and I'm a jit also I'm a jit
            </p>
          </div>
          
          <div 
            className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer mt-6 font-bold text-xl border-2 border-blue-500"
            onClick={handleClickBACK}
            onMouseEnter={() => setHoverState('back')}
            onMouseLeave={() => setHoverState(null)}
          >
            &larr; GO BACK TO HOME PAGE
          </div>
        </div>
        
        <div className="py-4 mt-10 text-center text-blue-300 border-t-2 border-blue-700">
          <p className="font-bold">KOUSHIK'S WEBSITE</p>
          <p className="text-xs mt-1">© 2025 - Thanks for visiting!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
