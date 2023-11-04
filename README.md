<div align="center">
  <p>
    <a href="https://carriot.ir">
        <img width="200" src="docs/carriot.svg" alt="carriot-logo" />
    </a>
  </p>
  <h1>🚀 Welcome to Carriot 🌟</h1>
</div>

# Take Home Test 📝

## Introduction 👋

Welcome to the Take-Home Test for Senior Node.js Full-Stack Developers at Carriot. Your task is to expand our monorepo by creating a Job Management System within a Next.js panel integrated with Nest.js microservices.

### Job Management System 🎯

Your goal is to enable users to create and view jobs with specific attributes:

- **Name**: Descriptive title of the job.
- **Status**:
  - **Pending**: Waiting to start.
  - **Progressing**: In progress, displaying progress percentage.
  - **Failed**: Unsuccessful.
  - **Successful**: Completed.
- **Complexity**: Rated from 1 to 10, representing the effort level.

### Panel Development 🖥️

- **Dashboard Page**:
  - Lists all jobs.
- **Job Creation**:
  - Enables users to create new jobs, run automatically upon creation.

### Additional Information 🌈

- Each user can run a maximum of 2 concurrent jobs; additional jobs are in the "Pending" status, waiting for ongoing jobs to finish.
- Jobs are logged every second during execution.
- Job progress is time-based. A job with complexity 10 takes 10 minutes to complete, logging its status every second.

## Get Started 🚀

### Prerequisites ✨

- **Docker**
- **Git**

### Local Setup 🌐

Clone the project and run:

```bash
git clone git@github.com:Carriot-Tech/senior-nodejs-full-stack-challenge.git
cd senior-nodejs-full-stack-challenge
docker compose up
```

and visit [swagger](http://127.0.0.1:4000) and [panel](http://127.0.0.1:3000) .

## Packages/Apps 🚀

- `api`: NestJs app
- `web`: Next.js app
- `eslint-config-custom`: Eslint configurations (Next.js and Prettier)
- `tsconfig`: TypeScript configurations used throughout the monorepo

## Code Submission 📤

After completion, please share a link to your private Git repository. We'll review your work and get back to you soon! 🌟