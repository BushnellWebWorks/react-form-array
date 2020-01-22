import React, { Component } from 'react';
import FormRow from './FormRow.js';

class FormArray extends Component {
  constructor(props) {
    super(props);
    this.windowVar = this.props.var || 'myFormArray';
    let rowValues = ( 'undefined' !== typeof this.props.data && this.props.data instanceof Array ) ? this.props.data : null;
    if ( null === rowValues ) {
      rowValues = ('undefined' !== typeof window) ? window[this.windowVar] : [];
    }
    if ( !rowValues || !(rowValues instanceof Array) ) { rowValues = [] }
    this.state = {rowValues};
    this.onChange = this.onChange.bind(this);
    this.maybeAddRow = this.maybeAddRow.bind(this);
    this.addRow = this.addRow.bind(this);
    this.removeRow = this.removeRow.bind(this);
  }

  componentDidMount() {
    this.maybeAddRow();
  }

  onChange( ix, whichOne, val ) {
    let {rowValues} = this.state;
    if ( 'undefined' == typeof rowValues[ix] ) {
      rowValues[ix] = {};
    }
    rowValues[ix][whichOne] = val;
    this.setState({rowValues}, () => {
      if ('undefined' !== typeof window) {
        window[this.windowVar] = rowValues;
      }
    });
  }

  maybeAddRow( ) {
    let {rowValues} = this.state;
    if (rowValues.length && !Object.keys( rowValues[ rowValues.length-1 ] ).length ) { return; }
    rowValues.push({});
    this.setState({rowValues});
  }

  removeRow( ix ) {
    let {rowValues} = this.state;
    rowValues.splice(ix,1);
    this.setState({rowValues}, () => {
      if ( !rowValues.length ) { this.maybeAddRow() }
    });
  }

  addRow( ix ) {
    let {rowValues} = this.state;
    rowValues.splice(ix,0,{});
    this.setState({rowValues});
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.rowValues.map( (rowOb,ix) => {
            return <FormRow
              key={`formrow_${ix}`}
              ix={ix}
              data={rowOb}
              onChange={this.onChange}
              maybeAddRow={this.maybeAddRow}
              addRow={this.addRow}
              removeRow={this.removeRow} />
          })
        }
      </React.Fragment>
    );
  }
}

export default FormArray;
