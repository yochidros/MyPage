import {randomString} from '@/util/StringUtil';

export class CardItem {
    protected title: string;
    protected imageURL: string;
    constructor(title: string, imageURL: string) {
        console.log("hello!!");
        this.title = title;
        this.imageURL = imageURL;
    }
}


