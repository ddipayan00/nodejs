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
  // console.log("red flag")
  getUser(1)
  .then(user => getUserPosts(user))
  .then(userWithPosts => {
    bind(200,userWithPosts,...Array(4),res)
    // res.send(bindRes); 
  })
  .catch(error => {
    console.error("Error:", error);
    bind(400,{"message":"Error while loading about page"},...Array(4),res)
    // res.send(bindRes)
  });
}

export default about