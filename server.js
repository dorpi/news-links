

var express = require('express');

const moongoose = require('mongoose');
const bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
const category = require('./routes/category')
const articles = require('./routes/articles')
const db = require('./config/keys').mongoURI


let app = express();




app.use(express.static( path.join(__dirname, 'public')));

//Cors enable
app.use(cors());



// Body Parser middleware
app.use(bodyParser.urlencoded({extended:false}));//middleware for parsing bodies from URL.
app.use(bodyParser.json()); //  middleware for parsing json objects


//connect to mongoDB
moongoose.connect(db)
.then(()=> console.log('MongoDB connected'))
.catch((err)=>console.log(err));

moongoose.set('useFindAndModify', false);


//Use Routes
app.use('/api/category',category)
app.use('/api/articles',articles)





//Server static assets if in production
if (process.env.NODE_ENV==='production'){
    //Set static folder
    app.use(express.static('client/build'))
    

}

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
})

const port = process.env.PORT  || 5000;

app.listen(port,()=> console.log(`Server running on port ${port}`));