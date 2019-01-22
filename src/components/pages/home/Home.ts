import { Component, Vue } from 'vue-property-decorator';
import CardCollection from '@/components/molecules/CardCollection/CardCollection';
import { Getters as GithubGetters } from '@/store/modules/github/getters';
import {Getter} from 'vuex-class';

@Component({
    components: {
        CardCollection,
    },
})
export default class Home extends Vue {
    @Getter('github/user')
    protected user: GithubGetters['user'];

    @Getter('github/repos')
    protected repos: GithubGetters['repos'];

    public mounted() {
        this.asyncDataClient();
    }

    public async asyncDataClient() {
        console.log('test');
        console.log(this.$store);
        try {
            await this.$store.dispatch('github/fetchUser', {});
            await this.$store.dispatch('github/fetchRepos', {});
        } catch (error) {
            console.log('error');
            console.log(error);
        }
    }

    protected onClickRepository(repo: any) {
        window.open(repo['html_url'], '_blank');
    }
}
