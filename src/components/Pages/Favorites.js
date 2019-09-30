import React from 'react'
import './Favorites.scss'
import FavoriteItem from "../Common/FavoriteItem";
import {connect} from "react-redux";
// import {favoriteLocations} from '../../assets/jsonExamples/examplePackets'

class Favorites extends React.Component {
    render() {
        return (
            <div>
                <section className="favorites-section py-4 bg-black">
                    <div className="container">
                        <div className="row">
                            {this.props.favorites.map((location, index) => {
                                return <FavoriteItem {...location}
                                    key={index}
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
    favorites: state.favorites
})

export default connect(mapStateToProps)(Favorites);
