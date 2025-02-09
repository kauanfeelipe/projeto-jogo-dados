function rolarDado() {
    const dado = document.getElementById("dado");
    const faces = [
        'https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg',
        'https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg'
    ];
    const numero = Math.floor(Math.random() * 6);
    dado.style.transform = `rotate(${Math.random() * 720}deg)`;
    setTimeout(() => {
        dado.style.backgroundImage = `url(${faces[numero]})`;
    }, 1000);
}