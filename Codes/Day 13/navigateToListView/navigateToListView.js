import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToListView extends NavigationMixin(LightningElement) {

    customListView;

    connectedCallback()
    {
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: '00B5g00000KpvkbEAB'
            }
        }).then(url =>
        {
            this.customListView = url;
        })
    }

    navigateToAccListView = () =>
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    }

    navigateToContactRelatedList = () =>
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0015g00000GhuPWAAZ',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })
    }
}