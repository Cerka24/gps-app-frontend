export default function Landing() {
    return (
        <main>
            <Header/>
            <Body/> 
            <Footer/>
        </main>
    );
}

function Header() {
    return (
        <header>
            <div>
                <span>Logo</span>
                <span>MyCarLocationApp</span>
            </div>
            <div>
                <button>Register</button>
                <button>Login</button>
            </div>
        </header>
    );
}

function GPSInfo(props) {
    return (
        <div id="grid_content">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

function Body() {
    return(
        <div>
            <img src={"https://www.svgrepo.com/show/444075/map-car.svg"} alt={"Car image"}/>
            <div id="grid">
                <div>
                    <GPSInfo title={"GPS Information"} description={"A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.[1][2] French inventor Nicolas-Joseph Cugnot built the first steam-powered road vehicle in 1769, while French-born Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion-powered automobile in 1808."}/>
                </div>
                <div>
                    <GPSInfo title={"GPS Information"} description={"A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.[1][2] French inventor Nicolas-Joseph Cugnot built the first steam-powered road vehicle in 1769, while French-born Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion-powered automobile in 1808."}/>
                </div>
                <div>
                    <GPSInfo title={"GPS Information"} description={"A car, or an automobile, is a motor vehicle with wheels. Most definitions of cars state that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people, not cargo.[1][2] French inventor Nicolas-Joseph Cugnot built the first steam-powered road vehicle in 1769, while French-born Swiss inventor François Isaac de Rivaz designed and constructed the first internal combustion-powered automobile in 1808."}/>
                </div>
            </div>
        </div>
    );
}

function Footer() {
    return (
      <span id="footer">&copy;MyCarLocationApp</span>
    );
}
