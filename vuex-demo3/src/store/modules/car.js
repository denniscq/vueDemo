import shop from '../../api/shop'
import { CAR, PRODUCTS } from '../mutation-types'

const state = {
    items: [],
    checkoutStatus: null
}

const getters = {
    carProducts: (state, getters, rootState) => {
        return state.items.map(({id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                title: product.title,
                price: product.price,
                quantity
            }
        })
    },
    carTotalPrice: (state, getters) => {
        return getters.carProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    }
}

const actions = {
    checkout ({ commit, state }, products) {
        const savedCarItems = [...state.items]
        commit(CAR.SET_CHECKOUT_STATUS, null)

        commit(CAR.SET_CAR_ITEMS, { items: [] })
        shop.buyProducts(products,
            () => commit(CAR.SET_CHECKOUT_STATUS, 'successful'),
            () => {
                commit(CAR.SET_CHECKOUT_STATUS, 'failed')
                commit(CAR.SET_CAR_ITEMS, { items: savedCarItems })
            })
    },
    addProductToCar ({ state, commit }, product) {
        commit(CAR.SET_CHECKOUT_STATUS, null)
        if (product.inventory > 0) {
            const carItem = state.items.find(item => item.id === product.id)
            if (!carItem) {
                commit(CAR.PUSH_PRODUCT_TO_CAR, { id: product.id })
            } else {
                commit(CAR.INCREMENT_ITEM_QUANTITY, carItem)
            }
            // remove 1 item from stock
            commit(`products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`, { id: product.id }, { root: true })
        }
    }
}

const mutations = {
    [CAR.PUSH_PRODUCT_TO_CAR] (state, { id }) {
        state.items.push({ id, quantity: 1 })
    },
    [CAR.INCREMENT_ITEM_QUANTITY] (sate, { id }) {
        const carItem = state.items.find(item => item.id === id)
        carItem.quantity++
    },
    [CAR.SET_CAR_ITEMS] (state, { items }) {
        state.items = items
    },
    [CAR.SET_CHECKOUT_STATUS] (state, status) {
        state.checkoutStatus = status
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}