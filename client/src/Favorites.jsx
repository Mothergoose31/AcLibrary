import React from 'react';

function Favorites({favorites, deleteArticle}) {
    console.log(favorites)
    let content;
    if (favorites.articles ){

        content = favorites.articles.map((article,id)=>{
            return (
            <div>
                {console.log(article._id)}
                <p key={id}>{article.id}</p>
                <p>{article.pdfUrl}</p>
                <p>{article.note}</p>
                <p>{article.tags}</p>
                <button  onClick={()=> deleteArticle(article)} className='button' >Remove this article</button>
            </div>
            )  
        })
    }
    else{
        content = <p> no content</p>    
    }
    return (
        <div className="ArticleFaves">
            <h3 className="detail">Favorite Articles</h3>
            {content}
        </div>
    )
}


export default Favorites