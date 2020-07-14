import React from "react";
import Listcontent from "../components/listof-content/listofcontent";
class Container extends React.Component {
  render() {
    return (
      <div className="contaner" style={{background: 'none'}}>
        <Listcontent />
      </div>
    );
  }
}

export default Container;
