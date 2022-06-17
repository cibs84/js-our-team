// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

// Creo l'array di oggetti
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];
console.log('teamMembers dopo la sua creazione: ', teamMembers);

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
                                        <img src="img/${thisMember.image}"alt="${thisMember.name}"/>
                                    </div>
                                    <div class="card-text">
                                        <h3>${thisMember.name}</h3>
                                        <p>${thisMember.role}</p>
                                    </div>
                                </div>`;
}

// Stampo la card di un nuovo membro del team dopo aver compilato ed inviato i dati tramite l'apposito form
// - Seleziono gli elementi del form
const formName = document.getElementById('name');
const formRole = document.getElementById('role');
const formImage = document.getElementById('image');

// Al click del bottone di invio del form stampo la card del nuovo membro
// - Seleziono il bottone di invio e ci associo una funzione anonima al click
const addMemberButton = document.getElementById('addMemberButton');

addMemberButton.addEventListener('click', addNewMember); 

function addNewMember() {
    // Creo un nuovo oggetto con i dati del form
    const newMember = {
        name: formName.value,
        role: formRole.value,
        image: formImage.value
    }
    // Pusho il nuovo oggetto nell'array teamMembers
    teamMembers.push(newMember);

    // - Creo una card per il nuovo membro del team e la stampo utilizzando i valori del form html
    teamContainer.innerHTML += `<div class="team-card">
                                    <div class="card-image">
                                        <img src="img/${newMember.image}"alt="${newMember.name}"/>
                                    </div>
                                    <div class="card-text">
                                        <h3>${newMember.name}</h3>
                                        <p>${newMember.role}</p>
                                    </div>
                                </div>`;
    console.log('teamMembers dopo il click: ', teamMembers);
}

