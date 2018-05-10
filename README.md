# QOTD-IMAS
QOTD Server of THE IDOLM@STER Series 

## 概要
- QOTD Protocol ([RFC865](https://tools.ietf.org/html/rfc865)) でアイマスの格言を送信するサーバーです

## 格言
- 一応[RFC865](https://tools.ietf.org/html/rfc865)ではASCII文字等のみを使う事を推奨されていますが、厳密には決まっていないようなので無視する事とします
- 「格言 --発言者」のような形式です
- quotes.jsonでJSONの配列方式で格納されています
- 良い表現形式あったらIssueなりプルリクなりください
- また、自分の担当アイドルやアイマス世界のキャラクターで好きな台詞等あればプルリクください
- 特に事務所（ゲーム・アニメ）に制限は設けていません

## 使い方
### 開発時
- `npm install`
- `npm build`
- `npm start`
- `telnet localhost 50017`