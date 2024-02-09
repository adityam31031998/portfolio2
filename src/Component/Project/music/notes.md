hooks are methods that helps us to hook into data present inside function  component 
this hook is help us to keep a tract of data, and also helps us to update the data, 
usestate takes initial value in a state variable which will b furder updated using updter function
let state[value], updater[function]]=useState(value)
            |______________|____________________|
                           |updater function(new value)
note:All the hooks must be imported at the top level before use


props is used to transper the data from parent to child componenct
the data is tranfered by initiaing to attribute, data cannot be pass from child componenct to parent componenct 