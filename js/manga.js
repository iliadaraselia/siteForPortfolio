const mangInfo = [
  {
    id: "0",
    img: "../media/manga images/Elan Palatinus.jpg",
    manganame: "Elan Palatinus",
  },
  {
    id: "1",
    img: "../media/manga images/Fairy Tail.jpg",
    manganame: "Fairy Tail",
  },
  {
    id: "2",
    img: "../media/manga images/In-Spectre.jpg",
    manganame: "In/Spectre",
  },
  {
    id: "3",
    img: "../media/manga images/Investor Z.jpg",
    manganame: "Investor Z",
  },
  {
    id: "4",
    img: "../media/manga images/King's Game -- Origin.jpg",
    manganame: "King's Game: Origin",
  },
  {
    id: "5",
    img: "../media/manga images/Lofty Flower, fall for me!!.jpg",
    manganame: "Lofty Flower, fall for me!!",
  },
  {
    id: "6",
    img: "../media/manga images/May I Ask for One Final Thing .jpg",
    manganame: "May I Ask for One Final Thing?",
  },
  {
    id: "7",
    img: "../media/manga images/Restaurant to Another World.jpg",
    manganame: "Restaurant to Another World",
  },
  {
    id: "8",
    img: "../media/manga images/Tales of Wedding Rings.jpg",
    manganame: "Tales of Wedding Rings",
  },
  {
    id: "9",
    img: "../media/manga images/That Time I Got Reincarnated as a Slime.jpg",
    manganame: "That Time I Got Reincarnated as a Slime",
  },
  {
    id: "10",
    img: "../media/manga images/The Strongest Sage With the Weakest Crest.jpg",
    manganame: "The Strongest Sage With the Weakest Crest",
  },
  {
    id: "11",
    img: "../media/manga images/To Your Eternity.jpg",
    manganame: "To Your Eternity",
  },
  {
    id: "12",
    img: "../media/manga images/UQ HOLDER!.jpg",
    manganame: "UQ HOLDER!",
  },
  {
    id: "13",
    img: "",
    manganame: "",
  },
];
const mangas = document.querySelector(".mangas");

const renderMangas = () => {
  for (i = 0; i < mangInfo.length; i++) {
    if (mangInfo[i].manganame == "") {
      break;
    } else {
      mangas.innerHTML += `
         <div class="manga-item">
                <div class="img-wrap">
                  <img src="${mangInfo[i].img}" />
                </div>
                <div class="manga-owerlay">
                  <a class="link" href="">
                    <h3 class="read">read</h3>
                    <h2 class="title">${mangInfo[i].manganame}</h2>
                  </a>
                </div>
              </div>
         `;
    }
  }
};

renderMangas();
