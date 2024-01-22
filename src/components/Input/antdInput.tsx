import { Components } from 'formiojs';
//const FieldComponent = (Components as any).components.field;
import { Input } from 'antd';
import { renderToString } from 'react-dom/server';
//import React, { useRef } from 'react';
import React from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
const InputComponent = (Components as any).components.input;



/**
 * Here we will derive from the base component which all Form.io form components derive from.
 * https://help.form.io/developers/form-development/custom-components
 *
 * @param component
 * @param options
 * @param data
 * @constructor
 */
export default class AntDInput extends (InputComponent as any) {
    //inputRef = useRef(null);

    constructor(component, options, data) {
        super(component, options, data);
       
    }
    static schema() {
        return InputComponent.schema({
            type: 'ant_input',
            size: 'large',
            placeholder: 'large size',
            addonBefore: 'http://',
            addonAfter: '.com',
        });

    }
    
    static builderInfo = {
        title: 'Check Matrix',
        group: 'basic',
        icon: 'fa fa-table',
        weight: 70,
        documentation: 'http://help.form.io/userguide/#table',
        schema: AntDInput.schema()
    }
    public render() {
        const props = {
            size: this.component.size,
            placeholder: this.component.placeholder,            
            addonBefore: this.component.prefix,
            addonAfter: this.component.suffix
          };
        //return super.render(this.renderTemplate('input'));
        if(this.visible) {
            const antdInput = renderToString( <ConfigProvider theme={{ hashed: false }}>
                <StyleProvider hashPriority="high">
                    <Input data-ref="input" { ...props} />
                    </StyleProvider>
                </ConfigProvider>);
    
            return antdInput;
        }else {
            return null;
        }
    }

    attach(element) {   
        this.loadRefs(element, {
            input: 'single'
        });
        return super.attach(element);
    }

    loadRefs(element, refs) {
        for (const ref in refs) {
            const refType = refs[ref];
            const isString = typeof refType === 'string';
      
            const selector = isString && refType.includes('scope') ? `:scope > [data-ref="${ref}"]` : `[data-ref="${ref}"]`;
      
            if (isString && refType.startsWith('single')) {
              this.refs[ref] = element.querySelector(selector);
            }
            else {
              this.refs[ref] = element.querySelectorAll(selector);
            }
          }
    }


    getValue() {
        return super.getValue();
    }

    getKey() {  
        return this.component.key;
    }

    // setValue(value) {
    //     this.inputRef.current.state.value = value;
    // }

    // get defaultValue() {
    //     return super.defaultValue();
    // }

    // setValueAt(index, value) {
    //     return super.setValueAt(index, value);
    // }    
}