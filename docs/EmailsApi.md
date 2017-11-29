# Bombbomb.EmailsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPrintingPressEmail**](EmailsApi.md#createPrintingPressEmail) | **POST** /emails/print | Create an Email with Printing Press
[**getAllTemplatesForCurrentUser**](EmailsApi.md#getAllTemplatesForCurrentUser) | **GET** /emails/templates | Get all user templates
[**getEmailTracking**](EmailsApi.md#getEmailTracking) | **GET** /emails/{emailId}/tracking | Get Email Tracking
[**getEmailTrackingInteractions**](EmailsApi.md#getEmailTrackingInteractions) | **GET** /emails/{emailId}/tracking/interactions | Get Email Tracking Interactions
[**getHourlyEmailTracking**](EmailsApi.md#getHourlyEmailTracking) | **GET** /emails/{emailId}/tracking/hourly | Get Hourly Email Tracking
[**getQuickSendTemplates**](EmailsApi.md#getQuickSendTemplates) | **GET** /emails/quicksend/templates | Get all quicksend templates
[**videoQuickSender**](EmailsApi.md#videoQuickSender) | **POST** /emails/quicksend | Send a quicksend email


<a name="createPrintingPressEmail"></a>
# **createPrintingPressEmail**
> createPrintingPressEmail(templateId, content, opts)

Create an Email with Printing Press

Prints an email using the template id and content to the users account.If a video id is included, it will replace any video placeholders with that video.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.EmailsApi();

var templateId = "templateId_example"; // String | The template id to be printed.

var content = "content_example"; // String | The content of the email.

var opts = { 
  'emailId': "emailId_example", // String | The email id to be printed to.
  'videoId': "videoId_example", // String | A video to replace video place holders with.
  'subjectLine': "subjectLine_example" // String | The subject line to be printed.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createPrintingPressEmail(templateId, content, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **templateId** | **String**| The template id to be printed. | 
 **content** | **String**| The content of the email. | 
 **emailId** | **String**| The email id to be printed to. | [optional] 
 **videoId** | **String**| A video to replace video place holders with. | [optional] 
 **subjectLine** | **String**| The subject line to be printed. | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getAllTemplatesForCurrentUser"></a>
# **getAllTemplatesForCurrentUser**
> getAllTemplatesForCurrentUser(opts)

Get all user templates

Get all templates accessible to the current user

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.EmailsApi();

var opts = { 
  'quickSendOnly': true // Boolean | Whether to return only quick send templates.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAllTemplatesForCurrentUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quickSendOnly** | **Boolean**| Whether to return only quick send templates. | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getEmailTracking"></a>
# **getEmailTracking**
> getEmailTracking(emailId, opts)

Get Email Tracking

Get Tracking data for all sends of an Email

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.EmailsApi();

var emailId = "emailId_example"; // String | ID of the email

var opts = { 
  'jobId': "jobId_example" // String | ID of the Job (or null for all jobs)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEmailTracking(emailId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailId** | **String**| ID of the email | 
 **jobId** | **String**| ID of the Job (or null for all jobs) | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getEmailTrackingInteractions"></a>
# **getEmailTrackingInteractions**
> getEmailTrackingInteractions(emailId, opts)

Get Email Tracking Interactions

Get Contact detail interactions for an Email

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.EmailsApi();

var emailId = "emailId_example"; // String | ID of the email

var opts = { 
  'jobId': "jobId_example", // String | ID of the Job (or null for all jobs)
  'interactionType': "interactionType_example", // String | Interaction type to order and filter by
  'searchTerm': "searchTerm_example" // String | Search term to filer by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getEmailTrackingInteractions(emailId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailId** | **String**| ID of the email | 
 **jobId** | **String**| ID of the Job (or null for all jobs) | [optional] 
 **interactionType** | **String**| Interaction type to order and filter by | [optional] 
 **searchTerm** | **String**| Search term to filer by | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getHourlyEmailTracking"></a>
# **getHourlyEmailTracking**
> getHourlyEmailTracking(emailId, opts)

Get Hourly Email Tracking

Get Tracking data for an Email,             broken down by the hour and filterable by an Interaction type

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.EmailsApi();

var emailId = "emailId_example"; // String | ID of the email

var opts = { 
  'jobId': "jobId_example", // String | ID of the Job (or null for all jobs)
  'interactionType': "interactionType_example" // String | Interaction type to filter by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getHourlyEmailTracking(emailId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailId** | **String**| ID of the email | 
 **jobId** | **String**| ID of the Job (or null for all jobs) | [optional] 
 **interactionType** | **String**| Interaction type to filter by | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getQuickSendTemplates"></a>
# **getQuickSendTemplates**
> getQuickSendTemplates()

Get all quicksend templates

Get all quicksend templates accessible to the user.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.EmailsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getQuickSendTemplates(callback);
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

<a name="videoQuickSender"></a>
# **videoQuickSender**
> videoQuickSender(opts)

Send a quicksend email

Send a quicksend video email to the list or users provided.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.EmailsApi();

var opts = { 
  'videoId': "videoId_example", // String | A guid id for the video.
  'emailAddresses': "emailAddresses_example", // String | A semi-colon separated list of email addresses to send to.
  'subject': "subject_example", // String | Subject line for the email.
  'message': "message_example", // String | Message for the body of the email.
  'listIds': "listIds_example", // String | An array of list ids
  'scheduledSendTimestamp': 56, // Integer | When to schedule the send (seconds since epoch). null value means send immediately.
  'extendedProperties': "extendedProperties_example", // String | Bool value that when checked will send back both emailId as well as extra properties
  'templateId': "templateId_example", // String | Id of a template to use for this send. A null value means use the default for this user.
  'stripHTML': "stripHTML_example" // String | remove HTML elements
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.videoQuickSender(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| A guid id for the video. | [optional] 
 **emailAddresses** | **String**| A semi-colon separated list of email addresses to send to. | [optional] 
 **subject** | **String**| Subject line for the email. | [optional] 
 **message** | **String**| Message for the body of the email. | [optional] 
 **listIds** | **String**| An array of list ids | [optional] 
 **scheduledSendTimestamp** | **Integer**| When to schedule the send (seconds since epoch). null value means send immediately. | [optional] 
 **extendedProperties** | **String**| Bool value that when checked will send back both emailId as well as extra properties | [optional] 
 **templateId** | **String**| Id of a template to use for this send. A null value means use the default for this user. | [optional] 
 **stripHTML** | **String**| remove HTML elements | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

