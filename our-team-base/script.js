// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.


// Creo l'array di oggetti
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        picture: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: 'barbara-ramos-graphic-designer.jpg'
    }
];

// Seleziono l'elemento html .team-container in cui creerò le card dei membri
const teamContainer = document.querySelector('.team-container');

// Stampo dinamicamente una card per ogni membro del team
// - Scorro gli oggetti dell'array con un ciclo for
// - - Per ogni oggetto:
for (let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];

    // Creo elemento .team-card nell'elemento .team-container
    teamContainer.innerHTML += `<div class="team-card">
                                    <div class="card-image">
                                        <img src="img/${thisMember.picture}"alt="${thisMember.name}"/>
                                    </div>
                                    <div class="card-text">
                                        <h3>${thisMember.name}</h3>
                                        <p>${thisMember.role}</p>
                                    </div>
                                </div>`;
}