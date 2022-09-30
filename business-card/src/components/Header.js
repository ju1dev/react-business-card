import profilePic from '../assets/profile.jpg';
export default function Header() {
    return (
        <header>
            <img src={profilePic} className='profile-img' alt="Profile Image"></img>
            <h2>Juan Oliveira</h2>
            <h3>Fullstack Developer</h3>
        </header>
    )
}