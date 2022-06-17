// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.


// Creo la lista dei membri del team in un array di oggetti
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


// Invoco la funzione drawAllObjectsArray() per stampare nelle card html la lista dei membri del team 
drawAllObjectsArray(teamMembers);


// Stampo la card di un nuovo membro del team dopo aver raccolto i dati dall'apposito form
    // Seleziono gli elementi del form
    const formName = document.getElementById('name');
    const formRole = document.getElementById('role');
    const formImage = document.getElementById('image');

    // Al click del bottone 'Add' del form stampo la card del nuovo membro
        // Seleziono il bottone 'Add' e invoco la funzione addNewMember() quando viene cliccato
        const addMemberButton = document.getElementById('addMemberButton');
        addMemberButton.addEventListener('click', addNewMember); 

    // Con i dati raccolti dal form, genero un nuovo oggetto nella lista dei membri del team.
    // Il nuovo oggetto verrà stampato invocando la funzione drawSingleObject()
    function addNewMember() {
        // Creo un nuovo oggetto con i dati del form
        const newMember = {
            name: formName.value,
            role: formRole.value,
            image: formImage.value
        }
        // Pusho il nuovo oggetto nell'array 'teamMembers'
        teamMembers.push(newMember);

        // Stampo il nuovo oggetto tramite la funzione drawSingleObject()
        drawSingleObject(newMember);
    }


// ----------------------------------------------------------------------------------------
//                                      FUNCTIONS
// ----------------------------------------------------------------------------------------


// Scorre tutti gli oggetti dell'array che gli passo e per ognuno invoca una funzione che li andrà a stampare in html
function drawAllObjectsArray(AllObjectsArray) {

    // - Ciclo For - Per ogni oggetto:
    for (let i = 0; i < AllObjectsArray.length; i++) {
    const thisObject = AllObjectsArray[i];
    
    // - Invoco la funzione drawSingleObject() che stampa l'oggetto che gli passo, nell'elemento .team-container
    drawSingleObject(thisObject);
    }
}


// Stampa in un elemento html l'oggetto che gli viene passato
function drawSingleObject(singleObject) {

    // Crea l'elemento .team-card nell'elemento .team-container
    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src="img/${singleObject.image}"alt="${singleObject.name}"/>
        </div>
        <div class="card-text">
            <h3>${singleObject.name}</h3>
            <p>${singleObject.role}</p>
        </div>
    </div>
    `;
}

// ------------------------------- FUNCTIONS END --------------------------------------------------------------

