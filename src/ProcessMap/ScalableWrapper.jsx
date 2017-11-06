import React, { PureComponent } from 'react';


class ScalableWrapper extends PureComponent {
  state = { scale: 1 }

  makeRef = node => { this.node = node; }

  componentDidMount() {
    this.scale();
    window.addEventListener('resize', this.scale);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.scale);
  }

  scale = () => {
    const scale = this.node.parentElement.offsetWidth / this.props.width;
    this.setState({ scale });
  }

  render() {
    return (
      <div
        ref={this.makeRef}
        style={{
          transform: `scale(${this.state.scale})`,
          transformOrigin: 'left top',
          padding: '0 50px',
          width: this.props.width
        }}
      >
        {this.props.children}
      </div>
    )
  }

};

export default ScalableWrapper;
