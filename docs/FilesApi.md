# Bombbomb.FilesApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**docHostDelete**](FilesApi.md#docHostDelete) | **DELETE** /files/{docId} | Delete file
[**docHostGet**](FilesApi.md#docHostGet) | **GET** /files/{docId} | Get file
[**docHostList**](FilesApi.md#docHostList) | **GET** /files | List all files
[**docHostUploadV2**](FilesApi.md#docHostUploadV2) | **POST** /files | Upload a file
[**getHostedImagesPaged**](FilesApi.md#getHostedImagesPaged) | **GET** /files/images/paged | Get paged hosted images


<a name="docHostDelete"></a>
# **docHostDelete**
> docHostDelete(docId)

Delete file

Deletes a users file

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.FilesApi();

var docId = "docId_example"; // String | Id of document


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.docHostDelete(docId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **docId** | **String**| Id of document | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="docHostGet"></a>
# **docHostGet**
> HostedDoc docHostGet(docId)

Get file

Get a single file by id

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.FilesApi();

var docId = "docId_example"; // String | Id of document


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.docHostGet(docId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **docId** | **String**| Id of document | 

### Return type

[**HostedDoc**](HostedDoc.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="docHostList"></a>
# **docHostList**
> [HostedDoc] docHostList()

List all files

List all uploaded user files

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.FilesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.docHostList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[HostedDoc]**](HostedDoc.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="docHostUploadV2"></a>
# **docHostUploadV2**
> [HostedDoc] docHostUploadV2(file)

Upload a file

Upload a new file

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.FilesApi();

var file = "file_example"; // String | The file being uploaded


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.docHostUploadV2(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **String**| The file being uploaded | 

### Return type

[**[HostedDoc]**](HostedDoc.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getHostedImagesPaged"></a>
# **getHostedImagesPaged**
> getHostedImagesPaged(pageSize, page, opts)

Get paged hosted images

Get a specific page of uploaded images available to the user.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.default;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.FilesApi();

var pageSize = "pageSize_example"; // String | The number of items to retrieve in a single db query.

var page = "page_example"; // String | Zero-based index of the page of data to retrieve from the db.

var opts = { 
  'search': "search_example" // String | Filter results with names that match the search term.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getHostedImagesPaged(pageSize, page, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **String**| The number of items to retrieve in a single db query. | 
 **page** | **String**| Zero-based index of the page of data to retrieve from the db. | 
 **search** | **String**| Filter results with names that match the search term. | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

