import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../socialproj_app/src/components/Navbar';
import home from './views/home';
import story1 from './views/story1';
import story2 from './views/story2';
import story3 from './views/story3';
import userprofile from './views/userprofile';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      name: "username",
      users: [],
      posts: []
    }
  }

  addToStory= (posts) =>{
    this.setState(
      {
        story: this.state.story.concat(posts)
      }
    )
  } 

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e);
   
      
    fetch(`https://ergast.com/api/f1/${username}/${post_id}/${date}/driverStandings.json`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
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
        
        <Navbar cart={this.state.story} sumCartStories={this.sumCartStories} />
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home name={this.state.users} racers={this.state.posts} handleSubmit={this.handleSubmit} />} />
            <Route exact path="/createChapter" render={() => <CreateChapter name={this.state.createChapter} />} />
            <Route exact path="/story1" render={() => <Story1 ={this.state.story1} />} />
            <Route exact path="/story2" render={() => <Story2 ={this.story2} />}/>
            <Route exact path="/story3" render={() => <Story3 ={this.state.stories} sumStories={this.sumStories} >} />
            <Route exact path="/stories" render={({ match }) => <Chapters match={match} addToCart={this.chapters}/>}/>
          </Switch>
        </main>
      </div>
    )
  }
}
        
export default App;
