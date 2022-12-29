<div align="center">
  <!-- <img src="static/img/logo.png" alt="ZMGAMS logo" width="200" height="auto" /> -->
  <h1>ZMGAMS</h1>
  <!-- <p>Zhejiang Media Group Advanced Management System</p>
  <p>浙江广播电视集团</p> -->

<!-- Badges -->
[![License: APLv2](https://img.shields.io/github/license/GreaterWMS/GreaterWMS)](https://opensource.org/licenses/Apache-2.0/)
![Release Version (latest Version)](https://img.shields.io/github/v/release/GreaterWMS/GreaterWMS?color=orange&include_prereleases)
![QR Code Support](https://img.shields.io/badge/QR--Code-Support-orange.svg)
![Docker Support](https://img.shields.io/badge/Docker-Support-orange.svg)
![i18n Support](https://img.shields.io/badge/i18n-Support-orange.svg)

![repo size](https://img.shields.io/github/repo-size/GreaterWMS/GreaterWMS)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/GreaterWMS/GreaterWMS)

![Python](https://img.shields.io/badge/Python-3.9.5-yellowgreen)
![Django](https://img.shields.io/badge/Django-4.1.2-yellowgreen)
![Quasar Cli](https://img.shields.io/badge/Quasar/cli-1.2.1-yellowgreen)
![Vue](https://img.shields.io/badge/Vue-2.6.0-yellowgreen)
![NodeJS](https://img.shields.io/badge/NodeJS-14.19.3-yellowgreen)
</div>

<!-- [//]: # (Some Link)
## :rocket: 找到我们
<h4>
    <a href="https://www.56yhz.com/">官网首页</a>
</h4>
<h4>
  <a href="https://space.bilibili.com/407321291/channel/seriesdetail?sid=776320">相关视频</a>
</h4>
<h4>
  <a href="https://github.com/GreaterWMS/GreaterwMS/issues/new?template=bug_report.md&title=[BUG]">提交一个Bug</a>
</h4>
<h4>   
  <a href="https://github.com/GreaterWMS/GreaterWMS/issues/new?template=feature_request.md&title=[FR]">提交一个建议</a>
</h4>
<h4>
  <a href="https://github.com/Singosgu/GreaterWMS/blob/master/README.md">英文文档</a>
</h4> -->

<!-- [//]: # (About the Project)
### :star2: 关于此项目

该库存管理系统是，目前福特亚太区售后物流仓储供应链流程。
离开福特后，我开始了这个项目。 为了帮助一些有需要的人。
OneAPP 理念。 支持扫描设备PDA、手机APP、桌面exe、网站等。 -->

[//]: # (Function)
## :dart: 模块

* [ ] 报表中心
* [ ] 设备管理
* [ ] 扫描设备PDA
* [ ] 盘点
* [ ] 仓库管理
* [ ] 用户（操作员）管理
* [x] API文档
* [x] IOS APP支持
* [x] Android APP支持
* [x] Electron APP支持
* [x] 自动更新
* [x] i18n国际化

[//]: # (Install)
## :compass: 安装
python安装
- [python 3.9.5](https://www.python.org/downloads/release/python-395/)

nodejs安装
- [nodejs 14.19.3](https://nodejs.org/download/release/v14.19.3/)

克隆代码
~~~shell
git clone https://github.com/GreaterWMS/GreaterWMS.git
~~~

后端环境
~~~shell
cd ZMGAMS/
pip install -r requirements.txt
~~~

后端环境
~~~shell
npm install -g @quasar/cli
npm install -g yarn
cd templates/
yarn install
~~~

数据初始化
~~~shell
cd ZMGAMS/
python manage.py makemigrations
python manage.py migrate
~~~

### docker(可选择)
~~~shell
cd ZMGAMS/
docker-compose up -d
# 修改请求地址
# baseurl ZMGAMS/templates/public/statics/baseurl.txt
docker-compose restart
~~~

<h4>
  <a href="https://www.56yhz.com/zh-hans/docs/39/3/">Windows X64</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/zh-hans/docs/39/4/">Centos 7</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/zh-hans/docs/39/5/">Ubuntu 20</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/zh-hans/docs/39/6/">IOS 环境</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/zh-hans/docs/39/7/">Android 环境</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/zh-hans/docs/39/8/">Android APK 签名</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/zh-hans/docs/39/12/">Electron 环境</a>
</h4>

[//]: # (development)
## :hammer_and_wrench: 怎么启动开发环境:

- 启动后端环境:
~~~shell
cd ZMGAMS
python manage.py runserver
or
python manage.py runserver 0.0.0.0:8008 # 局域网
~~~

- 启动前端环境:
~~~shell
cd templates
quasar d # http://localhost:8080
or
quasar dev # http://localhost:8080
~~~

- 请求地址修改
~~~shell
templates/public/statics/baseurl.txt
~~~

- 配套的手机APP

[Android](https://production.56yhz.com/media/GWMS.apks)
GreaterWMS有配套的APP，支持手机扫描，和PDA扫描，配置下服务器请求地址即可

配套的APP是一个apks文件，需要使用[bundletool](https://github.com/google/bundletool/releases)进行手机安装
确保你的电脑中已经安装了JAVA

~~~shell
## 注意使用你下载的bundletool版本
bundletool-all-1.13.0.jar install-apks --apks=GWMS.apks
~~~

[//]: # (publish)
## :trumpet: 怎么构建你的app:

- 网页版构建:

~~~shell
cd templates
quasar build # /templates/dist/spa
~~~

[//]: # (deploy)
## :computer: 怎么部署到服务器:

<h4>
  <a href="https://www.56yhz.com/zh-hans/docs/39/9/">Supervisor教程</a>
</h4>
<h4>
  <a href="https://www.56yhz.com/zh-hans/docs/39/10/">Nginx配置</a>
</h4>

记得启用ssl的话，需要额外配置
在前端代码中进行编辑


<!-- License -->
## :warning: License

该项目使用的是 [APL v2](https://opensource.org/licenses/Apache-2.0/) 协议. 详情查阅[LICENSE.txt](https://github.com/GreaterWMS/GreaterWMS/blob/master/LICENSE).必须遵守此协议。

<!-- COMMERCIAL LICENSE -->
## :old_key: 商用授权

- 不要担心商用授权，下载本软件，即获得了GreaterWMS授予的免费商用授权，无需担心商业使用。
