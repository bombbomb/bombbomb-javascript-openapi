# Bombbomb.PromptsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPromptBot**](PromptsApi.md#createPromptBot) | **POST** /prompts/bots | Create a running Prompt Bot for a list
[**createVideoEmailPrompt**](PromptsApi.md#createVideoEmailPrompt) | **POST** /prompt | Prompts user to send a video
[**getPendingVideoEmailPrompts**](PromptsApi.md#getPendingVideoEmailPrompts) | **GET** /prompt/pending | List pending prompts
[**getPromptBots**](PromptsApi.md#getPromptBots) | **GET** /prompts/bots | List Prompt Bots
[**getPromptCampaigns**](PromptsApi.md#getPromptCampaigns) | **GET** /prompts/campaigns | List Prompt Campaigns
[**getVideoEmailPrompt**](PromptsApi.md#getVideoEmailPrompt) | **GET** /prompt/{id} | Gets a prompt
[**getVideoEmailPrompts**](PromptsApi.md#getVideoEmailPrompts) | **GET** /prompt/ | List prompts
[**respondToVideoEmailPrompt**](PromptsApi.md#respondToVideoEmailPrompt) | **POST** /prompt/{id}/response | Respond to a prompt
[**updatePromptBot**](PromptsApi.md#updatePromptBot) | **PUT** /prompts/bots/{id} | Update Prompt Bot
[**updatePromptCampaign**](PromptsApi.md#updatePromptCampaign) | **PUT** /prompts/campaigns/{id} | Update Prompt Campaign


<a name="createPromptBot"></a>
# **createPromptBot**
> PromptBotBot createPromptBot(listId, emailId, endDate, promptSubject, promptBody, botTypeId, templateId)

Create a running Prompt Bot for a list

Creates a Prompt Bot that sends emails to contacts on a list over the span of time defined.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var listId = "listId_example"; // String | The list id to attach the bot to.

var emailId = "emailId_example"; // String | The default email to use.

var endDate = "endDate_example"; // String | The time frame to complete sending to the list.

var promptSubject = "promptSubject_example"; // String | The prompt subject.

var promptBody = "promptBody_example"; // String | The prompt script.

var botTypeId = "botTypeId_example"; // String | The type of bot to create.

var templateId = "templateId_example"; // String | The template used to create the email id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPromptBot(listId, emailId, endDate, promptSubject, promptBody, botTypeId, templateId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The list id to attach the bot to. | 
 **emailId** | **String**| The default email to use. | 
 **endDate** | **String**| The time frame to complete sending to the list. | 
 **promptSubject** | **String**| The prompt subject. | 
 **promptBody** | **String**| The prompt script. | 
 **botTypeId** | **String**| The type of bot to create. | 
 **templateId** | **String**| The template used to create the email id. | 

### Return type

[**PromptBotBot**](PromptBotBot.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="createVideoEmailPrompt"></a>
# **createVideoEmailPrompt**
> VideoEmailPrompt createVideoEmailPrompt(prompt)

Prompts user to send a video

Sends the account holder an email prompting them to add a video to a scheduled outgoing message. Recipients, content and timing is all preset for the user.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var prompt = new Bombbomb.VideoEmailPrompt(); // VideoEmailPrompt | The Video Email Prompt to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVideoEmailPrompt(prompt, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prompt** | [**VideoEmailPrompt**](VideoEmailPrompt.md)| The Video Email Prompt to be created | 

### Return type

[**VideoEmailPrompt**](VideoEmailPrompt.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPendingVideoEmailPrompts"></a>
# **getPendingVideoEmailPrompts**
> [VideoEmailPrompt] getPendingVideoEmailPrompts()

List pending prompts

Returns a list of prompts that have not been sent yet, and can still be customized.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPendingVideoEmailPrompts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[VideoEmailPrompt]**](VideoEmailPrompt.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getPromptBots"></a>
# **getPromptBots**
> [PromptBotBot] getPromptBots()

List Prompt Bots

Returns a list of all Prompt Bots for the user.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPromptBots(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PromptBotBot]**](PromptBotBot.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getPromptCampaigns"></a>
# **getPromptCampaigns**
> getPromptCampaigns()

List Prompt Campaigns

Returns a list of all Prompt Campaigns for the user.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPromptCampaigns(callback);
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

<a name="getVideoEmailPrompt"></a>
# **getVideoEmailPrompt**
> VideoEmailPrompt getVideoEmailPrompt(id)

Gets a prompt

Gets a prompt

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var id = "id_example"; // String | The Id of the prompt


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVideoEmailPrompt(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of the prompt | 

### Return type

[**VideoEmailPrompt**](VideoEmailPrompt.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getVideoEmailPrompts"></a>
# **getVideoEmailPrompts**
> [VideoEmailPrompt] getVideoEmailPrompts()

List prompts

Returns a list of all prompts.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVideoEmailPrompts(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[VideoEmailPrompt]**](VideoEmailPrompt.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="respondToVideoEmailPrompt"></a>
# **respondToVideoEmailPrompt**
> VideoEmailPrompt respondToVideoEmailPrompt(id, choice, opts)

Respond to a prompt

Respond to a prompt by either adding a video, sending without a video or cancelling the prompt.

### Example
```javascript
var Bombbomb = require('bombbomb');

var apiInstance = new Bombbomb.PromptsApi();

var id = "id_example"; // String | The id of the prompt.

var choice = "choice_example"; // String | The users' selection. Can be: WithVideo, WithEmail, Cancel

var opts = { 
  'videoId': "videoId_example", // String | The id of the video.
  'emailId': "emailId_example" // String | The id of the video.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.respondToVideoEmailPrompt(id, choice, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The id of the prompt. | 
 **choice** | **String**| The users&#39; selection. Can be: WithVideo, WithEmail, Cancel | 
 **videoId** | **String**| The id of the video. | [optional] 
 **emailId** | **String**| The id of the video. | [optional] 

### Return type

[**VideoEmailPrompt**](VideoEmailPrompt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updatePromptBot"></a>
# **updatePromptBot**
> PromptBotBot updatePromptBot(id, opts)

Update Prompt Bot

Updates a Prompt Bot&#39;s settings.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var id = "id_example"; // String | The bot id.

var opts = { 
  'emailId': "emailId_example", // String | The default email to use.
  'endDate': "endDate_example", // String | The time frame to complete sending to the list.
  'status': "status_example" // String | The status of the bot.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePromptBot(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The bot id. | 
 **emailId** | **String**| The default email to use. | [optional] 
 **endDate** | **String**| The time frame to complete sending to the list. | [optional] 
 **status** | **String**| The status of the bot. | [optional] 

### Return type

[**PromptBotBot**](PromptBotBot.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updatePromptCampaign"></a>
# **updatePromptCampaign**
> updatePromptCampaign(clientGroupId, opts)

Update Prompt Campaign

Updates a Prompt Campaign&#39;s Settings

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var clientGroupId = "clientGroupId_example"; // String | The client group of the campaign.

var opts = { 
  'brandedTemplateId': "brandedTemplateId_example", // String | The template to use for branded feel emails.
  'personalTemplateId': "personalTemplateId_example", // String | The template to use for personal feel emails.
  'enabled': true // Boolean | Set whether the user is able to start receiving prompts.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePromptCampaign(clientGroupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientGroupId** | **String**| The client group of the campaign. | 
 **brandedTemplateId** | **String**| The template to use for branded feel emails. | [optional] 
 **personalTemplateId** | **String**| The template to use for personal feel emails. | [optional] 
 **enabled** | **Boolean**| Set whether the user is able to start receiving prompts. | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

