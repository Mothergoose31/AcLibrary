import React from 'react';

function SearchResults({articles}) {
    let content;
    content = articles && articles.map((article,id)=>{
        return (
            <div className='list'>
                <p id='hiden'>{article._source.id}</p>
            <p key={id}>{article._source.authors[0]}</p>
            <p>{article._source.authors[1]}</p>
            <p>{article._source.datePublished}</p>
            <p>{article._source.description}</p>
            <a href={article._source.fullTextIdentifier}>{article._source.fullTextIdentifier}</a>
            <button  type="submit" className='button'>Add to Favorites</button>
            <br/>
            </div>

        )
    })
    return (
        <div className="App">
            
            {content}
        </div>
    )
}


export default SearchResults;