import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button, UncontrolledAlert} from 'reactstrap'
import uuidv4 from 'uuid/v4';
import {connect} from 'react-redux'
import {  addTopic} from '../actions/topicActions';

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title:'',
      msg: ''
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
		this.setState({ msg: nextProps.topics.msg });
		setTimeout(() => this.setState({ msg: '' }), 2000);
  }

  toggle = () => this.setState({ modal: !this.state.modal });

  changeHandle = (e) =>this.setState({ [e.target.name]: e.target.value });

	submitHandle = (e) => {
		e.preventDefault();
		const { title } = this.state,
			data = { id: uuidv4(), title, upvote: 0, downvote: 0 };
		title.length < 255
			? this.props.addTopic(data)
			: this.setState({ msg: 'Max Title Length is 255' }, () =>
					setTimeout(() => this.setState({ msg: '' }), 2000)
				);
		this.setState({ title: '' });
		this.toggle();
  };

  render() {
    const { success } = this.props.topics,
        { msg } = this.state;
    return (
      <Container className="py-5">
        <Form onSubmit={this.submitHandle}>
          <FormGroup className="d-flex align-items-center ">
            <Input
              placeholder="Input here..."
              value={this.state.title}
              name="title"
              maxLength="255"
              onChange={this.changeHandle}
            />
            <Button className="ml-3 nowrap" color="primary" type="submit">Add Topic</Button>
          </FormGroup>
        </Form>
        {msg && (
					<div className="response">
						<UncontrolledAlert  classname="m-auto clr" color={success ? 'info' : 'danger'}>{msg}</UncontrolledAlert>
					</div>
				)}
        <hr/>
      </Container>
    )
  }
}


const actionCreators = {
	
	addTopic
};

const mapStateToProps = (state) => ({
	topics: state.topics
});

export default connect(mapStateToProps, actionCreators)(AddPost);