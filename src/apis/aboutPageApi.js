import axios from 'axios';
import bind from '../helper.js';

function getUser(userId) {
  return new Promise((resolve, reject) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.trace('getUser');
        reject(error);
      });
  });
}
  
function getUserPosts(user) {
  return new Promise((resolve, reject) => {
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(response => {
          const userWithPosts = { ...user, posts: response.data };
          resolve(userWithPosts);
          })
          .catch(error => {
              reject(error);
      });
  });
}

const about = (req,res) => {
  console.log(req.query.userId)
  if (req.query.userId === undefined || req.query.userId === null || req.query.userId.length === 0) {
    let messageJson = {"message":"UserId not found in the parameters !"}
    let code = 400
    return bind(code,messageJson,...Array(4),res)
  }
  getUser(req.query.userId)
  .then(user => getUserPosts(user))
  .then(userWithPosts => {
    let code = 200
    bind(code,userWithPosts,...Array(4),res)
    // res.send(bindRes); 
  })
  .catch(error => {
    console.error("Error:", error);
    let messageJson = {"message":"Error while loading about page"}
    let code = 400
    bind(code,messageJson,...Array(4),res)
    // res.send(bindRes)
  });
}

export default about