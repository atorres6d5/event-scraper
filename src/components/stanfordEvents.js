import React, { Component } from 'react';
import Event from './event.js'
import cheerio from 'cheerio'
import { Header } from 'semantic-ui-react'

const URL="http://events.stanford.edu"

class StanfordEvents extends Component {



  render() {

    return (

      <div>
        <Header as={'h1'}>Stanford Events</Header>
        {this.props.data.map(ele =>{

          const $ = cheerio.load(ele)
          const src = `${URL}${$('img').attr('src')}`
          const title = $('h3', '.postcard-text').text()
          const date = $('strong').text()
          const info = $('p').text()


          const link = src.slice(0,-11)

          console.log({ info, date })

          return(
            <Event
              key={src}
              img={src}
              title={title}
              date={date}
              info={info.split(date)}
              link={link}
            />
          )
        })}
      </div>
    );
  }

}

export default StanfordEvents;
