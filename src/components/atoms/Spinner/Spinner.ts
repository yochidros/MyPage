import {Prop, Vue} from 'vue-property-decorator';
import Component from 'vue-class-component';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

@Component({
    components: {
        PulseLoader,
    },
})
export default class Spinner extends Vue {
    @Prop({ default: "#83bdff"}) protected spinnerColor: string;
    @Prop({ default: "200" }) protected spinnerHeight: string;
    @Prop({ default: "200"}) protected spinnerWidth: string;
    @Prop() protected isLoading: boolean;
}
