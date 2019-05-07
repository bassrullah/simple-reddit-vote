import React, { Component } from 'react'
import AddPost from '../components/AddPost'
import PostList from '../components/PostList'
import '../assets/main.scss'

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
