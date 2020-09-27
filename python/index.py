def user_allowed_applications(id, app_dictionary, app_permissions,user_permissions):

    final_obj = {"user_id": id, "application_permissions": []}
    foundUser = False

    for user in user_permissions:
        get_user_id = user.get("user_id")
        get_features_allowed = user.get("features_allowed")

        if id == get_user_id:
            foundUser = True
            for app in app_permissions:
                get_features_available = app.get("features_available")
                get_app_id = app.get("app_id")

                match_array = []

                for x in get_features_available:
                    if x in get_features_allowed:
                        match_array.append(x)

                final_obj["application_permissions"].append({
                    "app_id":
                    get_app_id,
                    "features_allowed":
                    match_array
                })

    if (foundUser == False):
        for app in app_permissions:
            final_obj["application_permissions"].append({
                "app_id": app["app_id"],
                "features_allowed": []
            })

    return final_obj