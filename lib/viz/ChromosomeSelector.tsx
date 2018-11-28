import * as React from 'react';
import * as ReactDom from 'react-dom';
import Select from 'react-select';
import 'react-select.css';

export interface SelectorProps {
  allChroms: any[];
  selectChrom: (chroms: string[]) => void;
}

export interface SelectorState {
  value: {value: string, label: string}[];
}

class Selector extends React.Component<SelectorProps, SelectorState> {
  constructor(props: SelectorProps) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.state = {
      value: props.allChroms ? props.allChroms.map(a => a.label) : []
    };
  }

  componentWillReceiveProps(props: SelectorProps) {}

  handleSelectChange(value: any) {
    // console.log("You've selected:", value);
    this.setState({ value: value.split(',') });
    this.props.selectChrom(value.split(','));
  }

  render() {
    const { value } = this.state;
    const options = this.props.allChroms
      ? this.props.allChroms.map(a => {
          return { label: a.label, value: a.label };
        })
      : [];
    return (
      <div className="section">
        <Select
          closeMenuOnSelect={!true}
          isDisabled={false}
          isMulti
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Select chromosome(s)"
          hideSelectedOptions={true}
          value={value}
        />
      </div>
    );
  }
}

export default Selector;
