開発用と本番用のコンテナを同時にそれぞれのymlファイルを使って立ち上げる
またDockerfileなどを変えた場合も--buildオプションをつけること
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build

prod用のDockerfileでビルドする
docker build -f Dockerfile.prod -t docker-image-build .

ローカルでは別のDockerfileを使う場合は指定が必要
docker build -f Dockerfile.dev .

.envファイルから読み込む
docker run --env-file ./.env -v /Users/test/Desktop/docker-react/src:/app/src:ro -d -p 3000:3000 --name react-app react-image

Dockerfileに書いたENVをコマンドから上書きできる
docker run -e REACT_APP_NAME=test -v /Users/test/Desktop/docker-react/src:/app/src:ro -d -p 3000:3000 --name react-app react-image

localからは書き込めるが、コンテナ側からは書き込めないRead onlyモードにする
docker run -v /Users/test/Desktop/docker-react/src:/app/src:ro -d -p 3000:3000 --name react-app react-image

dockerボリュームを使うことで、ローカルの変更がdockerにも反映される(Hot Reloadされる)
docker run -v c:/usr/react-app/src:/app/src -d -p 3000:3000 --name react-app react-image

もしくはwindowsの場合は以下が必要かも
docker run -e CHOKIDAR_USEPOLLING=true -v c:/usr/react-app/src:/app/src -d -p 3000:3000 --name react-app react-image

Windows powershell
docker run -v ${pwd}/src:/app/src -d -p 3000:3000 --name react-app react-image

react-appコンテナの中に入る
docker exec -it react-app bash

react-appという名前のコンテナをreact-imageというイメージから立ち上げる
(dockerの3000ポートにきたものをローカルPCの3000ポートにフォワード？する)
docker run -d -p 3000:3000 --name react-app react-image

react-imageというイメージを削除する
docker rmi react-image

今あるイメージを表示する
docker images

今動いているdockerのコンテナを確認する
docker ps

react-appというコンテナを削除する
docker rm react-app -f

react-appという名前のコンテナをreact-imageというイメージから立ち上げる
docker run -d --name react-app react-image

react-imageというタグ名で現在のdirをビルドする
docker build -t react-image .

現在のdirをビルドする
docker build .

dockerのnodeイメージを取ってくる
docker pull node

## よくわかっていないこと
1. containerとimageの違い
2. なぜdocker-compose.ymlがいるのか
3. Volumeって何
4. docker-composeって何
5. コンテナがいっぱいある状態ってそもそもどういうこと
6. なぜReactだとデフォルトでホットリロードが効かないのか
7. Dockerfileにかく順番