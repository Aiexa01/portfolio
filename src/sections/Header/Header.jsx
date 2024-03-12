import '../comun.css'
import './Header.css'

export function Header(){
    return(
        <header>
            <div className='logo_name'>
              <img src='/public/images/Union.svg' />
              <span className='header_name'>Marlene</span>
            </div>
            <div className='a_link'>
              <a href=''> <span className='text_color'>#</span>home</a>
              <a href=''><span className='text_color'>#</span>works</a>
              <a href=''><span className='text_color'>#</span>about-me</a>
              <a href=''><span className='text_color'>#</span>contacts</a>
              <select className='option_select' name='select' defaultValue={"value2"}>
                <option value='value1'>EN</option>
                <option value='value2'>ES</option>
                <option value='value3'>BR</option>
              </select>
            </div>

      </header>
    )
}