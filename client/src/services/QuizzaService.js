const baseUrl = 'http://localhost:3000/api/quizza/';

export default {
  getScores() {
    return fetch(baseUrl)
    .then(res => res.json())
  },
  deleteScore(id){
    return fetch(baseUrl + id, {
      method: 'DELETE'
    })
  },
  addScore(payload){
    return fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  },

  deleteAll(){
    return fetch(baseUrl, {
      method: 'DELETE'
    })
  }
}
