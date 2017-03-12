import Teams from '../models/team'

export default {
    sharedBoards: {
        path: '/sharedTeams',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Collaborator\'s teams'
            Teams.find({ collaborators: { $in: [req.session.uid] } })
                .then(teams => {
                    res.send(handleResponse(action, teams))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    }
}


function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}