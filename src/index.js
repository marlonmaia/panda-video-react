import React from 'react';
import ReactDOM from 'react-dom';

import PandaVideo from './lib/PandaVideo'

ReactDOM.render(
  <div>
    <PandaVideo 
      url={'https://b-vz-d8bc0913-372.tv.pandavideo.com.br/d14cc0137-f74699-8185-480eacd13198b/playlist.m3u8'}
      width='100%'
      height='100%'
    />
  </div>,
  document.getElementById('root')
);