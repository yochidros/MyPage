import {randomString} from '@/util/StringUtil';
import {CardItem} from '@/model/card/CardItem';

export function cardItemFactory(): CardItem[] {

    let maxCount = Math.random() * (10 - 1) + 1;
    var items: CardItem[] = [];
    for (var i = 0; i < maxCount; i++) {
        items.push(new CardItem(
            randomString(
                (Math.random() * 20),
                '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            ),
            "http://komaigi-pet-clinic.com/wp-content/uploads/2016/11/shutterstock_401055829.jpg"
            ),
        );
    }
    return items;
}
