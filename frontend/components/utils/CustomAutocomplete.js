import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { VariableSizeList } from 'react-window';
import { TextField, Typography, ListSubheader } from '@material-ui/core';

import "./CustomAutocomplete.css";

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
  });

const renderRow = (props) => {
    const { data, index, style } = props;
    return React.cloneElement(data[index], {style: {...style}});
}
    
// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const itemCount = itemData.length;
          
    return (
        <div ref={ref}>
            <OuterElementContext.Provider value={other}>
                <VariableSizeList
                    itemData={itemData}
                    height={500}
                    width="100%"
                    outerElementType={OuterElementType}
                    innerElementType="div"
                    itemSize={(index) => 50}
                    overscanCount={5}
                    itemCount={itemCount}
                >
                    {renderRow}
                </VariableSizeList>
            </OuterElementContext.Provider>
        </div>
    );
});

const renderGroup = (params) => [
    <ListSubheader key={params.key} component="div">
        {params.group}
    </ListSubheader>,
    params.children,
]

export default function CustomAutocomplete(props) {
    let options = props.options;

    const onChange = (event, newValue) => {
        let value = newValue == null ? "" : newValue.value;
        if(props.onChange){
            props.onChange(value)
        }
    }

    return (
        <Autocomplete
            id="custom-combo-box"
            size="small"
            freeSolo
            options={options}
            ListboxComponent={ListboxComponent}
            groupBy={(option) => option.group}
            getOptionLabel={(option) => option.value}
            onChange={onChange}
            renderGroup={renderGroup}
            renderInput={(params) => <TextField {...params} label="Select your style" id="custom-combo-box-textfield" />}
            renderOption={(option) => <Typography noWrap>{option.value}</Typography>}
        />
    );
}