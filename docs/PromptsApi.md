# Bombbomb.PromptsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPromptBot**](PromptsApi.md#createPromptBot) | **POST** /prompts/bots | Create a running Prompt Bot for a list
[**createVideoEmailPrompt**](PromptsApi.md#createVideoEmailPrompt) | **POST** /prompt | Prompts user to send a video
[**getAlternateCampaignContent**](PromptsApi.md#getAlternateCampaignContent) | **GET** /campaign/{campaignId}/content/alternate | List alternate campaign content
[**getPendingVideoEmailPrompts**](PromptsApi.md#getPendingVideoEmailPrompts) | **GET** /prompt/pending | List pending prompts
[**getPromptBots**](PromptsApi.md#getPromptBots) | **GET** /prompts/bots | List Prompt Bots
[**getPromptCampaigns**](PromptsApi.md#getPromptCampaigns) | **GET** /prompts/{userId}/campaigns | List Prompt Campaigns
[**getVideoEmailPrompt**](PromptsApi.md#getVideoEmailPrompt) | **GET** /prompt/{id} | Gets a prompt
[**getVideoEmailPrompts**](PromptsApi.md#getVideoEmailPrompts) | **GET** /prompt/ | List prompts
[**respondToVideoEmailPrompt**](PromptsApi.md#respondToVideoEmailPrompt) | **POST** /prompt/{id}/response | Respond to a prompt
[**sendPromptImmediately**](PromptsApi.md#sendPromptImmediately) | **POST** /prompt/{id}/sendit | 
[**syncPromptSubscriptions**](PromptsApi.md#syncPromptSubscriptions) | **POST** /prompts/campaigns/sync | Syncs Campaigns and One to Ones Subscriptions for User
[**updatePrompt**](PromptsApi.md#updatePrompt) | **PUT** /prompts/{id} | Update Prompt
[**updatePromptBot**](PromptsApi.md#updatePromptBot) | **PUT** /prompts/bots/{id} | Update Prompt Bot
[**updatePromptCampaign**](PromptsApi.md#updatePromptCampaign) | **PUT** /prompts/campaigns/{clientGroupId} | Update Prompt Campaign
[**updatePromptTemplate**](PromptsApi.md#updatePromptTemplate) | **PUT** /prompts/{id}/content | Update Prompt Content


<a name="createPromptBot"></a>
# **createPromptBot**
> PromptBot createPromptBot(emailId, name, subject, content, contactFieldValueColumn, botTypeId, templateId, opts)

Create a running Prompt Bot for a list

Creates a Prompt Bot that sends emails to contacts on a list over the span of time defined.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var emailId = "emailId_example"; // String | The default email to use.

var name = "name_example"; // String | The name of the bot.

var subject = "subject_example"; // String | The subject of the default email.

var content = "content_example"; // String | The content used in the email.

var contactFieldValueColumn = "contactFieldValueColumn_example"; // String | The custom field value column with dates for this bot.

var botTypeId = "botTypeId_example"; // String | The type of bot to create.

var templateId = "templateId_example"; // String | The template used to create the email id.

var opts = { 
  'listId': "listId_example", // String | The list id to attach the bot to.
  'videoId': "videoId_example", // String | The video used in the email.
  'endDate': "endDate_example" // String | The time frame to complete sending to the list.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPromptBot(emailId, name, subject, content, contactFieldValueColumn, botTypeId, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailId** | **String**| The default email to use. | 
 **name** | **String**| The name of the bot. | 
 **subject** | **String**| The subject of the default email. | 
 **content** | **String**| The content used in the email. | 
 **contactFieldValueColumn** | **String**| The custom field value column with dates for this bot. | 
 **botTypeId** | **String**| The type of bot to create. | 
 **templateId** | **String**| The template used to create the email id. | 
 **listId** | **String**| The list id to attach the bot to. | [optional] 
 **videoId** | **String**| The video used in the email. | [optional] 
 **endDate** | **String**| The time frame to complete sending to the list. | [optional] 

### Return type

[**PromptBot**](PromptBot.md)

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
var defaultClient = Bombbomb.ApiClient.instance;

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

<a name="getAlternateCampaignContent"></a>
# **getAlternateCampaignContent**
> getAlternateCampaignContent(clientGroupId)

List alternate campaign content

Returns a list of alternate campaign content by campaign id

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var clientGroupId = "clientGroupId_example"; // String | Id for the campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAlternateCampaignContent(clientGroupId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientGroupId** | **String**| Id for the campaign | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getPendingVideoEmailPrompts"></a>
# **getPendingVideoEmailPrompts**
> [VideoEmailPrompt] getPendingVideoEmailPrompts()

List pending prompts

Returns a list of prompts that have not been sent yet, and can still be customized.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

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
> [PromptBot] getPromptBots()

List Prompt Bots

Returns a list of all Prompt Bots for the user.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

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

[**[PromptBot]**](PromptBot.md)

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
var defaultClient = Bombbomb.ApiClient.instance;

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
var defaultClient = Bombbomb.ApiClient.instance;

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
var defaultClient = Bombbomb.ApiClient.instance;

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

var choice = "choice_example"; // String | The users' selection. Can be: WithVideo, WithEmail, Cancel, Restore, Reset, Manual

var opts = { 
  'videoId': "videoId_example", // String | The id of the video.
  'emailId': "emailId_example", // String | The id of the email.
  'subject': "subject_example" // String | The subject of the email
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
 **choice** | **String**| The users&#39; selection. Can be: WithVideo, WithEmail, Cancel, Restore, Reset, Manual | 
 **videoId** | **String**| The id of the video. | [optional] 
 **emailId** | **String**| The id of the email. | [optional] 
 **subject** | **String**| The subject of the email | [optional] 

### Return type

[**VideoEmailPrompt**](VideoEmailPrompt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="sendPromptImmediately"></a>
# **sendPromptImmediately**
> sendPromptImmediately(id)



Ignore send date and send the prompt now.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var id = "id_example"; // String | The Id of the prompt


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sendPromptImmediately(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The Id of the prompt | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="syncPromptSubscriptions"></a>
# **syncPromptSubscriptions**
> syncPromptSubscriptions(opts)

Syncs Campaigns and One to Ones Subscriptions for User

Syncs Campaigns and One to Ones Subscriptions for User based on their profile information. The user must be a Prompt Subscriber.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var opts = { 
  'migrate': true // Boolean | After syncing, migrate away from old campaigns.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.syncPromptSubscriptions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **migrate** | **Boolean**| After syncing, migrate away from old campaigns. | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updatePrompt"></a>
# **updatePrompt**
> updatePrompt(id, opts)

Update Prompt

Updates a Prompt

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var id = "id_example"; // String | The prompt's id

var opts = { 
  'sendMechanism': "sendMechanism_example", // String | The mechanism for the prompt to be sent
  'facebookMessage': "facebookMessage_example", // String | The facebook message assigned to the prompt
  'twitterMessage': "twitterMessage_example", // String | The twitter message assigned to the prompt
  'videoId': "videoId_example", // String | The id of the video.
  'emailId': "emailId_example", // String | The id of the email.
  'subject': "subject_example", // String | The subject of the email
  'resetCache': "resetCache_example", // String | The subject of the email
  'resetEmailContent': "resetEmailContent_example", // String | The subject of the email
  'status': "status_example" // String | The status of the prompt
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePrompt(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The prompt&#39;s id | 
 **sendMechanism** | **String**| The mechanism for the prompt to be sent | [optional] 
 **facebookMessage** | **String**| The facebook message assigned to the prompt | [optional] 
 **twitterMessage** | **String**| The twitter message assigned to the prompt | [optional] 
 **videoId** | **String**| The id of the video. | [optional] 
 **emailId** | **String**| The id of the email. | [optional] 
 **subject** | **String**| The subject of the email | [optional] 
 **resetCache** | **String**| The subject of the email | [optional] 
 **resetEmailContent** | **String**| The subject of the email | [optional] 
 **status** | **String**| The status of the prompt | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updatePromptBot"></a>
# **updatePromptBot**
> PromptBot updatePromptBot(id, emailId, name, subject, content, contactFieldValueColumn, templateId, opts)

Update Prompt Bot

Updates a Prompt Bot&#39;s settings.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var id = "id_example"; // String | The bot id.

var emailId = "emailId_example"; // String | The default email to use.

var name = "name_example"; // String | The name of the bot.

var subject = "subject_example"; // String | The subject of the default email.

var content = "content_example"; // String | The content used in the default email.

var contactFieldValueColumn = "contactFieldValueColumn_example"; // String | The custom field value column with dates for this bot.

var templateId = "templateId_example"; // String | The template used to create the email id.

var opts = { 
  'listId': "listId_example", // String | The list id to attach the bot to.
  'videoId': "videoId_example", // String | The video used in the default email.
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
apiInstance.updatePromptBot(id, emailId, name, subject, content, contactFieldValueColumn, templateId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The bot id. | 
 **emailId** | **String**| The default email to use. | 
 **name** | **String**| The name of the bot. | 
 **subject** | **String**| The subject of the default email. | 
 **content** | **String**| The content used in the default email. | 
 **contactFieldValueColumn** | **String**| The custom field value column with dates for this bot. | 
 **templateId** | **String**| The template used to create the email id. | 
 **listId** | **String**| The list id to attach the bot to. | [optional] 
 **videoId** | **String**| The video used in the default email. | [optional] 
 **endDate** | **String**| The time frame to complete sending to the list. | [optional] 
 **status** | **String**| The status of the bot. | [optional] 

### Return type

[**PromptBot**](PromptBot.md)

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
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var clientGroupId = "clientGroupId_example"; // String | The client group of the campaign.

var opts = { 
  'brandedTemplateId': "brandedTemplateId_example", // String | The template to use for branded feel emails.
  'personalTemplateId': "personalTemplateId_example", // String | The template to use for personal feel emails.
  'enabled': true, // Boolean | Set whether the user is able to start receiving prompts.
  'sendMechanism': "sendMechanism_example" // String | The way to send the prompt
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
 **sendMechanism** | **String**| The way to send the prompt | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updatePromptTemplate"></a>
# **updatePromptTemplate**
> updatePromptTemplate(id, alternateContentId, newEmailId, ogEmailId, newExampleVideoId)

Update Prompt Content

Updates a Prompt Content

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.PromptsApi();

var id = "id_example"; // String | The prompt's id

var alternateContentId = "alternateContentId_example"; // String | The alternate content id

var newEmailId = "newEmailId_example"; // String | The prompt's new email id

var ogEmailId = "ogEmailId_example"; // String | The prompt's original email id

var newExampleVideoId = "newExampleVideoId_example"; // String | The prompt's new tutorial video id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePromptTemplate(id, alternateContentId, newEmailId, ogEmailId, newExampleVideoId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The prompt&#39;s id | 
 **alternateContentId** | **String**| The alternate content id | 
 **newEmailId** | **String**| The prompt&#39;s new email id | 
 **ogEmailId** | **String**| The prompt&#39;s original email id | 
 **newExampleVideoId** | **String**| The prompt&#39;s new tutorial video id | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

