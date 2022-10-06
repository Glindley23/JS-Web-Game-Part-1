const newImage = (source, left, bottom) => {
    let sprite = document.createElement('img');
    sprite.src = source;
    sprite.style.position = 'fixed';
    sprite.style.left = left;
    sprite.style.bottom = bottom;
    document.body.append(sprite);
};


newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

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

newImage('assets/grass.png', '0px', '0px');
newImage('assets/sky.png', '0px', window.innerHeight);
