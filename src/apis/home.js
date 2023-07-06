import bind from '../helper.js';

const home = (req,res) => {
    // console.log("white flag")
    bind(200,
        {"message":"Welcome to NodeJs Server Home Page!"},
        ...Array(4),res)
    
}
export default home
