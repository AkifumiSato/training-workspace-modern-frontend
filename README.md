# Training workspace modern frontend

## Dependencies

以下のNode.jsとpnpmを前提としています。

- Node.js 22.x
- pnpm 10.8.1

### Install Node.js and pnpm by nvm

以下は、[nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)を使ってNode.jsとpnpmをインストールする手順です。

```shell-session
$ nvm install 22.x.x
$ nvm use 22.x.x
$ nvm alias default 22.x.x
$ node --version
v22.x.x
$ npm i -g pnpm@10.8.1
$ pnpm --version
10.8.1
```

## Clone & Install

```shell-session
$ git clone https://github.com/AkifumiSato/training-workspace-modern-frontend.git
$ cd training-workspace-modern-frontend
$ pnpm i
# Biomeによるコードチェックで動作テスト
$ pnpm check
```
