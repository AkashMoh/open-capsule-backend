import mongoose from 'mongoose'

const inventorySchema = mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    quantity: {
        type: Number,
        default: 0,
    }
})

const SalesSchema = mongoose.Schema({
    name: {
        type: String,
        default: '',
    },
    code: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    },
    units: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        default: 0,
    },
})

const dashboardSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    sales: {
        today: {
            type: Number,
            default: 0,
        },
        month: {
            type: Number,
            default: 0,
        },
        year: {
            type: Number,
            default: 0,
        },
    },
    expense: {
        today: {
            type: Number,
            default: 0,
        },
        month: {
            type: Number,
            default: 0,
        },
        year: {
            type: Number,
            default: 0,
        },
    },
    orders: {
        today: {
            type: Number,
            default: 0,
        },
        month: {
            type: Number,
            default: 0,
        },
        year: {
            type: Number,
            default: 0,
        },
    },
    returns: {
        today: {
            type: Number,
            default: 0,
        },
        month: {
            type: Number,
            default: 0,
        },
        year: {
            type: Number,
            default: 0,
        },
    },
    inventory: [inventorySchema],
    recent: {
        sales: [SalesSchema],
        purchases: [SalesSchema]
    }
})

export default mongoose.model('dashboard', dashboardSchema)
