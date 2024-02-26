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
export type User =  {
    name: string;
    rating: number;
    type: string;
    online: boolean;
    link: string;
    worKingimges:string[];
  }

export interface UserOfferCardProps {
    title: string;
    description: string;
    users:User[];
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