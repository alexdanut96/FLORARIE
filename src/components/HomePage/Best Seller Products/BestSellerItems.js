import items from "../../../data/Items.json"
import bestSellerItems from "../../../data/Best Seller Items/BestSellerItems.json"


export const item1 = items.find((val) => {
    return val.productCode === bestSellerItems[0]
})
export const item2 = items.find((val) => {
    return val.productCode === bestSellerItems[1]
})
export const item3 = items.find((val) => {
    return val.productCode === bestSellerItems[2]
})
export const item4 = items.find((val) => {
    return val.productCode === bestSellerItems[3]
})
export const item5 = items.find((val) => {
    return val.productCode === bestSellerItems[4]
})
export const item6 = items.find((val) => {
    return val.productCode === bestSellerItems[5]
})
export const item7 = items.find((val) => {
    return val.productCode === bestSellerItems[6]
})
export const item8 = items.find((val) => {
    return val.productCode === bestSellerItems[7]
})
export const item9 = items.find((val) => {
    return val.productCode === bestSellerItems[8]
})
export const item10 = items.find((val) => {
    return val.productCode === bestSellerItems[9]
})