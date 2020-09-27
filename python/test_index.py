from index import user_allowed_applications

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


user_id_not_found = {'user_id': 0, 'application_permissions': [{'app_id': 1, 'features_allowed': []}, {'app_id': 2, 'features_allowed': []}, {'app_id': 3, 'features_allowed': []}]}
expected_outcome = {'user_id': 1, 'application_permissions': [{'app_id': 1, 'features_allowed': [1, 2]}, {'app_id': 2, 'features_allowed': [5]}, {'app_id': 3, 'features_allowed': []}]}

def test_can_not_find_user():
    can_not_find_user = user_allowed_applications(0, app_id_dictionary, app_permissions,user_permissions)
    assert  can_not_find_user == user_id_not_found

def test_matched_user_id():
    matched_user_id = user_allowed_applications(1, app_id_dictionary, app_permissions,user_permissions)
    assert  matched_user_id == expected_outcome
