import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Product from '@/models/Product';

export async function GET(request: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(request.url);
        const name = searchParams.get('name');
        
        let query = {};
        if (name) {
            query = { label: { $regex: name, $options: 'i' } };
        }

        const products = await Product.find(query).sort({ createdAt: -1 });
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await connectDB();
        const data = await request.json();
        const product = await Product.create(data);
        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
        }

        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Product deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
        }

        const data = await request.json();
        const product = await Product.findByIdAndUpdate(id, data, { 
            new: true,
            runValidators: true
        });

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }
} 

export async function findProductByName(request:Request) {
    try {
        await connectDB();
        const { searchParams } = new URL(request.url);
        const name = searchParams.get('name');
        
        if (!name) {
            return NextResponse.json({ error: 'Product name is required' }, { status: 400 });
        }

        const data = await Product.find({ 
            label: { $regex: name, $options: 'i' }
        });

        return NextResponse.json(data);
    }catch(error) {
        return NextResponse.json({error:'Failed to search for the product'},{status:500})
    }
}