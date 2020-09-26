import functools
'''
result
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
"app_id": 3
"features_allowed": []
},
...
]
}
'''


def user_allowed_applications(id, app_dictionary, app_permissions,
                              user_permissions):

    final_obj = {"user_id": id, "application_permissions": []}
    

    for user in user_permissions:
        get_user_id = user.get("user_id")
        get_features_allowed = user.get("features_allowed")

        if id == get_user_id:
            for app in app_permissions:
                get_features_available = app.get("features_available")
                get_app_id = app.get("app_id")

                match_array = []

                for x in get_features_available:
                    if x in get_features_allowed:
                        match_array.append(x)

                final_obj["application_permissions"].append({
                    "app_id": get_app_id,
                    "features_allowed": match_array
                })



    return final_obj


app_id_dictionary = [{"app_id": 1}, {"app_id": 2}, {"app_id": 126}]

app_permissions = [{
    "app_id": 1,
    "features_available": [1, 2, 3]
}, {
    "app_id": 2,
    "features_available": [3, 4, 5, 7]
}, {
    "app_id": 3,
    "features_available": [3, 12]
}]

user_permissions = [{
    "user_id": 1,
    "features_allowed": [1, 2, 5]
}, {
    "user_id": 2,
    "features_allowed": [
        1,
        2,
        3,
        4,
    ]
}, {
    "user_id": 3,
    "features_allowed": []
}]

a = user_allowed_applications(1, app_id_dictionary, app_permissions,
                          user_permissions)

print(a)