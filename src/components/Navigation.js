import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import './Navigation.scss';
import {AsyncTypeahead, Highlighter, } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {autoSearchQuery, requestCurrentConditionsByKey, requestNext5DaysForecast} from './Utils/apiUtils'

class Navigation extends React.Component {

    // TODO move dispatches to actionCreators.
    _handleSearch = (query) => {
        this.props.dispatch({type: 'SET_IS_LOADING', isLoading: true});
        autoSearchQuery(query)
            .then(value => {
                console.log('back from autoSearch: ', value);
                return value;
            })
            .then(value => {
                this.props.dispatch({
                    type: 'ADD_SEARCH_OPTIONS',
                    options: value,
                    isLoading: false
                });
                this.props.dispatch({type: 'SET_IS_LOADING', isLoading: false});
            })
    };

    handleSearchOptionSelection = selected => {
        // TODO move dispatch to actionCreators.
        this.props.dispatch({
            type: 'UPDATE_CURRENT_CITY_INFO',
            City: selected[0].LocalizedName,
            CityId: selected[0].Key,
            OriginCountry: selected[0].Country.LocalizedName,
        })
        requestCurrentConditionsByKey(selected[0].Key)
            .then(value => {
                // TODO move dispatch to actionCreators.
                this.props.dispatch({
                    type: 'UPDATE_CURRENT_CITY_CONDITIONS',
                    WeatherText: value.WeatherText,
                    WeatherIcon: value.WeatherIcon,
                    Temperature: value.Temperature.Metric.Value,
                    IsDayTime: value.IsDayTime
                });
                return value
            })
            .catch(reason => console.log('requestCurrentConditions error: ',reason));
        requestNext5DaysForecast(selected[0].Key)
                .then(value => {
                    this.props.dispatch({
                        type: 'UPDATE_CURRENTS_WEEK_ENTIRELY',
                        DailyForecasts: value
                    });
                    return value
                })
                .catch(reason => console.log('request5DaysConditions error: ',reason));

        this.typeahead.getInstance().clear()
    };

    render() {
        const {
            isCelsius,
            isLightTheme,
            children
        } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger" to="/">CastAWeather</Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className={'navbar-toggler-icon'} />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav mr-auto">
                                <li>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger"
                                          to="/favorites">Favorites</Link>
                                </li>
                            </ul>
                            <div className="toggle-group">
                                <div className="custom-control custom-switch">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="themeSwitch"
                                           onChange={() => this.props.dispatch({type: 'TOGGLE_THEME'})}
                                           checked={!isLightTheme}
                                    />
                                    <label
                                        className="custom-control-label text-white pr-2"
                                        htmlFor="themeSwitch"
                                    >Light / Dark Theme</label>
                                </div>
                                <div className="custom-control custom-switch">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="temperatureSwitch"
                                           onChange={() => this.props.dispatch({type: 'TOGGLE_TEMP'})}
                                           checked={!isCelsius}
                                    />
                                    <label
                                        className="custom-control-label text-white pr-2"
                                        htmlFor="temperatureSwitch"
                                    >C / F</label>
                                </div>
                            </div>

                            <AsyncTypeahead
                                id={'search'}
                                isLoading={this.props.isLoading}
                                labelKey="LocalizedName"
                                minLength={3}
                                onSearch={this._handleSearch}
                                onChange={this.handleSearchOptionSelection}
                                placeholder="Search for a city..."
                                renderMenuItemChildren={(option, props) => (
                                    <Highlighter search={props.text}>
                                        {option[props.labelKey]}
                                    </Highlighter>
                                )}
                                options={this.props.options}
                                ref={(typeahead) => this.typeahead = typeahead}
                            />
                        </div>
                    </div>
                </nav>
                {children}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isCelsius: state.isCelsius,
    isLightTheme: state.isLightTheme,
    isLoading: state.isLoading,
    options: state.options
})

// export default connect(mapStateToProps)(Navigation);
export default withRouter(connect(mapStateToProps)(Navigation))

