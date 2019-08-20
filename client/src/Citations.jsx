import React from 'react';

function Citations({citations}) {
    console.log(citations)
    let content;
    if (citations.citations ){

        content = citations.citations.map((citation,id)=>{
            return (
            <div>
                {console.log(citation._id)}
                <p key={id}>{citation.citation}</p>
                <button className='button' >Remove this  citation</button>
            </div>
            )  
        })
    }
    else{
        content = <p> no content</p>
    }
    return (
        <div className="citationsContainer">
            <h3 className="detail">Citations and articles to read later </h3>
            {content}
            <br/>
            <br/>
            <input type="text" className ='input' placeholder="enter a citation"/>
        </div>
    )
}


export default Citations