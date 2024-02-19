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