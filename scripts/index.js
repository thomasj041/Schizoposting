class Script {
    constructor() {
        setInterval(() => {
            this.spawnEyes();
            console.log("spawning eyes");
        }, /*((Math.random() * 5000) + 1000)*/1);
    }
    spawnEyes() {
        const eyeBox = document.createElement('div');
        eyeBox.style.position = 'absolute';
        eyeBox.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
        eyeBox.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        const eyes = document.createElement('span');
        eyes.innerText = '👀';
        eyeBox.appendChild(eyes);
        document.body.appendChild(eyeBox);

        setTimeout(() => {
            eyeBox.remove();
        }, ((Math.random() * 5000)));
    }
}

window.onload = () => {
    new Script();
}