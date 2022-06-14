# Sentimotion

## General info

- Repo for storing code of senior project Sentiment Analysis and Emotion Detection, King Mongkut's University of Technology Thonburi
- This project is a work-integrated learning project of which initiative came from Taskworld Inc.
- An interactive dashboard, supported by serveral project parts, is product of this project

## Tools and technologies

<img width=800 src="https://user-images.githubusercontent.com/57994731/160864214-a2a47ac7-55ba-4f6f-8c75-14a03af657b1.png" />

## ETL flow

<img width=800 src="https://user-images.githubusercontent.com/57994731/161267340-962acd83-1de1-4444-baca-e5264caa4162.png" />

## Walk through

- [api folder](https://github.com/ppkgtmm/sentimotion/tree/main/api) provide API serving aggregated prediction results of messages within past interval
- [bringer](https://github.com/ppkgtmm/sentimotion/tree/main/bringer) and [clean script](https://github.com/ppkgtmm/sentimotion/blob/main/clean.js) contain code that help do ETL with process illustrated above

## Sample work

<img width=800 src="https://user-images.githubusercontent.com/57994731/165992339-4cb95c15-e261-46e2-9eec-f4bcdedd5efb.PNG">
<img width=800 src="https://user-images.githubusercontent.com/57994731/165992354-e9597523-c043-4e4c-b38c-f8a839714b48.PNG">
<img width=800 src="https://user-images.githubusercontent.com/57994731/165992668-7e57aeaf-1f45-4248-a856-c98f2e739bc3.PNG">
<img width=800 src="https://user-images.githubusercontent.com/57994731/165992683-674c831d-2f81-46eb-a2be-7d62184b2f05.PNG">
<img width=800 src="https://user-images.githubusercontent.com/57994731/165992695-36fc7633-e33d-40d8-944a-2c64cbdfc1dd.PNG">
<img width=800 src="https://user-images.githubusercontent.com/57994731/165992708-1244dfb8-3e5d-4d26-bd06-053ca8aa8513.PNG">

## Improvements

- During the ETL, messages can be processed, sent for prediction and saved in batches without some of manual work
- Deployment of this project could help in analyzing overall communication tone within workspace
