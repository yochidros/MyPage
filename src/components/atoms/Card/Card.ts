import Vue from 'vue';
import Component from 'vue-class-component';
import {Emit, Prop} from 'vue-property-decorator';

@Component
export default class Card extends Vue {
    @Prop() private item!: object;

    @Emit('onClickRepository')
    public onClickRepository(event: Event) {
        return this.item;
    }
}
