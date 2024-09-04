import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import EditProfileForm from "./EditProfileForm";
import EditLinksForm from "./EditLinksForm";

const Profile: React.FC = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState<boolean>(false);
  const [isEditLinksOpen, setIsEditLinksOpen] = useState<boolean>(false);

  const [profile, setProfile] = useState({
    fullName: "Kim Jung-Woo",
    title: "IT Professional",
    slogan: "Innovate and Inspire",
    email: "kim.jungwoo@example.com",
    birthday: "1992-05-15",
    country: "Korea",
    state: "Seoul",
    postalCode: "123-456",
    phoneNumber: "+82 10-1234-5678",
  });

  const [links, setLinks] = useState({
    facebook: "",
    twitter: "",
    blogger: "",
    google: "",
    linkedin: "",
    website: "",
  });

  const toggleEditProfile = () => {
    setIsEditProfileOpen(!isEditProfileOpen);
  };

  const toggleEditLinks = () => {
    setIsEditLinksOpen(!isEditLinksOpen);
  };

  const handleSaveProfile = (updatedProfile: typeof profile) => {
    setProfile(updatedProfile);
  };

  const handleSaveLinks = (updatedLinks: typeof links) => {
    setLinks(updatedLinks);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100"> {/* Flex container untuk memusatkan */}
      <div className="p-6 bg-white shadow-md rounded-md w-full max-w-lg"> {/* Mengatur lebar maksimal dan padding */}
        <ProfileInfo 
          profile={profile} 
          links={links} // Tambahkan ini untuk memperbaiki error
          onEditProfile={toggleEditProfile} 
          onEditLinks={toggleEditLinks} 
        />
        {isEditProfileOpen && <EditProfileForm profile={profile} onSave={handleSaveProfile} />}
        {isEditLinksOpen && <EditLinksForm links={links} onSave={handleSaveLinks} />}
      </div>
    </div>
  );
};

export default Profile;
