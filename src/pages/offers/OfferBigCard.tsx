// import { useState, useEffect } from "react";
// import { getAllUserOfferCard } from "../../service/apiService";
import Filter from "./filter/Filter";
import UserOfferCard from "./userOffercard/UserOfferCard";
import { UserOfferCardTypes } from "../../types/Types";
// import LoderUserOfferCard from "../../components/commen/sklitionsLoders/UserOfferCardLoder";

const OfferBigCard = () => {
  // const [userOfferCards, setUserOfferCards] = useState<UserOfferCardTypes[]>([]);
  const userOfferCards:UserOfferCardTypes[] = [{
    title: "Femme de Ménage",
    description: "36 Particuliers et 4 Professionnels",
    users: [
      {
        id: 1,
        name: "Sophia",
        rating: 4.3,
        type: "Particulier",
        online: true,
        link: "/",
        workingImages: [
          "https://i.ibb.co/6rY6zNP/Rectangle-242.png",
          "https://i.ibb.co/6rY6zNP/Rectangle-242.png"
        ]
      },
      {
        id: 2,
        name: "Michael",
        rating: 4.2,
        type: "Professional",
        online: true,
        link: "/",
        workingImages: [
          "https://i.ibb.co/6rY6zNP/Rectangle-242.png",
          "https://i.ibb.co/6rY6zNP/Rectangle-242.png"
        ]
      },
      {
        id: 3,
        name: "Emma",
        rating: 4.5,
        type: "Particulier",
        online: true,
        link: "/",
        workingImages: [
          "https://i.ibb.co/6rY6zNP/Rectangle-242.png",
          "https://i.ibb.co/6rY6zNP/Rectangle-242.png"
        ]
      },
      {
        id: 4,
        name: "John",
        rating: 4.7,
        type: "Professional",
        online: false,
        link: "/",
        workingImages: [
          "https://i.ibb.co/6rY6zNP/Rectangle-242.png",
          "https://i.ibb.co/6rY6zNP/Rectangle-242.png"
        ]
      }
    ],
  },]
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const fetchUserOfferCards = async () => {
  //     try {
  //       const userOfferCardData = await getAllUserOfferCard();
  //       setUserOfferCards(userOfferCardData);
  //     } catch (error) {
  //       setLoading(false);
  //       console.error('Error fetching user offer cards:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUserOfferCards();
  // }, []);

  
  return (
    <div className="big__box">
      <h2 className="title mb-4">Contacter des offreurs</h2>
      <div className="col-md-12 col-lg-10 mx-auto">
        <Filter />
      </div>
{      userOfferCards.map((user, index) => (
  <UserOfferCard
    key={index} // Use index as key if user.title is not unique
    title={user.title}
    description={user.description}
    users={user.users}
  />
))}
    </div>
  );
};

export default OfferBigCard;
