# Bombbomb.SocialsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFacebookPages**](SocialsApi.md#getFacebookPages) | **GET** /socials/facebook/pages | Gets facebook pages
[**getSocialArticleProperties**](SocialsApi.md#getSocialArticleProperties) | **GET** /socials/properties | Gets the social email properties
[**getSocialAuthorizations**](SocialsApi.md#getSocialAuthorizations) | **GET** /socials/authorizations | Get authorizations for all social integration
[**getSocialProfileProperties**](SocialsApi.md#getSocialProfileProperties) | **GET** /socials/profile | Gets the profile properties
[**getSocialStats**](SocialsApi.md#getSocialStats) | **GET** /socials/{promptId}/stats | Get social stats for a prompt
[**postSocialContent**](SocialsApi.md#postSocialContent) | **POST** /socials/content | Creates social content
[**retrySocialSend**](SocialsApi.md#retrySocialSend) | **POST** /socials/send/retry | Sends social content
[**sendSocial**](SocialsApi.md#sendSocial) | **POST** /socials/send | Sends social content
[**updateClientGroupSendMechanism**](SocialsApi.md#updateClientGroupSendMechanism) | **PUT** /socials/client/sendMechanism | Gets the auto shares from the client group assoc id
[**updateClientGroupsSendMechanism**](SocialsApi.md#updateClientGroupsSendMechanism) | **PUT** /socials/client/sendMechanisms | Toggles the prompt campaigns in a users account
[**updateFacebookPages**](SocialsApi.md#updateFacebookPages) | **PUT** /socials/facebook/pages | Updates facebook page Ids
[**updateSocialContent**](SocialsApi.md#updateSocialContent) | **PUT** /socials/content | Updates social content


<a name="getFacebookPages"></a>
# **getFacebookPages**
> getFacebookPages()

Gets facebook pages

Gets facebook pages by client id

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFacebookPages(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSocialArticleProperties"></a>
# **getSocialArticleProperties**
> getSocialArticleProperties(emailId, socialContentId)

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

var emailId = "emailId_example"; // String | This is the email Id for the email url

var socialContentId = "socialContentId_example"; // String | This is the social content Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSocialArticleProperties(emailId, socialContentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailId** | **String**| This is the email Id for the email url | 
 **socialContentId** | **String**| This is the social content Id | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSocialAuthorizations"></a>
# **getSocialAuthorizations**
> getSocialAuthorizations(opts)

Get authorizations for all social integration

Get authorizations and autoshares for all social integration and has redirect for user to login

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var opts = { 
  'clientGroupId': "clientGroupId_example" // String | ID of the client group association
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSocialAuthorizations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientGroupId** | **String**| ID of the client group association | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSocialProfileProperties"></a>
# **getSocialProfileProperties**
> getSocialProfileProperties(socialType)

Gets the profile properties

Gets the social profile properties

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var socialType = "socialType_example"; // String | The social type


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSocialProfileProperties(socialType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **socialType** | **String**| The social type | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSocialStats"></a>
# **getSocialStats**
> getSocialStats(promptId)

Get social stats for a prompt

Get social stats for a prompt by id

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var promptId = "promptId_example"; // String | ID of the prompt


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getSocialStats(promptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promptId** | **String**| ID of the prompt | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="postSocialContent"></a>
# **postSocialContent**
> postSocialContent(emailId)

Creates social content

Creates social content for an email

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var emailId = "emailId_example"; // String | The email's id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postSocialContent(emailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailId** | **String**| The email&#39;s id | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="retrySocialSend"></a>
# **retrySocialSend**
> retrySocialSend(promptId)

Sends social content

Sends social content that failed for a user via their associated prompt

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var promptId = "promptId_example"; // String | The prompt id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.retrySocialSend(promptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promptId** | **String**| The prompt id | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="sendSocial"></a>
# **sendSocial**
> sendSocial(promptId, socialType)

Sends social content

Sends social content for a user via their associated prompt

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var promptId = "promptId_example"; // String | The prompt id

var socialType = "socialType_example"; // String | The destination for social content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendSocial(promptId, socialType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **promptId** | **String**| The prompt id | 
 **socialType** | **String**| The destination for social content | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateClientGroupSendMechanism"></a>
# **updateClientGroupSendMechanism**
> updateClientGroupSendMechanism(sendMechanism, clientGroupId, opts)

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

var sendMechanism = "sendMechanism_example"; // String | The send mechanism for the prompt

var clientGroupId = "clientGroupId_example"; // String | ID of the client group association

var opts = { 
  'enabled': "enabled_example" // String | Is the send mechanism enabled?
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateClientGroupSendMechanism(sendMechanism, clientGroupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMechanism** | **String**| The send mechanism for the prompt | 
 **clientGroupId** | **String**| ID of the client group association | 
 **enabled** | **String**| Is the send mechanism enabled? | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateClientGroupsSendMechanism"></a>
# **updateClientGroupsSendMechanism**
> updateClientGroupsSendMechanism(sendMechanism, enabled)

Toggles the prompt campaigns in a users account

Toggles the prompt campaigns in a users account for a social integrations on or off

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var sendMechanism = "sendMechanism_example"; // String | The send mechanism for the prompt

var enabled = "enabled_example"; // String | Is the send mechanism enabled?


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateClientGroupsSendMechanism(sendMechanism, enabled, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendMechanism** | **String**| The send mechanism for the prompt | 
 **enabled** | **String**| Is the send mechanism enabled? | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateFacebookPages"></a>
# **updateFacebookPages**
> updateFacebookPages(pageIds)

Updates facebook page Ids

Updates facebook page Ids to be sent to for prompts

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var pageIds = "pageIds_example"; // String | Page Ids for the prompt


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFacebookPages(pageIds, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageIds** | **String**| Page Ids for the prompt | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateSocialContent"></a>
# **updateSocialContent**
> updateSocialContent(socialId, opts)

Updates social content

Updates social content for an email

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.SocialsApi();

var socialId = "socialId_example"; // String | The social id

var opts = { 
  'title': "title_example", // String | The title for the article
  'description': "description_example", // String | The article description
  'pictureUrl': "pictureUrl_example", // String | The article picture url
  'suggestedMessage': "suggestedMessage_example" // String | The suggested message to use
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateSocialContent(socialId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **socialId** | **String**| The social id | 
 **title** | **String**| The title for the article | [optional] 
 **description** | **String**| The article description | [optional] 
 **pictureUrl** | **String**| The article picture url | [optional] 
 **suggestedMessage** | **String**| The suggested message to use | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

