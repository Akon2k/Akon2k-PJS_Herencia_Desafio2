class Multimedia {
  constructor(url) {
    const _url = url;
    this.videoYoutube = () => _url;
  }

  get url() {
    return this.videoYoutube();
  }

  set setInicio(otraMusica) {
    this.videoYoutube = () => otraMusica;
  }
}
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    const _id = id;
    this.getId = () => _id;
  }

  get id() {
    return this.getId();
  }

  playMultimedia() {
    Youtube(this.url, this.id);
  }

  setInicio(tiempo = 0) {
    const idHTML = document.getElementById(this.id);
    if (!idHTML) return;
    idHTML.setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}

const Youtube = (() => {
  {
    const agregarMedio = (url, id) => {
      const idHTML = document.getElementById(id);
      if (!idHTML) return;
      idHTML.setAttribute("src", url);
    };
    const agregarMedioPublica = (url, id) => agregarMedio(url, id);
    return agregarMedioPublica;
  }
})();

const URLmusica = "https://www.youtube.com/embed/wEERFBI9eCg";
const URLPelicula = "https://www.youtube.com/embed/X5zINZqTVpo";
const URLSerie = "https://www.youtube.com/embed/MUoRbt_zbQc";

let objMusica = new Reproductor(URLmusica, "iframeMusica");
let objPelicula = new Reproductor(URLPelicula, "iframePelicula");
let objSerie = new Reproductor(URLSerie, "iframeSerie");

objMusica.playMultimedia();
objPelicula.playMultimedia();
objSerie.playMultimedia();
