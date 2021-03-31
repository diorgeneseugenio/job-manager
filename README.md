# Job Manager

This project was used as a technical test and improved my knowledge of many technologies, mainly in Next.js, Express, and GraphQL.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Docker](https://www.docker.com/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/diorgeneseugenio/job-manager.git

# Go into the repository
$ cd job-manager

# Build and init the images
$ docker-compose up

# Check the id of job-manager-api
$ docker ps

# With the id of job-manager-api access the image
$ docker exec -it {JOB-MANAGER-API-ID} bash

$ cd ../

# Run the migration to initialize the database with tables
$ yarn db:migrate
```

Now, if all this steps works the systems will be running in http://localhost:8600

## License

MIT

---

> GitHub [@diorgeneseugenio](https://github.com/diorgeneseugenio) &nbsp;&middot;&nbsp;
> Linkedin [@diorgeneseugenio](https://www.linkedin.com/in/diorgeneseugenio/)
