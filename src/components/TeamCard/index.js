// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {each} = this.props
    const {id, name, teamImageUrl} = each
    return (
      <Link to={`/team-matches/${id}`}>
        <div className="teamCardsContainer">
          <img className="teamcardimg" src={teamImageUrl} alt={name} />
          <p className="teamcardname">{name}</p>
        </div>
      </Link>
    )
  }
}

export default TeamCard
