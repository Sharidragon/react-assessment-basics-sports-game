class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }
        this.shotSound = new Audio('./assets/audio/Back+Board.wav')
        this.scoreSound = new Audio("./assets/audio/Swish+2.wav")
    }

    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()
        
            if (Math.random() > 0.5) {
            score += 1
            setTimeout(() => {
                this.scoreSound.play()
            }, 100)

        }
        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }

    // playSound () {
    //     const swish = new Audio("./assets/audio/Swish+2.wav")
    //     swish.play()
    // }
    render(){
        let shotPercentageDiv

        if (this.state.shots){
        const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
        shotPercentageDiv = (
            <div>
            <strong>Shooting %:{shotPercentage}</strong>
        </div>
        )
        }
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>
                <div className='identity'>
                    <img src={this.props.logo} alt={this.props.name} />
                </div>

                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>
                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>

                {shotPercentageDiv}

                <button onClick={this.shotHandler}>Shoot</button>
            </div>
        )
    }
}


function Game(props) {
    return (
        <div className="Game">

            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
            <Team 
            name={props.visitingTeam.name} 
            logo={props.visitingTeam.logoSrc}
            />
          <div className="versus">
              <h1>VS</h1>
          </div>  
                <Team 
            name={props.homeTeam.name}
            logo={props.homeTeam.logoSrc}
            />
            </div>
        </div>
    )
}

function App(props) {
    const dragon = {
        name: 'Dragon',
        logoSrc: './assets/images/dragon.jpg'
    }
    const freedom = {
        name: 'Freedom',
        logoSrc: './assets/images/Freedom.gif'
    }
    const peanuts = {
        name: 'Peanuts',
        logoSrc: './assets/images/Peanuts.jpg'
    }
    const bananas = {
        name: 'Bananas',
        logoSrc: './assets/images/Bananas.jpg'
    }
    return (
      <div className="App">
            <Game 
            venue="The Playground"
            homeTeam={dragon}
            visitingTeam={freedom} 
            />
            <Game 
            venue="Keenesburg" 
            homeTeam={peanuts}
            visitingTeam={bananas}/>            
      </div>
    )
  }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );  
