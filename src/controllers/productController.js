import productRepository from '../repositories/productRepository.js';

const getAllProducts = async (req, res) => {
    try {
        const products = await productRepository.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await productRepository.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const createdProduct = await productRepository.create(newProduct);
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = req.body;
        const success = await productRepository.update(req.params.id, updatedProduct);
        if (success) {
            res.status(200).json({ message: 'Product updated successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const success = await productRepository.remove(req.params.id);
        if (success) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
