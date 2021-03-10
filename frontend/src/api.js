const updateUser = (user) => {
    if (!user.email)
        return Promise.reject({status: 404, error: "Email required"});
    if (!user.password)
        return Promise.reject({status: 404, error: "Password required"});
    if (!user.firstname)
        return Promise.reject({status: 404, error: "First name required"});
    if (!user.lastname)
        return Promise.reject({status: 404, error: "Last name required"});
    if (user.lastname.length < 3)
        return Promise.reject({status: 404, error: "Last name must be more than 2 characters"});
    if (!user.street)
        return Promise.reject({status: 404, error: "USER required"});
    if (!user.house)
        return Promise.reject({status: 404, error: "House required"});
    if (!user.postal)
        return Promise.reject({status: 404, error: "Post code required"});
    if (!user.country)
        return Promise.reject({status: 404, error: "Country required"});
    
    return Promise.resolve({status: 200, message: "Successfully updated", user: user});
}

export { updateUser };