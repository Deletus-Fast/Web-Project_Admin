const user = require('../models/user')
const jwt = require('jsonwebtoken')



const login = async (req, res) => {
    
}
const getAllUsers = async (req, res) => {
    try {
        const users = await user.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const userById = await user.findById(id)

        if (!userById) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json(userById)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params
        const { username, email, password, name, age, role, disabled } = req.body
        const updateUser = await user.findByIdAndUpdate(
            id,
            { username, email, password, name, age, role, disabled },
            { new: true }
        )

        if (!updateUser) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteUserById = async (req, res) => {
    try {
        const { id } = req.params
        const deleteUser = await user.findByIdAndDelete(id)

        if (!deleteUser) {
            return res.status(404).json({ message: 'User not found' })
        }

        res.status(200).json(deleteUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} 