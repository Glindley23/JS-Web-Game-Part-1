

const newImage = (source, left, bottom) => {
    let sprite = document.createElement('img');
    sprite.src = source;
    sprite.style.position = 'fixed';
    sprite.style.left = left + 'px';
    sprite.style.bottom = bottom + 'px';
    document.body.append(sprite);
};

for (let i = 0; i < window.innerWidth; i+= 100) {
    newImage('assets/grass.png', i, 0);
    newImage('assets/grass.png', i, 100);
    newImage('assets/grass.png', i, 200);
    newImage('assets/grass.png', i, 300);
    newImage('assets/grass.png', i, 400);
}

for (let i = 0; i < window.innerWidth; i+= 100) {
    newImage('assets/sky.png', i, 500);
    newImage('assets/sky.png', i, 600);
    newImage('assets/sky.png', i, 700);
} 
newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

const newItem = (source, left, bottom) => {
    let item = document.createElement('img');
    item.src = source;
    item.style.position = 'fixed';
    item.style.left = left;
    item.style.bottom = bottom;
    document.body.append(item);
    item.addEventListener('dblclick', function() {
        item.remove();
    });
    };

newItem('assets/sword.png', '500px', '405px');
newItem('assets/shield.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');



