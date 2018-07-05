import React from 'react';
import { Card, Image, Icon, Segment } from "semantic-ui-react"

const Event = ({img, title, date, info, link, count}) => (
  <div>
    <Segment>
      <Card>
          <Image src={img} />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
              <span className='date'>{date}</span>
            </Card.Meta>
            <Card.Description>{info}</Card.Description>
            {count ? <Card.Meta>
              <span className='count'>{count}</span>
            </Card.Meta>:null }
            {link ? <Card.Description href={link}>Event Link</Card.Description> : null}
          </Card.Content>
        </Card>
    </Segment>
  </div>
);


export default Event;
