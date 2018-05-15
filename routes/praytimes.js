var express = require('express');
var pray = require('./time.js');

var router = express.Router();

router.get('/', function(req, res, next) {

    let methode = req.query.method;
    let lat = req.query.lat;
    let lng = req.query.lng;
    let date = req.query.date;
    let timezone = req.query.timezone

    if (!req.query.method) {
        methode = 'MWL';
    }
    if (!req.query.date) {
        date = new Date();
    }

    if (!req.query.timezone) {
        timezone = 7; //default indonesian timezone 
    }


    let options = {
        latitude : lat,
        longitude : lng,
        timezone : timezone,
        datetime : date,
        methode: methode
    };
    let get = new pray.time(methode);
    let times = get.getTimes(date, [lat,lng], timezone);

    res.send({options: options, time: times})

});


router.get('/:month/:years', function(req, res, next) {

    let methode = req.query.method;
    let lat = req.query.lat;
    let lng = req.query.lng;
    let date = req.query.date;
    let timezone = req.query.timezone
    let month  = req.params.month
    let years = req.params.years

    let getTotalDate = new Date(years ,month,0).getDate();
    let day = []
    for(var i=1; j=getTotalDate, i<=j; i++){
        let dateTemp = years+'-'+month+'-'+i+"T17:44:08.865Z" // T17:44:08.865Z default time
        day.push(dateTemp)
    }
   
    if (!req.query.method) {
        methode = 'MWL';
    }
    if (!req.query.date) {
        date = new Date();
    }

    if (!req.query.timezone) {
        timezone = 7; //default indonesian timezone 
    }


    let options = {
        latitude : lat,
        longitude : lng,
        timezone : timezone,
        datetime : date,
        methode: methode
    };
    let get = new pray.time(methode);
    let timePray  = []
    day.forEach(element => {
        let times = get.getTimes(date, [lat,lng], timezone);
        let optsTemp = {date : element, times : times};
        timePray.push(optsTemp)
    });
   

    res.send({options: options, month: timePray})

});

module.exports = router;
