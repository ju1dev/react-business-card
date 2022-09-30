import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai'
export default function Footer() {
    return (
        <footer>
            <a href='https://github.com/ju1dev'><AiFillGithub className='icon' size='40px'/></a>
            <a href='https://www.linkedin.com/in/juan-oliveira-76a348222/'><AiFillLinkedin size='40px'></AiFillLinkedin></a>
        </footer>
    )
}