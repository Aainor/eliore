// Variables de control
let currentSceneIndex = 0; // Inicializar la escena actual
let lastDecisionScene = 0; // Guardará el índice de la última decisión tomada
let currentDialogueIndex = 0; // Controla el índice del diálogo en la escena actual

// Definir las escenas de la visual novel
const scenes = [
    {
        background: 'visual/fiesta.jpg',
        dialogues: [
            { speaker: '', text: 'Hacía tiempo que no salías de casa. La rutina es agotadora, tu vida empezó a resumirse en trabajar, comer y dormir. Nada interesante sucedía y comenzabas a sentirte depresiva, hasta que tus amigas te convencieron de salir de tu cueva. Pero la fiesta es ruidosa, demasiado para tu gusto. Tus amigas se están divirtiendo pero de pronto sientes cierta ansiedad y te alejas un poco, apoyando la espalda en la pared y viendo a tus amigas divertirse a lo lejos. Sientes una pesada necesidad de volver a casa.' },
            { speaker: '', text: 'Aburrida y agotada, decides mirar alrededor, quizás buscando una excusa para huir, cuando notas a alguien, alguien que parece estar algo fuera de lugar, observando todo desde una esquina.' },
            { speaker: '', text: 'De repente, ese alguien toma valor y se acerca, nervioso, con una sonrisa torpe.' }
        ]
    },
    {
        background: 'visual/fiesta.jpg',
        dialogues: [
            { speaker: '???', text: '...', showCharacter: false},
            { speaker: 'Angie', text: '...' },
            { speaker: '???', text: '...', showCharacter: false},
            { speaker: 'Angie', text: '...' },
            { speaker: '???', text: '¿Conocés The Legend of Zelda?', showCharacter: false},
            { speaker: 'Angie', text: '...' },
        ]
    },
    {
        background: 'visual/fiesta.jpg',
        dialogues: [
            { speaker: '???', text: '¡Es buenísimo! Mi parte favorita es tocar la ocarina. Es como si pudieras controlar el mundo con la música.', showCharacter: false},
            { speaker: 'Angie', text: '...' },
            { speaker: '', text: '¿y esta random?' },
            { speaker: '???', text: 'De hecho, en Ocarina of Time, hay un personaje llamado Bongo Bongo, que es un jefe del juego. Pero lo curioso es que el diseño de Bongo Bongo fue inspirado en una broma de los desarrolladores.', showCharacter: false},
            { speaker: '???', text: 'Es como una mezcla de manos y un ojo flotante. Y, en realidad, la inspiración para su apariencia vino de una reunión en la que alguien estaba jugando con un globo de los ojos que se movían.', showCharacter: false},
            { speaker: 'Angie', text: '...' },
            { speaker: '???', text: 'Rarísimo, ¿no? Y también, según dicen, el nombre "Bongo Bongo" fue elegido porque sonaba tonto y no tenía un significado real.', showCharacter: false},
            { speaker: 'Angie', text: '...' },
            { speaker: '???', text: 'C... Capaz no te gusta Zelda. O no lo conoces.', showCharacter: false},
        ],
        choices: [
            { text: '...', nextScene: 3 }, // Neutral Ending 1
            { text: 'Está bien. No soy muy fan de eso, pero conozco el juego, y supongo que es un buen dato curioso.', nextScene: 5 }, // Continúa la historia
            { text: '¿Qué te hace pensar que todo esto me interesa en lo absoluto?', nextScene: 4 } // Bad Ending 1
        ]
    },
    {
        background: 'visual/fiesta.jpg',
        character: 'visual/orif2.png',
        dialogues: [
            { speaker: '???', text: 'Disculpá. Creo que hablé demasiado, mejor te dejo en paz.' },
            { speaker: '', text: 'Pero antes de que llegaras a disculparte, la desconocida se fue apurada, mezclándose entre la gente de la fiesta y desapareciendo de tu vida. No entendiste muy bien qué acaba de pasar, pero aún así te preguntas qué hubiera pasado si continuabas la conversación.' }
        ],
        endingType: 'Neutral Ending', // Neutral Ending 1
        choices: null // No hay más elecciones
    },
    {
        background: 'visual/fiesta.jpg',
        character: 'visual/orif9.png',
        dialogues: [
            { speaker: '???', text: '... Perdón... Solamente intentaba hablarte...' },
            { speaker: '', text: 'Se va corriendo, desapareciendo entre la gente. Ni siquiera intentás seguirla. Es una rarita. Aunque, no sabés bien por qué, pero te sentís un poco culpable. Podrías haber sido más amable.' }
        ],
        endingType: 'Bad Ending', // Bad Ending 1
        choices: null // No hay más elecciones
    },
    {
        background: 'visual/fiesta.jpg',
        character: 'visual/orif4.png',
        dialogues: [
            { speaker: 'Angie', text: 'Está bien. No soy muy fan de eso, pero es un buen dato curioso.' },
            { speaker: '???', text: '¿En serio? En realidad estaba buscando excusas para hablarte. No estoy acostumbrada a esto.' },
            { speaker: 'Angie', text: 'No te preocupes, es... un poco tierno en realidad.' }
        ]
    },
    {
        background: 'visual/fiesta.jpg',
        character: 'visual/orif1.png',
        dialogues: [
            { speaker: '???', text: '¿De verdad pensás eso? Tenía miedo de espantarte, soy malísima para iniciar conversación.' },
            { speaker: 'Angie', text: 'No, para nada. De hecho, todo esto fue refrescante... aunque no voy a negar que un poco extraño. Pero lo necesitaba.' }
        ]
    },
    {
        background: 'visual/fiesta.jpg',
        character: 'visual/orif4.png',
        dialogues: [
            { speaker: '???', text: 'Me alegra ser de ayuda. ¿Sabés? Acabo de darme cuenta de que hablé un montón y no pregunté ni tu nombre. ¿Cómo te llamás?' }
        ]
    },
    {
        background: 'visual/fiesta.jpg',
        character: 'visual/orif3.png',
        dialogues: [
            { speaker: 'Angie', text: 'Angie. Es un gusto... Ehh...' },
            { speaker: 'Ori', text: 'Oriana. El placer es mío.' }
        ],
        choices: [
            { text: 'Bueno, creo que se hizo tarde ya. Debería volver a mi casa.', nextScene: 9 }, // Neutral Ending 1
            { text: 'Perdón Ori, pero tengo que volver con mis amigas. Nos vemos.', nextScene: 10 }, // Continúa la historia
            { text: '¿Querés que salgamos de acá? Hay demasiado ruido.', nextScene: 11 } // Bad Ending 1
        ]
    },
];

// Cargar la escena actual
function loadScene(sceneIndex) {
    currentSceneIndex = sceneIndex;
    currentDialogueIndex = 0; // Reiniciar el índice del diálogo

    const scene = scenes[sceneIndex];

    // Actualizar el fondo de la escena
    document.getElementById('background').src = scene.background;

    // Mostrar el primer diálogo
    loadDialogue();
}

// Cargar el diálogo actual y actualizar el personaje que habla
function loadDialogue() {
    const scene = scenes[currentSceneIndex];

    if (currentDialogueIndex < scene.dialogues.length) {
        const dialogue = scene.dialogues[currentDialogueIndex];
        document.getElementById('dialogue-text').textContent = dialogue.text;

        // Cambiar el personaje que habla y si debe mostrarse imagen
        if (dialogue.speaker === 'Ori' || dialogue.speaker === '???') {
            if (scene.character) {
                // Si la escena tiene una imagen de personaje especificada, usarla
                document.getElementById('character').innerHTML = `<img src="${scene.character}" alt="Ori">`;
            } else if (dialogue.showCharacter !== false) {
                // Mostrar la imagen de Ori solo si 'showCharacter' no está en false
                document.getElementById('character').innerHTML = `<img src="visual/orif1.png" alt="Ori">`;
            } else {
                // No mostrar imagen de Ori
                document.getElementById('character').innerHTML = '';
            }
        } else {
            // Para otros personajes o casos donde no se especifique una imagen
            document.getElementById('character').innerHTML = '';
        }
        
        // Establecer el nombre del personaje en el texto según el valor de 'dialogue.speaker'
        document.getElementById('character-name').textContent = dialogue.speaker;

        currentDialogueIndex++;
        document.getElementById('next-dialogue-button').style.display = 'block'; // Mostrar el botón de siguiente diálogo
        document.getElementById('choices-container').innerHTML = ''; // Limpiar las elecciones
    } else {
        // Cuando se acaben los diálogos, mostrar las opciones
        loadChoices(scene);
    }
}

// Cargar las opciones de la escena o mostrar el final
function loadChoices(scene) {
    const choicesContainer = document.getElementById('choices-container');
    document.getElementById('next-dialogue-button').style.display = 'none'; // Ocultar el botón de "Siguiente"
    choicesContainer.innerHTML = '';

    if (scene.endingType) {
        // Mostrar pantalla de final (Neutral o Bad)
        showEndingScreen(scene.endingType);
    } else if (scene.choices) {
        // Si hay elecciones, es un punto de decisión
        lastDecisionScene = currentSceneIndex; // Guardamos esta escena como la última toma de decisión
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.textContent = choice.text;
            button.className = 'choice-button';
            button.onclick = () => loadScene(choice.nextScene);
            choicesContainer.appendChild(button);
        });
    } else {
        // Si no hay elecciones, simplemente pasar a la siguiente escena
        if (currentSceneIndex + 1 < scenes.length) {
            loadScene(currentSceneIndex + 1); // Pasar a la siguiente escena si hay más
        } else {
            // Si no hay más escenas, mostrar pantalla de final
            showEndingScreen('Final del Juego');
        }
    }
}



// Mostrar pantalla de final (Neutral o Bad Ending)
function showEndingScreen(endingType) {
    const choicesContainer = document.getElementById('choices-container');
    document.getElementById('dialogue-text').textContent = `${endingType}`;
    document.getElementById('character').innerHTML = ''; // Limpiar imagen del personaje
    document.getElementById('character-name').textContent = ''; // Limpiar nombre del personaje

    // Mostrar botones de volver a la última decisión o reiniciar
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Volver a la última decisión.';
    restartButton.className = 'choice-button';
    restartButton.onclick = () => loadScene(lastDecisionScene);
    choicesContainer.appendChild(restartButton);

    const startOverButton = document.createElement('button');
    startOverButton.textContent = 'Reiniciar juego.';
    startOverButton.className = 'choice-button';
    startOverButton.onclick = () => loadScene(0);
    choicesContainer.appendChild(startOverButton);
}

// Iniciar el juego cargando la primera escena
loadScene(currentSceneIndex);
