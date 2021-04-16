import React, {useState,useEffect} from 'react'
import '../App.css';
import axios from 'axios';

const Home = (props) => {
    const [posts, setposts] = useState()
    const {name,address} = props
    useEffect(()=>{
    axios.get(`/restaurant_info?name=${name}&address=${address}`)
    .then(res =>  {
        setposts(res.data);
    })
    .catch(err => {console.error(err)})
    },[name,address]) 
    
    return (
        <>  {posts?
            <div>
            <ol>
            <h3>Google results</h3>
            <li>Place_id: {posts.google_results.place_id}</li>
            <li>Business_status: {posts.google_results.business_status}</li>
            <li>Formatted_address: {posts.google_results.formatted_address}</li>
            <li>Name: {posts.google_results.name}</li>
            <li>open_now: {posts.google_results.open_now?'Yes':'No'}</li>
            </ol>
            <ul>
            <h3>Yelp results</h3>
            <img src={posts.yelp_results.image_url} alt={'nothing'} />
            <li>Name: {posts.yelp_results.name}</li>
            <li>Phone: {posts.yelp_results.phone}</li>
            <li>Price: {posts.yelp_results.price}</li>
            <li>Rating: {posts.yelp_results.rating}</li>
            <li>Review_count: {posts.yelp_results.review_count}</li>
            
            <li>Categories: <ol>{posts.yelp_results.categories.map((val,index) => <li key={index}>{val.alias} {val.title}</li>)}</ol></li>
            </ul>
            </div>:''}
            
        </>
    )
}

export default Home
