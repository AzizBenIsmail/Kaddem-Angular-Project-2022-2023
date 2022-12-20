import { Etudiant } from 'app/models/Etudiant';
import { Thread } from './Thread';
export class Reponse{
id:number;
reply:String;
replydate:Date;
display: boolean;
nb_likes:number;
thread:Thread;
updatedAt:Date;
etudiant:Etudiant;
}