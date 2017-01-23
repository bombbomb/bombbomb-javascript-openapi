# bombbomb

Bombbomb - JavaScript client for bombbomb
We make it easy to build relationships using simple videos.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.22196
- Package version: 2.0.22196
- Build date: 2017-01-23T19:40:16.187Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install bombbomb --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Bombbomb = require('bombbomb');

var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = "YOUR ACCESS TOKEN"

var api = new Bombbomb.AutomationsApi()

var dripId = "dripId_example"; // {String} The id of the drip

var dripDropId = "dripDropId_example"; // {String} The id of the drip drop


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getDripDropStats(dripId, dripDropId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.bombbomb.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Bombbomb.AutomationsApi* | [**getDripDropStats**](docs/AutomationsApi.md#getDripDropStats) | **GET** /automation/{dripId}/dripdrop/{dripDropId}/stats | Get Automation Email Stats
*Bombbomb.AutomationsApi* | [**getDripStats**](docs/AutomationsApi.md#getDripStats) | **GET** /automation/{id}/stats | Get Automation Stats
*Bombbomb.CurriculumApi* | [**getCurricula**](docs/CurriculumApi.md#getCurricula) | **GET** /curricula/ | Get Curricula
*Bombbomb.CurriculumApi* | [**getUserCurriculumWithProgress**](docs/CurriculumApi.md#getUserCurriculumWithProgress) | **GET** /curriculum/getForUserWithProgress | Get Detailed For User
*Bombbomb.EmailsApi* | [**createPrintingPressEmail**](docs/EmailsApi.md#createPrintingPressEmail) | **POST** /emails/print | Create an Email with Printing Press
*Bombbomb.EmailsApi* | [**getEmailTracking**](docs/EmailsApi.md#getEmailTracking) | **GET** /emails/{emailId}/tracking | Get Email Tracking
*Bombbomb.EmailsApi* | [**getEmailTrackingInteractions**](docs/EmailsApi.md#getEmailTrackingInteractions) | **GET** /emails/{emailId}/tracking/interactions | Get Email Tracking Interactions
*Bombbomb.EmailsApi* | [**getHourlyEmailTracking**](docs/EmailsApi.md#getHourlyEmailTracking) | **GET** /emails/{emailId}/tracking/hourly | Get Hourly Email Tracking
*Bombbomb.PromptsApi* | [**createPromptBot**](docs/PromptsApi.md#createPromptBot) | **POST** /prompts/bots | Create a running Prompt Bot for a list
*Bombbomb.PromptsApi* | [**createVideoEmailPrompt**](docs/PromptsApi.md#createVideoEmailPrompt) | **POST** /prompt | Prompts user to send a video
*Bombbomb.PromptsApi* | [**getPendingVideoEmailPrompts**](docs/PromptsApi.md#getPendingVideoEmailPrompts) | **GET** /prompt/pending | List pending prompts
*Bombbomb.PromptsApi* | [**getPromptBots**](docs/PromptsApi.md#getPromptBots) | **GET** /prompts/bots | List Prompt Bots
*Bombbomb.PromptsApi* | [**getPromptCampaigns**](docs/PromptsApi.md#getPromptCampaigns) | **GET** /prompts/campaigns | List Prompt Campaigns
*Bombbomb.PromptsApi* | [**getVideoEmailPrompt**](docs/PromptsApi.md#getVideoEmailPrompt) | **GET** /prompt/{id} | Gets a prompt
*Bombbomb.PromptsApi* | [**getVideoEmailPrompts**](docs/PromptsApi.md#getVideoEmailPrompts) | **GET** /prompt/ | List prompts
*Bombbomb.PromptsApi* | [**respondToVideoEmailPrompt**](docs/PromptsApi.md#respondToVideoEmailPrompt) | **POST** /prompt/{id}/response | Respond to a prompt
*Bombbomb.PromptsApi* | [**updatePromptBot**](docs/PromptsApi.md#updatePromptBot) | **PUT** /prompts/bots/{id} | Update Prompt Bot
*Bombbomb.PromptsApi* | [**updatePromptCampaign**](docs/PromptsApi.md#updatePromptCampaign) | **PUT** /prompts/campaigns/{id} | Update Prompt Campaign
*Bombbomb.TeamsApi* | [**addTeamMember**](docs/TeamsApi.md#addTeamMember) | **POST** /team/{teamId}/member | Add Member to Team
*Bombbomb.TeamsApi* | [**cancelJerichoSend**](docs/TeamsApi.md#cancelJerichoSend) | **DELETE** /team/{teamId}/jericho/{jerichoId} | Cancel a Jericho Send
*Bombbomb.TeamsApi* | [**createSubteam**](docs/TeamsApi.md#createSubteam) | **POST** /team/{teamId}/subteam | Add a Subteam
*Bombbomb.TeamsApi* | [**deleteSubteam**](docs/TeamsApi.md#deleteSubteam) | **DELETE** /team/{teamId}/subteam | Delete Subteam
*Bombbomb.TeamsApi* | [**getClientGroupAssets**](docs/TeamsApi.md#getClientGroupAssets) | **GET** /team/assets/ | Lists team assets
*Bombbomb.TeamsApi* | [**getJerichoSends**](docs/TeamsApi.md#getJerichoSends) | **GET** /team/{teamId}/jericho | List Jericho Sends
*Bombbomb.TeamsApi* | [**getJerichoStats**](docs/TeamsApi.md#getJerichoStats) | **GET** /team/{teamId}/jericho/{jerichoId}/performance | Gets Jericho performance statistics
*Bombbomb.TeamsApi* | [**getSubteams**](docs/TeamsApi.md#getSubteams) | **GET** /team/{teamId}/subteam | List Subteams
*Bombbomb.TeamsApi* | [**queueJerichoSend**](docs/TeamsApi.md#queueJerichoSend) | **POST** /team/{teamId}/jericho | Creates a Jericho send.
*Bombbomb.TeamsApi* | [**removeMemberFromTeam**](docs/TeamsApi.md#removeMemberFromTeam) | **DELETE** /team/{teamId}/member/{userId} | Remove Member from Team
*Bombbomb.TeamsApi* | [**updateTeam**](docs/TeamsApi.md#updateTeam) | **POST** /team/{teamId} | Update a team
*Bombbomb.UtilitiesApi* | [**createOAuthClient**](docs/UtilitiesApi.md#createOAuthClient) | **POST** /oauthclient | Create an OAuth Client
*Bombbomb.UtilitiesApi* | [**deleteOAuthClient**](docs/UtilitiesApi.md#deleteOAuthClient) | **DELETE** /oauthclient/{id} | Delete an OAuth Client
*Bombbomb.UtilitiesApi* | [**getOAuthClients**](docs/UtilitiesApi.md#getOAuthClients) | **GET** /oauthclient | Lists OAuth Clients
*Bombbomb.UtilitiesApi* | [**getSpec**](docs/UtilitiesApi.md#getSpec) | **GET** /spec | Describes this api
*Bombbomb.VideosApi* | [**getVideoRecorder**](docs/VideosApi.md#getVideoRecorder) | **GET** /videos/live/getRecorder | Get Live Video Recorder HTML
*Bombbomb.VideosApi* | [**markLiveRecordingComplete**](docs/VideosApi.md#markLiveRecordingComplete) | **POST** /videos/live/markComplete | Completes a live recording
*Bombbomb.VideosApi* | [**signUpload**](docs/VideosApi.md#signUpload) | **POST** /video/signedUpload | Generate Signed Url
*Bombbomb.WebhooksApi* | [**addWebHook**](docs/WebhooksApi.md#addWebHook) | **POST** /webhook | Add Webhook
*Bombbomb.WebhooksApi* | [**deleteWebHook**](docs/WebhooksApi.md#deleteWebHook) | **DELETE** /webhook/{hookId} | Deletes Webhook
*Bombbomb.WebhooksApi* | [**getWebHooks**](docs/WebhooksApi.md#getWebHooks) | **GET** /webhook/ | Lists Webhooks
*Bombbomb.WebhooksApi* | [**listWebHookEvents**](docs/WebhooksApi.md#listWebHookEvents) | **GET** /webhook/events | Describe WebHook Events
*Bombbomb.WebhooksApi* | [**sendWebhookExample**](docs/WebhooksApi.md#sendWebhookExample) | **POST** /webhook/test | Sends test Webhook


## Documentation for Models

 - [Bombbomb.BBWebHook](docs/BBWebHook.md)
 - [Bombbomb.Curriculum](docs/Curriculum.md)
 - [Bombbomb.CurriculumUserProgress](docs/CurriculumUserProgress.md)
 - [Bombbomb.CurriculumWithProgress](docs/CurriculumWithProgress.md)
 - [Bombbomb.InlineResponse200](docs/InlineResponse200.md)
 - [Bombbomb.InlineResponse200Items](docs/InlineResponse200Items.md)
 - [Bombbomb.JerichoConfiguration](docs/JerichoConfiguration.md)
 - [Bombbomb.JerichoPerformance](docs/JerichoPerformance.md)
 - [Bombbomb.ModelString](docs/ModelString.md)
 - [Bombbomb.OAuthClient](docs/OAuthClient.md)
 - [Bombbomb.PromptBotBot](docs/PromptBotBot.md)
 - [Bombbomb.SignUploadRequest](docs/SignUploadRequest.md)
 - [Bombbomb.SignUploadResponse](docs/SignUploadResponse.md)
 - [Bombbomb.TeamPublicRepresentation](docs/TeamPublicRepresentation.md)
 - [Bombbomb.VideoEmailPrompt](docs/VideoEmailPrompt.md)
 - [Bombbomb.VideoPublicRepresentation](docs/VideoPublicRepresentation.md)
 - [Bombbomb.VideoRecorderMethodResponse](docs/VideoRecorderMethodResponse.md)


## Documentation for Authorization


### BBOAuth2

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://app.bombbomb.com/auth/authorize
- **Scopes**: 
  - all:manage: Manage All
  - all:read: Read All
  - email:manage: Manage Email
  - email:read: Read Email
  - video:manage: Manage Video
  - video:read: Read Video
  - contact:manage: Manage Contact
  - contact:read: Read Contact
  - curriculum:manage: Manage Curriculum
  - curriculum:read: Read Curriculum
  - automation:manage: Manage Automation
  - automation:read: Read Automation
  - form:manage: Manage Form
  - form:read: Read Form
  - team:manage: Manage Team
  - team:read: Read Team
  - settings:manage: Manage Settings

