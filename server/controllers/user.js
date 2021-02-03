const User = require('../models/user');

exports.postSaveUser = (req, res, next) => {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save()
        .then(value => {
            res.json("User is add");
        })
        .catch(reason => {
            console.log(reason);
        });
}