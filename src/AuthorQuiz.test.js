import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});

Enzyme.configure({ adapter: new Adapter() });

describe('When testing with Enzyme', () => {
  it('renders a div', () => {
    const wrapper = shallow(<AuthorQuiz/>);
    expect(wrapper.find('div').length).toBe(1);
  });
});
