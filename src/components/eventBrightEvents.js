import React, { Component } from 'react';
import Event from './event.js'
import cheerio from 'cheerio'
import { Header } from 'semantic-ui-react'

const URL="https://www.eventbrite.com/"

class EventBrightEvents extends Component {
  // constructor(props){
  //   super(props)
  //   this.state= {
  //
  //   }
  // }


  render() {
    // console.log("data", this.props.data);
    return (
      <div>
        <Header as={'h1'}>Event Bright Events</Header>
        {this.props.data.map(ele =>{
          // console.log({ele});
          const $ = cheerio.load(ele)
          console.log();
          const src = $('img').attr('src')
          const title = $('.poster-card__title').text()
          const date = $('time').text()
          const info =$('.poster-card__venue').text()
          const link =$('.js-event-link').attr('href')

          // console.log({src, title, date, info, link})

          return(
            <Event
              key={src}
              img={src}
              title={title}
              date={date}
              info={info}
              link={link}
            />
          )
        }) || null}
      </div>
    );
  }

}

export default EventBrightEvents;
