export function increment() {
      return { type: 'INCREMENT' }
}

export function decrement() {
      return { type: 'DECREMENT' }
}

export function stepChanged(e) {
      return {
            type: 'STEP_CHANGED',
            payload: e.target.value
      }
}