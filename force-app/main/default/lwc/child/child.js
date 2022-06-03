import { LightningElement, wire, track, api } from 'lwc';

export default class Child extends LightningElement {

    @api myName = "Initial Value";

    handleMe(){
        const childEvent = new CustomEvent('buttonclick', {
            detail : {
                firstParameter : 'First Value',
                secondParameter : 'Second Value'
            }
        });

        this.dispatchEvent(childEvent);
    }

}