# BombbombNodejsOpenapi.VideoEmailPrompt

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The identifier of the prompt. Read Only. | [optional] 
**userId** | **String** | The prompt&#39;s owner. Read Only. | [optional] 
**templateId** | **String** | Optional. The email template to be used in the sent email, if none supplied, the users&#39; default will be applied. | [optional] 
**emailSubjectLine** | **String** | The subject line of the final email | 
**emailContent** | **String** | The HTML content of the final email | 
**toEmailAddresses** | **[String]** | Email addresses to send the final email to, can be mixed with listIds. | [optional] 
**toLists** | **[String]** | List Ids to send the final email to | [optional] 
**jerichoId** | **String** | If sent in a jericho context, this will have the jericho id | [optional] 
**promptSubject** | **String** | The prompt&#39;s subject line | 
**promptHtml** | **String** | The HTML body of the prompt | 
**sendWithoutVideo** | **Boolean** | Whether to send the email if no video is recorded. If set to require a video, and none is added before the videoDueDate, the prompt is cancelled. | [optional] 
**videoDueDate** | **Date** | When the video must be recorded by | [optional] 
**scheduledSendDate** | **Date** | When the final email is scheduled to be sent | 
**videoId** | **String** | The video that was added to the prompt. Read Only. | [optional] 
**emailId** | **String** | The email that was created by the prompt Read Only. | [optional] 
**jobId** | **String** | The job sent by the prompt Read Only. | [optional] 
**status** | **Integer** | The status of the prompt: created &#x3D; 0, sent &#x3D; 10, recorded &#x3D; 20, job_created &#x3D; 30, timed_out &#x3D; 40, declined &#x3D; 50 Read Only | [optional] 
**doNotApplyTemplate** | **Boolean** | Controls whether a user template is applied to the message as it is sent | [optional] 

