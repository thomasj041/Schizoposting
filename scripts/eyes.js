class Script {
    constructor() {
        this.rgb1 = { r: 0, rTarget: 255, g: 0, gTarget: 255, b: 0, bTarget: 255 };
        this.rgb2 = { r: 0, rTarget: 255, g: 0, gTarget: 255, b: 0, bTarget: 255 };
        this.rgb3 = { r: 0, rTarget: 255, g: 0, gTarget: 255, b: 0, bTarget: 255 };
        this.angle = { current: 0, target: 360 };
        this.percentages = [
            { current: 0, target: Math.floor(Math.random() * 101) },
            { current: 0, target: Math.floor(Math.random() * 101) },
            { current: 0, target: Math.floor(Math.random() * 101) }
        ];
        setInterval(() => {
            this.rgb1 = this.setNewColor(this.rgb1);
            this.rgb2 = this.setNewColor(this.rgb2);
            this.rgb3 = this.setNewColor(this.rgb3);
            this.angle = this.setNewAngle(this.angle);
            this.percentages = this.setNewPercentages(this.percentages);
            this.tick();
        }, 40);
    }
    tick() {
        const background = document.getElementById("background");
        background.style.background = `
        repeating-radial-gradient(
            circle at center,
            rgba(${this.rgb3.r},${this.rgb3.g},${this.rgb3.b},0.05) 0px,
            rgba(${this.rgb3.r},${this.rgb3.g},${this.rgb3.b},0.05) 2px,
            transparent 2px,
            transparent 20px
        ),
        linear-gradient(
            ${this.angle.current}deg, 
            rgba(${this.rgb2.r},${this.rgb2.g},${this.rgb2.b},0.33) ${this.percentages[0].current}%, 
            rgba(${(this.rgb2.r + 80) % 256},${(this.rgb2.g + 80) % 256},${(this.rgb2.b + 80) % 256},0.33) ${this.percentages[1].current}%, 
            rgba(${(this.rgb2.r + 160) % 256},${(this.rgb2.g + 160) % 256},${(this.rgb2.b + 160) % 256},0.33) ${this.percentages[2].current}%
        ),
        radial-gradient(circle farthest-side at center, rgb(${this.rgb1.r},${this.rgb1.g},${this.rgb1.b}), black 100%)`;
    }   
    setNewColor(rgb) {
        if (rgb.r < rgb.rTarget) rgb.r++;
        else if (rgb.r > rgb.rTarget) rgb.r--;
        else rgb.rTarget = Math.floor(Math.random() * 256);
        if (rgb.g < rgb.gTarget) rgb.g++;
        else if (rgb.g > rgb.gTarget) rgb.g--;
        else rgb.gTarget = Math.floor(Math.random() * 256);
        if (rgb.b < rgb.bTarget) rgb.b++;
        else if (rgb.b > rgb.bTarget) rgb.b--;
        else rgb.bTarget = Math.floor(Math.random() * 256);
        return rgb;
    }
    setNewAngle(angle) {
        if (angle.current < angle.target) angle.current++;
        else if (angle.current > angle.target) angle.current--;
        else angle.target = Math.floor(Math.random() * 361);
        return angle;
    }
    setNewPercentages(percentages) {
        percentages.forEach(p => {
            if (p.current < p.target) p.current++;
            else if (p.current > p.target) p.current--;
            else p.target = Math.floor(Math.random() * 101);
        });
        return percentages;
    }
}

window.onload = () => {
    new Script();
}