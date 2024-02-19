import { User } from "../../types/Types";
import Filter from "./filter/Filter"
import UserOfferCard from "./userOffercard/UserOfferCard"

const OfferBigCard = () => {
  const users: User[] = [
    {
        name: 'Sophia',
        rating: 4.3,
        type: 'Particulier',
      online: true,
      link: '/',
      worKingimges:[],
    },
  ];
  
  return (
    <div className="big__box">
        <h2 className="titel mb-4">Contacter des offreurs</h2>
        <div className="col-md-12 col-lg-10  mx-auto">
        <Filter />
        </div>
        <UserOfferCard title={"Femme de Ménage"} 
        description={"36 Particuliers et 4 Professionnels"} users={users} />
        <UserOfferCard title={"Bricolage - Petits travaux"}
         description={"36 Particuliers et 4 Professionnels"} users={users} />
        <UserOfferCard title={"Dépannage électroménager"} 
        description={"36 Particuliers et 4 Professionnels"} users={users} />
    </div>
  )
}

export default OfferBigCard