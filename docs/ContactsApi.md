# Bombbomb.ContactsApi

All URIs are relative to *https://api.bombbomb.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContactsCSV**](ContactsApi.md#addContactsCSV) | **POST** /contacts/import_csv | Add contacts from a CSV file.
[**addNewContact**](ContactsApi.md#addNewContact) | **POST** /contacts/ | Add a contact.
[**addNewCustomField**](ContactsApi.md#addNewCustomField) | **POST** /contacts/custom_fields/ | Add custom fields.
[**addPastedContacts**](ContactsApi.md#addPastedContacts) | **POST** /contacts/paste | Add pasted contacts.
[**cSVToObject**](ContactsApi.md#cSVToObject) | **POST** /csv-to-object | Format CSV.
[**deleteContacts**](ContactsApi.md#deleteContacts) | **PUT** /contacts/delete | Delete Contacts
[**getContactById**](ContactsApi.md#getContactById) | **GET** /contact/{id} | Get Contact Details
[**getCustomFields**](ContactsApi.md#getCustomFields) | **GET** /contacts/custom_fields/ | Get custom fields.


<a name="addContactsCSV"></a>
# **addContactsCSV**
> addContactsCSV(mappingData, listData)

Add contacts from a CSV file.

Add multiple contacts through the upload importer from a CSV file.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.ContactsApi();

var mappingData = "mappingData_example"; // String | The info sent for the contacts

var listData = "listData_example"; // String | The info sent with the import for the list


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addContactsCSV(mappingData, listData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mappingData** | **String**| The info sent for the contacts | 
 **listData** | **String**| The info sent with the import for the list | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="addNewContact"></a>
# **addNewContact**
> addNewContact(contactEmail, opts)

Add a contact.

Add a contact to the users list.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.ContactsApi();

var contactEmail = "contactEmail_example"; // String | Email of the new contact we are adding

var opts = { 
  'contactInfo': "contactInfo_example" // String | The info sent for this contact
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addNewContact(contactEmail, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactEmail** | **String**| Email of the new contact we are adding | 
 **contactInfo** | **String**| The info sent for this contact | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="addNewCustomField"></a>
# **addNewCustomField**
> addNewCustomField(fieldName, opts)

Add custom fields.

Add a new custom field.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.ContactsApi();

var fieldName = "fieldName_example"; // String | Custom field name to be added

var opts = { 
  'fieldType': "fieldType_example" // String | Custom field type for the field to be added
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addNewCustomField(fieldName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldName** | **String**| Custom field name to be added | 
 **fieldType** | **String**| Custom field type for the field to be added | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="addPastedContacts"></a>
# **addPastedContacts**
> addPastedContacts(contactEmails, opts)

Add pasted contacts.

Add the pasted contacts to the users list.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.ContactsApi();

var contactEmails = "contactEmails_example"; // String | Emails array of the new contacts we are adding

var opts = { 
  'listInfo': "listInfo_example" // String | Information about the lists id, recalculations on totals, consent etc
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.addPastedContacts(contactEmails, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactEmails** | **String**| Emails array of the new contacts we are adding | 
 **listInfo** | **String**| Information about the lists id, recalculations on totals, consent etc | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="cSVToObject"></a>
# **cSVToObject**
> cSVToObject(file)

Format CSV.

Format a CSV file to an object.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.ContactsApi();

var file = "file_example"; // String | The CSV file being uploaded


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cSVToObject(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **String**| The CSV file being uploaded | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="deleteContacts"></a>
# **deleteContacts**
> deleteContacts(opts)

Delete Contacts

Delete all contacts within a list, or provide a comma separated list of contactIds to delete.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.ContactsApi();

var opts = { 
  'listId': "listId_example", // String | The list of contacts to be deleted.
  'contactIds': "contactIds_example" // String | comma separated list of contact ids to delete
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContacts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**| The list of contacts to be deleted. | [optional] 
 **contactIds** | **String**| comma separated list of contact ids to delete | [optional] 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getContactById"></a>
# **getContactById**
> getContactById(id)

Get Contact Details

Get the contact details

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.ContactsApi();

var id = "id_example"; // String | Guid for the contact.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getContactById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Guid for the contact. | 

### Return type

null (empty response body)

### Authorization

[BBOAuth2](../README.md#BBOAuth2)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="getCustomFields"></a>
# **getCustomFields**
> getCustomFields()

Get custom fields.

Get the current users custom fields.

### Example
```javascript
var Bombbomb = require('bombbomb');
var defaultClient = Bombbomb.ApiClient.instance;

// Configure OAuth2 access token for authorization: BBOAuth2
var BBOAuth2 = defaultClient.authentications['BBOAuth2'];
BBOAuth2.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bombbomb.ContactsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCustomFields(callback);
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

