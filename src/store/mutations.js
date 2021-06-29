export default {
    addcart(state, payload) {
        let oldproduce = null

        for (let item of state.countlist) {
            if (item.iid === payload.iid)
                oldproduce = item
        }

        if (oldproduce) {
            oldproduce.count += 1
        } else {
            payload.count = 1
            payload.checked = true
            state.countlist.push(payload)
        }
    }
}