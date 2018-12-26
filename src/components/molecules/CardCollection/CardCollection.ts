import Vue from 'vue';
import Component from 'vue-class-component';
import Card from '@/components/atoms/Card/Card';
import {Prop} from 'vue-property-decorator';
import { CardItem } from '@/model/card/CardItem';
import { cardItemFactory} from '@/model/card/CardItemFactory';

@Component({
    components: {Card},
})
export default class CardCollection extends Vue {
    @Prop() private cardItems: CardItem[] = cardItemFactory();
}

