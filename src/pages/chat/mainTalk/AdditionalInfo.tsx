// import { FC, useEffect, useState } from 'react';
import FichesCart from '../cartsChat/FichesCart';
import ImgestCart from '../cartsChat/ImgestCart';
import InformationsCart from '../cartsChat/InformationsCart';
import PinnedItemsCart from '../cartsChat/PinnedItemsCart';
import arrowDownIcon from '../../../assets/Vector (1).png';
import MassgesCard from '../ui/MassgesCard';
// import { getUserById } from '../../../service/apiService';
// import { User } from '../../../types/Types';
import { MassgesContext } from '../../../context/MassgesContext';
// import LodingPopup from '../../../components/commen/popUps/popupLoding/LodingPopup';
import { users } from '../../../data/Users';
import { FC } from 'react';
// import { User } from '../../../types/Types';

const AdditionalInfo: FC = () => {
  const { SelectedUser } = MassgesContext();
  const imagesData = [
    { name: 'loding.page.zip', url: '...' },
    { name: 'another.file.zip', url: '...' },
  ];

  // const [userProfile, setUserProfile] = useState<User | null>(users[SelectedUser]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       setLoading(true);
  //       const userData = await getUserById(SelectedUser);
  //       setUserProfile(userData);
  //       console.log(userData.demandesRepondues);
        
  //       setLoading(false); // Move setLoading(false) inside the try block
  //     } catch (error) {
  //       setError('Error fetching user profile.');
  //       setLoading(false); // Also set loading to false in case of an error
  //     }
  //   };

  //   fetchUserProfile();
  // }, [SelectedUser]);
  
  // // Return loading popup if still loading
  // if (loading) {
    //   return <LodingPopup />;
    // }
    
    // // Return an error message if an error occurred
    // if (error) {
      //   return <div>Error: {error}</div>;
      // }
      
      // Return the MassgesCard if userProfile is available

  const userProfile = users[SelectedUser];
  console.log(userProfile.name);
  
  if (userProfile) {
    return (
      <>
        <MassgesCard userImg={userProfile.user_img} userName={userProfile.name} userType={userProfile.category}
         id={userProfile.id} rating={userProfile.rating} />
        <div className='d-grid mt-3' style={{ gap: '2rem' }}>
          <ImgestCart title={'Images'} icon={arrowDownIcon} data={imagesData} />
          <InformationsCart />
          <FichesCart />
          <PinnedItemsCart />
        </div>
      </>
    );
  }

  // Return null or another default component if none of the conditions are met
  return null;
};

export default AdditionalInfo;
