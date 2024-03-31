import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ritesh*2000',
    database: 'haqdarshak'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

const createUser = (req, res) => {
    const { name, state, district, pincode, phone, gender, age } = req.body;

  
    const user = {
        name: name,
        state: state,
        district: district,
        pincode: pincode,
        phone: phone,
        gender: gender,
        age: age
    };

    connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
        if (error) {
            console.error('Error signing up: ' + error);
            return res.status(500).json({ error: 'Error signing up. Please try again later.' });
        }
        
        console.log('User signed up successfully!');
        return res.status(201).json({ message: 'User signed up successfully!' });
    });
};
const loginUser = (req, res) => {
    const { phone } = req.body;

    connection.query('SELECT * FROM users WHERE phone = ?', phone, (error, results, fields) => {
        if (error) {
            console.error('Error logging in: ' + error);
            return res.status(500).json({ error: 'Error logging in. Please try again later.' });
        }

        if (results.length === 0) {
            console.log('Phone number not found!');
            return res.status(404).json({ error: 'Phone number not found!' });
        }

        console.log('User logged in successfully!');
        return res.status(200).json({ message: 'User logged in successfully!' });
    });
};

export { createUser , loginUser};
