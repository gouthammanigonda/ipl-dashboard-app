// Write your code here
import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  componentDidMount() {
    this.getTeamDetailsApi()
  }

  getTeamDetailsApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.latest_match_details)

    data.latest_match_details.map(each => console.log(each))
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    return (
      <div className={`team-container ${id}`}>
        <h1>hi</h1>
      </div>
    )
  }
}

export default TeamMatches
