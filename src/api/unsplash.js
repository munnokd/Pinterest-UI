import axios from 'axios'

export default axios.create({
    baseUrl:'https://api.unsplash.com/',
    headers:{
        Authorization:"Client-ID _Hdvct4p3awZ9lz1DPXjnfk9_3BnAnaUAQ-VS8mWO-c"
    }
})