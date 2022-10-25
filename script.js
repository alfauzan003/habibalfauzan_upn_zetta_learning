const book = (
    {name:"a Brief History of Time", price:"60000", isPurchased: false}
);

function bookpurchase (name, discount, tax) {
    let result = 0;

    const price = book.price;
    const discountAmount = (discount/100) * price;
    const discountPrice = price - discountAmount;
    const taxAmount = (tax/100)*price;
    const taxedPrice = discountPrice + taxAmount;
    isPurchased = true;

    console.group();
    console.log('Name: ',book.name)
    console.log('Original Price: ', price);
    console.log('Discount Amount: ', discountAmount);
    console.log('Price after Discount: ', discountPrice);
    console.log('Tax Amount: ', taxAmount);
    console.log('Price after Tax: ', taxedPrice);
    console.log('Jadi beli: ', isPurchased);
    console.groupEnd();
}

bookpurchase(book, 50, 50);