import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {

    @track parentValue = 'Second Value';

    handleEvent(event){

        alert('Custom Event Fired');
        this.parentValue = 'Custom Value';  
        // alert('parameter from child ' + event.detail);
        alert('First Parameter ' + event.detail.firstParameter);
        alert('Second Parameter ' + event.detail.secondParameter);
    }

}


