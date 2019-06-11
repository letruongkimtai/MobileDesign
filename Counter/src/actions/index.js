//action container

import { INCREASE, DECREASE } from './types' //import type

// export const increase = () => ({type:INCREASE}); //export for other class using the function
// export const decrease = () => ({type:DECREASE});

export function increase() {
    return {
        type: INCREASE
    }
}
export function decrease() {
    return {
        type: DECREASE
    }
}