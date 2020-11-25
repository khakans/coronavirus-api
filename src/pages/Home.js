import React, {Component} from "react"

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            SummaryGlobalCovid19: [],
            SummaryCountriesCovid19: []
        };
    }

    componentDidMount() {
        fetch("https://api.covid19api.com/summary", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api.covid19api.com",
            "x-rapidapi-key": "5cf9dfd5-3449-485e-b5ae-70a60e997864"
        }
        })
        .then(response => response.json())
        .then(response => {
        this.setState({
            SummaryGlobalCovid19: response.Global,
            SummaryCountriesCovid19: response.Countries
        })
        })
        .catch(err => { console.log(err); 
        });
    }

    render(){
        const { SummaryCountriesCovid19 } = this.state;
        const { SummaryGlobalCovid19 } = this.state;

        return(
        <div className="Home">
            <div className="container-fluid">
                <div className="row globaldata">
                    <div className="col-md-12" style={{marginTop: "15px"}}>
                        <div className="box">
                        <div className="card bg-dark text-light">
                        <div className="card-body">
                            <div style={{alignItems: "center", textAlign: "center"}}><img alt="UN flag" style={{width: "50px"}} src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg"></img> WORLD <img alt="UN flag" style={{width: "50px"}} src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg"></img></div>
                            <div className="row" style={{alignItems: "center", textAlign: "center", marginTop: "10px"}}>
                                <div className="col">
                                    New Case : <strong>{SummaryGlobalCovid19.NewConfirmed}</strong><br/>
                                    Total Case : <strong>{SummaryGlobalCovid19.TotalConfirmed}</strong>
                                </div>
                                <div className="col">
                                    New Death : <strong>{SummaryGlobalCovid19.NewDeaths}</strong><br/>
                                    Total Death : <strong>{SummaryGlobalCovid19.TotalDeaths}</strong>
                                </div>
                                <div className="col">
                                    New Recovered : <strong>{SummaryGlobalCovid19.NewRecovered}</strong><br/>
                                    Total Recovered : <strong>{SummaryGlobalCovid19.TotalRecovered}</strong>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row maindata">
                    {SummaryCountriesCovid19.map((CountriesCovid19, index) => (
                    <div key={index} className="col-xs-12 col-sm-6 col-md-3" style={{marginTop: "15px"}}>
                        <div className="box">
                        <div className="card bg-dark text-light">
                        <div className="card-body row">
                            <div className="col-sm-7">
                                <h5 className="card-title" style={{fontWeight: "bold"}}>{CountriesCovid19.Country}</h5>
                                <p className="card-text">Total Case : {CountriesCovid19.TotalConfirmed}</p>
                                <p className="card-text">Total Death : {CountriesCovid19.TotalDeaths}</p>
                                <p className="card-text">Total Recovered : {CountriesCovid19.TotalRecovered}</p>
                            </div>
                            <div className="col-sm-5">
                                <img alt={CountriesCovid19.CountryCode + "flag"} style={{height: 100}} src={"https://www.countryflags.io/" + CountriesCovid19.CountryCode + "/flat/64.png"}/>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        );
    }
}

export default Home