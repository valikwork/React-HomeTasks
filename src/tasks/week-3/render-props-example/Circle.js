import React, { PureComponent } from 'react'

export default class Circle extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dragged: false,
            x: 0,
            y: 0,
            startX: 0,
            startY: 0
        }
        this.circle = React.createRef();
    }
    static getDerivedStateFromProps(props, state) {
        return {
            x: state.dragged ? props.x : state.x,
            y: state.dragged ? props.y : state.y,
        }
    }
    resetDraggable = () => {
        this.setState({ dragged: false })
        window.removeEventListener('mouseup', this.resetDraggable)
    }
    onMouseDown = (e) => {
        const { offsetLeft, offsetTop  } = this.circle.current;
        this.setState({ dragged: true, startX: e.pageX - offsetLeft, startY: e.pageY - offsetTop })
        window.addEventListener('mouseup', this.resetDraggable)
    }
    render() {
        let { x, y, startX, startY } = this.state;
        return (
            <div
                ref={this.circle}
                style={{ position: 'absolute', left: x - startX, top: y  - startY}}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                className='cirlce'>
            </div>
        )
    }
}
