import { useInputTerm } from "./StateContext";
import items from "../../../data/Items.json"

export function SendTo() {
    const term = useInputTerm()
    return (
        items.find((val) => {
            val.title.includes(term)
        })
    )
}
