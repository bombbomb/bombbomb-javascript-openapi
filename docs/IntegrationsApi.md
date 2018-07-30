# Bombbomb.IntegrationsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectIntegration**](IntegrationsApi.md#connectIntegration) | **POST** /integrations | Activate an integration for a user.
[**deleteIntegration**](IntegrationsApi.md#deleteIntegration) | **DELETE** /integrations | Remove an integration for a user.
[**getIntegrationHealth**](IntegrationsApi.md#getIntegrationHealth) | **GET** /integrations/health/{code} | Get health for a given integration
[**getIntegrationPageComponents**](IntegrationsApi.md#getIntegrationPageComponents) | **GET** /integrations/pageComponents | Get page components for a given integration
[**syncUsersIntegratedLists**](IntegrationsApi.md#syncUsersIntegratedLists) | **GET** /integrations/sync | Synchronize your integration list or lists.


<a name="connectIntegration"></a>
# **connectIntegration**
> connectIntegration(code, opts)

Activate an integration for a user.

Provide the correct parameters to enable an integration. Required Parameters vary based on the desired          integration. Integrations requiring OAuth will provide the OAuth link that the user must be presented.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.IntegrationsApi();

var code = "code_example"; // String | The identifier of the integration.

var opts = { 
  'key': "key_example", // String | The key value.
  'secret': "secret_example", // String | The secret value.
  'token': "token_example", // String | The token value.
  'data': "data_example", // String | The data value as JSON.
  'overwrite': "overwrite_example" // String | Boolean value to know whether or not to delete the integration if it already exists
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.connectIntegration(code, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| The identifier of the integration. | 
 **key** | **String**| The key value. | [optional] 
 **secret** | **String**| The secret value. | [optional] 
 **token** | **String**| The token value. | [optional] 
 **data** | **String**| The data value as JSON. | [optional] 
 **overwrite** | **String**| Boolean value to know whether or not to delete the integration if it already exists | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="deleteIntegration"></a>
# **deleteIntegration**
> deleteIntegration(opts)

Remove an integration for a user.

Remove an integration by providing the integration id or integration code. Only provide one of the             parameters.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.IntegrationsApi();

var opts = { 
  'id': "id_example", // String | Integration ID
  'code': "code_example" // String | Integration Code
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteIntegration(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Integration ID | [optional] 
 **code** | **String**| Integration Code | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getIntegrationHealth"></a>
# **getIntegrationHealth**
> getIntegrationHealth(code)

Get health for a given integration

Get health for an integration.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.IntegrationsApi();

var code = "code_example"; // String | The integration code for which to retrieve the information from


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getIntegrationHealth(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| The integration code for which to retrieve the information from | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getIntegrationPageComponents"></a>
# **getIntegrationPageComponents**
> getIntegrationPageComponents(integrationName)

Get page components for a given integration

Get all page components for an integration.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.IntegrationsApi();

var integrationName = "integrationName_example"; // String | The integration for which to retrieve HTML page components.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getIntegrationPageComponents(integrationName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **integrationName** | **String**| The integration for which to retrieve HTML page components. | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="syncUsersIntegratedLists"></a>
# **syncUsersIntegratedLists**
> &#39;String&#39; syncUsersIntegratedLists(opts)

Synchronize your integration list or lists.

Synchronize your integration contact list with the service you are integrated with. If no integration code is provided, all integrations will be synchronized.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

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

