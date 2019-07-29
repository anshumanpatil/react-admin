import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import HomeConnected from '../../components/homeConnected/HomeConnected'
import Sidebar from '../../components/sidebar/Sidebar'
import Content from '../Content/Content'
import Auth from '../../services/Auth'
class Dashboard extends PureComponent {
    componentDidMount() {
        const { success, user } = this.props;
        if (!Auth.getToken()) {
            this.props.history.push('/');
            return;
        }
        window.jQuery("#AppComponent").removeClass("container")
    }
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <Content />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { ...state.login };
};

export default connect(mapStateToProps, {})(Dashboard);
