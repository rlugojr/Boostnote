import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import ProfileImage from 'browser/components/ProfileImage'

export default class UserNavigator extends Component {
  renderUserList () {
    if (this.props.users == null) return null

    var users = this.props.users.map((user, index) => (
      <li key={'user-' + user.id}>
        <Link to={'/users/' + user.id} activeClassName='active'>
          <ProfileImage email={user.email} size='44'/>
          <div className='userTooltip'>{user.name}</div>
          {index < 9 ? <div className='keyLabel'>{'⌘' + (index + 1)}</div> : null}
        </Link>
      </li>
    ))

    return (
      <ul className='userList'>
        {users}
      </ul>
    )
  }

  render () {
    return (
      <div className='UserNavigator'>
        {this.renderUserList()}
        <button className='createTeamBtn'>
          +
          <div className='tooltip'>Create a new team</div>
        </button>
      </div>
    )
  }
}

UserNavigator.propTypes = {
  users: PropTypes.array
}
