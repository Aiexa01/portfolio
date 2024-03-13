
import './Footer.css'
export function Footer(){
    return(
        <footer>
        <div className='name_media'>
          <div className='name_description'>
            <div className='logo_name_footer'> 
              <img src="./images/union.svg"/>
              <span> Marlene</span>
              <span>marjeru_1@hotmail.com</span>

            </div>
            <div className='description_footer'>
              <span>Web designer and front-end developer</span>
              </div>
          </div>
          <div className='media'> 
            <div className='media_title'>
              Media
            </div>
            <div className='icons_footer'>
              <img src="./images/Github.svg"/>
              <img src="./images/Figma.svg"/>
              <img src="./images/Discord.svg"/>
            </div>

          </div>
        </div>
        <div className='copyright centrar'> 
          © Copyright 2024. Made by Marlene
        </div>
      </footer>
    )
}