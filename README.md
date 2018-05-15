# PRAYER TIMES 

thans to [http://praytimes.org/](http://praytimes.org/) 
see code  in [http://praytimes.org/code/v2/js/PrayTimes.js](http://praytimes.org/code/v2/js/PrayTimes.js) 
## FYI

for calculate time based on [http://praytimes.org/calculation](http://praytimes.org/calculation) 

## Methode Calculation 


        methods = {
            MWL: {
                name: 'Muslim World League',
                params: { fajr: 18, isha: 17 } },
            ISNA: {
                name: 'Islamic Society of North America (ISNA)',
                params: { fajr: 15, isha: 15 } },
            Egypt: {
                name: 'Egyptian General Authority of Survey',
                params: { fajr: 19.5, isha: 17.5 } },
            Makkah: {
                name: 'Umm Al-Qura University, Makkah',
                params: { fajr: 18.5, isha: '90 min' } },  // fajr was 19 degrees before 1430 hijri
            Karachi: {
                name: 'University of Islamic Sciences, Karachi',
                params: { fajr: 18, isha: 18 } },
            Tehran: {
                name: 'Institute of Geophysics, University of Tehran',
                params: { fajr: 17.7, isha: 14, maghrib: 4.5, midnight: 'Jafari' } },  // isha is not explicitly specified in this method
            Jafari: {
                name: 'Shia Ithna-Ashari, Leva Institute, Qum',
                params: { fajr: 16, isha: 14, maghrib: 4, midnight: 'Jafari' } }
        },
        
        
## How To Install 

1. git clone 

		git clone https://github.com/wahyuhadi/prayer-time.git
	
2. NPM install
		
		cd prayer-time
		npm install
		
3. Start 

		npm start
		
		
## API ENDPOINT by Date Time / Day

		localhost:3000/v1/time/?lat=-7.9174&lng=107.61912280000001 
		// or ...
		localhost:3000/v1/time/?lat=-7.9174&lng=107.61912280000001&method=ISNA&timezone=7
		
		
defualt timezone is 7 'ASIA/JAKARTA and default methode is MWL  (Muslim World League)


## Response API 

	{
	    "options": {
			"latitude": "-7.9174",
			"longitude": "107.61912280000001",
			"timezone": 7,
			"datetime": "2018-05-15T16:12:25.925Z",
			"methode": "MWL"
	    },
	    "time": {
			"imsak": "04:30",
			"fajr": "04:40",
			"sunrise": "05:53",
			"dhuhr": "11:46",
			"asr": "15:07",
			"sunset": "17:39",
			"maghrib": "17:39",
			"isha": "18:47",
			"midnight": "23:46"
	    }
	}
		



## ENDPOINT by MONTH and YEARS
		
		localhost:3000/v1/time/5/2018?lat=6.917463899999999&lng=107.61912280000001&timezone=7&date=2018-05-15
		
		
## RESPONSE API

	{
    "options": {
        "latitude": "6.917463899999999",
        "longitude": "107.61912280000001",
        "timezone": "7",
        "datetime": "2018-05-15",
        "methode": "MWL"
    },
    "month": [
			{
			    "date": "2018-5-1T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-2T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-3T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-4T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-5T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-6T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-7T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-8T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-9T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-10T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-11T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-12T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-13T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-14T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-15T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-16T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-17T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-18T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-19T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-20T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-21T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-22T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-23T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-24T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-25T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-26T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-27T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-28T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-29T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-30T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			},
			{
			    "date": "2018-5-31T17:44:08.865Z",
			    "times": {
				"imsak": "04:10",
				"fajr": "04:20",
				"sunrise": "05:36",
				"dhuhr": "11:26",
				"asr": "14:47",
				"sunset": "17:17",
				"maghrib": "17:17",
				"isha": "18:29",
				"midnight": "23:26"
			    }
			}
		]
	}
	

        
        
     