## Brute Force Attack

The code for the brute force hacking challenge

You can find a <a href="https://hacking101.onrender.com/">live version of the app here</a>.

<hr>

## Technologies:

- Node.js
- express.js
- typescript
- express

### Installation and running:

The app requires Node and npm <i>or</i> yarn to run.

```sh
# clone the Repo
$ git clone https://github.com/Looper-Mentors/hacking-challenge-101.git
# install the requirements with yarn:
$ yarn
# Running in development mode
$ yarn start:dev
# Running in the production server
$ yarn start:prod
# Running the unit tests ( should be running on the development server )
$ yarn start:test
```

## API docs

#### play 🚀

```
    route: /
    method: GET
```

#### get the current image:

```
    route: image/
    method: GET
```

#### change the current image:

```
    route: image/
    method: POST
    headers: { url: "{image url}"}
```

#### reset the current image to the default image

```
    route: image/
    method: DELETE
```

<hr>

have fun 🚀
