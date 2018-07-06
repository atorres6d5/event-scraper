import React, { Component } from 'react';
import Event from './event.js'
import cheerio from 'cheerio'
import { Header } from 'semantic-ui-react'
const URL='https://www.meetup.com/find/events/?allMeetups=true&radius=5&userFreeform=Seattle%2C+Washington%2C+USA&mcId=c98101&change=yes&eventFilter=mysugg'

class MeetupEvents extends Component {

  render() {
    return (
      <div>
        <Header as={'h1'}>Meetup Events</Header>
        {this.props.data.map(ele =>{
          const $ = cheerio.load(ele)
          let title
          let info
          $('span[itemprop="name"]').map((i,ele)=>{
            if(i===0){
              info = $(ele).text()
            }
            if(i===1){
              title=$(ele).text()
            }
          })
          const link = $('a').attr('href')

          const date = $('time[itemprop="startDate"]').text()
          const count = $('.attendee-count').text()
          return(
            <Event
              key={title}
              title ={title}
              date={date}
              info={info}
              link={link}
              count={count}
            />
          )
        }) || null}
      </div>
    );
  }

}

export default MeetupEvents;
