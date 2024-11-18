// src/components/Profile.js

import '../../App.css';
import profileImage from '../../images/profile.jpeg'; // 이미지 경로에 맞게 import

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-image">
                <img src={profileImage} alt="Profile" />
            </div>
            <div className="profile-username">hyorim</div>
        </div>
    );
}

//132line