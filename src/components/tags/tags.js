import React from "react";
import {  Button} from "antd";


const Tags = ({  changeData }) => {


  return (
    <React.Fragment>
       <div className="tags" style={{  float:'left', marginLeft:'30px' , justifyContent: 'space-between'}}>
       <Button type="primary" shape="round"  onClick={()=>changeData()}>ALL RECIPES</Button>
       <Button type="primary" shape="round" onClick={()=>changeData()}>INCORRECT</Button>
       <Button type="primary" shape="round" onClick={()=>changeData()}>UNTAGGED</Button>
       <Button type="primary" shape="round" onClick={()=>changeData()}>DISABLED</Button>
      </div>
    </React.Fragment>
  );
};

export default Tags;