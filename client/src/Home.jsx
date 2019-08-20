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


const addToFavorites = (pdfUrl,_id) => {
    axios.post(`/users/5d573e62ea5bb30e9fe49fb3/articles`, {_id,pdfUrl}).then((response) => {
        axios.get(`/users/5d573e62ea5bb30e9fe49fb3/articles`).then(response =>{
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
            <h4>your id is {name._id}</h4>
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