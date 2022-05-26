---
title: نصب Homebrew
description: آموزش نصب Homebrew
slug: homebrew
authors: [massoudmaboudi]
tags: [macOS, Homebrew]
image: /img/blog/2021/01/02/homebrew-installation/homebrew.png
hide_table_of_contents: false
draft: false
keywords: 
  - نصب homebrew
  - اموزش نصب homebrew
  - نصب homebrew فارسی
  - نصب homebrew در مک
  - نصب homebrew در mac
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@theme/IdealImage';

import homebrew from '/img/blog/2021/01/02/homebrew-installation/homebrew.png';
import mac_version from '/img/blog/2021/01/02/homebrew-installation/mac_version.png';

<div className="padding-vert--md">
  <Image img={homebrew}/>
</div>

توی این پست میخوایم ببینیم Homebrew چیه و چطور میتونه برای نصب پکیج توی مکینتاش کمکمون کنه.

<!--truncate-->

اول از همه باید بگم که Homebrew یه Package Manager هستش که با استفاده از اون میتونید کلی پکیج‌های مختلفی نصب کنید و دردسر‌های مختلف نصب اونها رو کم کنید.

قبل از شروع کارمون باید مطمئن بشیم که ترمینال ما از جنس bash هست. البته اگر میخواید میتونید از ترمینال‌های دیگه مثل zsh هم استفاده کنید ولی این آموزش بر اساس bash هستش. برای شروع کد زیر رو توی ترمینال بزنید تا مطمئن بشیم از bash استفاده میکنیم. اگر ازتون پسورد خواست پسوردتون رو تایپ کنید.

```bash title="Terminal"
chsh -s /bin/bash
```

حالا یکبار ترمینال رو کامل ببندید و دوباره باز کنید. دستور زیر رو بزنید تا مطمئن بشیم:

```bash title="Terminal"
echo "$SHELL"
```

اگر ترمینالتون bash شده باشه، باید براتون خروجی زیر رو نشون بده:

```bash title="Terminal"
/bin/bash
```

بریم سراغ ادامه کار.

برای استفاده ازش باید اول Xcode رو نصب کنیم یا اگر داریمش، آپدیتش کنیم. باید بدونید که Xcode ابزاریه برای خود Apple که با اون میشه برای سیستم عامل‌های iOS برنامه نویسی کرد و البته کلی کار دیگه باهاش میشه انجام داد که توی این آموزش بهشون نیاز نداریم. برای نصبش کد زیر رو توی ترمینال بزنید:

```bash title="Terminal"
xcode-select --install
```

البته نصبش هم حجم زیادی از اینترنت رو مصرف میکنه (برای من ۲ گیگ مصرف کرد) و همینطور زمان زیادی میگیره. وسطش هم کلی سوال میکنه که باید تقریبا به همشون جواب مثبت بدید.

وقتی که تموم شد نصب Xcode، باید بریم سراغ Homebrew. دستور زیر رو توی ترمینال بزنید:

```bash  title="Terminal"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

توی این قسمت باید با توجه به مدل Mac، کد مورد نظر رو اجرا کنید.

اپل در حال حاضر دو مدل Chipset تولید میکنه. سری اول که همون سری Intel هستش و مدل جدیدتر که به اسم سری M شناخته میشه. برای اینکه ببینید Mac شما از کدوم سری هست، باید توی صفحه دسکتاپ، قسمت بالا سمت چپ، روی آیکون Apple کلیک کنید. بعدش گزینه About This Mac رو بزنید. یکی از دوتا شکل پایین رو میبینید:

<div className="padding-vert--md">
  <Image img={mac_version}/>
</div>

اگر توی قسمت Processor مثل شکل سمت راست کلمه Intel رو دیدید یعنی chipset شما Intel هستش وگرنه که اگر مثل شکل سمت چپ باشه، chipset شما از سری جدید M هستش.

حالا با توجه به این کشف بزرگ، کد مورد نظر رو از قسمت زیر کپی کنید:

<Tabs
  defaultValue="intel"
  values={[
    { label: 'Mac with Intel chip', value: 'intel', },
    { label: 'Mac with M1 chip', value: 'm1', },
  ]
}>

<TabItem value="intel">

```bash title="Terminal"
echo 'eval $(/usr/local/bin/brew shellenv)' >> $HOME/.bash_profile
source $HOME/.bash_profile
```

</TabItem>
<TabItem value="m1">

```bash title="Terminal"
echo 'eval $(/opt/homebrew/bin/brew shellenv)' >> $HOME/.bash_profile
source $HOME/.bash_profile
```

</TabItem>
</Tabs>

وقتی که تموم شد نصبش، برای اینکه ببینیم کارمون درست بوده یا نه، دستور زیر رو بزنید توی ترمینال:

```bash  title="Terminal"
brew doctor
```

نتیجه میشه این:

```bash  title="Terminal"
Your system is ready to brew.
```

تبریک میگم!‌ شما تونستید Homebrew رو نصب کنید.
