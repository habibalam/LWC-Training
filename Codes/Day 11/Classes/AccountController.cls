public with sharing class AccountController {
    
    @AuraEnabled 
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Phone, Website, Industry FROM Account LIMIT 10];
    }

    @AuraEnabled 
    public static Account getAccount(Id accId){
        return [SELECT Id, Name, Phone, Website, Industry FROM Account WHERE Id = :accId LIMIT 1];
    }
}
