import React, { Component } from 'react';

class FormRow extends Component {
  render() {
    const {ix} = this.props;
    return (
      <tr>
      <td className="ecp-button-insert"><button type="button" tabIndex="-1" onClick={() => this.props.addRow(ix) }>+</button></td>
      <td className="ecp-inputs">
        <select value={this.props.data.comp || ""}
          className="embed-convert-pairs-comparer"
          name={`embedPairs_comp[${ix}]`}
          onChange={ev=>this.props.onChange(ix,'comp',ev.target.value)}
          onBlur={this.props.maybeAddRow}
          >
          <optgroup label="Script/CSS url...">
          <option value="begin">Begins with</option>
          <option value="contain">Contains</option>
          <option value="end">Ends with</option>
          </optgroup>
        </select>
        <input
            type="text"
            className="embed-convert-pairs embed-convert-condition"
            name={`embedPairs_cond[${ix}]`}
            onChange={ev=>this.props.onChange(ix,'cond',ev.target.value)}
            onBlur={this.props.maybeAddRow}
            value={this.props.data.cond || ""}
            placeholder="Hostname/path only (no http[s]:// or ?query-args)"
          />
        <input
            type="text"
            className="embed-convert-pairs embed-convert-srch"
            name={`embedPairs_srch[${ix}]`}
            onChange={ev=>this.props.onChange(ix,'srch',ev.target.value)}
            onBlur={this.props.maybeAddRow}
            value={this.props.data.srch || ""}
            placeholder="Search string"
          />
        <input
              type="text"
              className="embed-convert-pairs embed-convert-repl"
              name={`embedPairs_repl[${ix}]`}
              onChange={ev=>this.props.onChange(ix,'repl',ev.target.value)}
              onBlur={this.props.maybeAddRow}
              value={this.props.data.repl || ""}
              placeholder="Replacement"
            />
          </td>
          <td className="ecp-button-delete">
            <button type="button" tabIndex="-1" onClick={() => this.props.removeRow(ix) }>&times;</button>
      </td></tr>
    );
  }
}

export default FormRow;
