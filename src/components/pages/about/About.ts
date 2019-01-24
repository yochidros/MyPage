import { Component, Vue } from 'vue-property-decorator';
import { Getters as GithubGetters } from '@/store/modules/github/getters';
import {Getter} from 'vuex-class';
import moment from 'moment';

@Component({
    filters: {
        formatDate(value: string): string | null {
            if (!value) {
                return null;
            }
            return moment(value).format('YYYY/MM/DD HH:mm');
        },
    },
})
export default class About extends Vue {
    @Getter('github/user')
    protected user: GithubGetters['user'];

    protected mounted() {
        this.asyncDataClient();
    }

    protected async asyncDataClient() {
        try {
            await this.$store.dispatch('github/fetchUser', {});
        } catch (error) {
            console.log(error);
        }
    }
}
