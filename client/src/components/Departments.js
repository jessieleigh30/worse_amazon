import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';

class Departments extends React.Component {
  state = { departments: []}

  componentDidMount(){
    axios.get('/api/departments')
    .then(res => this.setState ({ departments: res.data}))
  }

  showDepts = () => {
    return this.state.departments.map(d => (
      <Link to={`departments/${d.id}}`}>
        <div style={{ padding: '20px', border: '2px solid black'}}>
          <CardStyles>
            <Card.Header
            style={{
              fontSize: "20px",
              height: '40px',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }} >
              {d.name}
            </Card.Header>
            <Card.Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image 
              style={{
                height: "120px",
                width: '160px',
              }}
              src={"https://loremflickr.com/400/400/commerce?" + Math.random()}
              alt="Department"
            />
            </Card.Content>
          </CardStyles>
        </div>
      </Link>
    ))
  }

  render() {
    return (
     <Card.Group>
     {this.showDepts()}
     </Card.Group>
    )
  }
}

const CardStyles = styled(Card)`
  height: 200px;
  width: 100px;

`

export default Departments;