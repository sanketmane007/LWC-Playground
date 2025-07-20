import { LightningElement } from 'lwc';
import getSearchData from '@salesforce/apex/DataRetrieverClass.getSearchData'
const column =[
    {
        label:'Name',
        fieldName:'Name',
        type:'url',
        typeAttribute:{label:{fieldName:'Name'},target:'_blank'}
    },
    {
        label:'product Code',
        fieldName:'ProductCode',
        type:'text'
    }
]
export default class SearchComponentLWC extends LightningElement {

    searchData;
    column = column;
    strSearchProductName;
    
    handleProductName(event){
        console.log('Product Name Enter : '+event.target.value);
        this.strSearchProductName = event.target.value;

        getSearchData({prCode : this.strSearchProductName})
        .then(result => {
            this.searchData = result;
        })
    }




}