import { LightningElement } from 'lwc';

export default class GetterProps extends LightningElement
{
    number1;
    number2;
    handleChange = (event) =>
    {
        let inputVal = event.target.value;
        if (event.target.name === 'number1') {
            this.number1 = inputVal;
        }
        else {
            this.number2 = inputVal;
        }
    }
    get sumOfTwo()
    {
        if (this.number1 && this.number2){
            if (!isNaN(this.number1) && !isNaN(this.number2))
                return 'Addition of two '+ (+this.number1 + +this.number2);    
            return 'Both Input fields should be numbers';
        }
        return 'Enter values for both';
        
    }
}