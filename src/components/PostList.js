import React, { Component } from 'react'
import { Card, CardBody, Row, Col, Button} from 'reactstrap'

export default class PostList extends Component {
  render() {
    return (
      <div>
						<Card  className="card-border">
							<CardBody className="px-0 py-0">
								<Row>
									<Col sm={1} className="text-center">
										<Button className="btn-secondary2" >
											<i className="fa fa-2x fa-arrow-up" />
										</Button>
										<p className="upvote-counter">Counter</p>
									</Col>
									<Col sm={1} className="text-center">
										<Button className="btn-secondary2">
											<i className="fa fa-2x fa-arrow-down"  />
										</Button>
										<p className="downvote-counter ">Counter</p>
									</Col>
									<Col sm={10} >
										<h5 className="ml-3 mt-2 text-wrap">Title</h5>
									</Col>
								</Row>
							</CardBody>
							<hr/>
						</Card>
				
		</div>
    )
  }
}
