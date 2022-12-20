/*@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="idDetailEquipe")
private long idDetailEquipe;

@Column(name="salle")
private String salle;
@Column(name = "thematique")
private String thematique;
@Temporal(TemporalType.TIMESTAMP)
private Date dateCreation;
@Temporal(TemporalType.TIMESTAMP)
private Date dateActivation;
@Temporal(TemporalType.TIMESTAMP)
private Date dateSuppression;
@Column(name="nombreParticipants")
private Integer nombreParticipants;
@Column(name="nombreImages")
private Integer nombreImages;*/


export class DetailEquipe{
    idDetailEquipe:number;
    salle:String;
    thematique:String;
    dateCreation:Date;
    dateActivation:Date;
    nombreParticipants: number;
    nombreImages: number;




}
export const EquipeColumns = [
    {
        key: 'isSelected',
        type: 'isSelected',
        label: '',
    },
    {
        key: 'salle',
        type: 'text',
        label: 'salle',
        required: true,
    }
    ,
    {
        key: 'thematique',
        type: 'text',
        label: 'thematique',
        required: true,
    }
    ,
    {
        key: 'nombreMaxParticipants',
        type: 'text',
        label: 'nombreMaxParticipants',
        required: true,
    }
    ,
    {
        key: 'image',
        type: 'text',
        label: 'image',
        required: true,
    }
    ,


    {
        key: 'isEdit',
        type: 'isEdit',
        label: '',
    }
];
