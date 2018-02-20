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
  return teamData.data.map(team => {
    return {
      id: team.id,
      name: team.attributes.name,
      phone: team.attributes.phone
    }
  })
}

module.exports = {
  getTeams,
}
