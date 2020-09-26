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


function getPlaybackTime(id, records) {
    let instanceArray = [];

    records.forEach(data => {
        if (id === data.user_id) {
            instanceArray.push(data.date_actioned)
        }
    })

    const sortedArray = instanceArray.sort((a, b) => {
        return a - b
    });

    return sortedArray[sortedArray.length - 1] - sortedArray[0]
}

console.log(getPlaybackTime(1, records))