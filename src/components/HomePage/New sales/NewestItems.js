import items from "../../../data/Items.json"
import newestItems from "../../../data/Newest Items/NewestItems.json"


export const item1 = items.find((val) => {
    return val.productCode === newestItems[0]
})
export const item2 = items.find((val) => {
    return val.productCode === newestItems[1]
})
export const item3 = items.find((val) => {
    return val.productCode === newestItems[2]
})
export const item4 = items.find((val) => {
    return val.productCode === newestItems[3]
})
export const item5 = items.find((val) => {
    return val.productCode === newestItems[4]
})
export const item6 = items.find((val) => {
    return val.productCode === newestItems[5]
})
export const item7 = items.find((val) => {
    return val.productCode === newestItems[6]
})
export const item8 = items.find((val) => {
    return val.productCode === newestItems[7]
})
export const item9 = items.find((val) => {
    return val.productCode === newestItems[8]
})
export const item10 = items.find((val) => {
    return val.productCode === newestItems[9]
})