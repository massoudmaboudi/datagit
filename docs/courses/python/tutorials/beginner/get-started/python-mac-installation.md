---
id: python-mac-installation
# slug: /courses/python/tutorials/beginner/get-started/python-mac-installation
title: نصب پایتون در مک
description: نصب پایتون در مک
hide_title: false
hide_table_of_contents: false
image: "/img/logos/python-logo.svg"
pagination_label: نصب پایتون در مک
sidebar_label: نصب پایتون در مک
keywords:
  - نصب پایتون در مک
  - آموزش نصب پایتون در مک
  - نصب پایتون در مک به زبان فارسی
  - آموزش قدم به قدم نصب پایتون در مک
  - نصب پایتون ۳ در مک
  - نصب پایتون ۳ روی مک
  - نصب پایتون برای مک
  - نحوه نصب پایتون در مک
  - نصب پایتون روی Mac M1
---

import Image from '@theme/IdealImage';

import python_mac_installation_1 from '/img/docs/courses/python/beginner/get-started/python-mac-installation/python-mac-installation-1.png';
import python_mac_installation_2 from '/img/docs/courses/python/beginner/get-started/python-mac-installation/python-mac-installation-2.png';
import python_mac_installation_3 from '/img/docs/courses/python/beginner/get-started/python-mac-installation/python-mac-installation-3.png';
import python_mac_installation_4 from '/img/docs/courses/python/beginner/get-started/python-mac-installation/python-mac-installation-4.png';
import python_mac_installation_5 from '/img/docs/courses/python/beginner/get-started/python-mac-installation/python-mac-installation-5.png';
import python_mac_installation_6 from '/img/docs/courses/python/beginner/get-started/python-mac-installation/python-mac-installation-6.png';
import python_mac_installation_7 from '/img/docs/courses/python/beginner/get-started/python-mac-installation/python-mac-installation-7.png';

import homebrew from '/img/blog/2021/01/02/homebrew-installation/homebrew.png';
import mac_version from '/img/blog/2021/01/02/homebrew-installation/mac_version.png';

[blog_homebrew]: /blog/homebrew

تمام نسخه‌های مک، یک ورژن پایتون روی خودشون به صورت پیش‌فرض نصب دارن. ما نباید با این نسخه از پایتون کاری انجام بدیم چون سیستم رو ممکنه بهم بریزه. برای همین هم هست که میخوایم یک نسخه جداگانه روی مک نصب کنیم که تداخلی ایجاد نشه.

اما برای کنجکاوی بیاید ببینیم چه نسخه‌ای از پایتون روی مک شما نصب شده. برای این کار برنامه **Terminal** رو باز کنید:

:::info بیشتر بدانیم

چطور ترمینال رو باز کنیم؟

1. دکمه‌های **Cmd ⌘** + **Space** رو فشار بدید.
2. کلمه **Terminal** رو تایپ کنید.
3. دکمه **↩ Enter** رو بزنید.

یا اینکه، **Finder** رو باز کنید و به قسمت **_Terminal_** **←** **_Utilities_** **←** **_Applications_** برید.

:::

حالا کد مورد نظر رو نسبت به توضیحات پایین رو توی ترمینال بنویسید:

- برای بررسی نسخه پایتون پیش‌فرض سیستم

```bash title="Terminal"
python --version
```

- برای بررسی نسخه پایتون ۲

```bash title="Terminal"
python2 --version
```

- برای بررسی نسخه پایتون ۳

```bash title="Terminal"
python3 --version
```

البته این هم راهنمایی از طرف سیستم من:

<div className="padding-vert--md">
  <Image img={python_mac_installation_1}/>
</div>

---

به دو صورت میتونیم پایتون روی مک نصب کنیم:

- [**نصب از وبسایت پایتون**](#نصب-از-وبسایت-پایتون)
- [**نصب با Homebrew (روش پیشنهادی)**](#نصب-با-homebrew-روش-پیشنهادی)

توی این آموزش به هر دو روش نصب می‌پردازیم.

## **نصب از وبسایت پایتون**

### دانلود پایتون

سریع‌ترین راه برای نصب پایتون توی مک اینه که فایل مناسب رو از سایت پایتون دانلود و نصب کنیم.

برای نصب آخرین نسخه پایتون به سایت [www.python.org](https://www.python.org/) برید تا عکس زیر رو ببینید:

<div className="padding-vert--md">
  <Image img={python_mac_installation_2}/>
</div>

برای اینکه به قسمت دانلود برید، روی دایره قرمز رنگی که مشخص کردم کلیک کنید. وارد یک صفحه جدید میشید. پایین صفحه برید تا جدول زیر رو ببینید:

<div className="padding-vert--md">
  <Image img={python_mac_installation_3}/>
</div>

همونطور که میبینید دوتا دایره قرمز براتون مشخص کردم که فایل‌های نصبی پایتون برای مک هستن.

توی این قسمت باید با توجه به مدل **Mac**، فایل مورد نظر رو دانلود کنید.

شرکت اپل در حال حاضر دو مدل **Chipset** تولید میکنه. سری اول که همون سری **Intel** هستش و مدل جدیدتر که به اسم سری **M** شناخته میشه. برای اینکه ببینید **Mac** شما از کدوم سری هست، باید توی صفحه دسکتاپ، قسمت بالا سمت چپ، روی آیکون **Apple** کلیک کنید. بعدش گزینه **About This Mac** رو بزنید. یکی از دوتا شکل پایین رو میبینید:

<div className="padding-vert--md">
  <Image img={mac_version}/>
</div>

اگر توی قسمت **Processor** مثل شکل سمت راست کلمه **Intel** رو دیدید یعنی **chipset** شما **Intel** هستش وگرنه که اگر مثل شکل سمت چپ باشه، **chipset** شما از سری جدید **M** هستش.

حالا با توجه به این کشف بزرگ:

- **macOS 64-bit Intel installer** برای مک‌هایی با چیپست **Intel** هستش.
- **macOS 64-bit universal2 installer** برای مک‌هایی با چیپست **M1** هستش.

### نصب پایتون

:::tip نکته

باید خدمتتون عرض کنم که نصب ورژن‌های مختلف پایتون تفاوت چندانی نداره و ممکنه ورژنی که شما دانلود میکنید با چیزی که توی این آموزش ازش استفاده شده متفاوت باشه. پس نگران نباشید.

:::

حالا روی فایلی که دانلود کردید کلید کنید تا باز بشه و تصویر زیر رو ببینید:

<div className="padding-vert--md">
  <Image img={python_mac_installation_4}/>
</div>

حالا روی دکمه **Continue** کلیک کنید و صفحه‌های بعدی رو هم تایید کنید و اجازه بدید که پایتون نصب بشه و صفحه زیر ظاهر بشه:

<div className="padding-vert--md">
  <Image img={python_mac_installation_5}/>
</div>

حالا دکمه **Close** رو بزنید. این تمام کاری بود که باید انجام میدادید.

تبریک میگم. حالا شما آخرین نسخه پایتون رو نصب کردید.

## **نصب با Homebrew (روش پیشنهادی)**

### نصب Homebrew

برای آشنایی و نصب **Homebrew** میتونید به مطلبی که راجع به [**Homebrew**][blog_homebrew] توی قسمت وبلاگ سایت منتشر کردم مراجعه کنید. وقتی تونستید **Homebrew** رو نصب کنید میتونید ادامه آموزش رو دنبال کنید.

### شروع نصب پایتون

حالا وقتشه بریم سراغ پایتون.برای نصب آخرین ورژن Python 3 میتونید دستور زیر رو بزنید توی ترمینال:

```bash title="Terminal"
brew install python
```

برای اینکه نتیجه عملمون رو ببینیم هم دستور زیر رو بزنید توی ترمینال:

```bash title="Terminal"
python3 --version
```

این تمام کاری بود که باید انجام میدادید.

تبریک میگم. حالا شما آخرین نسخه پایتون رو نصب کردید.

## **اولین برنامه پایتون**

حالا باید محیط برنامه نویسی پایتون رو باز کنید.:

- [**Python Shell**](#python-shell)
- [**Python IDLE**](#python-idle)

بریم تا بررسی کنیم تفاوت این دوتا محیط چیه و اولین برنامه پایتون رو بنویسیم.

:::tip نکته

اگر پایتون رو از روش [**نصب از وبسایت پایتون**](#نصب-از-وبسایت-پایتون) نصب کرده باشید به **Python Shell** و **Python IDLE** دسترسی دارید.

اما

اگر پایتون رو از روش [**نصب با Homebrew (روش پیشنهادی)**](#نصب-با-homebrew-روش-پیشنهادی) نصب کرده باشید، فقط به **Python Shell** دسترسی دارید.

:::

### Python Shell

<div className="padding-vert--md">
  <Image img={python_mac_installation_6}/>
</div>

:::info بیشتر بدانیم

چطور **Python Shell** رو باز کنیم؟

1. ترمینال رو باز کنید.
2. کلمه **python** رو تایپ کنید.
3. دکمه **↩ Enter** رو بزنید.

:::

اسم این محیط سیاه رنگ، **Shell** هست. خوبیه این محیط اینه که دستورات ساده پایتون رو میتونید توش اجرا کنید. برای مثال کد زیر رو میتونید توی این محیط بنویسید و کلید **Enter** رو بزنید تا نتیجه کار رو ببینید:

```python title="Python"
print("Hello World!")
```

البته باید این رو در نظر بگیرید که اگر این پنجره ببندید، تمام کدهایی که نوشتید پاک میشه.

### Python IDLE

<div className="padding-vert--md">
  <Image img={python_mac_installation_7}/>
</div>

:::info بیشتر بدانیم

چطور **Python IDLE** رو باز کنیم؟

1. دکمه‌های **Cmd ⌘** + **Space** رو فشار بدید.
2. کلمه **IDLE** رو تایپ کنید.
3. دکمه **↩ Enter** رو بزنید.

یا اینکه، **Finder** رو باز کنید و به قسمت **_IDLE_** **←** **_Python 3.9_** **←** **_Applications_** برید.

:::

محیط **IDLE** با نصب پایتون قابل استفاده هستش.

این محیط نسبت به **Python Shell** قابلیت‌های بیشتری داره. مثلا کدها رو به صورت رنگی نمایش میده و اگر کدی رو به اشتباه تایپ کنید، به راحتی متوجه اون میشید.

برای مثال کد زیر رو میتونید توی این محیط بنویسید و کلید **Enter** رو بزنید تا نتیجه کار رو ببینید:

```python title="Python"
print("Hello World!")
```
