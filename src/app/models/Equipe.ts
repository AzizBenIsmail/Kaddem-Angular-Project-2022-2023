import {DetailEquipe} from './DetailEquipe';


export class Equipe{
    idEquipe:number;
    nomEquipe:String;
    niveau:String;
    isDeleted:Boolean;
    isValid:Boolean;
    isSelected: boolean;
    isEdit: boolean;
    image:String;
    nombreMaxParticipants:number;
    detailEquipe:DetailEquipe;







}
export const EquipeColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: '',
    },
    {
        key: 'nomEquipe',
        type: 'text',
        label: 'nom Equipe',
        required: true,
    }
    ,
    {
        key: 'niveau',
        type: 'text',
        label: 'Niveau',
        required: true,
        values:['Mouna','Rouma']

    }
    ,
    {
        key: 'nombreParticipants',
        type: 'number',
        label: 'Nombre Max des Participants',
        required: true

    },
    {
        key: 'NomResponsable',
        type: 'text',
        label: 'Nom Responsable',
        required: true

    },
    {
        key: 'dateCreation',
        type: 'text',
        label: 'Date Creation',
        required: true

    },
    // {
    //     key: 'members',
    //     type: 'text',
    //     label: 'Voir Membres'
    //
    // },





    {
        key: 'isEdit',
        type: 'isEdit',
        label: 'Actions',
    }


];



