
import '../comun.css'
import './Bodycontainer.css'
import { Presentation} from './sections/Presentation'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { About_me } from './sections/About_me'
import { Contacts } from './sections/Contacts'

export function Bodycontainer(){
return(
    <div className='body-container'>
            <Presentation></Presentation>
            <Projects></Projects>
            <Skills></Skills>
            <About_me></About_me>
            <Contacts></Contacts>
    </div>
)
}