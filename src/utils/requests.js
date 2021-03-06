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
    teamCode: teamData.attributes.team_code
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

const postFollowerHeaders = (name, phone, email) => {
  return {
    method: `POST`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      follower: {
        name: name,
        phone: phone,
        email: email
      }
    })
  }
}

const addFollowers = (teamId, name, phone, email) => {
  return fetch(`${baseURL}/api/v1/teams/${teamId}/followers`, postFollowerHeaders(name, phone, email))
    .then((response) => handleResponse(response))
    .catch((error) => console.error({ error }))
}

const postTeamHeaders = (name) => {
  return {
    method: `POST`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      team: { name: name }
    })
  }
}

const createTeam = (name) => {
  return fetch(`${baseURL}/api/v1/teams`, postTeamHeaders(name))
    .then(response => handleResponse(response))
    .catch(error => console.error({ error }))
}

module.exports = {
  getTeams,
  getTeamDetails,
  addFollowers,
  createTeam,
}
