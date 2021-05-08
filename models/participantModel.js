import mongoose from 'mongoose'

const participantSchema = mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    wallet_address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    hash_details: {
        type: String,
        required: true
    },
})

export default mongoose.model('participant', participantSchema)
