import React from "react"
import axios from 'axios'

class Home extends React.Component {
    
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
        let { categories } = this.state
        
        if(categories.length === 0) {
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
                                    <h2 className="theme_heading_green mb-0">Category</h2>
                                </div>
                            </div>
                            <div className="row">
                                
                                { categories.map(category=>
                                    
                                    <div className="col-sm-2" key={category.id}>
                                        <div className="single-book-category">
                                            <div className="book-category-image">
                                                <img className="book-category-thumbnail-image" src={category.image} alt={category.name} />
                                            </div>
                                            <div className="book-category-content">
                                                <a href="sdfsfsdf" className="book-category-title">{ category.name }</a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Home;
