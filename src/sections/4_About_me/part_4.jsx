import '../comun.css'
import './part_4.css'
export function Part4(){
    return(
        <section className='part_4'>
          <div className='titles'>
            <span> <span className='text_color'>#</span>about-me</span>
            <div className='linea_horizontal'></div>
          </div>
          <div className='about_image'>
            <div className='about_description'>
              <div className='description'>
                <span>Hello, i’m Marlene!</span>
              </div>
              <div className='description'>
                <span>I’m a self-taught front-end developer based in Salta,</span>
                <span>Argentina. I can develop responsive websites from </span>
                <span>scratch and raise them into modern user-friendly web </span>
                <span>experiences.</span>
              </div>
              <div className='description'>
                <span>Transforming my creativity and knowledge into a </span>
                <span>websites has been my passion for over a year. I have </span>
                <span>been helping various clients to establish their </span>
                <span>presence online. I always strive to learn about the </span>
                <span>newest technologies and frameworks.</span>
              </div>
              <div className='card_button'>
                <button className='card_buttonb1'>Read more {'->'} </button>
              </div>
            </div>
            <div className='image'>
              <img src="/public/images/Group50.svg" />
            </div>
          </div>
        </section>
    )
}