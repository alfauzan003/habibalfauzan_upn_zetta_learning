const book = (
    {name:"a Brief History of Time", price:60000, isPurchased: false, stock:100}
);

function bookpurchase (name, discount, tax, itemAmount, credit) {
    let stock = book.stock;
    const price = book.price;
    const discountAmount = (discount/100) * price;
    const discountPrice = price - discountAmount;
    const taxAmount = (tax/100)*discountPrice;
    const taxedPrice = discountPrice + taxAmount;
    let totalBooksPrice = 0;
    let totalPriceAfterDiscount = 0;
    let totalTax = 0;

    for (let i = 0; i < itemAmount; i++) {
        if (book && i < stock) {
            totalPriceAfterDiscount += discountPrice;
            totalBooksPrice += price;
            totalTax += taxAmount;
        } else {
            console.log("Stock run out!");
            break;
    }
}
totalPriceToPay = totalPriceAfterDiscount + totalTax;
if (book && itemAmount <= stock) {
    console.group();
    console.log("Judul : ", book.name);
    console.log("Harga Original: ", price);
    console.log("Jumlah pembelian : ", itemAmount);
    console.log("Total harga: ", totalBooksPrice);
    console.log("Persentase diskon : ", discount, "%");
    console.log("Biaya setelah diskon : ", totalPriceAfterDiscount);
    console.log("Pajak : ", tax, "%");
    console.log("Total pajak : ", totalTax);
    console.log("Total pembayaran : ", totalPriceToPay);
    console.log("Sisa Stok buku : ", stock - itemAmount);
    if (stock - itemAmount === 0) {
        console.log("Stok habis, anda tidak bisa membeli lagi");
    } else {
        console.log("Stok masih ada, anda bisa membeli lagi");
    }
    console.log("");
    console.log("Anda melakukan cicilan sebanyak ", credit, " kali");
    console.groupEnd();
}
let creditPerMonth = totalPriceToPay / credit;
let creditToPay = [];
let i = 0;

while (i < credit) {
    creditToPay.push({
        cicilan_ke: i + 1,
        pembayaran: creditPerMonth,
    });
    i++;
}
console.log(Array.from(creditToPay));
return totalPriceToPay;
}
bookpurchase(book, 50, 50, 50, 10);