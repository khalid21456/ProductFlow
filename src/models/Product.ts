import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, 'Please provide a product label'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Please provide a product price'],
        min: [0, 'Price cannot be negative'],
    },
    quantity: {
        type: Number,
        required: [true, 'Please provide product quantity'],
        min: [0, 'Quantity cannot be negative'],
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Update the updatedAt timestamp before saving
productSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

export default mongoose.models.Product || mongoose.model('Product', productSchema); 