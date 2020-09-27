# Grip Tech Technical Interview Questions

## Question 1

*1. Write a (ES6) javascript function that takes in records (an array of all the database*
*records), an action, and a start_time and end_time time window and returns all user ids*
*that performed that action within that time window*

### Identify any possible shortcomings or limitations of both your functions if any:

- getUsers function doesn't contain any error handling and doesn't check if the values supplied to the function are correct
- In a real work scenario, the function would be async this would allow data to be called from a database rather than static mock data
- I feel like there could be a more efficient way of getting user data, I feel that if you're using a large data set there might be some drawback on the speed due to how many steps are taken to get the desired outcome. If you are looking to optimize it maybe look at search algorithms

## Question 2

*2. Write a javascript function that takes in a user_id and an array of all the database*
*records, and reports a user’s total “unique” playback time in seconds.*

### Identify any possible shortcomings or limitations of both your functions if any:

- getPlaybackTime has validation at the start and will throw an error. Throwing an error can sometimes be destructive to the larger process, so depending on how it would be used I might change throw to console.error(error) and return a 0. this can keep the process running but in the logs alert any things that have gone wrong
- In a real-world scenario, the function would be async to use live data and the forEach would be a map() because we can use async and return an altered array rather than a new one
- Could put functions in a class because they are related to the same thing, this will keep code neat a concise 

## Question 6

*6. Write a Python 3 function that takes in a user_id, the above three lists and returns a*
*dictionary object that looks something like this:*

```JSON
{
    "user_id": 1,
    "application_permissions": [
        {
            "app_id": 1,
            "features_allowed": [1, 2]
        },
        {
            "app_id": 2,
            "features_allowed": [5]
        },
        {
            "app_id": 3,
            "features_allowed": []
        }]
}
```

*In other words, return a dictionary object which shows, for all allowed applications, the allowed*
*features for a user.*

### Identify any possible shortcomings or limitations of both your functions if any:

- user_allowed_applications is rather large, I feel there is a way to slim it down minimising steps thus improving performance