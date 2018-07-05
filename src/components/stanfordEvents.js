import React, { Component } from 'react';
import Event from './event.js'
import cheerio from 'cheerio'
import { Header } from 'semantic-ui-react'

const URL="http://events.stanford.edu"

class StanfordEvents extends Component {
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
        <Header as={'h1'}>Stanford Events</Header>
        {this.props.data.map(ele =>{
          // console.log({ele});
          const $ = cheerio.load(ele)
          const src = `${URL}${$('img').attr('src')}`
          const title = $('h3', '.postcard-text').text()
          const date = $('strong').text()
          const info = $('p').text()
          const link = $('a').html()

          // console.log({src, title, date, info, link})

          return(
            <Event
              key={src}
              img={src}
              title={title}
              date={date}
              info={info}
              link={`${URL}${link}`}
            />
          )
        }) || null}
      </div>
    );
  }

}

export default StanfordEvents;
