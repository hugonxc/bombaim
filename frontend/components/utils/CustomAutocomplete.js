import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { VariableSizeList } from 'react-window';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
  });


function renderRow(props) {
    const { data, index, style } = props;
    return React.cloneElement(data[index], {
        style: {
        ...style,
        },
    });
}
    
// Adapter for react-window
const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const itemCount = itemData.length;
    const itemSize = 36;
      
    const getChildSize = (child) => {
        if (React.isValidElement(child) && child.type === AccordionDetails) {
            return 48;
        }
        return itemSize;
    };
          
    return (
        <div ref={ref}>
            <OuterElementContext.Provider value={other}>
                <VariableSizeList
                    itemData={itemData}
                    height={600}
                    width="100%"
                    outerElementType={OuterElementType}
                    itemSize={(index) => getChildSize(itemData[index])}
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
    <Accordion key={params.key} TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary>
            {params.group}
        </AccordionSummary>
        <AccordionDetails>
            {params.children}
        </AccordionDetails>
    </Accordion>
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
            freeSolo
            options={options}
            ListboxComponent={ListboxComponent}
            groupBy={(option) => option.group}
            getOptionLabel={(option) => option.value}
            onChange={onChange}
            renderGroup={renderGroup}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
    );
}