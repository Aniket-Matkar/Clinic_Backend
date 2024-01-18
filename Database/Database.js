import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
            dbName: 'Patient_DB_backend_API'
        });
        console.log('Successfully connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

export { mongoose, connectToDatabase };
