import React, { Component } from 'react'
import AddPost from '../components/AddPost'
import PostList from '../components/PostList'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <AddPost></AddPost>
        <PostList></PostList>
      </div>
    )
  }
}
