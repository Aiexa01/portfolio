
import './Skills.css'
import { Habilities } from './Habilities'
import { Skill } from './Skill'
export function Skills() {
  return (
    <section className='part3'>
      <div className='titles'>
        <span> <span className='text_color'>#</span>skills</span>
        <div className='linea_horizontal'></div>
      </div>
      <div className='images_block'>
        <div className='images'>
          <img src="/images/Group 36.svg" />
        </div>

        <div className='conjunto_block'>
          <div className='block_list'>
            
            {Habilities.map(function(Habilitie,i){return <Skill data={Habilitie} key={i}></Skill>})}
           

          </div>

        </div>
      </div>
    </section>
  )
}