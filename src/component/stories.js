import React, { Component } from 'react'

export default class Stories extends Component {
    constructor(){
        super();

        this.state = {
            stories: []
        }
    }

    render() {
        return (
            <div>
                {this.state.stories.map(s => (
                    
                    <div className='row' key={s.id}>
                            <div className='col-sm-4'>

                            <div className='card'>

                                <div className="card-img-overlay">
                                    <img className='card-img img-fluid' src={s.img} alt='related to story'/>
                                
                                    <h5 className="card-title">{s.title}</h5>
                                    <p className='card-body'>{s.content}
                                        <button onClick={() => this.props.addToStory(s)} className="btn btn-primary">Add to Story</button>
                                    </p>
                                    
                                </div>
                            </div>

                            </div>
                            <div className='col-sm-4'>

                                <div className='card'>

                                    <div className="card-img-overlay">
                                    <img className='card-img img-fluid' src={s.img} alt='related to story'/>
                                    
                                        <h5 className="card-title">{s.title}</h5>
                                        <p className='card-body'>{s.content}
                                            <button onClick={() => this.props.addToStory(s)} className="btn btn-primary">Add to Story</button>
                                        </p>
                                        
                                    </div>
                                </div>

                                </div>
                            <div className='col-sm-4'>

                                <div className='card'>

                                    <div className="card-img-overlay">
                                    <img className='card-img img-fluid' src={s.img} alt='related to story'/>
                                    
                                        <h5 className="card-title">{s.title}</h5>
                                        <p className='card-body'>{s.content}
                                            <button onClick={() => this.props.addToStory(s)} className="btn btn-primary">Add to Story</button>
                                        </p>
                                        
                                    </div>
                                </div>

                                </div>
                        </div>
                    ))}
            </div>

        )
    }
}