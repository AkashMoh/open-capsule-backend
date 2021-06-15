import mongoose from 'mongoose'

const historySchema = mongoose.Schema({
    time: String,
    product_name: String,
    product_code: Number,
    company_name: String,
    unit_start: Number,
    unit_end: Number,
});

export default mongoose.model('history', historySchema);