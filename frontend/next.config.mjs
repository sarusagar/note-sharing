/** @type {import('next').NextConfig} */
const NextConfig ={
    images:{
        remotePatterns :[
            {
                protocol : 'http',
                hostname : 'localhost'
            }
        ]
    }
    
};
export default NextConfig