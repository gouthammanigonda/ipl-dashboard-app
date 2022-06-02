// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    dataList: [],
  }

  componentDidMount() {
    this.getIPLListsApi()
  }

  getIPLListsApi = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({
      dataList: updatedData,
    })
  }

  render() {
    const {dataList} = this.state
    return (
      <div className="body">
        <div className="home-container">
          <div className="logo-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              alt="ipl logo"
            />
            <h1 className="home-heading">IPL Dashboard</h1>
          </div>
          <div className="teamCards">
            {dataList.map(each => (
              <TeamCard key={each.id} each={each} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
