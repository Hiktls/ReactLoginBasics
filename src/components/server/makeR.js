const axios = require('axios').default;

axios.post("http://localhost:8080/server",{
    "email":"kaanozdamar2007@gmail.com",
    "password":"ohohoho"
})
.then(response => {
    console.log(response.status);
})
.catch(err => {
    console.log(err);
})

/*axios.get("http://localhost:8080/server")
.then(response => {
    console.log(response.status);
})
.catch(err => {
    console.log(err);
})*/




/*axios.post("localhost:8080/server/login",{
    email:"kaanozdamar2007@gmail.com",
    password:"ohohoho"
}).then(response => {
    console.log(response.data);
})
.catch(err => {
    console.log(err)
})*/