


  document.addEventListener("DOMContentLoaded", function() {
    const headerColors = ["hsl(110, 70%, 70%)", "hsl(130, 70%, 70%)", "hsl(150, 70%, 70%)", "hsl(170, 70%, 70%)", "hsl(190, 70%, 70%)"];
    const numbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
  
    for (let i = 0; i < 5; i++) {
      const h2Element = document.createElement('h2');
      h2Element.innerText = "rad" + (i + 1);
      h2Element.style.backgroundColor = headerColors[i];
      h2Element.style.fontSize = (i + 1) * 5 + "px";
      h2Element.style.textAlign = "center";
      document.body.appendChild(h2Element);
    }
  
    const container = document.createElement('div');
    container.style.border = '1px solid black';
    container.style.padding = '5rem';
    container.style.display = 'flex';
    container.style.justifyContent = 'space-around';
  
    for (let i = 0; i < 3; i++) {
      const smallContainer = document.createElement('div');
      smallContainer.style.backgroundColor = "violet";
      smallContainer.style.padding = '1rem';
      smallContainer.style.width = '5rem';
  
      if (i == 0) {
        for (let j = 0; j < 10; j++) {
          const h1 = document.createElement('h1');
          h1.innerText = j;
          h1.style.backgroundColor = j % 2 === 0 ? "black" : "white";
          h1.style.color = j % 2 === 0 ? "white" : "black";
          h1.style.margin = '0px';
  
          if (j === 4) {
            h1.style.backgroundColor = "";
          }
  
          smallContainer.appendChild(h1);
        }
      } else if (i === 1) {
        for (let j = 9; j >= 0; j--) {
          const h1 = document.createElement('h1');
          h1.innerText = j;
          h1.style.textAlign = 'center';
          h1.style.backgroundColor = j % 2 === 0 ? "black" : "white";
          h1.style.color = j % 2 === 0 ? "white" : "black";
          h1.style.margin = '0px';
  
          if (j === 8) {
            h1.style.backgroundColor = "";
          }
  
          smallContainer.appendChild(h1);
        }
      } else {
        for (let j = 0; j < 10; j++) {
          const h1 = document.createElement('h1');
          h1.innerText = numbers[j];
          h1.style.textAlign = 'right';
          h1.style.backgroundColor = j % 2 === 0 ? "black" : "white";
          h1.style.color = j % 2 === 0 ? "white" : "black";
          h1.style.margin = '0px';
          smallContainer.appendChild(h1);

          if (j === 5) {
            h1.style.backgroundColor = "";
          }
  
        }
      }
  
      container.appendChild(smallContainer);
    }
  
    document.body.appendChild(container);
  });
  
  





