import React, { Component } from 'react'

export default class Upload extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Image URL"/>
          <button>Add to Gallery</button>
        </form>
      </div>
    )
  }
}
