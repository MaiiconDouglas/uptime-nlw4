import   Head  from 'next/head'
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/profile';

export default function Home() {
  return (
    <div className="styles.container">     
    <ExperienceBar />

    <section>
        <div>     
              <Profile />
         </div>        
             <div>   

             </div>
    </section>
   </div>
  )
}
