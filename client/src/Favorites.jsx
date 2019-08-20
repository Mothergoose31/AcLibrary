import React from 'react';

function Favorites({favorites, deleteArticle}) {
    console.log(favorites)
    let content;
    if (favorites.articles ){

        content = favorites.articles.map((article,id)=>{
            return (
            <div>
                    <p key={id}>{article}</p>
                    {/* <p>{article.pdfUrl}</p>
                    <p>{article.note}</p>
                    <p>{article.tags}</p> */}
    
                    <button onClick={console.log("Clicked!")} onClick={()=> deleteArticle(article.id)} className='button' >Remove this article</button>
                </div>
            )  
        })
    }
    else{
        content = <p> no content</p>
    }
    return (
        <div className="ArticleFaves">
            <p className="detail">Favorite Articles:</p>
            {content}
        </div>
    )
}


export default Favorites