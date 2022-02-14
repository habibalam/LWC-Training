import { LightningElement } from 'lwc';
import content_assets from '@salesforce/contentAssetUrl/mobiles';
export default class ContentAssetsDemo extends LightningElement
{
    apple = content_assets + 'pathinarchive=apple.png';
    samsung = content_assets + 'pathinarchive=samsung.png';
    oneplus = content_assets + 'pathinarchive=oneplus.png';
}