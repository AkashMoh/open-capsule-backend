import mongoose from 'mongoose'

const productDetailSchema = mongoose.Schema({
    company_address: String,
    company_name: String,
    product_code: Number,
    product_name: String,
    price: Number,
    unit_start: Number,
    unit_end: Number,
    hash_details: String,
});

export default mongoose.model('product', productDetailSchema);