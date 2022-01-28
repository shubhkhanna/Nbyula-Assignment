
# ALP

ALP is an Adaptive Learning Platform where students can take quiz and know their understanding. Teachers can create different courses and each course can contain atmost one quiz. This project is built on top of MERN STACK.



## Demo

Check the live website here: [Click here](https://nbalp.herokuapp.com/)


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express, MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the root folder.

`PORT` =

`NODE_ENV` = 

`MONGO_URI` = 

`JWT_SECRET`= 


## Postman API's Collection in Json
[Click here](https://www.getpostman.com/collections/ab85f2ba36373ad9ce5d)

## Few API Reference

#### Get all courses

```http
  GET /v1/api/courses
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Token` | `string` | **Required**. Your JWT token |

#### Get all course by teacher id

```http
  GET /v1/api/courses/teacher/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Token` | `string` | **Required**. Your JWT token |
| `id`      | `string` | **Required**. Id of teacher logged in |

#### Login User

```http
  POST /v1/api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of the user |
| `password`      | `string` | **Required**. Password of the user |

## Register User

```http
  POST /v1/api/auth/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of the user |
| `email`      | `string` | **Required**. Email of the user |
| `password`      | `string` | **Required**. Password of the user |
| `isTeacher`      | `boolean` | **Optional**. Role of the user |



## Authors

- [Shubh Khanna](https://www.linkedin.com/in/shubhkhanna/)

