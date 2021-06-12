const {
    json
} = require('express');
const User = require('../models/user');


module.exports = {

    getAllUsers: (req, res, next) => {

        //Calling fetchAll method directly without creating User instance as fetchAll is a static method.
        User.fetchAll()
            .then(result => {

                //Instead of res.json you could use res.render to render html template.
                res.status(200).json({
                    data: result.rows
                })
            })
            .catch(err => {
                console.log(err)
            });
    },

    addUser: (req, res, next) => {
        //Creating instance of the User model with static data. 
        let user = new User(null, 'Kapil Sharma', 'contact@example.com', '0777777777', null);

        //Calling add method
        user.add()
            .then(() => {
                res.status(200).json({
                    message: 'User added successfully.'
                })
            })
            .catch(err => {
                console.log(err)
            })
    },
}