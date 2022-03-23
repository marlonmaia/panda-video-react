import React from 'react';

const iframeStyle = {
  border:"none",
  position:"absolute",
  top:0,
};

export default class PandaVideo extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      url: this.atomizeUrl(props.url),
      width: this.props.width ? this.props.width : "100%",
      height: this.props.height ? this.props.height : "100%"
    }
    
  }

  atomizeUrl(url) {
    try {
      let idPLayer = url.split('https://b-')
      idPLayer = idPLayer[1].split('.tv.pandavideo.com.br')

      let idVideo = url.split('/playlist')
      idVideo = idVideo[0].split('.com.br/')
      
      return `https://player-${idPLayer[0]}.tv.pandavideo.com.br/embed/?v=${idVideo[1]}&muted=false&autoplay=false`
    } catch (error) {
      return false
    }
  }

  render() {
    if(this.state.url){
      return (
        <div style={{position:"relative", paddingTop:"56.25%"}}>
          <iframe
            id="panda-player" 
            src={this.state.url} 
            style={iframeStyle}
            width={this.state.width}
            height={this.state.height}
          />
        </div>
      )
    } else {
      return (
        <>url inválida</>
      )
    }
  }
}