This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

## Frontend with NEXTJS and Tailwindcss

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Backend with php MVC OOP

You can start by navigating to `medical/backend`

```bash
php -S localhost:8000
```

## Folder structure

![Alt text](<public/Screenshot%20(53).png>)

## API endpoints

## Register and login

| Method | URL             | Description      |
| ------ | --------------- | ---------------- |
| `POST` | `/register`     | User register. |
| `POST` | `/login`        | User Login.    |


## GET

| Method | URL                  | Description                         |
| ------ | -------------------- | ----------------------------------- |
| `GET`  | `/patients`          | Retrieve all Patients data.             |

## POST

| Method | URL                   | Description                             |
| ------ | --------------------- | --------------------------------------- |
| `POST` | `/patient`            | Retrieve a specific patient.            |
| `POST` | `/ReferenceKey`       | Retrieve a unique patient id.           |
| `POST` | `/Appointment`        | Create an appointement.                 |
| `POST` | `/getALLAppointment`  | Retrieve all appointments.              |

## Headers

| Header key     |                         Description                             |
| ------         | ----------------------------------------------------------------|
| `Accept`       | This header is required by all endpoints. It’s used to identify the request as our own and for versioning our endpoints. Default value: application/vnd.nodes.v1+json.|
| `Authorization`| The authorized user’s token. This is used to gain access to protected endpoint.|
| `Content-Type` | The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending)..|




