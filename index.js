const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
//const bodyParser = require('body-parser')

function caluculateSumUntil(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum ;
}

//app.use(bodyParser.json());
app.get('/', (req, res)=> {
    // console.log(req.headers.authorization)
    const n = req.query.n;
    const ans = caluculateSumUntil(n);
    res.send(ans.toString());
});


app.listen(port, () => {
    console.log(`The port no ${port} is started`);
});
