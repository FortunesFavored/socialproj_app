import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './views/home';
import AllStories from './views/allStories';
import MyStories from './views/myStories';
import userprofile from './views/userprofile';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "user_id",
      chapter: [],
      stories: []
    }
  }
  addToStories = (chapter) => {
    this.setState(
      {
        stories: this.state.story.concat.chapter
      }
      )  
  }
   
  createChapter= (chapter) =>{
    this.setState(
      {
        stories: this.state.story.concat(chapter)
      }
    )
  } 

  handleSubmitStory= (e) => {
    e.preventDefault();
    console.log(e);
    let username = e.target.username.value;
    let date_created = e.target.date_created.value;
    let title = e.target.title.value;
    let id = e.target.id.value;

    fetch(`https://localhost:5000/stories/${username}${date_created}${title}${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          stories: data.title.date_created.id
              
            })
      })

      .catch(error => console.log(error))
  }

  
   
  handleSubmitChapter = (e) => {
    e.preventDefault();
    console.log(e);
    let username = e.target.username.value;
    let date_created = e.target.date_created.value;
    let title = e.target.title.value;
    let id = e.target.id.value;
    let content = e.target.content.value;

    fetch(`https://localhost:5000/chapter/${username}${date_created}${title}${id}${content}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          chapter: data.title.date_created.id.content
              
            })
      })

      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        
        <Navbar Stories={this.state.allStories} sumStories={this.sumStories} />
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home stories={this.state.stories} handleSubmitStory={this.handleSubmitStory} />} />
            <Route exact path="/myStories/:id" render={({ match }) => <MyStories name={this.state.users} stories={this.state.stories} match={match} />}/>
            <Route exact path="/allStories/:id" render={({ match }) => <AllStories match={match} />}/>
          </Switch>
        </main>
      </div>
    )
  }
}
