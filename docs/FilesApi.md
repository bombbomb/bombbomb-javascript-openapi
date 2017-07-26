# Bombbomb.FilesApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**docHostDelete**](FilesApi.md#docHostDelete) | **DELETE** /files | Deletes users file


<a name="docHostDelete"></a>
# **docHostDelete**
> docHostDelete(docId)

Deletes users file

Deletes the file from the users s3 store

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.FilesApi();

var docId = "docId_example"; // String | Id of document


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.docHostDelete(docId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **docId** | **String**| Id of document | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

