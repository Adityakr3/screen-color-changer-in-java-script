function randomRGB() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var Color = "rgb(" + x + "," + y + "," + z + ")";  
    document.body.style.backgroundColor = Color;
  }
  randomRGB();
  
