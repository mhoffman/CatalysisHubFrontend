import React from 'react';
import { shallow } from 'enzyme';
import { EnergiesPageInput } from '../Input';

describe('<Input />', () => {
  it('returns a div', () => {
    expect(shallow(
      <EnergiesPageInput
        receiveReactions={() => {}}
        clearSystems={() => {}}
        submitSearch={() => {}}
      />,
      { context: {} }
    ).type()).toBe('div');
  });
});
