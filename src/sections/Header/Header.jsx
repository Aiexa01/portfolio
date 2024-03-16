
import './Header.css'
export const Header=({title, subtitle, numeral, links})=>{
    return(
        <header>
            <div className='logo_name'>
              <img src='/images/Union.svg' />
              <span className='header_name'>{title}</span>
            </div>

            <div className='menu'> <a><img src='/images/menu.svg' /></a>
              <div className='a_link'>

              {links.map(function(link,i){return  <a href='' key = {i}> <span className='text_color'>{numeral}</span>{link} </a>})}
              
                <select className='option_select' name='select' defaultValue={"value2"}>
                  <option value='value1'>EN</option>
                  <option value='value2'>ES</option>
                  <option value='value3'>BR</option>
                </select>
              </div>
            </div>
            
            
      </header>
    )
}