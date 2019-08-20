import React from 'react';
import Modali, { useModali } from 'modali';



function Citations({citations}) {
    const [Modal, toggleModal] = useModali();

    // updateCitation = e => {
    //     e.preventDefault();
        
    //     Axios.put(``, {citation}).then(res => {
    //         const shelterIndex = shelters.findIndex(s => s._id === _id);
    //         shelters.splice(shelterIndex, 1, res.data);
    //         this.setState({ shelters, showModal: false });
    //     }).catch(err => console.log('errrrr', err));
    // }

    let content;
    if (citations.citations ){

        content = citations.citations.map((citation,id)=>{
            return (
            <div>
                {console.log(citation._id)}
                <p key={id}>{citation.citation}</p>
                <button onClick={toggleModal}>
        Edit
        </button>
        <Modali.Modal {...Modal}>
        {citation.citation}
        </Modali.Modal>
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