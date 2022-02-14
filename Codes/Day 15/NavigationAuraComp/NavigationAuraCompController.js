({
    /*init : function(component) {
        var pageRef = component.get('v.pageReference');
        var propertyValue = pageRef.state.c__propertyValue;
        component.set('v.propertyValue', propertyValue);
    }*/

    handleMessage: function (component, event)
    {
        var params = event.getParams();
        console.log('FROM AURA: ', JSON.stringify(params));
        component.set('v.receivedMessage', params);
    }
})
