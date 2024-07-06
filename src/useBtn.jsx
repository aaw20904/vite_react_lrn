
import {useState} from "React"

export const useBtn = () =>{
    const [count, setCount] = useState(0);
    const zero = () =>setCount(0);
    const add = () => setCount(old=>old+1);
    const sub = () => setCount(old=>old-1);

    return [count, add, sub, zero]
}