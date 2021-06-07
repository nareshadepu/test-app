export class dummyData {
    itemId: number;
    productName: string;
    actualPrice: number;
    discountPrice: number;
    stockAvailable: number;
    checked?: boolean;

    constructor(itemId: number, productName: string, actualPrice: number, discountPrice: number, stockAvailable: number) {
        this.itemId = itemId;
        this.productName = productName;
        this.actualPrice = actualPrice;
        this.discountPrice = discountPrice;
        this.stockAvailable = stockAvailable;
    }
}
