import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Timer from './Timer';

describe('Timer', () => {
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
    beforeAll(() => (container = shallow(<Timer/>)))

    it('should render a <div />', () => {
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    })
})
