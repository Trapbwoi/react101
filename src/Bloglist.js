const Bloglist = ({blog}) => {

    
    return ( 
        <div className="blog">
           {blog.map((bg) => (
                <div className="a" key={bg.id}>
                    <img src={bg.img} alt="" />
                    <div className="b">
                        <h2>{bg.title}</h2>
                        <p>{bg.description}</p>
                        <span>{bg.author}</span>
                        <button>Read More</button>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default Bloglist;