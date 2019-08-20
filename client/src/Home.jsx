import React, {useState, useEffect} from 'react';
import axios from 'axios'
import SearchResults from './SearchResults';


const Home = props => {
    const [articles,setArticles] = useState([]);
    const [search, setSearch] =useState(0);
    const [title,setTitle] = useState('');
    const [createFavorite,createSetFavorite] = useState ([]);

    var name = props.user ? props.user.name : '';

    


    
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('mernToken');
        axios.get(`/api/search?title=${title}`).then((response) => {
            console.log(response.data);
            setArticles(response.data);
            
            
        })
    }, [title])
    // function addFavs(name) {
    //     axios.post('/users/:id/players', { name }).then(res => {
    //         axios.get('/users/:id/players').then(res => {
    //             addFavs(res.data)
    //         })
    //     })
    // }

    // function addFavs(player) {
    //     axios.post(`/users/${user._id}/players`, { 
    //         firstName: player.first_name,
    //         lastName: player.last_name,
    //         playerId: player.id 
            
    //     }).then(res => {
    //         axios.get(`/users/${user._id}/players`).then(res => {
                
    //         })
    //     })
    // }

const addToFavorites = (pdfUrl,id,note,tags,user) => {
    
    console.log()
    
    
    axios.post(`/users/5d5c33f1ba2d801a536e24a4/articles`, {id:id,pdfUrl:pdfUrl}).then((response) => {
        axios.get(`/users/5d5c33f1ba2d801a536e24a4/articles`).then(response =>{
            createSetFavorite(response.data)
        })
    },[])
}
    // useEffect (() => {
    //     axios.post(`/users/5d573e62ea5bb30e9fe49fb3/articles`).then((response) => {
    //         console.log(response.data);
    //         createSetFavorite(response.data)
    //     })
    // },[])

    return(
        <div className = 'HomeContainer'>
            <h3>hello{name}</h3>
            <h4>your id is </h4>
            <h2>Home Page</h2>
            
            <div className='inputAndButton'>
                <input type="text" placeholder='search for articles'  onChange={(e)=>setTitle(e.target.value)} value={title}/>
                <button onClick={()=>setSearch()}>Search!</button>
            </div>
            <div className='searchResults'>
                <SearchResults articles={articles} addToFavorites={addToFavorites}></SearchResults>
            </div>

        </div>
    )
}

export default Home;