import items from "../../../data/Items.json"
import newSummerSalesItems from "../../../data/New Summer Sales Items/NewSummerSalesItems.json"


export const item1 = items.find((val) => {
    return val.productCode === newSummerSalesItems[0]
})
export const item2 = items.find((val) => {
    return val.productCode === newSummerSalesItems[1]
})
export const item3 = items.find((val) => {
    return val.productCode === newSummerSalesItems[2]
})
export const item4 = items.find((val) => {
    return val.productCode === newSummerSalesItems[3]
})
export const item5 = items.find((val) => {
    return val.productCode === newSummerSalesItems[4]
})
export const item6 = items.find((val) => {
    return val.productCode === newSummerSalesItems[5]
})
export const item7 = items.find((val) => {
    return val.productCode === newSummerSalesItems[6]
})
export const item8 = items.find((val) => {
    return val.productCode === newSummerSalesItems[7]
})
export const item9 = items.find((val) => {
    return val.productCode === newSummerSalesItems[8]
})
export const item10 = items.find((val) => {
    return val.productCode === newSummerSalesItems[9]
})