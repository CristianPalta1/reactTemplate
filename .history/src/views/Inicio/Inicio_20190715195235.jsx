import React from "react";
import Portada from ""

class Inicio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div class="row">
            <div class="col-8">
                <Portada/>
            </div>
            <div class="col-4">col-4</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Inicio;
