// Libraries
import React from 'react';
import styled from 'styled-components';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
// Components
import { SliderRail, Handle, Track, Tick } from './sliderComponents';

const sliderStyle = {
  marginTop: '15px',
  width: '100%',
};

const domain = [0, 2500];
const defaultValues = [0, 2500];

export default function MinMaxTest({ min, setMin, max, setMax, setPage }) {
  return (
    <Wrapper>
      <div>
        Price range: ${min} - ${max}
      </div>
      <Slider
        mode={2}
        step={1}
        domain={domain}
        rootStyle={sliderStyle}
        onChange={(e) => {
          setMin(e[0]);
          setMax(e[1]);
          setPage(1);
        }}
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10px;
  position: relative;
  width: 100%;
  height: 80px;
`;
