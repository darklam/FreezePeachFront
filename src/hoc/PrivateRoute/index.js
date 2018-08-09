import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Route {
  componentDidMount() {
    if (!this.props.token) {
      this.props.history.push("/auth");
    }
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(withRouter(PrivateRoute));
