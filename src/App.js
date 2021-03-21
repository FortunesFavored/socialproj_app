import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../socialproj_app/src/components/Navbar';
import home from './views/home';
import story1 from './views/allStories';
import story2 from './views/story2';
import story3 from './views/story3';
import userprofile from './views/userprofile';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "username",
      users: [],
      chapters: []
    }
  }

  addToStory= (chapters) =>{
    this.setState(
      {
        story: this.state.story.concat(chapters)
      }
    )
  } 

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e);
   
    //database url will go here with appropriate fetch fields  
    fetch(`https://localhost:5000/stories/${story_id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
              stories: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                ///some data from database: stories have their own unique id with 5 chapters, 
                ///each referencing a parent story(either story1, 2, or 3)
              
            })
        })
      .catch(error => console.log(error))
    pass //remove once we have database set up
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
        
        <Navbar Stories={this.state.storytree} sumStories={this.sumStories} />
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home name={this.state.users} chapters={this.state.chapter} stories={this.state.stories}handleSubmit={this.handleSubmit} />} />
            <Route exact path="/createChapter" render={() => <CreateChapter name={this.state.createChapter} />} />
            <Route exact path="/storytree" render={() => <Storytree name={this.state.story} />} />
            <Route exact path="/stories" render={({ match }) => <Chapter match={match} addToStory={this.chapter}/>}/>
          </Switch>
        </main>
      </div>
    )
  }
}
