import React from 'react';
import profilePic from '../assets/DSC_0918.JPG';// adjust the path as needed

function ProfileImage() {
  return (
    <div className="profile-container">
      <img 
        src={profilePic}
        alt="Profile"
        className="profile-image"
      />
    </div>
  );
}

export default ProfileImage;
