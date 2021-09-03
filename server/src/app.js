const express = require("express")
const app = express()

let port = process.env.PORT || 3000
let users = []
let id = 0

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home')
})

app.post('/save-user', (req, res) => {
    if(exist(req.body.username))
        res.status(200).json("User exist")
    else{
        let date = new Date()
        users.push({id: id, username: req.body.username, password: req.body.password, registered: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getMilliseconds()}`})
        id++
        res.status(200).json(users)
    }
})

app.post('/delete-user', (req, res) => {
    users = users.filter(el => el.id != req.body.id)
    res.status(200).json(users)
})

const exist = username => {
    for(let el of users)
        if(el.username == username) return true

    return false
}

app.listen(port)