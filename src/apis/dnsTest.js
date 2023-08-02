import bind from '../helper.js';

// Node.js program to demonstrate the
// dns.resolve() method

// Accessing dns module
import dns from 'dns';
const home = (req,res) => {
    let ip_address = undefined;
    // Set the rrtype for dns.resolve() method
    const rrtype="A";
    
    // Calling dns.resolve() method for hostname
    // geeksforgeeks.org and print them in
    // console as a callback
    const dns_lookup = dns.lookup('geeksforgeeks.org',(err,address,family) => {
        console.log("family : ",family)
        console.log("address : ",address)
        // 5937 9:15 am rani-eco

    })
    const dns_resolve = dns.resolve(
        'geeksforgeeks.org', 
        rrtype, 
        (err, records, ip_address) => {
            console.log('records: %j', records);
            ip_address = records
            console.log(ip_address)
            return ip_address
        }
        );
    console.log("dns_lookup : ",dns_lookup)
    console.log("dns_resolve : ",dns_resolve," || ",dns_resolve.oncomplete());
    console.log("ip_address : ",ip_address);
    const data = {
        "message":"Welcome to NodeJs Server DNS-TEST Page!",
        "dns_resolve":dns_resolve,
        "dns_lookup":dns_lookup,
        "ip_address":ip_address
    }
    console.log(data);
    bind(200,
        data,
        ...Array(4),res)
    
}
export default home