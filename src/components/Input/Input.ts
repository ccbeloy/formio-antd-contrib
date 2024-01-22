// import { Components } from 'formiojs';
// const FieldComponent = (Components as any).components.field;
// import { Input } from 'antd';
// import { renderToString } from 'react-dom/server';



// /**
//  * Here we will derive from the base component which all Form.io form components derive from.
//  * https://help.form.io/developers/form-development/custom-components
//  *
//  * @param component
//  * @param options
//  * @param data
//  * @constructor
//  */
// export default class AntDInput extends (FieldComponent as any) {
//     constructor(component, options, data) {
//         super(component, options, data);
       
//     }
//     static schema() {
//         return FieldComponent.schema({
//             type: 'input',
//             size: 'large',
//             placeholder: 'large size'
//         });

//     }
    
//     static builderInfo = {
//         title: 'Check Matrix',
//         group: 'basic',
//         icon: 'fa fa-table',
//         weight: 70,
//         documentation: 'http://help.form.io/userguide/#table',
//         schema: AntDInput.schema()
//     }
//     public render() {
//         //return super.render(this.renderTemplate('input'));
//         const antdInput = renderToString( <Input placeholder="Basic usage" size="large" />);
//         return antdInput;
//     }
// }