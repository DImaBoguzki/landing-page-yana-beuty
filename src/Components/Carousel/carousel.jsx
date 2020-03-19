import React, { Component } from 'react';
import './carousel.css';
import {setDelay} from '../../global-func';

class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            x: 0,
            isChange: false,
            time: 4000,
            fontSize: 8 // vw
        }
        this.interval=null;
    }
    componentDidMount() {
        this.handleIncreas();
        this.interval=setInterval(this.handleIncreas, this.state.time);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    handleIncreas = async () => {
        if(this.state.index === (this.props.children.length-1))
            this.setState({index:0, x:0, isChange: true})
        else this.setState({index: this.state.index+1, x:0, isChange: true})
        await setDelay(100);
        this.setState({isChange: false,x:-100});
    }
    render() { 
        // 5 is font size in css file 
        const lengthStr = (this.props.children[this.state.index].props.children.props.children.length*this.state.fontSize);
        const styleOn={
            transform: `translateX(${this.state.x}vw)`,
            opacity: 0.7,
            transition: `all ${this.state.time-100}ms ease-in-out`,
            fontSize: `${this.state.fontSize}vw`,
        }
        const styleOff={
            transform: `translateX(${this.state.x+(lengthStr+1)}vw)`,
            opacity: 1,
            fontSize: `${this.state.fontSize}vw`,
        }
        return (
            <div className='carousel-container'>
                <div className='carousel' style={this.state.isChange===true ? styleOff:styleOn}>
                    {this.props.children[this.state.index]}
                </div>
            </div>
        );
    }
}
 
export default Carousel;