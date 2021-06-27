[Kantin IPB homepage](#) | [Documentation
table of contents](TOC.md)

## Basic structure

Our site structure looks something like this:

```
.
├── css
│   ├── main.css
│   └── normalize.css
│   └── styles.css
├── doc
├── html
│   ├── 404.html
│   └── food1.html
│   └── index.hmtl
│   └── media_query_test.html
├── img
├── js
│   ├── main.js
│   ├── plugins.js
│   └── vendor
│       └── modernizr.min.js
├── .editorconfig
├── .htaccess
├── browserconfig.xml
├── favicon.ico
├── humans.txt
├── icon.png
├── package.json
├── robots.txt
├── site.webmanifest
├── tile.png
└── tile-wide.png
```

What follows is a general overview of each major part and how to use them.

### css

This directory contain all of our project's CSS files. It includes some
initial CSS to help get you started from a solid foundation. [About the
CSS](css.md).

### doc

This directory contains all of Kantin IPB documentation.

### js

This directory contain all of the project's JS files. Libraries, plugins,
and custom code can all be included here. [About the JavaScript](js.md).

### .htaccess

The default web server configs are for Apache. For more information, please
refer to the [Apache Server Configs
repository](https://github.com/h5bp/server-configs-apache).

Host your site on a server other than Apache? You're likely to find the
corresponding server configs project listed in our [Server
Configs](https://github.com/h5bp/server-configs/blob/master/README.md)
repository.

### 404.html

A helpful custom 404 error page.

### browserconfig.xml

This file contains all settings regarding custom tiles for IE11 and Edge.

For more info on this topic, please refer to [Microsoft's
Docs](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)).

### .editorconfig

The `.editorconfig` file is provided in order to encourage and help us and our
team to maintain consistent coding styles between different editors and IDEs.
[Read more about the `.editorconfig` file](misc.md#editorconfig).

### template.html

This is the default HTML skeleton that should form the basis of all pages on
our site. If we are using a server-side templating framework, then we will
need to integrate this starting HTML with your setup.

Make sure that you update the URLs for the referenced CSS and JavaScript if you
modify the directory structure at all.

If you are using Google Universal Analytics, make sure that you edit the
corresponding snippet at the bottom to include your analytics ID.

### humans.txt

Edit this file to include the team that worked on our site/app, and the
technology powering it.

### package.json

Edit this file to describe our application, add dependencies, scripts and
other properties related to node based development and the npm registry

### robots.txt

Edit this file to include any pages we need hidden from search engines.

### Icons

Replace the default `favicon.ico`, `tile.png`, `tile-wide.png` and Apple Touch
Icon with oour own.

If you want to use different Apple Touch Icons for different resolutions please
refer to the [according documentation](extend.md#apple-touch-icons).
