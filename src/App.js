import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import { Grid, Header } from "semantic-ui-react"
import cheerio from 'cheerio'
import StanfordEvents from './components/stanfordEvents.js'
import EventBrightEvents from './components/eventBrightEvents.js'
import MeetupEvents from './components/meetupEvents.js'


class App extends Component {
  constructor(props){
    super()
    this.state={
      stanford:null,
      eventBright:null,
      meetup:null
    }
  }

  getStanford = async ()=>{
    await axios.get("http://events.stanford.edu/")
    .then(result=>{
      let $ = cheerio.load(result.data)
      let tags = []
      $('.postcard-link', '#main-content').map((i, ele)=>{
        tags[i]=$(ele).html()
      })
      // console.log({ ele:tags });
      this.setState({stanford:tags})
    })
    .catch(err=>{
      // console.log(err)
    })
  }
  getEventBright = async()=>{
    await axios.get("https://www.eventbrite.com/")
    .then(result=>{

      const $ = cheerio.load(result.data)
      let tags = []
      $('.js-events-list').children().map((i, ele)=>{
        tags[i]=$(ele).html()
      })
      // console.log(tags)
      this.setState({eventBright:tags})
    })
  }
  getMeetup = async() =>{
    await axios.get('https://www.meetup.com/find/events/?allMeetups=true&radius=5&userFreeform=Seattle%2C+Washington%2C+USA&mcId=c98101&change=yes&eventFilter=mysugg').then(result=>{
      const $ = cheerio.load(result.data)
      let tags = []
      $('li', '.event-listing-container-li').map((i, ele)=>{
        // console.log($(ele).html());
        tags[i]=ele
      })
      this.setState({meetup:tags})
      // console.log(tags);
    })
  }


  componentWillMount = () =>{
   this.getStanford()
   this.getEventBright()
   this.getMeetup()
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
        <Grid columns={4} centered >
          <Grid.Column >
            {
              this.state.stanford ? <StanfordEvents data={this.state.stanford} /> : null
            }
          </Grid.Column>
          <Grid.Column>
            {
              this.state.eventBright ? <EventBrightEvents data={this.state.eventBright} /> : null
            }
          </Grid.Column>
          <Grid.Column>
            {this.state.meetup ? <MeetupEvents data={this.state.meetup} />: null}
          </Grid.Column>
        </Grid>


      </div>
    );
  }
}

export default App;
