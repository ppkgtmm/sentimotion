# Sentimotion

## General info
- Repo for storing back-end code of senior project Sentiment Analysis and Emotion Detection, King Mongkut's University of Technology Thonburi
- This project is a work-integrated learning project of which initiative came from Taskworld Inc.
- Unfortunately, an interactive dashboard (product of this project) could not be deployed as planned

## Tools and technologies
<img width=800 src="https://user-images.githubusercontent.com/57994731/160864214-a2a47ac7-55ba-4f6f-8c75-14a03af657b1.png" />

## ETL process
<img width=800 src="https://user-images.githubusercontent.com/57994731/161267340-962acd83-1de1-4444-baca-e5264caa4162.png" />

## Walk through
- [api folder](https://github.com/ppkgtmm/sentimotion/tree/main/api) provide API serving aggregated prediction results of messages within past interval
- [bringer](https://github.com/ppkgtmm/sentimotion/tree/main/bringer) and [clean script](https://github.com/ppkgtmm/sentimotion/blob/main/clean.js) contain code that help do ETL with process illustrated above

## Improvements
- During the ETL, messages can be processed in batches, sent for prediction and saved in one go
- Deployment of this project could help in analyzing overall communication tone within workspace


