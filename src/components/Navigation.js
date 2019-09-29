import React from 'react';
import {Link} from "react-router-dom";
import './Navigation.scss';
// import {Typeahead} from 'react-bootstrap-typeahead';

// const cities = [
//     "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda",
//     "Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
//     "Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia",
//     "Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei",
//     "Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands",
//     "Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands",
//     "Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark",
//     "Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea",
//     "Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France",
//     "French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana",
//     "Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea",
//     "Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India",
//     "Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey",
//     "Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia",
//     "Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau",
//     "Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
//     "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro",
//     "Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands",
//     "Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea",
//     "Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay",
//     "Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia",
//     "Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia",
//     "Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands",
//     "Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis",
//     "St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan",
//     "Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia",
//     "Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates",
//     "United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City",
//     "Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCelsius: true,
            theme: 'light'
        }
    }

    autoCompleteSearch = e => {
        return ; // TODO return search response in a debounce fashion.
    }

    updateStageForSearch = e => {
        // e.target.value
        return ; // TODO update the main stage with weather of the requested city.
    }

    updateTempType = e => {
        const isCelsius = !this.isCelsius;
        this.setState({isCelsius})
    }
                                                                                    // py-1
    render() {
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
                                    <input type="checkbox" className="custom-control-input" id="themeSwitch" />
                                    <label
                                        className="custom-control-label text-white pr-2"
                                        htmlFor="themeSwitch">Light / Dark Theme</label>
                                </div>

                                <div className="custom-control custom-switch">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="temperatureSwitch"
                                           onClick={event => this.setState({isCelsius: !this.state.isCelsius})}
                                    />
                                    <label
                                        className="custom-control-label text-white pr-2"
                                        htmlFor="temperatureSwitch"
                                    >C / F</label>
                                </div>
                            </div>

                            <form className="form-inline mt-2 mt-md-0 mr-2"
                                  onChange={event => this.autoCompleteSearch(event)}
                                  onSubmit={event => this.updateStageForSearch(event)}>
                                <input
                                    className="form-control mr-sm-2"
                                    type="text"
                                    name="city"
                                    placeholder="Search a city.."
                                    aria-label="Search" />
                                <button
                                    className="btn btn-outline-success my-2 my-sm-0"
                                    type="submit">Search</button>
                            </form>

                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default Navigation;
