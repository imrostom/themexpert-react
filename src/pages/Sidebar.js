import React from "react"
import axios from 'axios'

class Sidebar extends React.Component {
    
    state = {
        categories: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/category', {
            headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('_token')
            }
          })
        .then(response=> {
            this.setState({
                categories: response.data.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        let categories = this.state.categories
        
        return (
            <div className="col-md-4">
                <div className="card">
                    <h5 className="card-header">Search</h5>
                    <div className="card-body">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..."/>
                            <span className="input-group-append">
                                <button className="btn btn-secondary" type="button">Go!</button>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="card my-4">
                    <h5 className="card-header">Categories</h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list-unstyled mb-0">
                                    { categories.map(category=>
                                        <li>
                                            <a  href="#">{ category.name }</a>
                                        </li>
                                    )}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
