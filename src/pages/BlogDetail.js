import React,{useState, useEffect} from "react"
import {
  useParams
} from "react-router-dom";
import axios from 'axios'
import Sidebar from "./Sidebar";

function BlogDetail() {
    const [post, setPost]= useState([]);
    const [comments, setComments]= useState([]);
    const [postComment, setPostComment]= useState([]);
    
    let { id } = useParams();

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/post/' + id, {
            headers: {
              'Authorization': 'Bearer 1|sUpbgnNh0Snmd9ZgIUlqxJDu1YcEcQuoYSJjVozc'
            }
          })
        .then(response=> {
            console.log(response.data.data);
            setPost(response.data.data)
        })
        .catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/post/' + id + '/comment', {
            headers: {
              'Authorization': 'Bearer 1|sUpbgnNh0Snmd9ZgIUlqxJDu1YcEcQuoYSJjVozc'
            }
          })
        .then(response=> {
            console.log(response.data.data);
            setComments(response.data.data)
        })
        .catch(error => console.log(error))

    },[]);

    const changeHandler = (event) => {
        setPostComment(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        let comment = {
            'comment': postComment,
            'post_id': id
        }
        
        axios.post('http://127.0.0.1:8000/api/comment', comment, {
            headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('_token')
            }
          })
        .then(response=> {
            setComments(response.data.data)
        })
        .catch(error => console.log(error))

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h1 className="mt-4">{ post.title }</h1>
                        <hr/>
                        <p>Posted on { post.date }</p>
                        <hr/>
                        <img className="img-fluid rounded w-100" src={ post.image } alt={ post.title }/>
                        <hr/>
                        <p className="lead">{ post.description }</p>
                        <hr/>
                        <div className="card my-4">
                            <h5 className="card-header">Leave a Comment:</h5>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea onChange={changeHandler} className="form-control" rows="3"></textarea>
                                    </div>
                                    <button onClick={submitHandler} type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                        { comments.map(comment=>
                                    
                            <div className="media mb-4" key={comment.id}>
                                <img className="d-flex mr-3 rounded-circle commentimage" src={ comment.user.image } alt=""/>
                                <div className="media-body">
                                <h5 className="mt-0">{ comment.user.name }</h5>
                                { comment.comment }
                                </div>
                            </div>
                            
                        )} 

                    </div>
                    
                    <Sidebar/>

                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
