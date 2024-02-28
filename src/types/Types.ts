export type reviweCard = {
    id:number;
    userImg:string;
    userName:string;
    userRate:number;
    reviweDiscrption:string;
    reviewPubliched:string;
}
export type carsoulCard = {
    id:number;
    userImg:string;
    userName:string;
    userJob:string;
    userTages:string[];
}


  export type TypePropsBigRequest = {
    id: number;
    userName: string;
    userLocation: string;
    requestImageSrc: string;
    requestDescription: string;
    requestPublishedTime: string;
    userImageSrc: string;
  }
  
  export type TypePropsReview = {
    id: number;
    userName: string;
    userType: string;
    userRate: number;
    userImageSrc: string;
    reviewDescription: string;
    reviewPublishedTime: string;
    isActive: boolean;
  }

  export type UserPostProps =  {
    id:number;
    userName: string;
    postTime: string;
    userImagePost: string;
    userLocation: string;
    postImage: string[];
    postDescription: string;
  }

  export type UserFavorisProfileProps = {
    id:number;
    userName: string;
    userType: string;
    userLocation: string;
    userImage: string;
  }

  export type UserOfferUser = {
    id: number;
    name: string;
    rating: number;
    type: "Particulier" | "Professional";
    online: boolean;
    link: string;
    workingImages: string[];
  };

  export type UserOfferCardTypes = {
    title: string;
    description: string;
    users: UserOfferUser[];
  };
  export type DemandItem = {
    title: string;
    responses: number;
    buttons: string[];
  };

  export interface ProfileCardProps {
      user_img: string;
      name: string;
      rating: string;
      category: string;
      location: string;
      city: string;
      memberSince: string;
      avgResponseTime: string;
      presentation: string,
      demandesRepondues:DemandItem[],
      certifications: string[]
  }

  export type interpriceInputForm =  {
    nomCommercial:string ,
    metier:string,
    nom:string,
    prenom:string,
    adressePostale:string,
    numeroTelephone:string,
    email:string,
  }

  export type PritaclerType =  {
    nom:string,
    prenom:string,
    adressePostale:string,
    numeroTelephone:string,
    email:string,
  }

  export type associationType =  {
    association_nom:string,
    adressePostale:string,
    numeroTelephone:string,
    email:string,
  }