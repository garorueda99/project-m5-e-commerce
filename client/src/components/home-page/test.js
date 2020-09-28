// Libraries
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
// Components
import { SliderRail, Handle, Track, Tick } from './components'; // example render components - source below

const sliderStyle = {
  position: 'relative',
  width: '100%',
};

const domain = [0, 2500];
const defaultValues = [0, 2500];

function App() {
  return (
    <div style={{ margin: '10%', height: 120, width: '80%' }}>
      <Slider
        mode={2}
        step={1}
        domain={domain}
        rootStyle={sliderStyle}
        onUpdate={this.onUpdate}
        onChange={this.onChange}
        values={defaultValues}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={5}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map((tick) => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  );
}

render(<App />, document.getElementById('root'));
