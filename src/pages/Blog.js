import React from "react"
import axios from 'axios'
import { Link } from "react-router-dom";

import Sidebar from './Sidebar'

class Blog extends React.Component {
    
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/post', {
            headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('_token')
            }
          })
        .then(response=> {
            this.setState({
                posts: response.data.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        let posts      = this.state.posts
        if(posts.length === 0) {
            return (
                <h1>Loading.....</h1>
            )
        } else {
            return (
                <div>
                    <div className="main-book-category-list">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h2 className="theme_heading_green mb-0">Blog Post</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">

                                { posts.map(post=>

                                    <div className="card mb-4">
                                        <img className="card-img-top" src={post.image} alt={post.title}/>
                                        <div className="card-body">
                                            <h2 className="card-title">{post.title}</h2>
                                            <p className="card-text">
                                                {post.description}
                                            </p>
                                            
                                            <Link to={"single/" + post.id} blogid={post.id} className="btn btn-primary">
                                                Read More →
                                            </Link>
                                        </div>
                                        <div className="card-footer text-muted">
                                            Posted on {post.date} by
                                            <a href="#"> {post.user.name}</a>
                                        </div>
                                    </div>
                                )}

                                </div>

                                <Sidebar/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Blog;
