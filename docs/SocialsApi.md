# Bombbomb.SocialsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSocialArticleProperties**](SocialsApi.md#getSocialArticleProperties) | **GET** /socials/properties | Gets the social email properties
[**getSocialAutoShares**](SocialsApi.md#getSocialAutoShares) | **GET** /socials/shares | Gets the auto shares from the client group assoc id
[**getSocialPermissions**](SocialsApi.md#getSocialPermissions) | **GET** /socials/permissions | Get permissions for social integration
[**getSocialStatus**](SocialsApi.md#getSocialStatus) | **GET** /socials/states | Gets the social state
[**updateSocialAutoShares**](SocialsApi.md#updateSocialAutoShares) | **PUT** /socials/shares | Gets the auto shares from the client group assoc id
[**updateSocialMessage**](SocialsApi.md#updateSocialMessage) | **PUT** /socials/message | Sets the users social message to what they typed in
[**updateSocialStatus**](SocialsApi.md#updateSocialStatus) | **PUT** /socials/state | Updates the social state for the object


<a name="getSocialArticleProperties"></a>
# **getSocialArticleProperties**
> getSocialArticleProperties(jerichoId, emailId, originatorId)

Gets the social email properties

Gets the social email properties

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var jerichoId = "jerichoId_example"; // String | associated jericho Id

var emailId = "emailId_example"; // String | This is the email Id for the email url

var originatorId = "originatorId_example"; // String | This is the originator Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSocialArticleProperties(jerichoId, emailId, originatorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jerichoId** | **String**| associated jericho Id | 
 **emailId** | **String**| This is the email Id for the email url | 
 **originatorId** | **String**| This is the originator Id | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSocialAutoShares"></a>
# **getSocialAutoShares**
> getSocialAutoShares(clientGroupId)

Gets the auto shares from the client group assoc id

Gets the auto shares from the client group assoc id

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var clientGroupId = "clientGroupId_example"; // String | ID of the client group association


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSocialAutoShares(clientGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientGroupId** | **String**| ID of the client group association | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSocialPermissions"></a>
# **getSocialPermissions**
> getSocialPermissions(socialType)

Get permissions for social integration

Get permissions for social integration and has redirect for user to login

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var socialType = "socialType_example"; // String | Type of social integration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSocialPermissions(socialType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **socialType** | **String**| Type of social integration | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSocialStatus"></a>
# **getSocialStatus**
> getSocialStatus(originatorId)

Gets the social state

Gets the social state

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var originatorId = "originatorId_example"; // String | associated originatorId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSocialStatus(originatorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originatorId** | **String**| associated originatorId | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateSocialAutoShares"></a>
# **updateSocialAutoShares**
> updateSocialAutoShares(autoShare, clientGroupId)

Gets the auto shares from the client group assoc id

Gets the auto shares from the client group assoc id

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var autoShare = "autoShare_example"; // String | The social share that will auto share to

var clientGroupId = "clientGroupId_example"; // String | ID of the client group association


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSocialAutoShares(autoShare, clientGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autoShare** | **String**| The social share that will auto share to | 
 **clientGroupId** | **String**| ID of the client group association | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateSocialMessage"></a>
# **updateSocialMessage**
> updateSocialMessage(message, originatorId)

Sets the users social message to what they typed in

Sets the users social message to what they typed in

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var message = "message_example"; // String | The social message the user typed in

var originatorId = "originatorId_example"; // String | The parent id tied to the social share


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSocialMessage(message, originatorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message** | **String**| The social message the user typed in | 
 **originatorId** | **String**| The parent id tied to the social share | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateSocialStatus"></a>
# **updateSocialStatus**
> updateSocialStatus(state, originatorId)

Updates the social state for the object

Updates the social state for the object

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var state = "state_example"; // String | The state to set to

var originatorId = "originatorId_example"; // String | The parent id tied to the social share


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSocialStatus(state, originatorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **String**| The state to set to | 
 **originatorId** | **String**| The parent id tied to the social share | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

