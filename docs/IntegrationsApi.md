# Bombbomb.IntegrationsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**syncUsersIntegratedLists**](IntegrationsApi.md#syncUsersIntegratedLists) | **GET** /integrations/sync | Synchronize your integration list or lists.


<a name="syncUsersIntegratedLists"></a>
# **syncUsersIntegratedLists**
> &#39;String&#39; syncUsersIntegratedLists(opts)

Synchronize your integration list or lists.

Synchronize your integration contact list with the service you are integrated with. If no integration code is provided, all integrations will be synchronized.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.IntegrationsApi();

var opts = { 
  'integrationId': "integrationId_example" // String | The integration to sync lists for. All integrations will sync if nothing is provided.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncUsersIntegratedLists(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationId** | **String**| The integration to sync lists for. All integrations will sync if nothing is provided. | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

