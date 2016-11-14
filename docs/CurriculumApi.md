# Bombbomb.CurriculumApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurricula**](CurriculumApi.md#getCurricula) | **GET** /curricula/ | Get Curricula
[**getUserCurriculumWithProgress**](CurriculumApi.md#getUserCurriculumWithProgress) | **GET** /curriculum/getForUserWithProgress | Get Detailed For User


<a name="getCurricula"></a>
# **getCurricula**
> [Curriculum] getCurricula(opts)

Get Curricula

Get Curricula, optionally with progress included.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.CurriculumApi();

var opts = { 
  'includeProgress': true // Boolean | Whether to return progress with the curriculum.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCurricula(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeProgress** | **Boolean**| Whether to return progress with the curriculum. | [optional] 

### Return type

[**[Curriculum]**](Curriculum.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getUserCurriculumWithProgress"></a>
# **getUserCurriculumWithProgress**
> [CurriculumWithProgress] getUserCurriculumWithProgress()

Get Detailed For User

Get all curricula for user including progress for each curriculum.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.CurriculumApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserCurriculumWithProgress(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CurriculumWithProgress]**](CurriculumWithProgress.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

