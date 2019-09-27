import React from 'react'
import NextDaysItem from "./NextDaysItem";

class NextDays extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateToday: ''
        }
    }

    componentDidMount() {
        // let date = new Date()
    }

    render() {
        return (
            <div className="container-fluid">
                <h2> </h2>
                <h2 className={'mx-auto my-0 text-uppercase'}>{this.props.Headline.Text}</h2>
                <div className="row justify-content-center">
                    {this.props.DailyForecasts.map((day, index) => {
                        return <NextDaysItem {...day} key={index} />
                    })}
                </div>
            </div>
        )
    }
}

export default NextDays;
