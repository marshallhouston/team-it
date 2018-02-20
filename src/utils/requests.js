const baseURL = `https://team-it-api.herokuapp.com`

const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

const getTeams = () => {
  return fetch(`${baseURL}/api/v1/teams`)
    .then((response) => handleResponse(response))
    .then((teamData) => formatTeams(teamData))
    .catch((error) => console.error({ error }))
}

const formatTeams = (teamData) => {
  return teamData.data.map(team => teamInfo(team))
}

const getTeamDetails = (teamId) => {
  return fetch(`${baseURL}/api/v1/teams/${teamId}`)
    .then((response) => handleResponse(response))
    .then(teamDetails => formatTeamDetails(teamDetails))
    .catch((error) => console.error({ error }))
}

const formatTeamDetails = (teamDetails) => {
  const finalDetails = {}
  finalDetails.teamInfo = teamInfo(teamDetails.data)
  finalDetails.followers = teamDetails.included.map(user => followerInfo(user))
  return finalDetails
}

const teamInfo = (teamData) => {
  return {
    id: teamData.id,
    name: teamData.attributes.name,
    phone: teamData.attributes.phone
  }
}

const followerInfo = (user) => {
  return {
    id: user.id,
    name: user.attributes.name,
    phone: user.attributes.phone,
    email: user.attributes.email
  }
}

module.exports = {
  getTeams,
  getTeamDetails,
}
