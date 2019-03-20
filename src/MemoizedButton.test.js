import React from 'react';
import MemoizedButton from './MemoizedButton';
import { mount } from 'enzyme';

const MOCK_CLASS = 'mockClass';
const MOCK_CONTENT = 'mockContent';

describe('React.memo(<Button>) ', () => {
    const wrapper = mount(
        <MemoizedButton className={MOCK_CLASS}>{MOCK_CONTENT}</MemoizedButton>
    );

    it('applies className passed in as prop', async () => {
        expect(wrapper.hasClass(MOCK_CLASS));
    });

    it('renders a <button> element containing children', async () => {
        const expectation = wrapper.find('button').text();

        expect(expectation).toContain(MOCK_CONTENT);
    });
});
