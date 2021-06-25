Vue.config.devtools = true;

const app = new Vue (
    {
        el: "#app",
        data: {
            images: [
                "./img/Bangkok, Thailandia.jpg",
                "./img/Barcellona, Spagna.jpg",
                "./img/Città del Capo, Sud Africa.jpg",
                "./img/Il Cairo, Egitto.jpg",
                "./img/Londra, Regno Unito.jpg",
                "./img/New York City, USA.jpg",
                "./img/Parigi, Francia.jpg",
                "./img/Rio de Janeiro, Brasile.jpeg",
                "./img/Sydney, Australia.jpg",
                "./img/Ubud, Indonesia.jpg",
            ],
            imagesIndex: 0,
        },
        created () {
            setInterval (() => {
                this.avanti ();
            }, 4000)
        },
        methods: {
            avanti: function () {
                if (this.imagesIndex === (this.images.length - 1)) {
                    this.imagesIndex = 0;
                } else {
                    this.imagesIndex++;
                }
            },
            indietro: function () {
                if (this.imagesIndex === 0) {
                    this.imagesIndex = this.images.length - 1;
                } else {
                    this.imagesIndex--;
                }
            }
        }
    }
);
