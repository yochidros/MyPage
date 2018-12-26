import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import {CardItem} from '@/model/card/CardItem';

@Component
export default class Card extends Vue {
    @Prop() private item!: CardItem;

    protected mounted() {
       console.log(this.item);
    }
}
