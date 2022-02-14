import { LightningElement, track} from 'lwc';

export default class TestReactivity extends LightningElement
{
    randomText = 'This is some random text';
    @track technologies = ['LWC', 'Salesforce', 'JS', 'Aura'];
    handleTextChange = () =>
    {
        this.randomText = 'This is changed';
    }
    handleArrayChange = () =>
    {
        this.technologies.push('HTML');
    }
}