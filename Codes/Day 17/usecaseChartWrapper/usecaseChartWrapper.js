import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/ChartController.getOpportunities';
export default class UsecaseChartWrapper extends LightningElement
{
    chartConfig;
    @wire(getOpportunities)
    wiredOpportunities({ data, error })
    {
        if (data) {
            let chartCountData = [];
            let chartStageData = [];

            data.forEach(opp =>
            {
                chartCountData.push(opp.Total);
                chartStageData.push(opp.StageName);
            });

            this.chartConfig = {
                type: 'pie',
                data: {
                    datasets: [{
                        label: 'Number',
                        backgroundColor: ['green','yellow','red','grey','orange','blue'],
                        data: chartCountData
                    }],
                    labels : chartStageData
                }
                
            }
        }
    }
}