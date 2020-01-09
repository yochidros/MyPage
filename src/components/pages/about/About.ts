import {Component, Prop, Vue} from 'vue-property-decorator';
import { Getters as GithubGetters } from '@/store/modules/github/getters';
import {Getter} from 'vuex-class';
import moment from 'moment';
import Spinner from '@/components/atoms/Spinner/Spinner';

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
        Spinner,
    },
})
export default class About extends Vue {
    @Getter('github/user')
    protected user: GithubGetters['user'];

    protected isLoading: boolean = true;

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
