import React from 'react';


export default function (Component) {
 class Draggable extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isDragging: false,
                x: 0,
                y: 0,
                startX: 0,
                startY: 0
            }
            this.draggable = React.createRef();
        }
        componentDidMount() {
            window.addEventListener('mouseup', this.resetDraggable)
            window.addEventListener('mousemove', this.trackMousePosition)
        }
        componentWillUnmount() {
            window.removeEventListener('mouseup', this.resetDraggable)
            window.removeEventListener('mousemove', this.trackMousePosition)
        }
        resetDraggable = () => {
            this.setState({ isDragging: false })
        }
        trackMousePosition = e => {
            if (this.state.isDragging) {
                this.setState({ 
                    x: e.pageX,
                    y: e.pageY
                })
            }
        }
        startDragging = e => {
            const { offsetLeft, offsetTop } = this.draggable.current;
            this.setState({
                isDragging: true,
                x: e.pageX,
                y: e.pageY,
                startX: e.pageX - offsetLeft,
                startY: e.pageY - offsetTop
            })
        }
        render() {
            const { x, y, startX, startY } = this.state;
            const styles = {
                position: 'absolute',
                left: x - startX,
                top: y - startY
            }
            return (
                <div
                    style={styles}
                    className='draggable'
                    onMouseDown={this.startDragging}
                    ref={this.draggable}
                >
                    <Component {...this.props} />
                </div>
            )
        }
    } 
    return Draggable
}