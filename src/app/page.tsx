
import { HomePage } from '@/components';
import Script from 'next/script'

export default function Home() {
  return (
    <>
         <main className="main grid">
        <HomePage/>
        </main>

 
 <Script src="/js/main.js"/>

    </>
    
  );
}
