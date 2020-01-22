# React-Form-Array

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (in early 2019).

Manages an array of form rows (each containing any number of  inputs) so there's always an empty one at the bottom.

To use:
Define the render method of FormRow as needed.
Props for this component are:

+ data = an object containing all this row's key/value pairs. Your input components should have an attribute value like this:
`value={this.props.data.foo || ""}`

+ `ix` = numeric index of this row

+ `onChange( ix, prop, val )` = method for managing the overall state in the parent object

+ `maybeAddRow()` = method for determining if a blank row should be added. Ideal as a callback handler for an onBlur event

+ `addRow(ix)` = insert a blank row before this index (e.g. button onClick handler)

+ `removeRow(ix)` = remove the row at this index (e.g. button onClick handler)

Initial / Default values:
Pass init data in the 'data' attribute of the root `<FormArray data={[{foo:xxx,bar:yyy}]} />` component.

If it's to be used in a webpage, assign data to a window variable myFormArray. If a different window var name is desired, then pass that name into the var attribute `<FormArray var="foo" />`. Component will maintain the value of this window variable.


To deploy to a webpage:

1) Ensure package.json includes a line `"homepage": "."`,

2) in index.js, define the querySelector for the container div (argument for `ReactDOM.render( <App />, ...`)

3) `yarn build` will output 3 js files and a css file. Rename them as appropriate, but include all of them. "Runtime" should come first.

4) Ensure the host webpage has the container element as defined in step 2.
