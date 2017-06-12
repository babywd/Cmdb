>写在片头：我娃出生的时候，平台V1.0版本正好上线。纯属个人项目，身兼业务需求人员，产品经理，前端，后端，测试于一体，代码层面会有逻辑问题，请各位看官见谅。
###很多人都问我为什么不直接上代码，写那么多废话干啥。我只想说，冰冷的代码无法表达我对运维的热爱，我会以授之以渔的方法去介绍我当时写各个模块的思路，让在运维路上的兄弟少走一些弯路。在各个模块全部介绍完毕的时候会将源码放到Github上，每天力求一次更新。
###在这里你不但可以了解我的思路，也能了解我在前端、后端踩过的一些坑~别问我是谁，叫我红领巾。

#一、应用模块：
###仪表盘模块
>监控仪表盘
资产仪表盘
网站状态仪表盘

###资产管理模块
>设备管理
设备机柜图
设备IP占用表
应用树

###电子单据模块
>请示件
项目管理
故障单

###办公管理模块
>网络管理
AD域管理
巡检系统

###预定管理模块
>演播室预定
会议室预定
录音式预定

###运维系统模块
>Saltstack管理
Dns管理
Svn管理
发布系统
日志系统
定时任务

###电子工作流模块
>电子工作流程系统
电子工作流程绩效系统

###其他
>知道创宇管理
蓝汛DNS管理

###权限管理模块
>URL权限
用户组权限

#二、外部接口：
>* **Jenkins**
* **Zabbix**
* **深信服负载均衡**
* **网神堡垒机**
* **网神日志审计**
* **蓝汛CDN**
* **网宿CDN**
* **网宿DNS**
* **知道创宇云防护**
* **基调**
* **中标麒麟邮件**
* **漫道短信**
* **ES存储引擎**
* **Vmware**
* **Bind**
* **Saltstack**

#三、平台环境：
>* **python 2.7.1**
* **django 1.6 **
* **mysql 5.25a** 
* **redis 3.1**
* **metronic 4.7**

#四、平台说明：
>* **RHEL/CentOS支持6.x系列，7.0以上暂未测试**
* **uWSGI和Nginx作为Web容器是可选的环境，可以不部署**
* **其他软件的版本号在实际运行环境中如果不同，为了兼容性保持主版本号相同即可**

#五、平台截图：
###1.登录界面
![](http://upload-images.jianshu.io/upload_images/6358192-a293edd2119cfe1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###2.监控仪表盘
![](http://upload-images.jianshu.io/upload_images/6358192-822d259067131aab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###3.资产仪表盘
![](http://upload-images.jianshu.io/upload_images/6358192-d88af1a3991eaee2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###4.发布系统

![](http://upload-images.jianshu.io/upload_images/6358192-9488bdcc69cf5993.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###5.发布状态

![](http://upload-images.jianshu.io/upload_images/6358192-60a750aafbc72ae5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###6.DNS管理

![](http://upload-images.jianshu.io/upload_images/6358192-4d8d7999ea111a93.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###7.Saltstack key管理

![](http://upload-images.jianshu.io/upload_images/6358192-d63b1d75e27ed452.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###8.SVN管理

![](http://upload-images.jianshu.io/upload_images/6358192-2b35744c43372a2b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###9.Ad管理

![](http://upload-images.jianshu.io/upload_images/6358192-0f8ab1c0295c2da5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###10.日志管理

![](http://upload-images.jianshu.io/upload_images/6358192-413fc3fcb9218906.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###11.应用树

![](http://upload-images.jianshu.io/upload_images/6358192-aec947991b1fdd34.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###12.还是树

![](http://upload-images.jianshu.io/upload_images/6358192-299c573defdd2609.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###13.定时任务

![](http://upload-images.jianshu.io/upload_images/6358192-aa11ff8fc647c11f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

###14.Saltstack group管理

![](http://upload-images.jianshu.io/upload_images/6358192-8a31be82b85af1a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
