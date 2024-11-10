import contractRepository from '../repositories/contractRepository.js';

const getAllContracts = async (req, res) => {
    try {
        const contracts = await contractRepository.findAll();
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contracts', error: error.message });
    }
};

const getContractById = async (req, res) => {
    try {
        const contract = await contractRepository.findById(req.params.id);
        if (contract) {
            res.status(200).json(contract);
        } else {
            res.status(404).json({ message: 'Contract not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contract', error: error.message });
    }
};

const createContract = async (req, res) => {
    try {
        const newContract = req.body;
        const createdContract = await contractRepository.create(newContract);
        res.status(201).json(createdContract);
    } catch (error) {
        res.status(500).json({ message: 'Error creating contract', error: error.message });
    }
};

const updateContract = async (req, res) => {
    try {
        const updatedContract = req.body;
        const success = await contractRepository.update(req.params.id, updatedContract);
        if (success) {
            res.status(200).json({ message: 'Contract updated successfully' });
        } else {
            res.status(404).json({ message: 'Contract not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating contract', error: error.message });
    }
};

const deleteContract = async (req, res) => {
    try {
        const success = await contractRepository.remove(req.params.id);
        if (success) {
            res.status(200).json({ message: 'Contract deleted successfully' });
        } else {
            res.status(404).json({ message: 'Contract not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contract', error: error.message });
    }
};

export default { getAllContracts, getContractById, createContract, updateContract, deleteContract };
