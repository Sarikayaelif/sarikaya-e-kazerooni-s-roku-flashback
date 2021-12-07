import TheAdultsComponent from "./TheAdultsComponent.js";
import TheKidsComponent from "./TheKidsComponent.js";
import TheTvShowsComponent from "./TheTvShowsComponent.js";
import TheMoviesComponent from "./TheMoviesComponent.js";
import TheMusicsComponent from "./TheMusicsComponent.js";
import AdultsComponent from "./TheAdultsComponent.js";
import KidsComponent from "./TheKidsComponent.js";
import TvShowsComponent from "./TheTvShowsComponent.js";
import MoviesComponent from "./TheMoviesComponent.js";
import MusicsComponent from "./TheMusicsComponent.js";

export default {
    name: "TheLightboxComponent",

    props: ["piece"],

    computed: {
        activeComponent:function() {
            return `${this.piece.type + "Component"}`;
        }
    },
        

    template:`
        <section class="lightboxWrapper">
            <i @click="closeMe" class="fa-solid fa-circle-xmark" ></i>
            
            <img :src='"images/" + piece.banner' :alt="piece.model">
            <div id="description">
                <h1>Model: {{piece.model}}</h1>
                <p>{{piece.description}}</p>
            </div>
            <component v-if= "piece.type" :is="activeComponent"></component>
        </section>
         `
    ,

    methods: {
        closeMe() {
            //document.querySelector(".lightbox").classList.remove('visible');
        this.$emit("closelb")
        }
    },
    components: {
        AdultsComponent: TheAdultsComponent,
        KidsComponent: TheKidsComponent,
        TvShowsComponent: TheTvShowsComponent,
        MoviesComponent: TheMoviesComponent,
        MusicsComponent: TheMusicsComponent,
    }
}