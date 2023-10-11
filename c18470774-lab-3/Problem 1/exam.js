

const ApplyDiscount = (discount: Discount, product: Product)=>{
    var newAmount=discount.Apply(product.Amount);
    return WithAmount(newAmount , product)
}