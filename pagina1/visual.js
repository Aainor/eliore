const scenes = [
    {
        background: 'visual/scene3.jpeg',
        character: '',
        characterName: '',
        dialogue: 'Despertaste en tu cama. Una vez más, amaneciste a las 14hs. Lo sabés porque lo primero que miras al despertar es tu teléfono. Mientras mirás por la ventana al lado tuyo, te preguntás por qué no salís más seguido. Y por esas casualidades de la vida, sabiendo que no tenés nada importante que hacer, se te ocurre que podrías salir a caminar.',
        choices: [
            { text: 'Cambio mi ropa y salgo con la billetera, capaz pueda comprarme algo bonito en alguna tienda.', nextScene: 1 },
            { text: '¿Dónde estoy?', nextScene: 2 }
        ]
    },
    {
        background: 'visual/scene2.jpg',
        character: 'visual/character1.png',
        characterName: 'Alice',
        dialogue: 'Soy Alice, tu guía en esta historia.',
        choices: [
            { text: '¡Vamos a comenzar!', nextScene: 3 }
        ]
    },
    {
        background: 'visual/scene3.jpeg',
        character: '',
        characterName: '',
        dialogue: 'Estás en un mundo de fantasía, lleno de aventuras.',
        choices: [
            { text: 'Explorar', nextScene: 3 }
        ]
    }
];

let currentSceneIndex = 0;

function loadScene(sceneIndex) {
    const scene = scenes[sceneIndex];
    document.getElementById('background').src = scene.background;
    document.getElementById('character').innerHTML = scene.character ? `<img src="${scene.character}" alt="character">` : '';
    document.getElementById('character-name').textContent = scene.characterName;
    document.getElementById('dialogue-text').textContent = scene.dialogue;

    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.className = 'choice-button';
        button.onclick = () => loadScene(choice.nextScene);
        choicesContainer.appendChild(button);
    });
}

loadScene(currentSceneIndex);
