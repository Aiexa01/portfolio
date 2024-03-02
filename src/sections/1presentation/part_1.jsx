import '../comun.css'
import'./part_1.css'
export function Part1() {
    return (<>        
    <section className='part_1 '>
        <div className='presentation '>
            <div className='tittle_1 '>
                <span > Marlene is a <span className='text_color'>web designer</span> and </span>
                <span className='text_color'>front-end developer </span>
            </div>
            <div className='subtitle_1'> <span >He crafts responsive websites where technologies meet creativity</span>
            </div>

            <button className='button_contact centrar'>  <span className='button_text '>Contact me!! </span></button>
        </div>

        <div className='image_presentation'>
            <div className='image_1'>
                <img src='/public/images/Group 46.svg' />
            </div>
            <div className='rectangle_text'>
                <img src='/public/images/Rectangle 27.svg' className='rectangle_1' />
                <span className='subtitle_2'>Currently working on Portfolio</span>
            </div>
        </div>
    </section>
        <section className='phrase1'>

            <div className="title-text1">
                <img src='/public/images/comillas.svg' className='comillas_1' />
                <span>With great power comes great electricity bill </span>
                <img src='/public/images/comillas.svg' className='comillas_2' />
            </div>

            <div className="title-text2">
                <span>-Dr. Who</span>
            </div>
        </section>
    </>


    )
}
