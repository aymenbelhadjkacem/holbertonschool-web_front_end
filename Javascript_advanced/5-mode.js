function changeMode (size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main () {

  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');

  const darkmode = changeMode(12, 'bold', 'capitalize', 'black', 'white');

  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('paragraph');

  paragraph.innerText = 'Welcome Holberton!';
  document.body.appendChild(paragraph);
  const btn = document.createElement('button');
  btn.innerText = 'spooky';
  document.body.appendChild(btn);
  btn.addEventListener('click', (e) => {
    spooky();
  });
  const btn2 = document.createElement('button');
  btn2.innerText = 'Dark mode';
  document.body.appendChild(btn2);
  btn2.addEventListener('click', (e) => {
    darkmode();
  });
  const btn3 = document.createElement('button');
  btn3.innerText = 'Scream mode';
  document.body.appendChild(btn3);
  btn3.addEventListener('click', (e) => {
    screamMode();
  });
}

main();
