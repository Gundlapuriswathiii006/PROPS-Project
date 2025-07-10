import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componentsix from './Components/Componentsix'
/*import Componentone from './Components/Componentone'
/*import SITARAMAM from './Components/Componenttwo'*/
import './App.css'
import Componentfive from './Components/Componentfive'
/*import { Header, Menu, Location, Footer } from './Components/Componentthree'*/


function App() {
  const [count, setCount] = useState(0)

  /*return (
    
      /* <div><h1>HELLO INDIA !!</h1>
       <img src="https://.pinimg.com/736x/98/4a/10/984a10ae157f96bbe6c2afcde96bf3d7.jpg" alt="sorry" />
      <Componentone/>
  </div>*/
     /*<div><h1>SITA RAMAM</h1>
     <img src="https://m.media-amazon.com/images/M/MV5BMTU2YjYwMjItMjA4Yy00OTY3LThkODMtNmZkOWU0YjU1NDFlXkEyXkFqcGc@._V1_.jpg" className='small-image' alt="image"/>
     <SITARAMAM/>
     </div>*/
    /*<div><h1>SITA RAMAM</h1>
    
     <SITARAMAM/>
     </div> */
     /*<div>
      <>
      
      <Header />
      <Menu />
      <Location />
      <Footer />
      </>
     
     
     </div>

  )*/
/*return(

    <div><h1>Different Roles </h1>
    <Componentsix name="allu-arjun" Role="hero" image="https://st1.bollywoodlife.com/wp-content/uploads/2023/03/allu-arjun1-1.jpg"/>
    <Componentsix name="Rashmika" Role="heroine" image="https://i.pinimg.com/736x/b2/28/0a/b2280a40e4f0697c64b511ecc421f713.jpg"/>
    <Componentsix name="Shekhawat" Role="vilan" image="https://images.bhaskarassets.com/thumb/730x0/web2images/521/2024/05/27/202289173338239fgaz2ptxoauvxth1715169474_1716811739.jpg"/>
   
    </div>
    )
}
export default App;
*/
return(
  <div><h1 className='books'>MY BOOKS</h1>
  <h2 className='book'>BOOK 1</h2>
  <h2 style={{display:'flex', justifyContent:'center'}}>A Magical Journey Begins</h2>
  <Componentfive title="HARRY POTTER" author="J.K.ROWLING" year="1997" image="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg" 
  />
  <p className='para'>Enter a world of wizards, spells, and secrets.
Follow Harry as he discovers his true destiny at Hogwarts.
An unforgettable fantasy of friendship and bravery.
Loved by readers of all ages worldwide.</p>
<h2 className='book'>BOOK 2</h2>
  <h2 style={{display:'flex', justifyContent:'center'}}>Healing Through Nature</h2>
  <Componentfive title="THE SECRECT GARDEN" author="FRANCES HODGSON BURNETT" year="1911" image="https://m.media-amazon.com/images/I/811EmpRsSxL.jpg"/>
  <p className='para'>A lonely girl uncovers a locked, hidden garden.
As she nurtures it, she finds growth in herself and others.
A story of renewal, transformation, and childhood wonder.
Classic literature with timeless lessons</p>
  <h2 className='book'>BOOK 3</h2>
  <h2 style={{display:'flex', justifyContent:'center'}}>Understanding Time Itself</h2>
  <Componentfive title="THE ORDER OF TIME" author="CARLO ROVELLI" year="1990" image="https://m.media-amazon.com/images/I/81BtvpRURUL._UF1000,1000_QL80_.jpg"/>
  <p className='para'>Physicist Carlo Rovelli challenges how we view time.
Explores deep ideas in simple, poetic language.
Blends science with philosophy to question reality.
Ideal for curious minds seeking deeper truths.</p>
  <h2 className='book'>BOOK 4</h2>
  <h2 style={{display:'flex', justifyContent:'center'}}>Unlock Your Inner Potential</h2>
  <Componentfive title="THE POWER OF MIND" author="Joseph Murphy" year="1996" image="https://m.media-amazon.com/images/I/61Efv6+SqJL._UF350,350_QL50_.jpg"/>
  <p className='para'>Dr. Joseph Murphy explores the subconscious mind.
Learn how thoughts shape reality and outcomes.
Practical steps to achieve health, wealth, success.
A guide to mental reprogramming and self-growth.</p>
  <h2 className='book'>BOOK 5</h2>
  <h2 style={{display:'flex', justifyContent:'center'}}>Small Changes, Big Impact</h2>
  <Componentfive title="ATOMIC HABITS" author="James Clear" year="2000" image="https://www.bookishadda.com/cdn/shop/files/230_f298f5c0-c116-4280-bef6-5d00db25b743.png?v=1701690525&width=1920"/>
   <p className='para'>Small Changes, Big Impact
James Clear shows how tiny habits lead to major results.
Focuses on systems over goals for long-term success.
Break bad habits and build powerful new ones.
Practical, research-based and action-driven</p>
  <h2 className='book'>BOOK 6</h2>
  <h2 style={{display:'flex', justifyContent:'center'}}>Focus on What Matters</h2>
  <Componentfive title="MAKE TIME" author="JAKE KNAPP" year="1987" image="https://maketime.blog/wp-content/uploads/2019/03/crop-0-0-1000-1344-0-Jake-Cover-3D-new.jpg"/>
  <p className='para'>By Jake Knapp, this book helps reclaim your day.
Avoid distractions and prioritize what truly counts.
Simple techniques to control time, not be controlled.
Perfect for busy professionals and creators.

</p>
   <h2 className='book'>BOOK 7</h2>
  <h2 style={{display:'flex', justifyContent:'center'}}>Success Through Positive Thinking</h2>
  <Componentfive title="YOU CAN WIN" author="SHIV KHERA" year="2002" image="https://atlanticbooks.com/cdn/shop/files/9789386349064_1024x1024.jpg?v=1735489503"/>
  <p className='para'>Shiv Khera offers motivation with practical examples.
Build confidence, overcome failure, and stay positive.
Tools for personal and professional excellence.
A must-read for self-improvement seekers.

</p>
  <h2 className='book'>BOOK 8</h2>
  <h2 style={{display:'flex', justifyContent:'center'}}>Own Your Morning, Elevate Your Life</h2>
  <Componentfive title="THE 5AM CLUB" author="ROBIN SHARMA" year="1997" image="https://m.media-amazon.com/images/I/712VrOZ60zL.jpg"/>
  <p className='para'>Robin Sharma introduces a life-changing routine.
Waking early leads to peak productivity and clarity.
A mix of storytelling and self-help strategies.
For those ready to transform their mindset</p>
  </div>
)
}
export default App;






