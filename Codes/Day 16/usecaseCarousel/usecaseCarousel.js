import { LightningElement } from 'lwc';
import carouselImages from '@salesforce/resourceUrl/nature';
export default class UsecaseCarousel extends LightningElement
{
    image1 = carouselImages + '/lake.jpg';
    image2 = carouselImages + '/landscape.jpg';
    image3 = carouselImages + '/original.jpg';
}