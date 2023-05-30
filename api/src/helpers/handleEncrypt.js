const bcrypt = require('bcryptjs')

const encrypt = async (textPline) => {
    const hash = await bcrypt.hash(textPline, 10)
    return hash;
}
const compare = async (passwordPline, hashPassword) => {
    return await bcrypt.compare(passwordPline, hashPassword)
}
module.exports = { encrypt, compare }