import { useEffect, useState } from "react";
import './Profile.css';
import img1 from './image/me.jpg';
import img2 from './image/me2.jpg';
import img3 from './image/me3.jpg';
import img4 from './image/me4.jpg';
import img5 from './image/me5.jpg';
import Bloglist from "./Bloglist";

const Profile = () => {

    const [blog, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/blog")
            .then((response) => {
              return response.json()
            })
            .then((data) => {
              setBlogs(data)
            })
    }, [])
  





    return (
        <div className="general">

          {blog && < Bloglist blog={blog}/>}

        </div>


    );
}

export default Profile;