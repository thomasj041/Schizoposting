class Script {
    constructor() {
        setInterval(() => {
            this.spawnEyes();
            console.log("spawning eyes");
        }, ((Math.random() * 3000) + 1000));
    }
    spawnEyes() {
        const eyeBox = document.createElement('div');
        eyeBox.style.position = 'absolute';
        eyeBox.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
        eyeBox.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        const link = document.createElement('a');
        link.href = 'webpages/eyes.html';
        const eyes = document.createElement('span');
        eyes.textContent = `. .`;
        link.appendChild(eyes);
        eyeBox.appendChild(link);
        document.body.appendChild(eyeBox);

        setTimeout(() => {
            if (Math.random() >= 0.33) {
                eyes.style.color = 'black';
                setTimeout(() => {
                    eyes.style.color = 'gray';
                }, 182);
                setTimeout(() => {
                    eyeBox.remove();
                }, (Math.random() * 5000 + 1000));
            } 
            else {
                eyeBox.remove();
            }
        }, ((Math.random() * 5000 + 500)));
    }
}

window.onload = () => {
    new Script();
}