export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    template: `
    <div @click="showmydata" class="bio-panel">
        <div class="p_avatar">
        <h2 class="p_name">{{ piece.user}}</h2>
        </div>

       
       
    </div>
    `,

    methods: {
        showmydata() {
            //debugger;
            this.$emit("showdata", this.piece);
        }
    }
}