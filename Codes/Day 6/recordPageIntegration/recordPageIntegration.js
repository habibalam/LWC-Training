import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordPageIntegration extends LightningElement
{
    @api objectApiName;
    @api recordId;

    handleToast = () =>
    {
        const toaster = new ShowToastEvent({
            title: 'Message From Salesforce',
            message: `You are in a ${ this.objectApiName } record and the id is ${ this.recordId }`,
            variant: 'success',
            mode: 'pester'
        });
        this.dispatchEvent(toaster);
    }
}