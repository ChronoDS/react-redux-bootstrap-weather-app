import React from 'react'
import TemperatureIndicator from "./TemperatureIndicator";
import urlFromImgId from "../Utils/urlFromIngId";

class NextDaysItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '00/00/0000',
            day: 'WhoDay'
        }
    }

    dateFormatting = rawDate => {
        let date = rawDate.substring(0, rawDate.indexOf('T'));
        date = date.split("-").reverse().join("-");
        this.setState({date})
    }

    getDayOfWeek = epochTime => {
        let date = (new Date(epochTime*1000)).getDay();
        const weekday = [];
        weekday[0] =  "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        this.setState({day: weekday[date]});
    }

    componentDidMount() {
        this.dateFormatting(this.props.Date);
        this.getDayOfWeek(this.props.EpochDate);
    }

    render() {
        return (
            <div className="col-md-2">
                <div className="card mb-4 shadow-sm">
                    <div className="card-body text-center">
                        <h6 className="text-uppercase m-2">{this.state.day}</h6>
                        <h4 className="text-uppercase m-0">
                            {this.props.Temperature.Minimum.Value}&#176;
                            -
                            {' '+this.props.Temperature.Maximum.Value}&#176;

                        </h4>
                        <div className="d-flex justify-content-around">
                            <TemperatureIndicator
                                temperature={this.props.Temperature.Minimum.Value}/>
                            <TemperatureIndicator
                            temperature={this.props.Temperature.Maximum.Value}/>
                        </div>
                        <div className="d-flex justify-content-around">
                            <img src={urlFromImgId(this.props.Day.Icon)}
                                 crossOrigin="anonymous"
                                 alt={this.props.Day.IconPhrase} />
                            <img src={urlFromImgId(this.props.Night.Icon)}
                                 crossOrigin="anonymous"
                                 alt={this.props.Night.IconPhrase} />
                        </div>
                        <hr className="my-4" />
                        <p className="text-uppercase m-2 small">{this.state.date}</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default NextDaysItem;
