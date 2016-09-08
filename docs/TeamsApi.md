# BombbombNodejsOpenapi.TeamsApi

All URIs are relative to *https://dev.api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelJerichoSend**](TeamsApi.md#cancelJerichoSend) | **DELETE** /team/{teamId}/jericho/{jerichoId} | Cancel a Jericho Send
[**getClientGroupAssets**](TeamsApi.md#getClientGroupAssets) | **GET** /team/assets/ | Lists team assets
[**getJerichoSends**](TeamsApi.md#getJerichoSends) | **GET** /team/{teamId}/jericho | List Jericho Sends
[**getJerichoStats**](TeamsApi.md#getJerichoStats) | **GET** /team/{teamId}/jericho/{jerichoId}/performance | Gets Jericho performance statistics
[**queueJerichoSend**](TeamsApi.md#queueJerichoSend) | **POST** /team/{teamId}/jericho | Creates a Jericho send.


<a name="cancelJerichoSend"></a>
# **cancelJerichoSend**
> cancelJerichoSend(jerichoId)

Cancel a Jericho Send

Cancels a scheduled Jericho send from being sent.

### Example
```javascript
var BombbombNodejsOpenapi = require('bombbomb-nodejs-openapi');
var defaultClient = BombbombNodejsOpenapi.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BombbombNodejsOpenapi.TeamsApi();

var jerichoId = "jerichoId_example"; // String | ID of the Jericho Job to cancel


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cancelJerichoSend(jerichoId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jerichoId** | **String**| ID of the Jericho Job to cancel | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getClientGroupAssets"></a>
# **getClientGroupAssets**
> InlineResponse200 getClientGroupAssets(assetType, opts)

Lists team assets

Returns a collection of assets

### Example
```javascript
var BombbombNodejsOpenapi = require('bombbomb-nodejs-openapi');
var defaultClient = BombbombNodejsOpenapi.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BombbombNodejsOpenapi.TeamsApi();

var assetType = "assetType_example"; // String | The type of assets.

var opts = { 
  'teamId': "teamId_example", // String | The team containing the assets.
  'autoTagName': "autoTagName_example", // String | The auto tag name containing the assets.
  'pageSize': "pageSize_example", // String | The number of items to retrieve in a single db query.
  'page': "page_example", // String | Zero-based index of the page of data to retrieve from the db.
  'search': "search_example" // String | Search words.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClientGroupAssets(assetType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetType** | **String**| The type of assets. | 
 **teamId** | **String**| The team containing the assets. | [optional] 
 **autoTagName** | **String**| The auto tag name containing the assets. | [optional] 
 **pageSize** | **String**| The number of items to retrieve in a single db query. | [optional] 
 **page** | **String**| Zero-based index of the page of data to retrieve from the db. | [optional] 
 **search** | **String**| Search words. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJerichoSends"></a>
# **getJerichoSends**
> [JerichoConfiguration] getJerichoSends(teamId)

List Jericho Sends

Lists Jericho sends, both pending and sent.

### Example
```javascript
var BombbombNodejsOpenapi = require('bombbomb-nodejs-openapi');
var defaultClient = BombbombNodejsOpenapi.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BombbombNodejsOpenapi.TeamsApi();

var teamId = "teamId_example"; // String | The team whose Jericho sends you wish to see.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJerichoSends(teamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team whose Jericho sends you wish to see. | 

### Return type

[**[JerichoConfiguration]**](JerichoConfiguration.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getJerichoStats"></a>
# **getJerichoStats**
> JerichoPerformance getJerichoStats(jerichoId, teamId)

Gets Jericho performance statistics

Returns an aggregate view of the performance of a Jericho send

### Example
```javascript
var BombbombNodejsOpenapi = require('bombbomb-nodejs-openapi');
var defaultClient = BombbombNodejsOpenapi.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BombbombNodejsOpenapi.TeamsApi();

var jerichoId = "jerichoId_example"; // String | ID of the Jericho job

var teamId = "teamId_example"; // String | ID of team through which Jericho was sent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getJerichoStats(jerichoId, teamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jerichoId** | **String**| ID of the Jericho job | 
 **teamId** | **String**| ID of team through which Jericho was sent | 

### Return type

[**JerichoPerformance**](JerichoPerformance.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queueJerichoSend"></a>
# **queueJerichoSend**
> JerichoConfiguration queueJerichoSend(config, teamId)

Creates a Jericho send.

Sends email content on behalf of members of a client group. There are two forms this send can take:         Static Email, and Video Prompt. Static emails require only an emailId.         Video Prompts build emails dynamically and require most of the other fields.         You must be an administrator of a Team Account to use this method.

### Example
```javascript
var BombbombNodejsOpenapi = require('bombbomb-nodejs-openapi');
var defaultClient = BombbombNodejsOpenapi.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new BombbombNodejsOpenapi.TeamsApi();

var config = new BombbombNodejsOpenapi.JerichoConfiguration(); // JerichoConfiguration | JSON representing a Jericho configuration

var teamId = "teamId_example"; // String | The ID of the team.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.queueJerichoSend(config, teamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config** | [**JerichoConfiguration**](JerichoConfiguration.md)| JSON representing a Jericho configuration | 
 **teamId** | **String**| The ID of the team. | 

### Return type

[**JerichoConfiguration**](JerichoConfiguration.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

