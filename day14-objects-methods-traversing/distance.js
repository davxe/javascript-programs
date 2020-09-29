const data={
    "destination_addresses" : [ "Hubli, Karnataka, India" ],
    "origin_addresses" : [ "Bengaluru, Karnataka, India" ],
    "rows" : [
       {
          "elements" : [
             {
                "distance" : {
                   "text" : "414 km",
                   "value" : 414197
                },
                "duration" : {
                   "text" : "7 hours 33 mins",
                   "value" : 27164
                },
                "duration_in_traffic" : {
                   "text" : "7 hours 35 mins",
                   "value" : 27321
                },
                "status" : "OK"
             }
          ]
       }
    ],
    "status" : "OK"
 }
 source=data.origin_addresses[0].split(', ')[0]
 destination=data.destination_addresses[0].split(', ')[0]
 distance=data.rows[0].elements[0].distance.text
 travel=data.rows[0].elements[0].duration.text
 console.log(`the distance between ${source} and ${destination} is ${distance} and time taken is ${travel}`)
// console.log(distance)
// console.log(travel) 