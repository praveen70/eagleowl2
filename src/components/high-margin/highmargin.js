import React from "react";
import { Progress, Card } from "antd";
import '../high-margin/hignmargin.css'
import axios from "axios";
class Highmargin extends React.Component {
  state={
    hignhMargin:  []
  }

 async componentDidMount(){
    let res = await axios.get(`https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top`);
    this.setState({ hignhMargin: res.data.results})
    
  }
  render() {
    
    let data =this.state && this.state.hignhMargin ? this.state.hignhMargin : [];
   

    return (
     
        <div className="site-card-border-less-wrapper">
          <Card title="High Margin Recipes" bordered={false} style={{ width: '100%',height: '100%' }}>
              <div style={{display:'flex', justifyContent: 'space-between'}}>
                  {data.map((ele, index) =>{
                      return <p style={{fontSize:'16px', fontWeight: 800}} key={index}>{ele.name}</p>
                  })}
              </div>
        
              <div style={{display:'flex', justifyContent: 'space-between'}}> 
              {data && data.map((ele, index) => {
                  return <div key={index}><Progress strokeColor={{
                    '40%': '#108ee9',
                    '100%': '#87d068',
                  }} type="circle" percent={ele.fluctuation}  /></div>
              })}
            

              </div> 
          </Card>
        </div>
     
    );
  }
}

export default Highmargin;
