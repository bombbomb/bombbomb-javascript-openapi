# Bombbomb.OrdersApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templateAssetDelete**](OrdersApi.md#templateAssetDelete) | **DELETE** /orders/templates/images | Deletes image from user s3 store


<a name="templateAssetDelete"></a>
# **templateAssetDelete**
> templateAssetDelete(fileName)

Deletes image from user s3 store

Deletes image from user s3 store

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.OrdersApi();

var fileName = "fileName_example"; // String | Filename for deletion


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.templateAssetDelete(fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **String**| Filename for deletion | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

