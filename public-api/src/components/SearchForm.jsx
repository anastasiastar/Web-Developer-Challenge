
import React, {Component} from 'react';
import axios from 'axios'
import { Form,Button,Row,Col,Container,Alert } from 'react-bootstrap';
export default class SearchForm extends Component{

    constructor(props){
        super(props);
        this.state = {results:""}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const apiBase = "http://openlibrary.org/search.json?q=" + event.target.elements.book.value
    
        axios.get(apiBase).then(res =>{
            this.props.onEnteredSearch(res.data.docs)
            this.setState({book:res.data.docs})
        }
        )
      }

    render(){
        return (
            <Alert variant="dark" >
                <Alert.Heading>Search For a Book By its Title</Alert.Heading>
            <Container >
                <Form onSubmit={this.handleSubmit}>
                 <Row>
                    <Col  xs={8} md={4} lg={7} >
                        <Form.Group className="mt-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="book" placeholder="Search Book Title" />
                        </Form.Group>
                    </Col>
                    <Col  xs={1} md={2} lg={4} className="mt-3 mr-15">
                        <Button variant="outline-dark" type="submit"   >
                        Search
                        </Button>
                    </Col>
                </Row>
            </Form>
          </Container>
          </Alert>
        );
    }
}