import React from 'react';
import './Favorites.scss';
import FavoriteItem from "../Common/FavoriteItem";
import {connect} from "react-redux";
import {isWeatherInformationObsolete} from "../Utils/baseUtils";
import {removeFromFavorites, triggerRenderWithCurrentChoice, updateFavorite} from "../Utils/actionCreators";
import {requestCurrentConditionsByKey} from "../Utils/apiUtils";

class Favorites extends React.Component {

    componentDidMount() {
        const currentDate = Date.now(new Date());
        this.props.favorites.map(favorite => {
            if (isWeatherInformationObsolete(currentDate, favorite.TTL)) {
            requestCurrentConditionsByKey(favorite.CityId)
                    .then(value => {
                        this.props.dispatch(updateFavorite(value, favorite.CityId));
                        return value
                    })
                    .catch(reason => console.log('requestCurrentConditions error: ', reason));
            } return favorite;
        });
    }

    render() {
        return (
            <div>
                <section className="favorites-section py-4 bg-black">
                    <div className="container">
                        <div className="row">
                            {this.props.favorites.map((location, index) => {
                                return <FavoriteItem
                                    {...location}
                                    isCelsius={this.props.isCelsius}
                                    isLightTheme={this.props.theme}
                                    key={index}
                                    removeFavorite={() => this.props.dispatch(removeFromFavorites(location.CityId))}
                                    displayFavorite={() => this.props.dispatch(triggerRenderWithCurrentChoice({...location}))}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    favorites: state.favorites,
    isCelsius: state.isCelsius,
    theme: state.theme
});

export default connect(mapStateToProps)(Favorites);
