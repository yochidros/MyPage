import {Component, Prop, Vue} from 'vue-property-decorator';
import CardCollection from '@/components/molecules/CardCollection/CardCollection';
import { Getters as GithubGetters } from '@/store/modules/github/getters';
import {Getter} from 'vuex-class';
import Spinner from '@/components/atoms/Spinner/Spinner';
// @ts-ignore
import { Timeline } from 'vue-tweet-embed/dist';

@Component({
    components: {
        CardCollection,
        Spinner,
        Timeline,
    },
})
export default class Home extends Vue {
    @Getter('github/repos')
    protected repos: GithubGetters['repos'];

    @Prop() protected isLoading: boolean = true;

    public mounted() {
        this.asyncDataClient();
    }

    public async asyncDataClient() {
        this.isLoading = true;
        try {
            await this.$store.dispatch('github/fetchRepos', {});
            this.isLoading = false;
        } catch (error) {
            console.log(error);
            this.isLoading = false;
        }
    }

    protected onClickRepository(repo: any) {
        window.open(repo['html_url'], '_blank');
    }
}
