export class CartItem {

    constructor(
        public cartItemId:String,
        public articleId:String,
        public userEmail:String,
        public name:String,
        public price:number
    ) {}
}