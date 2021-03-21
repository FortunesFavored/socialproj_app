import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import home from './views/home';
import allStories from './views/allStories';
import createChapter from './views/createChapter';
import myStories from './views/myStories';
import startStory from './views/startStory';
import userprofile from './views/userprofile';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "username",
      users: [],
      chapters: [],
      stories: [],
      date: []
    }
  }
  addToStories = (chapter) => {
    this.setState(
    {  
      stories: this.state.story.concat(chapter)
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

  storyTree= () => {
    this.setState(
      {
        storyTree: this.state.storytree.concat(stories)
      }
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    fetch(`https://localhost:5000/chapter/${username}${date_created}${title}${id}${content}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          stories: data.title.date_created.id
              
            })
      })

      .catch(error => console.log(error))
  }


  sumStories = (aList) => {
      let total = 0;
      for (let i = 0; i < aList.length; i++){
          total += aList[i]
      }
      return total
  }

  render() {
    return (
      <div>
        
        <Navbar Stories={this.state.allStories} sumStories={this.sumStories} />
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home name={this.state.users} chapters={this.state.chapter} stories={this.state.stories}handleSubmit={this.handleSubmit} />} />
            <Route exact path="/createChapter" render={() => <CreateChapter create={this.state.createChapter} />} />
            <Route exact path="/myStories/:id" render={({ match }) => <MyStories name={this.state.users} stories={this.state.stories} match={match} />}/>
            <Route exact path="/allStories/:id" render={({ match }) => <AllStories match={match} />}/>
          </Switch>
        </main>
      </div>
    )
  }
}
