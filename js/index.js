const checkBetweenDates = (min, max, value) => min <= value && value <= max;

const ascendingSort = (array) => array.sort((a, b) => {
    return a - b;
});

function getUsers(data, action, start_time, end_time) {

    const userIdArray = [];

    data.forEach((user) => {
        if (user.action === action) {
            if (checkBetweenDates(start_time, end_time, user.date_actioned)) {
                userIdArray.push(user.user_id);
            }
        }
    });

    if (userIdArray.length === 0) {
        return []
    } else {

        const userArraySort = ascendingSort(userIdArray);

        // filter duplicates from userArraySort
        const fliteredUsers = userArraySort.filter((value, idx, array) => array.indexOf(value) === idx);

        return fliteredUsers
    }
}

function getPlaybackTime(id, records) {
    if (id === undefined || records === undefined) {
        throw new Error("Please add required parameters")
    }

    let instanceArray = [];

    records.forEach(data => {
        if (id === data.user_id) {
            instanceArray.push(data.date_actioned)
        }
    })

    const sortedArray = ascendingSort(instanceArray);

    if (sortedArray.length === 0) {
        return 0
    } else {
        return sortedArray[sortedArray.length - 1] - sortedArray[0]
    }

}

export { checkBetweenDates, getUsers, getPlaybackTime }