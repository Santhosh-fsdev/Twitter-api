
var Twit = require('twit'); // this is how we import the twit package
var config = require('./config')
var fs = require('fs');
var T = new Twit(config);

var params = {
    q: 'corona since:2020-08-21',
    count:10
}

T.get('search/tweets', params,searchedData);

// Getting tweets with text corona for past 5 days 
function searchedData(err, data, response) {
    if(data.statuses === undefined){
        console.log("try again");
    }
    data.statuses.map((value)=>{
        if((value.metadata.iso_language_code) === "en"){
            fs.writeFile('retweets.json', JSON.stringify(value),'utf-8', (err)=>{
                if(err) throw err;
            console.log("success");
        })
    }
    else{
        fs.writeFile('nonenglishtweets.json', JSON.stringify(value),'utf-8', (err)=>{
            if(err) throw err;
        console.log("success");
    })
    }
    })
    
}
