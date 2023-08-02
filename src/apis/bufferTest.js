import bind from '../helper.js';

const bufferTest = (req,res) => {
    // console.log("white flag")
    const buffer = Buffer("Simply Easy Learning", "utf-8");
    console.log(JSON.parse(JSON.stringify(buffer)).data);
    console.log(buffer.toString());
    bind(200,
        {"message":"Welcome to NodeJs Server bufferTest Page!","buffer_data":[buffer]},
        ...Array(4),res)
    
}
export default bufferTest