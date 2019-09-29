import React from 'react'
import {Link} from "react-router-dom";
import './Navigation.scss'

class Navigation extends React.Component {

    autoCompleteSearch = e => {
        return ; // TODO return search response in a debounce fashion.
    }

    updateStageForSearch = e => {
        // e.target.value
        return ; // TODO update the main stage with weather of the requested city.
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark py-1" id="mainNav">
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
                                    <Link className="nav-link js-scroll-trigger" to="/favorites">Favorites</Link>
                                </li>
                            </ul>
                            <form className="form-inline mt-2 mt-md-0 mr-2"
                                  onChange={event => this.autoCompleteSearch(event)}
                                  onSubmit={event => this.updateStageForSearch(event)}
                            >
                                <input className="form-control mr-sm-2" type="text" placeholder="Search a city.." aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <label className="switch">
                                <input type="checkbox" />
                                    <span className="slider round" />
                            </label>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"/>
                            </label>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default Navigation;
