import React, { Component } from 'react'
import { Container, Form, FormGroup, Input, Button, UncontrolledAlert} from 'reactstrap'
import uuidv4 from 'uuid/v4';
import {connect} from 'react-redux'
import {addTopic, getTopic, upVoteTopic, downVoteTopic } from '../actions/topicActions';
import '../assets/main.scss'
import PostList from '../components/PostList'

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

  componentDidMount() {
		this.props.getTopic();
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

  upVoteHandle = (id) => {
		this.props.upVoteTopic(id);
	};

	downVoteHandle = (id) => {
		this.props.downVoteTopic(id);
  };

  render() {
    const { topics, success } = this.props.topics,
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
        <hr />
        {msg && (
					<div className="response">
						<UncontrolledAlert  classname="m-auto clr" color={success ? 'info' : 'danger'}>{msg}</UncontrolledAlert>
					</div>
        )}
        {topics && (
					<PostList
            topics={topics.sort((b, a) => parseInt(a.upvote) - parseInt(b.upvote))}
            addHandle={this.toggle}
            upVoteHandle={this.upVoteHandle}
            downVoteHandle={this.downVoteHandle}
					/>
        )}
      </Container>
    )
  }
}

const actionCreators = {
  addTopic,
  getTopic,
	upVoteTopic,
	downVoteTopic
};

const mapStateToProps = (state) => ({
	topics: state.topics
});

export default connect(mapStateToProps, actionCreators)(AddPost);