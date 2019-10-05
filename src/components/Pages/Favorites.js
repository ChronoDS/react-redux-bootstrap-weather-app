import React from 'react';
import './Favorites.scss';
import FavoriteItem from "../Common/FavoriteItem";
import {connect} from "react-redux";

class Favorites extends React.Component {
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
                                    key={index}/>
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
