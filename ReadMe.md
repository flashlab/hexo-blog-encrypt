Hexo-Blog-Encrypt
===
[![npm version](https://badge.fury.io/js/hexo-blog-encrypt.svg)](https://badge.fury.io/js/hexo-blog-encrypt)

[中文说明](./ReadMe.zh.md)

##What is Hexo Blog Encrypt
> Think about this, you write an article, but not want everyone to read. So you will add a passwrod on the blog, others need to answer the password to access the blog.
> It is easy on wordpress or emlog or other blog system. However, when you on hexo, there is no such a plugin or function before.
> Now let me introduce my plugin "Hexo-Blog-Encrypt".

##Live Demo
See [http://mikecoder.github.io/](http://mikecoder.github.io/2016/03/30/helloworld/)

#Install
+ Add '"hexo-blog-encrypt": "1.1.\*"' to your hexo *package.json*.
+ Then use *npm install*.
+ This plugin will install automatic.

#Quick Start
+ First you should enable the plugin in your _config.yml like below:

```
# Security
##
encrypt:
    enable: true
```

+ Add password and abstract and message to your blog source like below:

```
---
title: hello world
date: 2016-03-30 21:18:02
tags:
    - fdsfadsfa
    - fasdf
    - fdsafdasf
    - fdasfasdf
    - fff
    - fsdaf
    - qfdsaf
    - fdsafsdaf
password: Mike
abstract: Welcome to my blog, enter password to read.
message: Welcome to my blog, enter password to read.
---
```
+ Then use *hexo clean && hexo g && hexo s* to see your blog.

#Detail Usage

###First you should enable the plugin in your _config.yml like below.
```
# Security
##
encrypt:
    enable: true
```

###Then, there are two ways to add password to the blogs.

#### The recomanded one: add password to the source blog file.
```
---
title: hello world
date: 2016-03-30 21:18:02
tags:
    - fdsfadsfa
    - fasdf
    - fdsafdasf
    - fdasfasdf
    - fff
    - fsdaf
    - qfdsaf
    - fdsafsdaf
password: Mike
abstract: Welcome to my blog, enter password to read.
message: Welcome to my blog, enter password to read.
---
```
As we can see above, we add 'password, abstract, message' the new 3 items in the blog info block.
+ password is the blog password.
+ abstract is the content which will be showed in the blog list page.
+ message is the content which will be showed in the blog detail page.


#### The original one: add config to the _config.yml file.
```
# Security
##
encrypt:
    enable: true
    blogs:
        - title: hello world
          password: mikemessi
        - title: fff
          password: fff
```

+ It means the blog named **hello world** has been encrypted with the password 'mikemessi'.
+ **Blog's title, it should be the same.**

```
---
title: hello world
date: 2016-03-30 21:18:02
tags:
---
```

###For professional usage

If you are not satisfied with the default template, you can just change it to your favorite one. Just follow the following steps.

```
# Security
##
encrypt:
    enable: true
    default_abstract: the content has been encrypted, enter the password to read.</br>
    default_message: Please enter the password to read.
    default_template:
                    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
                    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
                    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
                    <script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
                    <div id="security">
                        <div>
                            <div class="input-group">
                                <input type="text" class="form-control" aria-label="enter the password" id="pass"/>
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-default" onclick="decryptAES()">解密</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="encrypt-blog" style="display:none">
                        {{content}}
                    </div>
```

+ You can see **default_abstract** and **default_template** and **default_message** here.
    + default_abstract: means the default description which will be shown on the blogs list page.
    + default_message: means the default message will show above the password input area.
    + default_template : means the default detail page which will be shown on the detial page.
        + the content div's id **must** be 'encrypt-blog'
        + there must be a input's id **must** be pass, which will let reader to input their password
        + there must be trigger which calls the 'decryptAES' function

If you want to make the blog special, You can add abstract and template to your blog files, like these:
```
---
title: hello world
date: 2016-03-30 21:18:02
tags:
    - fdsfadsfa
    - fasdf
    - fdsafdasf
    - fdasfasdf
    - fff
    - fsdaf
    - qfdsaf
    - fdsafsdaf
password: Mike
abstract: Welcome to my blog, enter password to read.
message: Welcome to my blog, enter password to read.
template:
        <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
        <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
        <script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <div id="security">
            <span>密码是 "mikemessi"</span>
            <div>
                <div class="input-group">
                    <input type="text" class="form-control" aria-label="enter the password" id="pass"/>
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-default" onclick="decryptAES()">解密</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="encrypt-blog" style="display:none">
            {{content}}
        </div>
---
```

The plugin will use the template content instead of the default one.

Or you can use these feature in the old way, but not recomand any more.

```
# Security
##
encrypt:
    enable: true
    blogs:
        - title: hello world
          password: mikemessi
          abstract: 文章已经被加密，请在文章页输入密码查看</br>
          template:
                    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
                    <link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
                    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
                    <script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
                    <div id="security">
                        <span>密码是 "mikemessi"</span>
                        <div>
                            <div class="input-group">
                                <input type="text" class="form-control" aria-label="请输入密码" id="pass"/>
                                <div class="input-group-btn">
                                    <button type="button" class="btn btn-default" onclick="decryptAES()">解密</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="encrypt-blog" style="display:none">
                        {{content}}
                    </div>

```

This method is not recomanded because if we use the plugin for a long time, the _config.yml will be too long and hard to fix.

##TODO
See [TODO](./TODO.md) file.

##License
See [LICENSE](./LICENSE) file.
