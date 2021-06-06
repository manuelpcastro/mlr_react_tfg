import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import axios from "axios";

import {API_MLRMODEL_URL} from "../constants";

import NewMlrModelModal from "./NewMlrModelModal";
import MlrModelList from "./MlrModelList";

class Home extends Component {
  render() {
    return (
      <Container>
        <h1>Home</h1>
        <p>
          <Link to="/login/">Login</Link>
        </p>
        <p>
          <Link to="/signup">Sign up</Link>
        </p>
        <p>
          <Link to="/dashboard">Dashboard</Link>
        </p>
      </Container>
    );
  }
}

// class Home extends Component {
//   state = {
//     mlr_models: []
//   };
//
//   componentDidMount() {
//     this.resetState();
//   }
//
//   getMlrModels = () => {
//     axios.get(API_MLRMODEL_URL).then(res => this.setState({ mlr_models: res.data }));
//   };
//
//   resetState = () => {
//     this.getMlrModels();
//   };
//
//   render() {
//     return (
//       <Container style={{ marginTop: "20px" }}>
//         <Row>
//           <Col>
//             <MlrModelList
//               mlr_models={this.state.mlr_models}
//               resetState={this.resetState}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <NewMlrModelModal create={true} resetState={this.resetState} />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

export default Home;