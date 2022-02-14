import { LightningElement } from 'lwc';
import static_resources from '@salesforce/resourceUrl/mobiles';
export default class StaticResourceDemo extends LightningElement
{
    apple = static_resources + '/apple.png';
    samsung = static_resources + '/samsung.png';
    oneplus = static_resources + '/oneplus.png';
}