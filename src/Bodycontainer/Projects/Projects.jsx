
import'./Projects.css'
export function Projects(){
    return(
        
        <section className='part_2'>
          <div className='titles'>
            <span> <span className='text_color'>#</span>projects</span>
            <div className='linea_horizontal'></div>
            <span className='projects_span2'>View all ~~{'>'}</span>
          </div>

          <div className='part2_card'>
            <div className='card' >
              <div className='card_image'>
                <img src="/images/chertnodes.svg" />
              </div>
              <div className='card_subtitle'>
                <span>HTML</span>
                <span>SCSS</span>
                <span>Python</span>
                <span>Flask</span>
              </div>

              <div className='card_body'>
                <span className='card_title' >ChertNodes</span>
                <div className='card_description'> Minecraft servers hosting</div>
                <div className='card_button'>
                  <button className='card_buttonb1'>Live {'<~>'} </button>
                  <button className='card_buttonb1' >Cached {'≥'}</button>
                </div>
              </div>
            </div>
            <div className='card' >
              <div className='card_image'>
                <img src="/images/protectx.svg" />
              </div>
              <div className='card_subtitle'>
                <span>React</span>
                <span>Express</span>
                <span>Discord.js</span>
                <span>Node.js</span>
                <span>HTML</span>
                <span>SCSS</span>
                <span>Python</span>
                <span>Flask</span>
              </div>
              <div className='card_body'>
                <span className='card_title'>ProtectX</span>
                <div className='card_description'>Discord anti-crash</div>
                <div className='card_button'>
                  <button className='card_buttonb1'>Live {'<~>'} </button>
                </div>
              </div>
            </div>
            <div className='card' >
              <div className='card_image'>
                <img src="/images/kahoot.svg" />
              </div>
              <div className='card_subtitle'>
                <span>CSS</span>
                <span>Express</span>
                <span>Node.js</span>
              </div>
              <div className='card_body'>
                <span className='card_title'>Kahoot Answers Viewer</span>
                <div className='card_description'>Get answers to your kahoot quiz</div>
                <div className='card_button'>
                  <button className='card_buttonb1'>Live {'<~>'} </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}