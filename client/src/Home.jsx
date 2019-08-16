import React, {useState, useEffect} from 'react';
import axios from 'axios'
import SearchResults from './SearchResults';

const Home = props => {
    const [articles,setArticles] = useState([]);
    const [search, setSearch] =useState(0);
    const [title,setTitle] = useState('');

    useEffect(()=>{
        
    })
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('mernToken');
        axios.get('/api/search').then((response) => {
            console.log(response.data);
            setArticles(response.data);
            
            
        })
    }, [])

    return(
        <div className = 'HomeContainer'>
            <h2>Home Page!</h2>
            
            <div className='inputAndButton'>
            <input type="text" placeholder='search for articles'  onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <button onClick={()=>setSearch()}>Search!</button>
            </div>
            <div className='searchResults'>
                <SearchResults articles={articles}></SearchResults>

            </div>

        </div>
    )
}

export default Home;