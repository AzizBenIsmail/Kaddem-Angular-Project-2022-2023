import { Etudiant } from './Etudiant';
import { Reponse } from "./Reponse";
export class Thread {
  id: number;
  question: String;
  nb_likes: number = 0;
  postDate: Date;
  display: boolean;
  object: String;
  etudiant: Etudiant;
  verified: boolean = false;
  updatedAt: Date;
}
