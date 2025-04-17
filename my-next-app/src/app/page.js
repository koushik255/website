'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function FrontPage() {
  const router = useRouter();
  const [hoverState, setHoverState] = useState(null);

  function handleClick(route) {
    router.push(route);
  }

  return (
    <div style={{ 
      backgroundColor: hoverState === 'about' ? '#4169E1' : 
                      hoverState === 'blog' ? '#FF6347' : 
                      '#808080',
      minHeight: '100vh',
      fontFamily: 'Arial'
    }}>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        {/* Typical beginner heading with inline style */}
        <h1 style={{ 
          color: hoverState === 'about' ? 'yellow' : 
                hoverState === 'blog' ? 'lime' : 
                'white',
          fontSize: '36px',
          fontWeight: 'bold'
        }}>
          WELCOME TO MY WEBSITE
        </h1>
        
        {/* Navigation with table layout - very beginner approach */}
        <table style={{ width: '100%', height: '400px', marginTop: '50px' }}>
          <tbody>
            <tr>
              <td 
                style={{ 
                  backgroundColor: hoverState === 'about' ? '#0000CD' : 'transparent',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: '2px solid black'
                }}
                onClick={() => handleClick('/about')}
                onMouseEnter={() => setHoverState('about')}
                onMouseLeave={() => setHoverState(null)}
              >
                <span style={{ 
                  fontSize: '48px', 
                  color: hoverState === 'about' ? 'white' : 'lightblue',
                  fontWeight: 'bold'
                }}>
                  ABOUT
                </span>
              </td>
            </tr>
            <tr>
              <td 
                style={{ 
                  backgroundColor: hoverState === 'blog' ? '#B22222' : 'transparent',
                  textAlign: 'center',
                  cursor: 'pointer',
                  border: '2px solid black'
                }}
                onClick={() => handleClick('/blog')}
                onMouseEnter={() => setHoverState('blog')}
                onMouseLeave={() => setHoverState(null)}
              >
                <span style={{ 
                  fontSize: '48px', 
                  color: hoverState === 'blog' ? 'white' : 'lightcoral',
                  fontWeight: 'bold'
                }}>
                  BLOG
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        
        {/* Footer with basic styling */}
        <div style={{ 
          marginTop: '50px',
          padding: '10px',
          borderTop: '1px solid black',
          color: 'white',
          fontSize: '14px'
        }}>
          Created by KOUSHIK - Last updated 4/13/2025
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
