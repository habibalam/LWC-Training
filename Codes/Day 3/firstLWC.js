import { LightningElement, track } from 'lwc';
export default class FirstLWC extends LightningElement
{
    @track randomText = 'First LWC para';

    handleText = () =>
    {
        console.log('Clicked!!');
    }
    trackChange = (event) =>
    {
        console.log(event.target.value);
    
    }
}