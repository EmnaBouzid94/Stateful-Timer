import React, { Component } from 'react'
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        
            ss:1,
            mm:0,
            hh:0,
            b:true,
            h:"00",
            m:"00",
            s:"00", 
         }
         
    }
    
     
    Start=() => {
this.setState({b:!this.state.b})
       
        if (this.state.b)
       
       
          {  
           this.int=setInterval(() => {
             
                this.setState(
                    {ss:this.state.ss+1,
                    s:((this.state.ss)%60).toString().padStart(2,0),mm:parseInt((this.state.ss/60)),m:((this.state.mm)%60).toString().padStart(2,0),hh:parseInt((this.state.ss/3600)),h:this.state.hh.toString().padStart(2,0)
                    
                    })
        }, 1000)}
        else {clearInterval(this.int)}
     
    }
        
    
    Reset=() =>{
        this.setState({h:"00",
        m:"00",
        s:"00",
    
        ss:1,
        mm:0,
        hh:0,
        b:true})
        clearInterval(this.int)
    }

   
    render() { 
        
        return (  <div className="tel">
            
            <div className="time-digits">
           
              { this.state.h}:{ this.state.m}:{ this.state.s }
            </div>
            <div className="time-text">
                <div className="time-text-item">Hour</div>
                <div className="time-text-item">Minute</div>
                <div className="time-text-item">Second</div>
            </div>
            <div className="buttons">
                <button className="start" onClick={this.Start}>Start</button>
                <button className="reset" onClick={this.Reset}>Reset</button>

            </div>
        </div>);
    }
}
 
export default Timer;