function isImageValid(str) {
  try {
    const newUrl = new URL(str);
    return newUrl.protocol === "http:" || newUrl.protocol === "https:";
  } catch (err) {
    return false;
  }
}

window.resizeTo(432, 432);

const button = document.getElementById("hitButton");
const filebutton = document.getElementById("fileButton");
const imageURL = document.getElementById("imageURL");

function loadImage(url) {
    const imageOBJ = document.createElement("img");
    imageOBJ.src = url;
    imageOBJ.onload = () => {
      document.body.style.setProperty("--Background", "#00000000");
      document.body.style.setProperty("--TextColor", "#00000000");
      document.body.style.setProperty("--TextColorINV", "#00000000");
      document.body.style.setProperty("--button1", "#00000000");
      document.body.style.setProperty("--button2", "#00000000");
      document.body.style.setProperty("--textBox1", "#00000000");
      document.body.style.setProperty("--textBox2", "#00000000");
      document.body.style.setProperty("--textBox3", "#00000000");
      window.resizeTo(
        Math.min(imageOBJ.width, window.upperScreenWidth),
        Math.min(imageOBJ.height, window.upperScreenHeight)
      );
      document.body.appendChild(imageOBJ);
      document.title = url;

      let myCoolEvent = null;

      myCoolEvent = addEventListener("keypress", (event) => {
        console.log(event.key);
        if (event.key == "`") {
          removeEventListener("keypress", myCoolEvent);
          document.body.removeChild(imageOBJ);
          window.resizeTo(400, 400);
          document.body.style.setProperty("--Background", "#020209");
          document.body.style.setProperty("--TextColor", "rgb(213, 213, 224");
          document.body.style.setProperty("--TextColorINV", "rgb(100,100,120)");
          document.body.style.setProperty("--button1", "rgb(119, 14, 119)");
          document.body.style.setProperty("--button2", "rgb(161, 13, 161)");
          document.body.style.setProperty("--textBox1", "#1a1a27");
          document.body.style.setProperty("--textBox2", "#2e1c14");
          document.body.style.setProperty("--textBox3", "#191922");
        }
      });
    };
}

button.onclick = () => {
  if (isImageValid(imageURL.value)) {
    loadImage();
  }
};

//Cheap quick method of loading files
const fileInput = document.createElement("input");
fileInput.type = "file";
const fileReader = new FileReader();
fileReader.onload = () => {
    loadImage(fileReader.result);
}

fileInput.onchange = () => {
    fileReader.readAsDataURL(fileInput.files[0]);
}

filebutton.onclick = () => { fileInput.click(); }