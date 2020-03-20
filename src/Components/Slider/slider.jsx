import React, { Component } from 'react';
import {setDelay} from '../../global-func';
import './slider.css';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            fade: 'in', // in, out, reset
            fadeTime: 250,
            delay: 5000,
            loadImg: false
        }
        this.timeOut=null;
    }
    componentDidMount() {
        this.timeOut=setTimeout(this.handleIncrease,this.state.delay);
    }
    componentWillUnmount() {
        clearTimeout(this.timeOut);
    }
    handleIncrease = async () => {
        //out
        this.setState({fade: 'out',loadImg:false});
        await setDelay(this.state.fadeTime/2);
        //reset
        this.setState({fade:'reset'})
        await setDelay(this.state.fadeTime/2);
        // in
        if((this.props.children.length-1)===this.state.index)
            this.setState({index:0})
        else 
            this.setState({index:this.state.index+1});
        while(this.state.loadImg===false){
            await setDelay(50);
        }
        this.setState({fade:'in'});
        this.timeOut=setTimeout(this.handleIncrease,this.state.delay);
        await setDelay(this.state.delay-this.state.fadeTime);
    }
    handleChngeIndex=async(i)=>{
        if(this.state.index===i) return;
        //out
        clearTimeout(this.timeOut);
        this.setState({fade: 'out',loadImg: false});
        await setDelay(this.state.fadeTime/2);
        //reset
        this.setState({fade:'reset'})
        await setDelay(this.state.fadeTime/2);
        this.setState({index:i})
        while(this.state.loadImg===false){
            await setDelay(50);
        }
        this.setState({fade:'in'});
        this.timeOut=setTimeout(this.handleIncrease,this.state.delay);
        await setDelay(this.state.delay-this.state.fadeTime);
    }
    handleOnLoadImg=()=>{
        this.setState({loadImg:true});
    }
    render() { 
        const fadeIn={
            opacity: 1,
            transform: 'translateX(0)',
            transition: `all ${this.state.fadeTime}ms ease-in-out`,
        }
        const fadeOut={
            opacity: 0,
            transform: 'translateX(-100%)',
            transition: `all ${this.state.fadeTime}ms ease-in-out`,
        }
        const reset = {
            opacity: 0,
            transform: 'translateX(100%)',  
        }
        // mav of slider
        const ell=[];
        for(let i=0;i<this.props.children.length;i++){
            ell.push(<div key={i} index={i} 
                className='item-nav-slider' 
                style={this.state.index===i ? {backgroundColor: 'black', transition: `all ${this.state.fadeTime}ms ease-in-out`}:{backgroundColor: 'white'}}
                onClick={()=>this.handleChngeIndex(i)}/>)
        }
        return (
            <div className="slider-container">
                <div className="slider" style={this.state.fade==='in' ? fadeIn : this.state.fade==='out' ? fadeOut : reset}>
                    {React.cloneElement(this.props.children[this.state.index], { onLoad: ()=>this.handleOnLoadImg(this.props.children[this.state.index]), })}
                </div>
                <div className='nav-slider'>
                    {ell}
                </div>
            </div>
        );
    }
}
 
export default Slider;