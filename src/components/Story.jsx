import '../App.css';

export default function Story({
    title, link, creator, image, description
}) {
    function handleDelete(e) {
        // if(e.target === e.currentTarget){
        //     return;
        // } 
        // if (e.target.tagName !== SPAN){
        //     return;
        // } else {
        //     e.currentTarget.remove();
        // }
        if (e.target.className === 'closeIcon'){
            e.currentTarget.remove();
        }
    }
    return(
        <div className="storyContainer" onClick={handleDelete}>
            <div className="topContainer">
                <img src={image} alt={title}/>
                <div>
                    <h2><a href={link} target="_blank">{title}</a></h2>
                    <h3>By: {creator}</h3>
                </div>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <span className="closeIcon">x</span>
        </div>
    )
}