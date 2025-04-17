'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BackButton() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`text-3xl text-red-500 hover:text-red-400 cursor-pointer transition-all duration-300 transform ${isHovered ? 'scale-105' : ''} mt-6 mb-10 uppercase font-bold flex items-center`}
      onClick={() => router.push('/')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      BACK HOME
    </div>
  );
}
