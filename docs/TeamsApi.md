# Bombbomb.TeamsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTeamMember**](TeamsApi.md#addTeamMember) | **POST** /team/{teamId}/member | Add Member to Team
[**cancelJerichoSend**](TeamsApi.md#cancelJerichoSend) | **DELETE** /team/{teamId}/jericho/{jerichoId} | Cancel a Jericho Send
[**createSubteam**](TeamsApi.md#createSubteam) | **POST** /team/{teamId}/subteam | Add a Subteam
[**deleteSubteam**](TeamsApi.md#deleteSubteam) | **DELETE** /team/{teamId}/subteam | Delete Subteam
[**getClientGroupAssets**](TeamsApi.md#getClientGroupAssets) | **GET** /team/assets/ | Lists team assets
[**getJerichoSends**](TeamsApi.md#getJerichoSends) | **GET** /team/{teamId}/jericho | List Jericho Sends
[**getJerichoStats**](TeamsApi.md#getJerichoStats) | **GET** /team/{teamId}/jericho/{jerichoId}/performance | Gets Jericho performance statistics
[**getSubteams**](TeamsApi.md#getSubteams) | **GET** /team/{teamId}/subteam | List Subteams
[**queueJerichoSend**](TeamsApi.md#queueJerichoSend) | **POST** /team/{teamId}/jericho | Creates a Jericho send.
[**removeMemberFromTeam**](TeamsApi.md#removeMemberFromTeam) | **DELETE** /team/{teamId}/member/{userId} | Remove Member from Team
[**updateTeam**](TeamsApi.md#updateTeam) | **POST** /team/{teamId} | Update a team


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
  'userId': "userId_example", // String | The user id of the member being added to the team.
  'userEmail': "userEmail_example", // String | The email of the member being added to the team.
  'admin': true // Boolean | Set if the user is an admin of this team.
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
 **userId** | **String**| The user id of the member being added to the team. | [optional] 
 **userEmail** | **String**| The email of the member being added to the team. | [optional] 
 **admin** | **Boolean**| Set if the user is an admin of this team. | [optional] 

### Return type

**&#39;String&#39;**

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
  'name': "name_example" // String | The name of the team
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

### Return type

[**TeamPublicRepresentation**](TeamPublicRepresentation.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

