# bombbomb

Bombbomb - JavaScript client for bombbomb
We make it easy to build relationships using simple videos.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.25797
- Package version: 2.0.25797
- Build date: 2017-11-29T16:35:35.169Z
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

var api = new Bombbomb.AccountsApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.accountDetails(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.bombbomb.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Bombbomb.AccountsApi* | [**accountDetails**](docs/AccountsApi.md#accountDetails) | **GET** /accounts | Get account details.
*Bombbomb.AccountsApi* | [**createAccount**](docs/AccountsApi.md#createAccount) | **POST** /accounts | Create Account
*Bombbomb.AccountsApi* | [**getClientStatistics**](docs/AccountsApi.md#getClientStatistics) | **GET** /accounts/stats | Get Client Statistics
*Bombbomb.AccountsApi* | [**subscriptionPurchaseAllowed**](docs/AccountsApi.md#subscriptionPurchaseAllowed) | **GET** /accounts/purchaseable | Check if subscription purchase allowed.
*Bombbomb.AutomationsApi* | [**getDripDropStats**](docs/AutomationsApi.md#getDripDropStats) | **GET** /automation/{dripId}/dripdrop/{dripDropId}/stats | Get Automation Email Stats
*Bombbomb.AutomationsApi* | [**getDripStats**](docs/AutomationsApi.md#getDripStats) | **GET** /automation/{id}/stats | Get Automation Stats
*Bombbomb.ContactsApi* | [**addContactsCSV**](docs/ContactsApi.md#addContactsCSV) | **POST** /contacts/import_csv | Add contacts from a CSV file.
*Bombbomb.ContactsApi* | [**addNewContact**](docs/ContactsApi.md#addNewContact) | **POST** /contacts/ | Add a contact.
*Bombbomb.ContactsApi* | [**addNewCustomField**](docs/ContactsApi.md#addNewCustomField) | **POST** /contacts/custom_fields/ | Add custom fields.
*Bombbomb.ContactsApi* | [**addPastedContacts**](docs/ContactsApi.md#addPastedContacts) | **POST** /contacts/paste | Add pasted contacts.
*Bombbomb.ContactsApi* | [**cSVToObject**](docs/ContactsApi.md#cSVToObject) | **POST** /csv-to-object | Format CSV.
*Bombbomb.ContactsApi* | [**deleteContacts**](docs/ContactsApi.md#deleteContacts) | **PUT** /contacts/delete | Delete Contacts
*Bombbomb.ContactsApi* | [**getContactById**](docs/ContactsApi.md#getContactById) | **GET** /contact/{id} | Get Contact Details
*Bombbomb.ContactsApi* | [**getCustomFields**](docs/ContactsApi.md#getCustomFields) | **GET** /contacts/custom_fields/ | Get custom fields.
*Bombbomb.CurriculumApi* | [**getCurricula**](docs/CurriculumApi.md#getCurricula) | **GET** /curricula/ | Get Curricula
*Bombbomb.CurriculumApi* | [**getUserCurriculumWithProgress**](docs/CurriculumApi.md#getUserCurriculumWithProgress) | **GET** /curriculum/getForUserWithProgress | Get Detailed For User
*Bombbomb.EmailsApi* | [**createPrintingPressEmail**](docs/EmailsApi.md#createPrintingPressEmail) | **POST** /emails/print | Create an Email with Printing Press
*Bombbomb.EmailsApi* | [**getAllTemplatesForCurrentUser**](docs/EmailsApi.md#getAllTemplatesForCurrentUser) | **GET** /emails/templates | Get all user templates
*Bombbomb.EmailsApi* | [**getEmailTracking**](docs/EmailsApi.md#getEmailTracking) | **GET** /emails/{emailId}/tracking | Get Email Tracking
*Bombbomb.EmailsApi* | [**getEmailTrackingInteractions**](docs/EmailsApi.md#getEmailTrackingInteractions) | **GET** /emails/{emailId}/tracking/interactions | Get Email Tracking Interactions
*Bombbomb.EmailsApi* | [**getHourlyEmailTracking**](docs/EmailsApi.md#getHourlyEmailTracking) | **GET** /emails/{emailId}/tracking/hourly | Get Hourly Email Tracking
*Bombbomb.EmailsApi* | [**getQuickSendTemplates**](docs/EmailsApi.md#getQuickSendTemplates) | **GET** /emails/quicksend/templates | Get all quicksend templates
*Bombbomb.EmailsApi* | [**videoQuickSender**](docs/EmailsApi.md#videoQuickSender) | **POST** /emails/quicksend | Send a quicksend email
*Bombbomb.FilesApi* | [**docHostDelete**](docs/FilesApi.md#docHostDelete) | **DELETE** /files/{docId} | Delete file
*Bombbomb.FilesApi* | [**docHostGet**](docs/FilesApi.md#docHostGet) | **GET** /files/{docId} | Get file
*Bombbomb.FilesApi* | [**docHostList**](docs/FilesApi.md#docHostList) | **GET** /files | List all files
*Bombbomb.FilesApi* | [**docHostUploadV2**](docs/FilesApi.md#docHostUploadV2) | **POST** /files | Upload a file
*Bombbomb.FilesApi* | [**getHostedImagesPaged**](docs/FilesApi.md#getHostedImagesPaged) | **GET** /files/images/paged | Get paged hosted images
*Bombbomb.IntegrationsApi* | [**syncUsersIntegratedLists**](docs/IntegrationsApi.md#syncUsersIntegratedLists) | **GET** /integrations/sync | Synchronize your integration list or lists.
*Bombbomb.ListsApi* | [**addNewList**](docs/ListsApi.md#addNewList) | **POST** /lists/ | Add list.
*Bombbomb.ListsApi* | [**clearList**](docs/ListsApi.md#clearList) | **PUT** /lists/{listId}/clear | Clear Contacts from List
*Bombbomb.ListsApi* | [**copyListContacts**](docs/ListsApi.md#copyListContacts) | **POST** /lists/{listId}/copy | Copy All Contacts from a List
*Bombbomb.ListsApi* | [**getAllLists**](docs/ListsApi.md#getAllLists) | **GET** /lists/ | Get all Lists
*Bombbomb.ListsApi* | [**suppressAllInList**](docs/ListsApi.md#suppressAllInList) | **PUT** /lists/{listId}/suppress | Suppress All Contacts from List
*Bombbomb.OrdersApi* | [**templateAssetDelete**](docs/OrdersApi.md#templateAssetDelete) | **DELETE** /orders/templates/images | Deletes image from user s3 store
*Bombbomb.PromptsApi* | [**createPromptBot**](docs/PromptsApi.md#createPromptBot) | **POST** /prompts/bots | Create a running Prompt Bot for a list
*Bombbomb.PromptsApi* | [**createVideoEmailPrompt**](docs/PromptsApi.md#createVideoEmailPrompt) | **POST** /prompt | Prompts user to send a video
*Bombbomb.PromptsApi* | [**getPendingVideoEmailPrompts**](docs/PromptsApi.md#getPendingVideoEmailPrompts) | **GET** /prompt/pending | List pending prompts
*Bombbomb.PromptsApi* | [**getPromptBots**](docs/PromptsApi.md#getPromptBots) | **GET** /prompts/bots | List Prompt Bots
*Bombbomb.PromptsApi* | [**getPromptCampaigns**](docs/PromptsApi.md#getPromptCampaigns) | **GET** /prompts/campaigns | List Prompt Campaigns
*Bombbomb.PromptsApi* | [**getVideoEmailPrompt**](docs/PromptsApi.md#getVideoEmailPrompt) | **GET** /prompt/{id} | Gets a prompt
*Bombbomb.PromptsApi* | [**getVideoEmailPrompts**](docs/PromptsApi.md#getVideoEmailPrompts) | **GET** /prompt/ | List prompts
*Bombbomb.PromptsApi* | [**respondToVideoEmailPrompt**](docs/PromptsApi.md#respondToVideoEmailPrompt) | **POST** /prompt/{id}/response | Respond to a prompt
*Bombbomb.PromptsApi* | [**updatePrompt**](docs/PromptsApi.md#updatePrompt) | **PUT** /prompts/{id} | Update Prompt
*Bombbomb.PromptsApi* | [**updatePromptBot**](docs/PromptsApi.md#updatePromptBot) | **PUT** /prompts/bots/{id} | Update Prompt Bot
*Bombbomb.PromptsApi* | [**updatePromptCampaign**](docs/PromptsApi.md#updatePromptCampaign) | **PUT** /prompts/campaigns/{id} | Update Prompt Campaign
*Bombbomb.SocialsApi* | [**getFacebookPages**](docs/SocialsApi.md#getFacebookPages) | **GET** /socials/facebook/pages | Gets facebook pages
*Bombbomb.SocialsApi* | [**getSocialArticleProperties**](docs/SocialsApi.md#getSocialArticleProperties) | **GET** /socials/properties | Gets the social email properties
*Bombbomb.SocialsApi* | [**getSocialAuthorizations**](docs/SocialsApi.md#getSocialAuthorizations) | **GET** /socials/authorizations | Get authorizations for all social integration
*Bombbomb.SocialsApi* | [**getSocialProfileProperties**](docs/SocialsApi.md#getSocialProfileProperties) | **GET** /socials/profile | Gets the profile properties
*Bombbomb.SocialsApi* | [**getSocialStats**](docs/SocialsApi.md#getSocialStats) | **GET** /socials/{promptId}/stats | Get social stats for a prompt
*Bombbomb.SocialsApi* | [**postSocialContent**](docs/SocialsApi.md#postSocialContent) | **POST** /socials/content | Creates social content
*Bombbomb.SocialsApi* | [**updateClientGroupSendMechanism**](docs/SocialsApi.md#updateClientGroupSendMechanism) | **PUT** /socials/client/sendMechanism | Gets the auto shares from the client group assoc id
*Bombbomb.SocialsApi* | [**updateFacebookPages**](docs/SocialsApi.md#updateFacebookPages) | **PUT** /socials/facebook/pages | Updates facebook page Ids
*Bombbomb.SocialsApi* | [**updateSocialContent**](docs/SocialsApi.md#updateSocialContent) | **PUT** /socials/content | Updates social content
*Bombbomb.TeamsApi* | [**addTeamMember**](docs/TeamsApi.md#addTeamMember) | **POST** /team/{teamId}/member | Add Member to Team
*Bombbomb.TeamsApi* | [**cancelJerichoSend**](docs/TeamsApi.md#cancelJerichoSend) | **DELETE** /team/{teamId}/jericho/{jerichoId} | Cancel a Jericho Send
*Bombbomb.TeamsApi* | [**createSubteam**](docs/TeamsApi.md#createSubteam) | **POST** /team/{teamId}/subteam | Add a Subteam
*Bombbomb.TeamsApi* | [**deleteSubteam**](docs/TeamsApi.md#deleteSubteam) | **DELETE** /team/{teamId}/subteam | Delete Subteam
*Bombbomb.TeamsApi* | [**getAllClientGroupAssociations**](docs/TeamsApi.md#getAllClientGroupAssociations) | **GET** /team/associations/ | Lists team associations
*Bombbomb.TeamsApi* | [**getClientGroupAssets**](docs/TeamsApi.md#getClientGroupAssets) | **GET** /team/assets/ | Lists team assets
*Bombbomb.TeamsApi* | [**getClientGroupStatistics**](docs/TeamsApi.md#getClientGroupStatistics) | **GET** /team/{teamId}/stats | Get Team statistics
*Bombbomb.TeamsApi* | [**getJerichoSends**](docs/TeamsApi.md#getJerichoSends) | **GET** /team/{teamId}/jericho | List Jericho Sends
*Bombbomb.TeamsApi* | [**getJerichoStats**](docs/TeamsApi.md#getJerichoStats) | **GET** /team/{teamId}/jericho/{jerichoId}/performance | Gets Jericho performance statistics
*Bombbomb.TeamsApi* | [**getPagedClientGroupMembers**](docs/TeamsApi.md#getPagedClientGroupMembers) | **GET** /team/{teamId}/members | List Team Members
*Bombbomb.TeamsApi* | [**getSubteams**](docs/TeamsApi.md#getSubteams) | **GET** /team/{teamId}/subteam | List Subteams
*Bombbomb.TeamsApi* | [**getTeamPromptAggregateStats**](docs/TeamsApi.md#getTeamPromptAggregateStats) | **GET** /team/{clientGroupId}/campaign/stats | Get aggregate stats for campaigns
*Bombbomb.TeamsApi* | [**getTeamPromptCampaigns**](docs/TeamsApi.md#getTeamPromptCampaigns) | **GET** /team/{clientGroupId}/campaign | Get campaigns for team
*Bombbomb.TeamsApi* | [**queueJerichoSend**](docs/TeamsApi.md#queueJerichoSend) | **POST** /team/{teamId}/jericho | Creates a Jericho send.
*Bombbomb.TeamsApi* | [**removeMemberFromTeam**](docs/TeamsApi.md#removeMemberFromTeam) | **DELETE** /team/{teamId}/member/{userId} | Remove Member from Team
*Bombbomb.TeamsApi* | [**resendTeamMemberInvitation**](docs/TeamsApi.md#resendTeamMemberInvitation) | **POST** /team/{teamId}/{memberUserId}/rewelcome | Resend invite
*Bombbomb.TeamsApi* | [**updateJerichoPromptSend**](docs/TeamsApi.md#updateJerichoPromptSend) | **PUT** /team/{teamId}/jericho/{jerichoId} | Updates the Jericho Prompt Settings
*Bombbomb.TeamsApi* | [**updateTeam**](docs/TeamsApi.md#updateTeam) | **POST** /team/{teamId} | Update a team
*Bombbomb.TeamsApi* | [**updateTeamMember**](docs/TeamsApi.md#updateTeamMember) | **PUT** /team/{teamId}/member | Update Member of Team
*Bombbomb.UtilitiesApi* | [**createOAuthClient**](docs/UtilitiesApi.md#createOAuthClient) | **POST** /oauthclient | Create an OAuth Client
*Bombbomb.UtilitiesApi* | [**deleteOAuthClient**](docs/UtilitiesApi.md#deleteOAuthClient) | **DELETE** /oauthclient/{id} | Delete an OAuth Client
*Bombbomb.UtilitiesApi* | [**getOAuthClients**](docs/UtilitiesApi.md#getOAuthClients) | **GET** /oauthclient | Lists OAuth Clients
*Bombbomb.UtilitiesApi* | [**getSpec**](docs/UtilitiesApi.md#getSpec) | **GET** /spec | Describes this api
*Bombbomb.VideosApi* | [**getVideoEncodingStatus**](docs/VideosApi.md#getVideoEncodingStatus) | **GET** /videos/{videoId}/status | Video Encoding Status
*Bombbomb.VideosApi* | [**getVideoRecorder**](docs/VideosApi.md#getVideoRecorder) | **GET** /videos/live/getRecorder | Get Live Video Recorder HTML
*Bombbomb.VideosApi* | [**markLiveRecordingComplete**](docs/VideosApi.md#markLiveRecordingComplete) | **POST** /videos/live/markComplete | Completes a live recording
*Bombbomb.VideosApi* | [**signUpload**](docs/VideosApi.md#signUpload) | **POST** /video/signedUpload | Generate Signed Url
*Bombbomb.VideosApi* | [**updateVideoThumbnailV2**](docs/VideosApi.md#updateVideoThumbnailV2) | **PUT** /videos/thumbnail | Upload thumbnail
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
 - [Bombbomb.HostedDoc](docs/HostedDoc.md)
 - [Bombbomb.InlineResponse200](docs/InlineResponse200.md)
 - [Bombbomb.InlineResponse200Items](docs/InlineResponse200Items.md)
 - [Bombbomb.JerichoConfiguration](docs/JerichoConfiguration.md)
 - [Bombbomb.JerichoPerformance](docs/JerichoPerformance.md)
 - [Bombbomb.ModelString](docs/ModelString.md)
 - [Bombbomb.OAuthClient](docs/OAuthClient.md)
 - [Bombbomb.PromptBot](docs/PromptBot.md)
 - [Bombbomb.SignUploadRequest](docs/SignUploadRequest.md)
 - [Bombbomb.SignUploadResponse](docs/SignUploadResponse.md)
 - [Bombbomb.TeamPublicRepresentation](docs/TeamPublicRepresentation.md)
 - [Bombbomb.VideoEmailPrompt](docs/VideoEmailPrompt.md)
 - [Bombbomb.VideoEncodingStatusResponse](docs/VideoEncodingStatusResponse.md)
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
  - list:manage: Manage List
  - team:manage: Manage Team
  - team:read: Read Team
  - order:manage: Manage Order
  - settings:manage: Manage Settings
  - file:manage: Manage File
  - file:read: Read File
  - account:manage: Manage Account
  - account:read: Read Account

