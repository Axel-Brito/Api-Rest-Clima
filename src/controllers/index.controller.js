const { Pool } = require('pg');

new Pool({
    
})


const getUSers = (req, res) =>{
    res.send('users');

}

module.exports = {
    getUSers
}