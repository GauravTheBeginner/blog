const zod = require("zod")

const auth = {
    username: zod.string(),
    password:zod.string().min(7)
}


module.exports = {auth}