
import'./Presentation.css'
export function Presentation() {
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
                <img src='/images/Group 46.svg' />
            </div>
            <div className='rectangle_text'>
                <img src='/images/Rectangle 27.svg' className='rectangle_1' />
                <div className='subtitle_2'> 
                    <span>Currently working on </span>
                    <span className='colorwhite'> Portfolio</span>
                </div>
            </div>
        </div>
    </section>
        <section className='phrase1'>

            <div className="title-text1">
                <img src='/images/comillas.svg' className='comillas_1' />
                <span>With great power comes great electricity bill </span>
                <img src='/images/comillas.svg' className='comillas_2' />
            </div>

            <div className="title-text2">
                <span>-Dr. Who</span>
            </div>
        </section>
    </>


    )
}
