import React from 'react'
import NextDaysItem from "./NextDaysItem";
import {connect} from "react-redux";

class NextDays extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h3 className={'mx-auto my-4 pl-4 text-uppercase'}>The Next 5 Days:</h3>
                <div className="row justify-content-center">
                    {this.props.DailyForecasts.map((day, index) => {
                        return <NextDaysItem {...day} key={index} />
                    })}
                </div>
            </div>
        )
    }
}


export default connect()(NextDays);
