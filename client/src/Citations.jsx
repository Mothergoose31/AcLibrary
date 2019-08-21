import React from 'react';
import Modali, { useModali } from 'modali';



function Citations({citations,deleteCitation,updateCitation}) {
    const [Modal, toggleModal] = useModali();

    let content;
    if (citations.citations){

        content = citations.citations.map((citation,id)=>{
            return (
            <div>
                {console.log(citation._id)}
                <a key={id}href={citation.citation}>{citation.citation}</a>
                <br/>
                <br/>
                <button onClick={()=> toggleModal() }>
                Edit
                </button>
                <Modali.Modal {...Modal}>
                {citation.citation}
                </Modali.Modal>
                <button className='button' onClick={()=> deleteCitation(citation)} >Remove this  citation</button>
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