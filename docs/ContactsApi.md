# Bombbomb.ContactsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteContacts**](ContactsApi.md#deleteContacts) | **PUT** /contacts/delete | Delete Contacts


<a name="deleteContacts"></a>
# **deleteContacts**
> deleteContacts(listId)

Delete Contacts

Delete contacts

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.ContactsApi();

var listId = "listId_example"; // String | The list of contacts to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContacts(listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The list of contacts to be deleted. | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

