const taskModel = require('../model/taskModel')

const createTask = async (req, res) => {
    try {
        const reqBody = req.body;

        if (reqBody.title !== undefined && reqBody.description !== undefined) {
            console.log("success")
            await taskModel.create({
                title: reqBody.title,
                description: reqBody.description
            });
            return res.status(200).send({ message: "User Data Inserted Successfully", success: true })
        }
        return res.status(200).send({ message: "user data is missing", success: false })

    } catch (err) {
        return res.status(401).send({ message: "error", success: false })
    }
}

const updateTask = async (req, res) => {
    try {
        const reqBody = req.body;
        if (reqBody.id !== undefined) {
            const data = await taskModel.findOne({ _id: reqBody.id })
            if (data !== null) {
                if (reqBody.title !== undefined && reqBody.description !== undefined) {
                    await taskModel.updateOne({
                        _id: reqBody.id
                    }, { $set: { title: reqBody.title, description: reqBody.description } })
                    return res.status(200).send({ message: "Data updated successfully", success: true })
                }
                if (reqBody.title === undefined && reqBody.description !== undefined) {
                    await taskModel.updateOne({
                        _id: reqBody.id
                    }, { $set: { description: reqBody.description } })
                    return res.status(200).send({ message: "Data updated successfully", success: true })
                }
                if (reqBody.title !== undefined && reqBody.description === undefined) {
                    await taskModel.updateOne({
                        _id: reqBody.id
                    }, { $set: { title: reqBody.title } })
                    return res.status(200).send({ message: "Data updated successfully", success: true })
                }
                return res.status(200).send({ message: "Data has not been updated due to empty body", success: false })
            }
            return res.status(200).send({ message: "There is no such data", success: false })
        }
        return res.status(200).send({ message: "Id is undefined", success: false })

    } catch (err) {
        return res.status(401).send({ message: err, success: false })
    }
}

const updateTaskCompletion = async (req, res) => {
    try {
        const reqBody = req.body;
        if (reqBody.id !== undefined) {
            await taskModel.updateOne({ _id: reqBody.id }, { $set: { isCompleted: true } })
            return res.status(200).send({ message: "Task completed successfully", success: true })
        }
        return res.status(200).send({ message: "ID is null", success: true })

    } catch (err) {
        return res.status(401).send({ message: err, success: false })
    }
}

const getAllTaskCompleted = async (req, res) => {
    try {
        const { val } = req.params
        if (val !== '') {
            const fetchedDataallCompleted = await taskModel.find({ isCompleted: val });
            if (fetchedDataallCompleted.length !== 0) {
                return res.status(200).send({ message: fetchedDataallCompleted, success: true })
            }
            return res.status(200).send({ message: "there is no such data", success: false })
        }
        return res.status(200).send({ message: "val is null", success: false })
    } catch (err) {
        return res.status(401).send({ message: err, success: false })
    }
}
const getTask = async (req, res) => {
    try {
        const { id } = req.params
        if (id !== '') {
            const fetchedData = await taskModel.findOne({ _id: id });
            if (fetchedData !== null) {
                return res.status(200).send({ message: fetchedData, success: true })
            }
            return res.status(200).send({ message: "there is no such data", success: false })
        }
        return res.status(200).send({ message: "Id is null", success: false })

    } catch (err) {
        return res.status(401).send({ message: err, success: false })
    }
}

const getAllTask = async (req, res) => {
    try {
        const fetchedAllData = await taskModel.find();
        if (fetchedAllData.length !== 0) {
            return res.status(200).send({ message: fetchedAllData, success: true })
        }
        return res.status(200).send({ message: "there is no such data", success: false })
    } catch (err) {
        return res.status(401).send({ message: err, success: false })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        if (id !== '') {
            const deletedData = await taskModel.deleteOne({ _id: id });
            if (deletedData.acknowledged === true) {
                return res.status(200).send({ message: "Deleted Successfully", success: true })
            }
            return res.status(200).send({ message: "The data is not deleted", success: false })
        }
        return res.status(200).send({ message: "Id is null", success: false })

    } catch (err) {
        return res.status(401).send({ message: err, success: false })
    }
}

const deleteAllTask = async (req, res) => {
    try {
        const deletedAllData = await taskModel.deleteMany({});
        if (deletedAllData.acknowledged === true) {
            return res.status(200).send({ message: "Deleted Successfully", success: true })
        }
        return res.status(200).send({ message: "The data is not deleted", success: false })
    } catch (err) {
        return res.status(401).send({ message: err, success: false })
    }
}

module.exports = { createTask, updateTask, getAllTask, getTask, deleteTask, deleteAllTask, updateTaskCompletion, getAllTaskCompleted }