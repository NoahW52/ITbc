const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {

    const header = req.headers['authorization']
    if(header) {
        const token = header.split(' ')[1]
        try{
            const decoded = jwt.verify(token, 'SECRETKEY')
            const username = decoded.username
            const authUser = users.find()
        } catch {
            
        }
    } 
}

module.exports = authenticate