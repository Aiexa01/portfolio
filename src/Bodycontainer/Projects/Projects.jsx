
import { Cards } from './Cards'
import'./Projects.css'
import { Project } from './Project'

export function Projects(){
    return(
        
        <section className='part_2'>
          <div className='titles'>
            <span> <span className='text_color'>#</span>projects</span>
            <div className='linea_horizontal'></div>
            <span className='projects_span2'>View all ~~{'>'}</span>
          </div>

          <div className='part2_card'>
            
          
          {Cards.map(function(Card,i){return <Project prueba={'Ejemplo ' + i} data={Card} key={i}></Project>
    })}

          </div>
         
        </section>
    )
}