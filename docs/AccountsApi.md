# Bombbomb.AccountsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountDetails**](AccountsApi.md#accountDetails) | **GET** /accounts | Get account details.
[**createAccount**](AccountsApi.md#createAccount) | **POST** /accounts | Create Account
[**getClientStatistics**](AccountsApi.md#getClientStatistics) | **GET** /accounts/stats | Get Client Statistics
[**subscriptionPurchaseAllowed**](AccountsApi.md#subscriptionPurchaseAllowed) | **GET** /accounts/purchaseable | Check if subscription purchase allowed.


<a name="accountDetails"></a>
# **accountDetails**
> accountDetails()

Get account details.

Get the details of the user&#39;s account.

### Example
```javascript
var Bombbomb = require('bombbomb');

var apiInstance = new Bombbomb.AccountsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountDetails(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="createAccount"></a>
# **createAccount**
> &#39;String&#39; createAccount(teamId, firstName, lastName, emailAddress, companyName, phone, opts)

Create Account

Creates a new BombBomb account. This method is currently only available to paid seat admins.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.AccountsApi();

var teamId = "teamId_example"; // String | The team id

var firstName = "firstName_example"; // String | First name of the user.

var lastName = "lastName_example"; // String | Last name of the user.

var emailAddress = "emailAddress_example"; // String | Email address of the user.

var companyName = "companyName_example"; // String | Company of the user.

var phone = "phone_example"; // String | Phone number of the user.

var opts = { 
  'country': "country_example", // String | Country of the user.
  'industry': "industry_example", // String | Industry of the user.
  'address': "address_example", // String | Street Address of the user.
  'city': "city_example", // String | City of the user.
  'postalCode': "postalCode_example", // String | Postal/Zip code of the user.
  'preventWelcomeEmail': "preventWelcomeEmail_example" // String | prevent an email with login credentials from being sent to the new account. must be set to 'true'
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAccount(teamId, firstName, lastName, emailAddress, companyName, phone, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| The team id | 
 **firstName** | **String**| First name of the user. | 
 **lastName** | **String**| Last name of the user. | 
 **emailAddress** | **String**| Email address of the user. | 
 **companyName** | **String**| Company of the user. | 
 **phone** | **String**| Phone number of the user. | 
 **country** | **String**| Country of the user. | [optional] 
 **industry** | **String**| Industry of the user. | [optional] 
 **address** | **String**| Street Address of the user. | [optional] 
 **city** | **String**| City of the user. | [optional] 
 **postalCode** | **String**| Postal/Zip code of the user. | [optional] 
 **preventWelcomeEmail** | **String**| prevent an email with login credentials from being sent to the new account. must be set to &#39;true&#39; | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getClientStatistics"></a>
# **getClientStatistics**
> getClientStatistics(opts)

Get Client Statistics

Gets general statics for a Client

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.AccountsApi();

var opts = { 
  'clientId': "clientId_example" // String | Client ID of the account to retrieve. Defaults to yourself.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getClientStatistics(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| Client ID of the account to retrieve. Defaults to yourself. | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="subscriptionPurchaseAllowed"></a>
# **subscriptionPurchaseAllowed**
> subscriptionPurchaseAllowed()

Check if subscription purchase allowed.

Check whether the user can purchase a subscription.

### Example
```javascript
var Bombbomb = require('bombbomb');

var apiInstance = new Bombbomb.AccountsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.subscriptionPurchaseAllowed(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

