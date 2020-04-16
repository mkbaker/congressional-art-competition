import React, { Component } from "react";

import { connect } from "react-redux";

import './AdminPortal.css';

// components
import AdminHeader from '../AdminHeader/AdminHeader';


class LandingPage extends Component {
    componentDidMount() {
      this.props.dispatch({
          type: "GET_ALL_ART"
      });
    }

    render() {

        return (
            <div class="admin-portal-wrapper">

                <AdminHeader/>

                <section class="admin-upload">
                <h2>Image Upload</h2>
                <div class="new-image-wrapper">
                    <div class="all-inputs">
                        <div>
                            <button class="ui button">
                                <i class="arrow up icon" />Upload
                            </button>
                        </div>
                        <div class="text-inputs">
                            <div>
                                <label for="title">Title:</label>
                                <div class="ui input">
                                    <input type="text" id="title" placeholder="Title..."/>
                                </div>
                            </div>

                            <div>
                                <label for="artist">Artist:</label>
                                <div class="ui input">
                                    <input type="text" id="artist" placeholder="Artist..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="submit-btn">
                        <button class="ui green button">
                            Submit
                        </button>
                    </div>
                </div>
                </section>
            
                <section class="admin-votes">
                    <h2>Votes</h2>
                    <div class="chart-wrapper">
                        {/* jsChart goes here */}
                    </div>
                    <div>
                        <button class="ui button">Download CSV</button>
                    </div>
                </section>

                <section class="admin-edit">
                    <div>
                        <button class="ui button">Edit Images</button>
                    </div>
                </section>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);