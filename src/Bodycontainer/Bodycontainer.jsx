
import { AboutMe } from './AboutMe'
import './Bodycontainer.css'
import { Contacts } from './Contacts/Contacts'
import { Presentation } from './Presentation/Presentation'
import { Projects } from './Projects/Projects'
import { Skills } from './Skills/Skills'

export function Bodycontainer(){
return(
    <div className='body-container'>
            <Presentation></Presentation>
            <Projects></Projects>
            <Skills></Skills>
            <AboutMe></AboutMe>
            <Contacts></Contacts>
    </div>
)
}