
// **********************************************************************************************************************************
// ******************************** THIS FILE IS JUST FOR SHOWCASING, SO NOT ACTUALLY IN USE ****************************************
// **********************************************************************************************************************************

import React, {Component} from 'react'

class LifeCycleMethods extends Component{
  constructor(){
    super()
    this.state = {}
  }

  // UNCOMMON
  // getSnapshotBeforeUpdate(){
  //   // create a backup of the current way things are
  //   // takes a snapshot of how the application is right now
  // }

  // doesn't remount when screen is rerendered, component only mounts once (similar to life cycle in real life "you are born")
  componentDidMount(){
    // GET the data I need to correctly display (so retrieve data before doing things with it)
  }

  // react updates the component whether something happened or not, but this life-cycle-method gives the developer the opportunity to choose to update or not 
  // this is important when optimizing the application for better performance
  shouldComponentUpdate(nextProps, nextState){
    // return true if we do want it to update
    // return false if not
  }

  componentWillUnmount(){
    // teardown or cleanup your code before your component disappears
    // f.e. remove event listener (f.e. in componentDidMount() there is a scroll event fired by the user, you want to remove it so there is are no performance issues)
  }

  render(){
    return(
      <div>
        Code goes here
      </div>
    )
  }
}

export default LifeCycleMethods