
import './Contacts.css'
export function Contacts(){
    return(
        <section className='part_5'>
          <div className='titles'>
            <span> <span className='text_color'>#</span>contacts</span>
            <div className='linea_horizontal'></div>
          </div>
          <div className='info_contact'>

            <div className='description'>
              <span> I’m interested in freelance opportunities. However, </span>
              <span>if you have other request or question, don’t </span>
              <span>hesitate to contact me</span>
            </div>
            <div className='contact'>
              <div className='contact_title'>Message me here</div>
              <div className='contact_list center'>
                <div className='img_contact'>
                  <img src="/images/Discord.svg" />
                  <span> !Marlene</span>
                </div>
                <div className='img_contact'>
                  <img src="/Vector.svg" />
                  <span>marjeru@</span>
                </div>
              </div>

            </div>
          </div>
        </section>
    )
}