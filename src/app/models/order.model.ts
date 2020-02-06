export class Order {

    constructor(
        public orderId:String,
        public articleId:String,
        public userEmail:String,
        public orderStatus:String,
        public dateBought:String
    ) {}
}