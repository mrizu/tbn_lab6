Budujemy obrazy:
```
docker build -t lab6_client client/.
docker build -t lab6_server server/.
```
Tworzymy sieć:
``` docker network create lab6 ```

Tworzymy i uruchamiamy kontenery:
```
docker run -d --name client --network lab6 -p 3000 lab6_client
docker run -d --name server --network lab6 -p 9000 lab6_server
```
