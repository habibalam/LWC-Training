import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const columns = [
    {
        label: 'Name', fieldName: 'Name', type: 'text', sortable: true
    }, {
        label: 'Phone', fieldName: 'Phone', type: 'phone'
    }, {
        label: 'Industry', fieldName: 'Industry', type: 'text', sortable: true
    }, {
        label: 'AnnualRevenue', fieldName: 'AnnualRevenue', type: 'text', sortable: true
    }
]

export default class UseCaseCsv extends LightningElement
{
    accountColumns = columns;
    accounts;

    connectedCallback()
    {
        getAccounts().then((response) => {this.accounts = response})
    }

    handleDownload = () =>
    {
        let rowEnd = '\n';
        let csvString = '';

        let rowData = new Set();

        //Get all the keys associated with all the records
        this.accounts.forEach((account) =>
        {
            Object.keys(account).forEach(key =>
            {
                rowData.add(key);
            })
        });

        //Array.from() takes the set/iterable and transforms into an array
        rowData = Array.from(rowData);

        //Generate CSV string for the fields
        csvString += rowData.join(',');
        csvString += rowEnd;

        console.log(csvString);

        for (let i = 0; i < this.accounts.length; i++){
            console.log('Inside');
            let colValue = 0;

            //to get all the available keys
            for (let key of rowData) {
                
                //To check if it is the first column
                if (colValue > 0) {
                    csvString += ',';
                }

                let value = this.accounts[i][key] === undefined ? '' : this.accounts[i][key];
                csvString += `"${ value }"`;
                colValue++;
            }
            csvString += rowEnd;
            //console.log(csvString);
        }
        //Creating one anchor tag dynamically
        let downloadElement = document.createElement('a');

        //setting the downloadable link with uri
        downloadElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvString);

        //setting the target, so that it remains in the current page
        downloadElement.target = '_self';

        //setting the downloadable file name
        downloadElement.download = 'AccountData.csv';

        //click this link dynamically
        downloadElement.click();
    }
}