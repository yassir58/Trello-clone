const endpoint = 'https://api.unsplash.com/'



export const fetchRandomCovers = async (count:number)=>{
    if (process)
    {
        fetch(`${endpoint}/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}/?cout=${count}`)
        .then (data=>data.json ())
        .then (photos=>photos)
    }
}