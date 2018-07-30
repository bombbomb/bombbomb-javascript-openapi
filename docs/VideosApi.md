# Bombbomb.VideosApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVideoEncodingStatus**](VideosApi.md#getVideoEncodingStatus) | **GET** /videos/{videoId}/status | Video Encoding Status
[**getVideoRecorder**](VideosApi.md#getVideoRecorder) | **GET** /videos/live/getRecorder | Get Live Video Recorder HTML
[**markLiveRecordingComplete**](VideosApi.md#markLiveRecordingComplete) | **POST** /videos/live/markComplete | Completes a live recording
[**signUpload**](VideosApi.md#signUpload) | **POST** /video/signedUpload | Generate Signed Url
[**updateVideoThumbnailV2**](VideosApi.md#updateVideoThumbnailV2) | **PUT** /videos/thumbnail | Upload thumbnail


<a name="getVideoEncodingStatus"></a>
# **getVideoEncodingStatus**
> VideoEncodingStatusResponse getVideoEncodingStatus(videoId)

Video Encoding Status

Get information about the current state of encoding for a given video id.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.VideosApi();

var videoId = "videoId_example"; // String | The video's id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVideoEncodingStatus(videoId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| The video&#39;s id. | 

### Return type

[**VideoEncodingStatusResponse**](VideoEncodingStatusResponse.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getVideoRecorder"></a>
# **getVideoRecorder**
> VideoRecorderMethodResponse getVideoRecorder(opts)

Get Live Video Recorder HTML

Returns an object with a number of properties to help you put a video recorder on your site.         This is to be used in conjunction with the VideoRecordedLive call one the user has confirmed in your UI that         the video is how they want it.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.VideosApi();

var opts = { 
  'width': 56, // Number | The width of the recorder to present.
  'videoId': "videoId_example" // String | The id of the video to record
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVideoRecorder(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **width** | **Number**| The width of the recorder to present. | [optional] 
 **videoId** | **String**| The id of the video to record | [optional] 

### Return type

[**VideoRecorderMethodResponse**](VideoRecorderMethodResponse.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="markLiveRecordingComplete"></a>
# **markLiveRecordingComplete**
> VideoPublicRepresentation markLiveRecordingComplete(videoId, filename, title)

Completes a live recording

Used in conjunction with the live recorder method to mark a video recording as complete.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.VideosApi();

var videoId = "videoId_example"; // String | The id of the video to mark as done.

var filename = "filename_example"; // String | The filename that was chosen as the final video.

var title = "title_example"; // String | The title to give the video


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.markLiveRecordingComplete(videoId, filename, title, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| The id of the video to mark as done. | 
 **filename** | **String**| The filename that was chosen as the final video. | 
 **title** | **String**| The title to give the video | 

### Return type

[**VideoPublicRepresentation**](VideoPublicRepresentation.md)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="signUpload"></a>
# **signUpload**
> &#39;String&#39; signUpload(policy, opts)

Generate Signed Url

Generates a signed url to be used for video uploads.

### Example
```javascript
var Bombbomb = require('bombbomb');

var apiInstance = new Bombbomb.VideosApi();

var policy = new Bombbomb.SignUploadRequest(); // SignUploadRequest | The policy to sign

var opts = { 
  'v4': true // Boolean | Whether to do v4 signing
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signUpload(policy, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policy** | [**SignUploadRequest**](SignUploadRequest.md)| The policy to sign | 
 **v4** | **Boolean**| Whether to do v4 signing | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVideoThumbnailV2"></a>
# **updateVideoThumbnailV2**
> updateVideoThumbnailV2(videoId, thumbnail, opts)

Upload thumbnail

Upload a new video thumbnail

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.VideosApi();

var videoId = "videoId_example"; // String | The id of the video

var thumbnail = "thumbnail_example"; // String | The thumbnail being uploaded

var opts = { 
  'custom': true // Boolean | The default email to use.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateVideoThumbnailV2(videoId, thumbnail, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **String**| The id of the video | 
 **thumbnail** | **String**| The thumbnail being uploaded | 
 **custom** | **Boolean**| The default email to use. | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

