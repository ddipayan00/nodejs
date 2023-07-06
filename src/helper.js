
// const json = require('json-bigint')(); // Using the json-bigint library for handling large numbers


const bind = ( code, data, web = true, verbose = true, devMsg = null, header = {}, res = {},ContentType = "application/json", AccessControlAllowOrigin = "*") => {
    let response = {};

    header['Access-Control-Allow-Origin'] = AccessControlAllowOrigin
    
    if (web) {
      response = {
        statusCode: 200,
        body: JSON.stringify({
          status: code,
          result: data,
          devMessage: devMsg
        }),
        headers: header
      };
    } else {
      response = {
        statusCode: code,
        body: JSON.stringify(data),
        headers: header
      };
    }
  
    if (verbose) {
      console.log(`returning: ${JSON.stringify(response)}`);
    } else {
      console.log(`returning with code: ${code}, devMsg: ${devMsg}`);
    }
    // res.set('Access-Control-Allow-Origin',AccessControlAllowOrigin);
    res.setHeader('Access-Control-Allow-Origin',AccessControlAllowOrigin)
    res.setHeader('Content-Type',ContentType)
    res.json(response)
  }

const webBind = (kwargs) => {
    kwargs.web = true;
    return bind(kwargs);
}
  

// function dumpJson(...args) {
//   function defaultFunc(obj) {
//     if (obj instanceof Decimal) {
//       return obj.toString();
//     } else if (obj instanceof Date || obj instanceof time || obj instanceof datetime) {
//       return obj.toString();
//     } else if (obj instanceof datetime) {
//       return obj.toString();
//     }
//     throw new TypeError(`Object of type '${typeof obj}' is not JSON serializable`);
//   }

//   const kargs = {
//     default: defaultFunc,
//   };

//   return json.stringify(...args, kargs);
// }


export default bind
// export default webBind