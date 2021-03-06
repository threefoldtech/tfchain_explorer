# Grid Explorer UI

![Version: 3.0.0](https://img.shields.io/github/v/release/threefoldtech/tfchain_explorer?style=flat-square)

Explorer UI for grid 3 using the new [graphql api](https://graphql.dev.grid.tf/graphql).

## Content

- [Download](#download)
- [Serve UI](#serve-ui)
- [Run Docker](#run-docker)
- [Deploy Helm Chart](#deploy-helm-chart)
- [Screenshots](#screenshots)

---

### Download

1. Clone the project

```
$ git@github.com:threefoldtech/grid_explorer_ui.git
```

2. Install dependencies

```
// You must have yarn installed globaly
$ yarn
```

3. Change Directory

```
$ cd grid_explorer_ui
```

---

### serve-ui

```
$ yarn serve
```

---

### Run Docker

| Name    | Required | Default |
| ------- | -------- | ------- |
| GQL_URL | True     |         |

1. Build local image

```
$ docker build -t explorer-ui .
```

2. Run container

```
$ docker run -p 8080:80 -e GQL_URL=https://graphql.dev.grid.tf/graphql explorer-ui
```

---

### Deploy Helm Chart

| Name         | Required | Default                                  |
| ------------ | -------- | ---------------------------------------- |
| GQL_URL      | False    | https://graphql.dev.grid.tf/graphql |
| ingress.host | False    | dashboard.com                            |

1. Add repo

```
$ helm repo add tf-explorer https://threefoldtech.github.io/tfchain_explorer
```

2. Run chart

```
$ helm install --set ingress.host=dashboard.com --set GQL_URL=https://graphql.dev.grid.tf/graphql --generate-name tf-explorer/tf-explorer
```

---

### Screenshots

![image](https://user-images.githubusercontent.com/64129/130027646-16317aee-624a-4e85-ae90-3935199c93f3.png)

![image](https://user-images.githubusercontent.com/64129/130027811-4cf6dc1b-a65f-40fc-a101-801e137248fb.png)

![image](https://user-images.githubusercontent.com/64129/130027767-3bd54133-5a8b-4fa6-a0a9-818c305c2ecd.png)


## Available explorers
- [Devnet explorer](https://explorer.dev.grid.tf)
- [Testnet explorer](https://explorer.test.grid.tf/)
- [Mainnet explorer -not live yet-](https://explorer.tfchain.threefold.io)

> TODO: keep it in todo until all are alive

## GraphQL
Info on TFChain is indexed over GraphQL and is available for queries. 
- [Devnet GraphQL](https://graphql.dev.grid.tf/graphql)
- [Testnet GraphQL](https://graphql.test.grid.tf/graphql)
- [Mainnet GraphQL](https://graphql.grid.tf/graphql)


Manual link: https://library.threefold.me/info/threefold#/manual_tfgrid3/threefold__grid3_explorer
