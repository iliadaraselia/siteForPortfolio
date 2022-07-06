const slides = [
  {
    img: "./media/slider/Attack On Titan Season 4 Final Episode Postponed!!.jpg",
    name: "Attack On Titan Season 4 Final Episode Postponed!!",
    rating: " 4.5/5 ",
  },
  {
    img: "./media/slider/Berserk Set To Return This Summer With New Manga Chapters.jpg",
    name: "Berserk Set To Return This Summer With New Manga Chapters",
    rating: "10/5",
  },
  {
    img: "./media/slider/Bleach --Thousand-Year Blood War Arc New Trailer And Key Visual Released.jpg",
    name: "Bleach --Thousand-Year Blood War Arc New Trailer And Key Visual Released",
    rating: "4.9/5",
  },
  {
    img: "./media/slider/MAPPA & Madhouse Come Together For A New Anime Project.jpg",
    name: "MAPPA & Madhouse Come Together For A New Anime Project",
    rating: "4.6/5",
  },
  {
    img: "./media/slider/One Piece Goes On Hiatus As Oda Prepares For The ‘Final Saga’.jpg",
    name: "One Piece Goes On Hiatus As Oda Prepares For The ‘Final Saga’.jpg",
    rating: "  10/5 ",
  },
];

//// main content on page
const mangInfo = [
  {
    id: "0",
    img: "./media/manga images/Elan Palatinus.jpg",
    manganame: "Elan Palatinus",
  },
  {
    id: "1",
    img: "./media/manga images/Fairy Tail.jpg",
    manganame: "Fairy Tail",
  },
  {
    id: "2",
    img: "./media/manga images/In-Spectre.jpg",
    manganame: "In/Spectre",
  },
  {
    id: "3",
    img: "./media/manga images/Investor Z.jpg",
    manganame: "Investor Z",
  },
  {
    id: "4",
    img: "./media/manga images/King's Game -- Origin.jpg",
    manganame: "King's Game: Origin",
  },
  {
    id: "5",
    img: "./media/manga images/Lofty Flower, fall for me!!.jpg",
    manganame: "Lofty Flower, fall for me!!",
  },
  {
    id: "6",
    img: "./media/manga images/May I Ask for One Final Thing .jpg",
    manganame: "May I Ask for One Final Thing?",
  },
  {
    id: "7",
    img: "./media/manga images/Restaurant to Another World.jpg",
    manganame: "Restaurant to Another World",
  },
  {
    id: "8",
    img: "./media/manga images/Tales of Wedding Rings.jpg",
    manganame: "Tales of Wedding Rings",
  },
  {
    id: "9",
    img: "./media/manga images/That Time I Got Reincarnated as a Slime.jpg",
    manganame: "That Time I Got Reincarnated as a Slime",
  },
  {
    id: "10",
    img: "./media/manga images/The Strongest Sage With the Weakest Crest.jpg",
    manganame: "The Strongest Sage With the Weakest Crest",
  },
  {
    id: "11",
    img: "./media/manga images/To Your Eternity.jpg",
    manganame: "To Your Eternity",
  },
  {
    id: "12",
    img: "./media/manga images/UQ HOLDER!.jpg",
    manganame: "UQ HOLDER!",
  },
  {
    id: "13",
    img: "",
    manganame: "araferi",
  },
];
const mangas = document.querySelector(".mangas");

const image = document.querySelector(".backgroung-img");
const descrip = document.querySelector(".description");
const rete = document.querySelector(".stars");

////  buttons
const prew = document.querySelector(".previuos");
const next = document.querySelector(".next");
// slide btn
const slideBtn1 = document.getElementById("slide-1");
const slideBtn2 = document.getElementById("slide-2");
const slideBtn3 = document.getElementById("slide-3");
const slideBtn4 = document.getElementById("slide-4");
const slideBtn5 = document.getElementById("slide-5");

let pagecount = 0;

function renderSlider() {
  rete.textContent = slides[pagecount].rating;
  descrip.textContent = slides[pagecount].name;
  image.src = slides[pagecount].img;
}
prew.addEventListener("click", function () {
  pagecount -= 1;
  if (pagecount < 0) {
    pagecount = 4;
  }
  renderSlider();
});
next.addEventListener("click", function () {
  pagecount += 1;
  if (pagecount > 4) {
    pagecount = 0;
  }
  renderSlider();
});

slideBtn1.addEventListener("click", function () {
  pagecount = 0;
  renderSlider();
  Interval;
});
slideBtn2.addEventListener("click", function () {
  pagecount = 1;
  renderSlider();
});
slideBtn3.addEventListener("click", function () {
  pagecount = 2;
  renderSlider();
});
slideBtn4.addEventListener("click", function () {
  pagecount = 3;
  renderSlider();
});
slideBtn5.addEventListener("click", function () {
  pagecount = 4;
  renderSlider();
});

const Interval = setInterval(autoChange, 4000);
function autoChange() {
  pagecount += 1;
  if (pagecount > 4) {
    pagecount = 0;
  }
  renderSlider();
}

renderSlider();

const renderMangas = () => {
  for (i = 0; i < mangInfo.length - 1; i++) {
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
