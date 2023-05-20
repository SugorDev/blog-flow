import './profile-style.css';
import Navbar from "../sub-components/Navbar";


export default function UserProfile(){
    const userData = {
            'profile-pic' : 'https://cdn.discordapp.com/attachments/773993070373896284/1079458247003623535/received_535769868498611.jpg',
        }
    return (
        <>
            <Navbar />
            <div className="profile-section d-flex justify-content-center align-items-center flex-column">
                <h1>Profile</h1>
                <div className='profile-header d-flex justify-content-center align-items-center'>
                    <div className='user-display d-flex justify-content-center align-items-center flex-column'>
                        <div className='user-pic' style={{'backgroundImage': `url(${userData['profile-pic']})`}}></div>
                        <p className='user-name'>Your Name</p>
                    </div>
                    <div className='user-bio'>
                        Hi there! I'm [Your Name], a passionate blogger and storyteller with a love for sharing inspiring content with the world. I believe that every person has a unique story to tell, and through my blog, I aim to create a space where those stories can be celebrated.
                    </div>
                </div>
            </div>
        </>
    );
}