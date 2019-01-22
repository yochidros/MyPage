import Vue from 'vue';
import Component from 'vue-class-component';
import {Emit, Prop} from 'vue-property-decorator';

@Component
export default class Card extends Vue {
    @Prop() private item!: Object;

    @Emit('onClickRepository')
    public onClickRepository(event: Event) {
        console.log(this.item);
        return this.item;
    }
}
