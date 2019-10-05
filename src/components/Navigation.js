import React from 'react';
import {Link} from "react-router-dom";
import {connect, Provider} from 'react-redux';
import {withRouter} from "react-router";
import './Navigation.scss';
import {AsyncTypeahead, Highlighter, } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { autoSearchQuery, requestCurrentConditionsByKey, requestNext5DaysForecast} from './Utils/apiUtils'
import {
    appendAutoCompleteOptions, setQueryLoadingState,
    updateCurrentCityInfoOffOfAutoComplete, updateCurrentCityWeatherInfo,
    updateCurrentLocation5daysWeather, toggleThemeState, toggleTempState
} from './Utils/actionCreators'
import {handleThemeChange} from '../index'

class Navigation extends React.Component {

    _handleSearch = (query) => {
        this.props.dispatch(setQueryLoadingState(true));
        autoSearchQuery(query)
            .then(value => {
                console.log('back from autoSearch: ', value);
                return value;
            })
            .then(value => {
                this.props.dispatch(appendAutoCompleteOptions(value));
                this.props.dispatch(setQueryLoadingState(false));
            })
    };
    handleSearchOptionSelection = selected => {
        this.props.dispatch(updateCurrentCityInfoOffOfAutoComplete(selected[0]))
        requestCurrentConditionsByKey(selected[0].Key)
            .then(value => {
                this.props.dispatch(updateCurrentCityWeatherInfo(value));
                return value
            })
            .catch(reason => console.log('requestCurrentConditions error: ',reason));
        requestNext5DaysForecast(selected[0].Key)
            .then(value => {
                this.props.dispatch(updateCurrentLocation5daysWeather(value));
                return value
            })
            .catch(reason => console.log('request5DaysConditions error: ',reason));

        this.typeahead.getInstance().clear()
    };

    componentDidMount() {
        handleThemeChange(!(this.props.theme==='light')) // TODO send a wrapper function that receives this.props.theme
        // and runs 'handleThemeChange.
    }

    render() {
        const {
            isCelsius,
            theme,
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
                                           onChange={(event) => {
                                               this.props.dispatch(toggleThemeState(event.target.checked));
                                               handleThemeChange(event.target.checked)
                                           }}
                                           checked={!(theme==='light')}
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
                                           onChange={() => this.props.dispatch(toggleTempState())}
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
    theme: state.theme,
    isLoading: state.isLoading,
    options: state.options
})

// export default connect(mapStateToProps)(Navigation);
export default withRouter(connect(mapStateToProps)(Navigation))

