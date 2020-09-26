const records = [{
        user_id: 1,
        device: "Windows 10",
        action: "start",
        date_actioned: 100
    },
    {
        user_id: 2,
        device: "OSX 15.4",
        action: "start",
        date_actioned: 200
    },
    {
        user_id: 1,
        device: "iPhone 8s",
        action: "start",
        date_actioned: 250
    },
    {
        user_id: 1,
        device: "Windows 10",
        action: "stop",
        date_actioned: 370
    },
    {
        user_id: 1,
        device: "iPhone 8s",
        action: "stop",
        date_actioned: 410
    },
    {
        user_id: 2,
        device: "OSX 15.4",
        action: "stop",
        date_actioned: 490
    },
    {
        user_id: 3,
        device: "Android",
        action: "start",
        date_actioned: 700
    }
];

// Write a (ES6) javascript function that takes in records (an array of all the database
//     records), an action, and a start_time and end_time time window and returns all user ids
//     that performed that action within that time window.

const checkBetweenDates = (min, max, value) => min <= value && value <= max;

function getUsers(data, action, start_time, end_time) {
    const userIdArray = [];

    data.forEach((user) => {
        if (user.action === action) {
            if (checkBetweenDates(start_time, end_time, user.date_actioned)) {
                userIdArray.push(user.user_id);
            }
        }
    });
    return userIdArray
}


/**
 * user 1 
 * start window 100
 * stop window 370
 * total 270
 * 
 * start iphon 250
 * stop iphone 410
 * total 160
 * --------
 * totoal playback 430
 * -----------------
 * user start window 100
 * user start iphone 250
 * playback between 150
 * 
 * user stop windows 370
 * user stop iphone 410
 * playback bewteen 40 
 * 







 * 
 * user 2
 * start 200
 * stop 490
 * total 690
 * 
 * user 3 
 * start 700
 * total 700
 */

function getPlaybackTime(id, data) {
    data.forEach((user) => {
        if (id)

    })


}
console.log(getPlaybackTime(1, records))
    // console.log(getUsers(records, "start", 700, 900))