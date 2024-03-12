import '../comun.css'
import'./Skills.css'
export function Skills(){
    return(
        <section className='part3'>
        <div className='titles'>
          <span> <span className='text_color'>#</span>skills</span>
          <div className='linea_horizontal'></div>
        </div>
        <div className='images_block'>
          <div className='images'>
            <img src="/public/images/Group 36.svg" />
          </div>
          <div className='conjunto_block'>
            <div className='block_list'>
              <div className='block'>
                <div className='blockname'>Languages </div>
                <span>TypeScript Lua</span>
                <span>Python JavaScript</span>
              </div>
            </div>

            <div className='block_list'>
              <div className='block'>
                <div className='blockname'>Databases </div>
                <span>SQLite PostgreSQL</span>
                <span>Mongo</span>
              </div>

              <div className='block'>
                <div className='blockname'>Other</div>
                <span>HTMLS CSS EJS SCSS</span>
                <span>REST Jinja</span>
              </div>

            </div>
            <div className='block_list'>

              <div className='block'>
                <div className='blockname'>Tools </div>
                <span>VSCode Neovim Linux</span>
                <span>Figma XFCE Arch</span>
                <span>Git Font Awesome</span>
              </div>

              <div className='block'>
                <div className='blockname'>Frameworks</div>
                <span>React Vue</span>
                <span>Disnake Discord.js</span>
                <span>Flask Express.js</span>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
}