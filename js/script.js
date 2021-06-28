
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
            nameImages: [
                "Bangkok, Thailandia",
                "Barcellona, Spagna",
                "Città del Capo, Sud Africa",
                "Il Cairo, Egitto",
                "Londra, Regno Unito",
                "New York City, USA",
                "Parigi, Francia",
                "Rio de Janeiro, Brasile",
                "Sydney, Australia",
                "Ubud, Indonesia",
            ],
            nameImagesIndex: 0,
        },
        created () {
            setInterval (() => {
                this.avanti ();
            }, 4000)
        },
        methods: {
            avanti: function () {
                if (this.imagesIndex === (this.images.length - 1) && this.nameImagesIndex === (this.nameImages.length - 1)) {
                    this.imagesIndex = 0;
                    this.nameImagesIndex = 0;
                } else {
                    this.imagesIndex++;
                    this.nameImagesIndex++;
                }
            },
            indietro: function () {
                if (this.imagesIndex === 0 && this.nameImagesIndex === 0) {
                    this.imagesIndex = this.images.length - 1;
                    this.nameImagesIndex = this.nameImages.length - 1;
                } else {
                    this.imagesIndex--;
                    this.nameImagesIndex--;
                }
            },
            changeImg: function (index) {
                this.imagesIndex = index;
                this.nameImagesIndex = index;
            },
            count: function (index) {
                if (index === this.imagesIndex && index === this.nameImagesIndex) {
                    return "count-color";
                } else {
                    return "";
                }
            }
        }
    }
);
