# Bombbomb.TeamsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTeamMember**](TeamsApi.md#addTeamMember) | **POST** /team/{teamId}/member | Add Member to Team
[**addUsers**](TeamsApi.md#addUsers) | **POST** /team/{teamId}/members | Add users to group.
[**addUsersFromCsv**](TeamsApi.md#addUsersFromCsv) | **POST** /team/{teamId}/members/csv | Add members to group from CSV
[**cancelJerichoSend**](TeamsApi.md#cancelJerichoSend) | **DELETE** /team/{teamId}/jericho/{jerichoId} | Cancel a Jericho Send
[**createSubteam**](TeamsApi.md#createSubteam) | **POST** /team/{teamId}/subteam | Add a Subteam
[**deleteSubteam**](TeamsApi.md#deleteSubteam) | **DELETE** /team/{teamId}/subteam | Delete Subteam
[**getAllClientGroupAssociations**](TeamsApi.md#getAllClientGroupAssociations) | **GET** /team/associations/ | Lists team associations
[**getClientGroupAssets**](TeamsApi.md#getClientGroupAssets) | **GET** /team/assets/ | Lists team assets
[**getClientGroupStatistics**](TeamsApi.md#getClientGroupStatistics) | **GET** /team/{teamId}/stats | Get Team statistics
[**getJerichoSends**](TeamsApi.md#getJerichoSends) | **GET** /team/{teamId}/jericho | List Jericho Sends
[**getJerichoStats**](TeamsApi.md#getJerichoStats) | **GET** /team/{teamId}/jericho/{jerichoId}/performance | Gets Jericho performance statistics
[**getPagedClientGroupMembers**](TeamsApi.md#getPagedClientGroupMembers) | **GET** /team/{teamId}/members | List Team Members
[**getSubteams**](TeamsApi.md#getSubteams) | **GET** /team/{teamId}/subteam | List Subteams
[**getTeamPromptAggregateStats**](TeamsApi.md#getTeamPromptAggregateStats) | **GET** /team/{clientGroupId}/campaign/stats | Get aggregate stats for campaigns
[**getTeamPromptCampaigns**](TeamsApi.md#getTeamPromptCampaigns) | **GET** /team/{clientGroupId}/campaign | Get campaigns for team
[**inviteToSocialPromptTeam**](TeamsApi.md#inviteToSocialPromptTeam) | **POST** /teams/prompt/invite | Invite a list to join the admin&#39;s social prompt team
[**queueJerichoSend**](TeamsApi.md#queueJerichoSend) | **POST** /team/{teamId}/jericho | Creates a Jericho send.
[**removeMemberFromTeam**](TeamsApi.md#removeMemberFromTeam) | **DELETE** /team/{teamId}/member/{userId} | Remove Member from Team
[**resendTeamMemberInvitation**](TeamsApi.md#resendTeamMemberInvitation) | **POST** /team/{teamId}/{memberUserId}/rewelcome | Resend invite
[**updateJerichoPromptSend**](TeamsApi.md#updateJerichoPromptSend) | **PUT** /team/{teamId}/jericho/{jerichoId} | Updates the Jericho Prompt Settings
[**updateTeam**](TeamsApi.md#updateTeam) | **POST** /team/{teamId} | Update a team
[**updateTeamMember**](TeamsApi.md#updateTeamMember) | **PUT** /team/{teamId}/member | Update Member of Team


<a name="addTeamMember"></a>
# **addTeamMember**
> &#39;String&#39; addTeamMember(teamId, opts)

Add Member to Team

Adds a member to a team.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var opts = { 
  'admin': true, // Boolean | Set if the user is an admin of this team.
  'subgroupIds': "subgroupIds_example", // String | Subgroup IDs to add user to
  'userEmail': "userEmail_example", // String | The email of the member being added to the team.
  'userId': "userId_example" // String | The user id of the member being added to the team.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTeamMember(teamId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **admin** | **Boolean**| Set if the user is an admin of this team. | [optional] 
 **subgroupIds** | **String**| Subgroup IDs to add user to | [optional] 
 **userEmail** | **String**| The email of the member being added to the team. | [optional] 
 **userId** | **String**| The user id of the member being added to the team. | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="addUsers"></a>
# **addUsers**
> addUsers(teamId, userDetails, opts)

Add users to group.

Add a new or existing user to group.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var userDetails = "userDetails_example"; // String | Array of emails or objects containing details needed to create user

var opts = { 
  'sendWelcomeEmail': "sendWelcomeEmail_example", // String | Whether to send welcome email to new users
  'subgroupIds': "subgroupIds_example" // String | Subgroup IDs to add user to
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addUsers(teamId, userDetails, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **userDetails** | **String**| Array of emails or objects containing details needed to create user | 
 **sendWelcomeEmail** | **String**| Whether to send welcome email to new users | [optional] 
 **subgroupIds** | **String**| Subgroup IDs to add user to | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="addUsersFromCsv"></a>
# **addUsersFromCsv**
> addUsersFromCsv(teamId, csvImportId, map, opts)

Add members to group from CSV

Imports members to a group from a given CSV ID.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var csvImportId = "csvImportId_example"; // String | ID of the CSV to import

var map = "map_example"; // String | Object to use when mapping import to AccountCreateDetails. Key is property name on details, value is CSV column number.

var opts = { 
  'sendWelcomeEmail': "sendWelcomeEmail_example", // String | Whether to send welcome email to new users
  'subgroupIds': "subgroupIds_example" // String | Subgroup IDs to add user to
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addUsersFromCsv(teamId, csvImportId, map, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **csvImportId** | **String**| ID of the CSV to import | 
 **map** | **String**| Object to use when mapping import to AccountCreateDetails. Key is property name on details, value is CSV column number. | 
 **sendWelcomeEmail** | **String**| Whether to send welcome email to new users | [optional] 
 **subgroupIds** | **String**| Subgroup IDs to add user to | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="cancelJerichoSend"></a>
# **cancelJerichoSend**
> cancelJerichoSend(jerichoId)

Cancel a Jericho Send

Cancels a scheduled Jericho send from being sent.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

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

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="createSubteam"></a>
# **createSubteam**
> TeamPublicRepresentation createSubteam(teamId, name)

Add a Subteam

Adds a subteam to a parent team

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var name = "name_example"; // String | The subteam's name.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubteam(teamId, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **name** | **String**| The subteam&#39;s name. | 

### Return type

[**TeamPublicRepresentation**](TeamPublicRepresentation.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="deleteSubteam"></a>
# **deleteSubteam**
> &#39;String&#39; deleteSubteam(teamId, subteamId)

Delete Subteam

Deletes a subteam

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var subteamId = "subteamId_example"; // String | The subteam you wish to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteSubteam(teamId, subteamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **subteamId** | **String**| The subteam you wish to delete. | 

### Return type

**&#39;String&#39;**

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getAllClientGroupAssociations"></a>
# **getAllClientGroupAssociations**
> getAllClientGroupAssociations(clientId)

Lists team associations

Returns a collection of team associations for a given user

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var clientId = "clientId_example"; // String | The clientId requesting group associations.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAllClientGroupAssociations(clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| The clientId requesting group associations. | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getClientGroupAssets"></a>
# **getClientGroupAssets**
> InlineResponse200 getClientGroupAssets(assetType, opts)

Lists team assets

Returns a collection of assets

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

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

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getClientGroupStatistics"></a>
# **getClientGroupStatistics**
> getClientGroupStatistics(teamId, opts)

Get Team statistics

Get top level statistic data for a Team

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var opts = { 
  'memberStatus': "memberStatus_example" // String | The status of members to query for
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getClientGroupStatistics(teamId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **memberStatus** | **String**| The status of members to query for | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getJerichoSends"></a>
# **getJerichoSends**
> [JerichoConfiguration] getJerichoSends(teamId)

List Jericho Sends

Lists Jericho sends, both pending and sent.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

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

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getJerichoStats"></a>
# **getJerichoStats**
> JerichoPerformance getJerichoStats(jerichoId, teamId)

Gets Jericho performance statistics

Returns an aggregate view of the performance of a Jericho send

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

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

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getPagedClientGroupMembers"></a>
# **getPagedClientGroupMembers**
> getPagedClientGroupMembers(teamId, pageSize, page, opts)

List Team Members

Get a paginated listing of Team members

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var pageSize = "pageSize_example"; // String | Amount of records to return in a page.

var page = "page_example"; // String | The page to return.

var opts = { 
  'status': "status_example", // String | The status type to filter by.
  'search': "search_example", // String | Filter results with names that match the search term.
  'orderBy': "orderBy_example", // String | Key to order results by
  'orderDirection': "orderDirection_example" // String | ASC or DESC
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPagedClientGroupMembers(teamId, pageSize, page, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **pageSize** | **String**| Amount of records to return in a page. | 
 **page** | **String**| The page to return. | 
 **status** | **String**| The status type to filter by. | [optional] 
 **search** | **String**| Filter results with names that match the search term. | [optional] 
 **orderBy** | **String**| Key to order results by | [optional] 
 **orderDirection** | **String**| ASC or DESC | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getSubteams"></a>
# **getSubteams**
> [TeamPublicRepresentation] getSubteams(teamId)

List Subteams

Returns a collection of subteams for a parent team

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubteams(teamId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 

### Return type

[**[TeamPublicRepresentation]**](TeamPublicRepresentation.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getTeamPromptAggregateStats"></a>
# **getTeamPromptAggregateStats**
> getTeamPromptAggregateStats(clientGroupId)

Get aggregate stats for campaigns

Get all the campaigns aggregate stats

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var clientGroupId = "clientGroupId_example"; // String | ID of the client group association


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTeamPromptAggregateStats(clientGroupId, callback);
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

<a name="getTeamPromptCampaigns"></a>
# **getTeamPromptCampaigns**
> getTeamPromptCampaigns(clientGroupId, opts)

Get campaigns for team

Get campaigns for the team and their stats

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var clientGroupId = "clientGroupId_example"; // String | ID of the client group association

var opts = { 
  'searchTerm': "searchTerm_example", // String | The value to search for in prompt subject
  'currentPage': "currentPage_example" // String | The current page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTeamPromptCampaigns(clientGroupId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientGroupId** | **String**| ID of the client group association | 
 **searchTerm** | **String**| The value to search for in prompt subject | [optional] 
 **currentPage** | **String**| The current page | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="inviteToSocialPromptTeam"></a>
# **inviteToSocialPromptTeam**
> inviteToSocialPromptTeam(teamId, listId)

Invite a list to join the admin&#39;s social prompt team

Invite to Social Prompt Team

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var listId = "listId_example"; // String | List to invite to the social prompt team.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.inviteToSocialPromptTeam(teamId, listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **listId** | **String**| List to invite to the social prompt team. | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="queueJerichoSend"></a>
# **queueJerichoSend**
> JerichoConfiguration queueJerichoSend(config, teamId)

Creates a Jericho send.

Sends email content on behalf of members of a client group. There are two forms this send can take:         Static Email, and Video Prompt. Static emails require only an emailId.         Video Prompts build emails dynamically and require most of the other fields.         You must be an administrator of a Team Account to use this method.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var config = new Bombbomb.JerichoConfiguration(); // JerichoConfiguration | JSON representing a Jericho configuration

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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeMemberFromTeam"></a>
# **removeMemberFromTeam**
> &#39;String&#39; removeMemberFromTeam(teamId, userId)

Remove Member from Team

Removes a member from a team.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var userId = "userId_example"; // String | The user id of the member being removed.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeMemberFromTeam(teamId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **userId** | **String**| The user id of the member being removed. | 

### Return type

**&#39;String&#39;**

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="resendTeamMemberInvitation"></a>
# **resendTeamMemberInvitation**
> TeamPublicRepresentation resendTeamMemberInvitation(teamId, memberUserId)

Resend invite

Resend invitation to a member of a team

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var memberUserId = "memberUserId_example"; // String | The user id of the member being resent an invitation.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resendTeamMemberInvitation(teamId, memberUserId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **memberUserId** | **String**| The user id of the member being resent an invitation. | 

### Return type

[**TeamPublicRepresentation**](TeamPublicRepresentation.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateJerichoPromptSend"></a>
# **updateJerichoPromptSend**
> updateJerichoPromptSend(teamId, jerichoId)

Updates the Jericho Prompt Settings

Updates the prompt settings based on the original email id

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var jerichoId = "jerichoId_example"; // String | ID of the Jericho job


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateJerichoPromptSend(teamId, jerichoId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **jerichoId** | **String**| ID of the Jericho job | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateTeam"></a>
# **updateTeam**
> TeamPublicRepresentation updateTeam(teamId, opts)

Update a team

Update fields on a team

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var opts = { 
  'name': "name_example", // String | The name of the team
  'state': "state_example", // String | The status of the login permissions
  'subteamsCanAddMembers': true // Boolean | Updates subteam member adding setting on group
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTeam(teamId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **name** | **String**| The name of the team | [optional] 
 **state** | **String**| The status of the login permissions | [optional] 
 **subteamsCanAddMembers** | **Boolean**| Updates subteam member adding setting on group | [optional] 

### Return type

[**TeamPublicRepresentation**](TeamPublicRepresentation.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="updateTeamMember"></a>
# **updateTeamMember**
> updateTeamMember(teamId, userId, admin, opts)

Update Member of Team

Updates a member of a team

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.TeamsApi();

var teamId = "teamId_example"; // String | The team id

var userId = "userId_example"; // String | The user id of the member being added to the team.

var admin = true; // Boolean | Set if the user is an admin of this team.

var opts = { 
  'permissionSuiteId': "permissionSuiteId_example" // String | Set if the user is an admin of this team.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateTeamMember(teamId, userId, admin, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **userId** | **String**| The user id of the member being added to the team. | 
 **admin** | **Boolean**| Set if the user is an admin of this team. | 
 **permissionSuiteId** | **String**| Set if the user is an admin of this team. | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

