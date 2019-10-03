import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux'
import './Navigation.scss';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {autoSearchQuery} from './Utils/apiUtils'

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
                                placeholder="Search for a city..."
                                renderMenuItemChildren={(option, props) => (
                                    option.LocalizedName
                                )}
                                options={this.props.options}
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

export default connect(mapStateToProps)(Navigation);
