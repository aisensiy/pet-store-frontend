一个用于 CDE 环境的演示项目，采用 CDE 的 create-react-app 技术栈构建，采用了 [create-react-app](https://github.com/facebookincubator/create-react-app/) 作为项目脚手架工具。

## 项目部署

### 1. 注册 cde

```
$ cde register http://controller.cnup.io
```

### 2. 登录 cde 并添加 key

```
$ cde login http://controller.cnup.io
$ cde keys:add ~/.ssh/id_rsa.pub
```

其中不同的操作系统下添加 key 的目录可能不同，在 windows 环境下采用 `git bash` 的 key 添加步骤请参考 [http://www.jianshu.com/p/9317a927e844](http://www.jianshu.com/p/9317a927e844)

### 3. 获取项目

```
$ git clone https://github.com/aisensiy/pet-store-frontend.git
$ cd pet-store-frontend
```

### 4. 采用 create-react-app 技术栈创建项目

```
$ cde apps:create <your-app-name> create-react-app
```

通过 `git remote -v` 命令可以看到当前的 git 仓库多了 `cde` 的源：

```
$ git remote -v
cde	ssh://git@controller.cnup.io:2222/petstore-app.git (fetch)
cde	ssh://git@controller.cnup.io:2222/petstore-app.git (push)
origin	git@github.com:aisensiy/pet-store-frontend.git (fetch)
origin	git@github.com:aisensiy/pet-store-frontend.git (push)
```

### 5. 部署项目

通过将项目提交到 `cde` 的源实现部署

```
$ git push cde master
```

### 6. 添加后端入口

这是一个 SPA 项目，其需要提供一个后端应用的入口，我们以环境变量的形式提供。其中后端项目为 [https://github.com/aisensiy/spring-boot-petstore](https://github.com/aisensiy/spring-boot-petstore)，请依照其说明部署应用，在部署成功后通过 `apps:info` 命令可以查看应用的访问路由。

```
$ cde config:set CONFIG_VARS=REACT_APP_API_PREFIX REACT_APP_API_PREFIX=http://petstore-backend-web.cnup.io
```

**注意** 所提供的环境变量 `REACT_APP_API_PREFIX` 必须以 `http://` 为前缀然后不保留路由最后面的 `/`。

CDE 在环境变量修改后会重新部署应用。
    
### 7. 查看项目状态

在部署完成后可以通过 `cde apps:info` 命令查看当前应用状态：

```
$ cde apps:info

--- petstore-app Application
+------------+------------------+
| ID         | petstore-app     |
| Stack Name | create-react-app |
+------------+------------------+
--- Access routes:

petstore-app-web.cnup.io/

--- Dependent services:
-----> Service 1:
+-----------+------+
| ID        | 1062 |
| Name      | web  |
| Instances | 1    |
| Memory    | 512  |
| Env       | {}   |
+-----------+------+
```

### 8. 在浏览器打开应用

访问 apps info 中所提供的地址 [http://petstore-app-web.cnup.io](http://petstore-app-web.cnup.io) 即可。
