public with sharing class DataRetrieverClass {
    
    @AuraEnabled(cacheable = true)
    public static List<Product2> getSearchData(String prCode){
        
        String productCode = '%'+prCode+'%';
        
        List<Product2> productList = [SELECT Id, Name , ProductCode FROM Product2
            Where Name LIKE: productCode ];
        
        return productList;
    }
}