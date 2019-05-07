import React from 'react'
import { Card, CardBody, Row, Col, Button} from 'reactstrap'
import '../assets/main.scss'

const PostList = (props) => {
	const addTopic = (
		<div className="my-3" onClick={props.addHandle}>
			
		</div>
	);

    return (
      <div>
				{props.topics && props.topics.map((topic, i) =>
				i < 20 && (
						<Card key={topic.id} className="card-border">
							<CardBody className="px-0 py-0">
								<Row>
								<Col sm={1} className="text-center">
									<Button className="btn-secondary2" onClick={() => props.upVoteHandle(topic.id)}>
										<i className="fa fa-2x fa-arrow-up" />
									</Button>
									<p className="upvote-counter">{topic.upvote}</p>
								</Col>
								<Col sm={1} className="text-center">
									<Button className="btn-secondary2" onClick={() => props.downVoteHandle(topic.id)}>
										<i className="fa fa-2x fa-arrow-down"  />
									</Button>
									<p className="downvote-counter ">{topic.downvote}</p>
								</Col>
								<Col sm={10} >
									<h5 className="ml-3 mt-2 text-wrap">{topic.title}</h5>
								</Col>
							</Row>
						</CardBody>
						<hr/>
						</Card>
					)
				)}
			{addTopic}
		</div>
    )
}

export default PostList;
