export class Order {

    constructor(
        public articleId:String,
        public email:String,
        public name:String,
        public price:number,
        public orderStatus:String
    ) {}
}