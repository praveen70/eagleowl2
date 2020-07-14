import React from "react";
import { Progress, Card } from "antd";
import axios from "axios";

import './lowmargin.css'
class Lowhmargin extends React.Component {
  state={
    lowMargin:  []
  }

  async componentDidMount(){
    let res = await axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom&limit=2`);
    this.setState({ lowMargin: res.data.results})
    
  }
  render() {
    let data =this.state && this.state.lowMargin ? this.state.lowMargin : [];
   

    return (
     
        <div className="site-card-border-less-wrapper">
          <Card title="Low Margin Recipes" bordered={false} style={{ width: '100%', height: '100%' }}>
              <div style={{display:'flex', justifyContent: 'space-between'}}>
                  {data.map((ele, index) =>{
                      return <p style={{fontSize:'16px', fontWeight: 800}} key={index}>{ele.name}</p>
                  })}
              </div>
        
              <div style={{display:'flex', justifyContent: 'space-between'}}> 
              {data && data.map((ele, index) => {
                  return <div key={index}><Progress type="circle" percent={ele.margin}  /></div>
              })}
            

              </div> 
          </Card>
        </div>
     
    );
  }
}

export default Lowhmargin;
