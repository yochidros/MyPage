import {Prop, Vue} from 'vue-property-decorator';
import Component from 'vue-class-component';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

@Component({
    components: {
        PulseLoader,
    },
})
export default class Spinner extends Vue {
    @Prop() protected spinnerColor: string = "#83bdff";
    @Prop() protected spinnerHeight: string = "200";
    @Prop() protected spinnerWidth: string = "200";
    @Prop() protected isLoading: boolean = true;
}
