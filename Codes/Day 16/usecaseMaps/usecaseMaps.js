import { LightningElement } from 'lwc';

export default class UsecaseMaps extends LightningElement
{
    markers = [
        {
            location: {
                City: 'Mumbai',
                State: 'Maharashtra'
            },
        },
        {
            location: {
                City: 'Delhi',
                State: 'Delhi'
            }
        },
        {
            location: {
                City: 'Kolkata',
                State: 'West Bengal'
            }
        }
    ]

    mapOptions = {
        draggable: false,
        disableDefaultUI: true
    }
}