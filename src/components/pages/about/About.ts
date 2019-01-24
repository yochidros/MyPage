import {Component, Prop, Vue} from 'vue-property-decorator';
import { Getters as GithubGetters } from '@/store/modules/github/getters';
import {Getter} from 'vuex-class';
import moment from 'moment';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

@Component({
    filters: {
        formatDate(value: string): string | null {
            if (!value) {
                return null;
            }
            return moment(value).format('YYYY/MM/DD HH:mm');
        },
    },
    components: {
        PulseLoader,
    },
})
export default class About extends Vue {
    @Getter('github/user')
    protected user: GithubGetters['user'];

    @Prop() protected isLoading: boolean = true;
    @Prop() protected spinnerColor: string = "#83bdff";
    @Prop() protected spinnerHeight: string = "200";
    @Prop() protected spinnerWidth: string = "200";

    protected mounted() {
        this.asyncDataClient();
    }

    protected async asyncDataClient() {
        this.isLoading = true;
        try {
            await this.$store.dispatch('github/fetchUser', {});
            this.isLoading = false;
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
    }
}
