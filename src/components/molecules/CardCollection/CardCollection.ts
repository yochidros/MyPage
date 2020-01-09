import Vue from 'vue';
import Component from 'vue-class-component';
import Card from '@/components/atoms/Card/Card';
import {Emit, Prop} from 'vue-property-decorator';
import { State } from '@/store/modules/github';

@Component({
    components: {Card},
})
export default class CardCollection extends Vue {
    @Prop() private repoItems: State['repos'];

    @Emit('onClickCollectionContent')
    protected onClickCollectionContent(item: object) {
        return item;
    }
}

